import { Liquid } from "liquidjs";

const partialStore = {};
let engine;

const normalizeKey = (file) => {
  if (!file) return "";
  const normalized = String(file).replace(/\\/g, "/");
  return normalized.replace(/^\.\//, "");
};

const resolvePartial = (file) => {
  const key = normalizeKey(file);
  const base = key.split("/").pop() || key;
  const name = base.replace(/\.liquid$/i, "");
  const candidates = [
    key,
    base,
    name,
    `snippets/${name}`,
    `${name}.liquid`,
    `snippets/${name}.liquid`,
  ];

  const map = (engine && engine.__partials) || partialStore;
  for (const candidate of candidates) {
    if (candidate && map[candidate]) return map[candidate];
  }

  throw new Error("Not Found");
};

engine = new Liquid({
  fs: {
    resolve: (dir, file, ext) => {
      const base = normalizeKey(file);
      if (ext && !base.endsWith(ext)) return `${base}${ext}`;
      return base;
    },
    existsSync: (file) => {
      try {
        resolvePartial(file);
        return true;
      } catch (e) {
        return false;
      }
    },
    exists: async (file) => {
      try {
        resolvePartial(file);
        return true;
      } catch (e) {
        return false;
      }
    },
    readFileSync: resolvePartial,
    readFile: async (file) => resolvePartial(file),
    contains: () => true,
    sep: "/",
    dirname: (file) => {
      const key = normalizeKey(file);
      const idx = key.lastIndexOf("/");
      return idx >= 0 ? key.slice(0, idx) : "";
    },
  },
});

engine.__partials = partialStore;

// placeholder map that stories can populate at runtime in the browser
engine.__svg_map = engine.__svg_map || {};

engine.registerTag("stylesheet", {
  parse: function (tagToken, remainTokens) {
    this.tpls = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on("tag:endstylesheet", () => stream.stop());
    stream.on("template", (tpl) => this.tpls.push(tpl));
    stream.on("end", () => {
      throw new Error(`tag ${tagToken.raw} not closed`);
    });
    stream.start();
  },
  render: function () {
    return "";
  },
});

engine.registerTag("form", {
  parse: function (tagToken, remainTokens) {
    this.tpls = [];
    this.args = tagToken.args;
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on("tag:endform", () => stream.stop());
    stream.on("template", (tpl) => this.tpls.push(tpl));
    stream.on("end", () => {
      throw new Error(`tag ${tagToken.raw} not closed`);
    });
    stream.start();
  },
  render: function* (ctx, emitter) {
    if (emitter) emitter.write("<form>");
    const inner = yield this.liquid.renderer.renderTemplates(
      this.tpls,
      ctx,
      emitter,
    );
    if (emitter) {
      emitter.write("</form>");
      return;
    }
    return `<form>${inner}</form>`;
  },
});

engine.registerFilter("asset_url", (filename) => `/assets/${filename}`);

// inline_asset_content: lookup SVG content from engine.__svg_map when running in browser/storybook
engine.registerFilter("inline_asset_content", (filename) => {
  if (!filename) return "";
  const map = engine.__svg_map || {};
  return map[filename] || "";
});

export default engine;

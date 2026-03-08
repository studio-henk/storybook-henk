import { Liquid } from "liquidjs";

const engine = new Liquid();

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

engine.registerFilter("asset_url", (filename) => `/assets/${filename}`);

// inline_asset_content: lookup SVG content from engine.__svg_map when running in browser/storybook
engine.registerFilter("inline_asset_content", (filename) => {
  if (!filename) return "";
  const map = engine.__svg_map || {};
  return map[filename] || "";
});

export default engine;

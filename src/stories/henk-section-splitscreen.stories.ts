import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-splitscreen.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-splitscreen.liquid?raw";

// populate svgMap if snippet uses icons/logos
const svgModules = import.meta.glob("../assets/{icons,logos}/*.svg", { query: "?raw", import: "default", eager: true });
const svgMap: Record<string, string> = {};
Object.entries(svgModules).forEach(([filePath, content]) => {
  const filename = filePath.split("/").pop();
  if (filename) svgMap[filename] = content as string;
});
engine.__svg_map = svgMap;

// map static assets (images) to dev URLs so stories can resolve image_src to a working URL
const assetUrlModules = import.meta.glob("../assets/**/*.{avif,jpg,png,webp,svg}", { as: "url", eager: true });
const assetUrlMap: Record<string, string> = {};
Object.entries(assetUrlModules).forEach(([filePath, url]) => {
  const filename = filePath.split("/").pop()?.replace(/\?.*$/, "");
  if (filename) assetUrlMap[filename] = url as string;
});

// Register snippet partials from common locations so nested {% render %} calls resolve
const snippetModulesA = import.meta.glob("../snippets/**/*.liquid", { query: "?raw", import: "default", eager: true });
const snippetModulesB = import.meta.glob("../stories/components/**/*.liquid", { query: "?raw", import: "default", eager: true });
const snippetModules = Object.assign({}, snippetModulesA, snippetModulesB);
if (typeof (engine as any).registerPartial === "function") {
  Object.entries(snippetModules).forEach(([filePath, content]) => {
    const base = filePath.split("/").pop() || filePath;
    const filename = base.replace(/\?.*$/, "");
    const name = filename.replace(/\.liquid$/i, "");
    if (name) {
      // register multiple key variants to increase chance of a match
      (engine as any).registerPartial(name, content as string);
      (engine as any).registerPartial("snippets/" + name, content as string);
      (engine as any).registerPartial(name + ".liquid", content as string);
    }
  });
} else {
  // fallback: register the splitscreen snippet only
  try {
    (engine as any).registerPartial("henk-snippet-splitscreen", snippetRaw);
  } catch (e) {
    // ignore - some runtimes may not expose registerPartial
  }
}

// Extract schema JSON (Shopify) and strip the block before rendering
const SCHEMA_RE = /\{%\s*schema\s*%\}([\s\S]*?)\{%\s*endschema\s*%\}/i;
let schema: any = null;
const schemaMatch = sectionRaw.match(SCHEMA_RE);
if (schemaMatch) {
  try {
    schema = JSON.parse(schemaMatch[1]);
  } catch (e) {
    schema = null;
  }
}
let cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

// Inline-render fallback: replace {% render 'henk-snippet-splitscreen' ... %} with snippet raw,
// and ensure 'props' local variable is set from section.settings so the snippet receives props.
// Build a map of snippet name -> content for recursive inlining of {% render 'name' %} tags
const snippetMap: Record<string,string> = {};
Object.entries(snippetModules).forEach(([filePath, content]) => {
  const base = filePath.split("/").pop() || filePath;
  const filename = base.replace(/\?.*$/, "");
  const name = filename.replace(/\.liquid$/i, "");
  if (name) snippetMap[name] = content as string;
});

const RENDER_TAG_RE = /\{%\s*render\s+['\"]([^'\"]+)['\"]([^%]*?)%\}/gi;
function inlineRenders(template: string, depth = 0, visited = new Set<string>()): string {
  // safety guards
  if (depth > 10) return template;
  if (template.length > 200000) return template;
  return template.replace(RENDER_TAG_RE, (m, name, params) => {
    const candidates = [
      name,
      name.split('/').pop(),
      name.replace(/\.liquid$/i, ''),
      (name.split('/').pop() || '').replace(/\.liquid$/i, ''),
    ];
    for (const c of candidates) {
      const key = c as string;
      if (!key) continue;
      if (visited.has(key)) return m; // avoid cycles
      const snippet = snippetMap[key];
      if (snippet) {
        // skip inlining very large snippets to avoid huge concatenation
        if (typeof snippet === 'string' && snippet.length > 20000) {
          // eslint-disable-next-line no-console
          console.warn(`[stories] Skipping inline of large snippet "${key}" (${snippet.length} chars)`);
          return m;
        }

        // parse params into assign statements so inlined snippet receives the same variables
        const assigns: string[] = [];
        if (params) {
          const PAIR_RE = /([a-zA-Z0-9_]+)\s*:\s*([^,]+)/g;
          let match: RegExpExecArray | null;
          while ((match = PAIR_RE.exec(params)) !== null) {
            const k = match[1];
            let v = match[2].trim();
            // remove trailing comma if present
            v = v.replace(/,$/, '').trim();
            assigns.push(`{% assign ${k} = ${v} %}`);
          }
        }
        const assignBlock = assigns.join('\n');

        visited.add(key);
        try {
          const inlined = inlineRenders(snippet, depth + 1, visited);
          return assignBlock + inlined;
        } finally {
          visited.delete(key);
        }
      }
    }
    return m;
  });
}

// Special-case: inline small button snippet with parameter assigns to ensure label/aria pass-through
const HENK_BUTTON_RE = /\{%\s*render\s+['\"]henk-button['\"]([^%]*?)%\}/gi;
function paramsToAssigns(params: string) {
  const assigns: string[] = [];
  if (!params) return '';
  const PAIR_RE = /([a-zA-Z0-9_]+)\s*:\s*([^,]+)/g;
  let match: RegExpExecArray | null;
  while ((match = PAIR_RE.exec(params)) !== null) {
    const k = match[1];
    let v = match[2].trim();
    v = v.replace(/,$/, '').trim();
    assigns.push(`{% assign ${k} = ${v} %}`);
  }
  return assigns.join('\n');
}

let cleanedSectionWithInline = inlineRenders(cleanedSection);
// Replace henk-button renders with a safe anchor fallback that references section vars directly
cleanedSectionWithInline = cleanedSectionWithInline.replace(HENK_BUTTON_RE, (m, params) => {
  // produce simple anchor using section-scoped vars so label always shows
  return `<a href="{{ section_button_url | prepend: routes.root }}" class="henk-button henk-button--{{ section_button_variant | default: 'default' }}">{{ section_button_text }}</a>`;
});

const finalSectionTemplate = `{% assign props = section.settings %}\n` + cleanedSectionWithInline;

const resolveImageSrc = (val: any) => {
  if (!val) return val;
  if (typeof val === "string") {
    // if it's already an absolute URL, return as-is
    if (val.startsWith("/") || val.startsWith("http")) return val;
    const base = val.split("/").pop();
    if (base && assetUrlMap[base]) return assetUrlMap[base];
    return "/assets/" + base;
  }
  if (typeof val === "object" && val !== null) {
    const src = (val as any).src || (val as any).image || (val as any).url;
    if (typeof src === "string") {
      if (src.startsWith("/") || src.startsWith("http")) return src;
      const base = src.split("/").pop();
      if (base && assetUrlMap[base]) return assetUrlMap[base];
      return "/assets/" + base;
    }
  }
  return val;
};

const render = (args: any) => {
  const resolvedArgs = { ...args };
  if (resolvedArgs.image_src) resolvedArgs.image_src = resolveImageSrc(resolvedArgs.image_src);
  if (resolvedArgs.video_poster) resolvedArgs.video_poster = resolveImageSrc(resolvedArgs.video_poster);

  const rendered = engine.parseAndRenderSync(finalSectionTemplate, { section: { settings: resolvedArgs } });
  const container = document.createElement("div");
  container.innerHTML = rendered;
  return container;
};

// Generate argTypes and default args from Shopify section schema when available
function schemaSettingsToControls(sch: any) {
  const argTypes: Record<string, any> = {};
  const defaults: Record<string, any> = {};
  if (!sch || !Array.isArray(sch.settings)) return { argTypes, defaults };

  sch.settings.forEach((s: any) => {
    const id = s.id;
    if (!id) return;

    // default value
    if (s.hasOwnProperty("default")) defaults[id] = s.default;

    switch (s.type) {
      case "select":
      case "radio":
        argTypes[id] = {
          control: "select",
          options: Array.isArray(s.options) ? s.options.map((o: any) => o.value) : undefined,
          description: s.label || s.id,
        };
        break;
      case "checkbox":
        argTypes[id] = { control: "boolean", description: s.label || s.id };
        break;
      case "image_picker":
      case "url":
      case "text":
      case "richtext":
      case "video":
        argTypes[id] = { control: "text", description: s.label || s.id };
        break;
      case "header":
      case "paragraph":
        // decorative, skip
        break;
      default:
        argTypes[id] = { control: "text", description: s.label || s.id };
    }
  });

  return { argTypes, defaults };
}

const { argTypes: schemaArgTypes, defaults: schemaDefaults } = schemaSettingsToControls(schema);

const baseArgTypes = {
  id: { control: "text" },
  caption: { control: "text" },
  title: { control: "text" },
  heading_level: { control: "select", options: ["1", "2", "3"] },
  content: { control: "text" },
  media_type: { control: "select", options: ["image", "video"] },
  image_src: { control: "text" },
  image_alt: { control: "text" },
  image_link: { control: "text" },
  image_link_target_blank: { control: "boolean" },
  button_url: { control: "text" },
  button_text: { control: "text" },
  reverse: { control: "boolean" },
  rounded_corners: { control: "boolean" },
};

const baseArgs = {
  id: "splits-1",
  caption: "Caption",
  title: "Split screen title",
  heading_level: "2",
  content: "<p>Rich content goes here.</p>",
  media_type: "image",
  image_src: "ss-bcorp.avif",
  image_alt: "Example image",
  image_link: "",
  image_link_target_blank: false,
  button_url: "#",
  button_text: "Learn more",
  button_variant: "default",
  reverse: false,
  rounded_corners: false,
};

const meta: Meta = {
  title: "Sections/Split Screen",
  render: (args) => render(args),
  tags: ["autodocs"],
  argTypes: { ...baseArgTypes, ...schemaArgTypes },
  args: { ...baseArgs, ...schemaDefaults },
};

export default meta;
type Story = StoryObj;
export const Default: Story = {};

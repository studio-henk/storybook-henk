import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-hero.liquid?raw";
import heroSnippetRaw from "../snippets/henk-snippet-hero.liquid?raw";
import videoSnippetRaw from "../snippets/henk-video.liquid?raw";

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
const cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-hero", heroSnippetRaw);
  (engine as any).registerPartial("henk-video", videoSnippetRaw);
}
if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-hero"] = heroSnippetRaw;
  (engine as any).__partials["henk-video"] = videoSnippetRaw;
}

const assetUrlModules = import.meta.glob(
  "../assets/**/*.{avif,jpg,png,webp,svg}",
  { as: "url", eager: true },
);
const assetUrlMap: Record<string, string> = {};
Object.entries(assetUrlModules).forEach(([filePath, url]) => {
  const filename = filePath.split("/").pop()?.replace(/\?.*$/, "");
  if (filename) assetUrlMap[filename] = url as string;
});

const resolveAssetSrc = (val: any) => {
  if (!val) return val;
  if (typeof val === "string") {
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
  if (resolvedArgs.image)
    resolvedArgs.image = resolveAssetSrc(resolvedArgs.image);
  if (resolvedArgs.video)
    resolvedArgs.video = resolveAssetSrc(resolvedArgs.video);
  if (resolvedArgs.video_poster)
    resolvedArgs.video_poster = resolveAssetSrc(resolvedArgs.video_poster);

  const rendered = engine.parseAndRenderSync(cleanedSection, {
    section: { settings: resolvedArgs },
  });
  return rendered;
};

function schemaSettingsToControls(sch: any) {
  const argTypes: Record<string, any> = {};
  const defaults: Record<string, any> = {};
  if (!sch || !Array.isArray(sch.settings)) return { argTypes, defaults };

  sch.settings.forEach((s: any) => {
    const id = s.id;
    if (!id) return;

    if (s.hasOwnProperty("default")) defaults[id] = s.default;

    switch (s.type) {
      case "select":
      case "radio":
        argTypes[id] = {
          control: "select",
          options: Array.isArray(s.options)
            ? s.options.map((o: any) => o.value)
            : undefined,
          description: s.label || s.id,
        };
        break;
      case "checkbox":
        argTypes[id] = { control: "boolean", description: s.label || s.id };
        break;
      case "image_picker":
      case "video":
      case "url":
      case "text":
      case "textarea":
      case "richtext":
        argTypes[id] = { control: "text", description: s.label || s.id };
        break;
      case "header":
      case "paragraph":
        break;
      default:
        argTypes[id] = { control: "text", description: s.label || s.id };
    }
  });

  return { argTypes, defaults };
}

const { argTypes: schemaArgTypes, defaults: schemaDefaults } =
  schemaSettingsToControls(schema);

const baseArgs = {
  type: "image",
  image: "sampleservicehero.jpg",
  caption: "Welcome",
  title: "Explore Our Collection",
  text: "Discover the best products tailored for you.",
  button_label: "Shop Now",
  button_url: "#",
  button_variant: "primary",
  video_has_audio: false,
};

const meta: Meta = {
  title: "Sections/Hero",
  render: (args) => render(args),
  tags: ["autodocs", "version:1.0.0"],
  argTypes: schemaArgTypes,
  args: { ...baseArgs, ...schemaDefaults },
  parameters: {
    customCode: sectionRaw,
    docs: {
      description: {
        component: "Hero section written in Liquid (Shopify section).",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Video: Story = {
  args: {
    type: "video",
    video: "/assets/converstation_starters_campaign.mp4",
    video_poster: "ss-bcorp.avif",
    video_has_audio: true,
  },
};

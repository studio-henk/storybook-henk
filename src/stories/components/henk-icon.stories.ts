import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "./henk-icon.liquid?raw";

// Vite glob to load raw SVGs from src/assets/icons at runtime
const svgModules = import.meta.glob("../../assets/icons/*.svg", { query: "?raw", import: "default" });

// Available icon names (derived from src/assets/icons)
const ICON_NAMES = [
  "feather-alert-circle",
  "feather-alert-triangle",
  "feather-arrow-left",
  "feather-arrow-right",
  "feather-calendar",
  "feather-check",
  "feather-chevron-down",
  "feather-chevron-left",
  "feather-chevron-right",
  "feather-chevron-up",
  "feather-help-circle",
  "feather-info",
  "feather-map-pin",
  "feather-menu",
  "feather-minus",
  "feather-navigation",
  "feather-phone-call",
  "feather-phone",
  "feather-plus",
  "feather-search",
  "feather-shopping-bag",
  "feather-shopping-cart",
  "feather-smartphone",
  "feather-star",
  "feather-trash-2",
  "feather-trash",
  "feather-truck",
  "feather-volume-2",
  "feather-volume-x",
  "feather-x",
  "henk-bag",
  "henk-navigate",
  "henk-success",
  "social-facebook",
  "social-instagram",
  "social-pinterest",
  "social-tiktok",
  "social-youtube",
];

const loadSvgMap = async () => {
  if (engine.__svg_map && Object.keys(engine.__svg_map).length)
    return engine.__svg_map;
  const entries = Object.entries(svgModules) as [
    string,
    () => Promise<string>,
  ][];
  const map: Record<string, string> = {};
  await Promise.all(
    entries.map(async ([filePath, loader]) => {
      try {
        const content = await loader();
        const parts = filePath.split("/");
        const filename = parts[parts.length - 1];
        map[filename] = content;
      } catch (e) {
        // ignore load errors
      }
    }),
  );
  engine.__svg_map = map;
  return map;
};

// Ensure svg map is loaded before any story render (top-level await supported by Vite)
await loadSvgMap();

const renderIcon = (args: any) => {
  const rendered = engine.parseAndRenderSync(snippet, {
    name: args.name,
    class: args.class,
  });
  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Components/HenkIconLiquid",
  render: (args) => renderIcon(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component:
          "Icon component written in Liquid. Provide `name` of the SVG file (without .svg).",
      },
    },
  },
  argTypes: {
    name: {
      control: { type: "select" },
      options: ICON_NAMES,
      description: "Icon name (filename without .svg).",
    },
    class: {
      control: "text",
      description: "Additional class(es) applied to the icon wrapper.",
    },
  },
  args: {
    name: "feather-search",
    class: "",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const FeatherIcons: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "12px";

    ICON_NAMES.filter((name) => name.startsWith("feather-")).forEach((name) => {
      const rendered = engine.parseAndRenderSync(snippet, { name, class: "" });
      const item = document.createElement("div");
      item.style.display = "flex";
      item.style.flexDirection = "column";
      item.style.alignItems = "center";
      item.style.width = "96px";
      item.style.fontSize = "12px";
      item.innerHTML =
        rendered +
        `<div style="margin-top:6px;word-break:break-word; text-align:center;">${name}</div>`;
      container.appendChild(item);
    });

    return container;
  },
};

export const HenkIcons: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "12px";

    ICON_NAMES.filter((name) => name.startsWith("henk-")).forEach((name) => {
      const rendered = engine.parseAndRenderSync(snippet, { name, class: "" });
      const item = document.createElement("div");
      item.style.display = "flex";
      item.style.flexDirection = "column";
      item.style.alignItems = "center";
      item.style.width = "96px";
      item.style.fontSize = "12px";
      item.innerHTML =
        rendered +
        `<div style="margin-top:6px;word-break:break-word; text-align:center;">${name}</div>`;
      container.appendChild(item);
    });

    return container;
  },
};

export const SocialIcons: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "12px";

    ICON_NAMES.filter((name) => name.startsWith("social-")).forEach((name) => {
      const rendered = engine.parseAndRenderSync(snippet, { name, class: "" });
      const item = document.createElement("div");
      item.style.display = "flex";
      item.style.flexDirection = "column";
      item.style.alignItems = "center";
      item.style.width = "96px";
      item.style.fontSize = "12px";
      item.innerHTML =
        rendered +
        `<div style="margin-top:6px;word-break:break-word; text-align:center;">${name}</div>`;
      container.appendChild(item);
    });

    return container;
  },
};

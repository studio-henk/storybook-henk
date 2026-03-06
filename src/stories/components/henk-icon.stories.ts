import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "./henk-icon.liquid?raw";

// Vite glob to load raw SVGs from src/assets/icons and src/assets/logos at runtime
const svgModules = import.meta.glob("../../assets/{icons,logos}/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Build synchronous map of filename -> svg content for use in Liquid inline filter
const svgMap: Record<string, string> = {};
Object.entries(svgModules).forEach(([filePath, content]) => {
  const filename = filePath.split("/").pop();
  if (filename) svgMap[filename] = content as string;
});
engine.__svg_map = svgMap;

// Available icon names (derived from src/assets/icons)
const ICON_NAMES = Object.keys(svgMap)
  .map((f) => f.replace(/\.svg$/i, ""))
  .sort();

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

// export const Logos: Story = {
//   render: () => {
//     const container = document.createElement("div");
//     container.style.display = "flex";
//     container.style.flexWrap = "wrap";
//     container.style.gap = "12px";
//
//     ICON_NAMES.filter((name) => name.startsWith("logo-")).forEach((name) => {
//       const rendered = engine.parseAndRenderSync(snippet, { name, class: "" });
//       const item = document.createElement("div");
//       item.style.display = "flex";
//       item.style.flexDirection = "column";
//       item.style.alignItems = "center";
//       item.style.width = "96px";
//       item.style.fontSize = "12px";
//       item.innerHTML =
//         rendered +
//         `<div style="margin-top:6px;word-break:break-word; text-align:center;">${name}</div>`;
//       container.appendChild(item);
//     });
//
//     return container;
//   },
// };

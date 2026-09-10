import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-icon.liquid?raw";
import { getIconNames } from "./utils/liquid-icons";

const ICON_NAMES = getIconNames();

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
  title: "Snippets/Components/Icon",
  render: (args) => renderIcon(args),
  tags: ["autodocs", "version:1.0.0"],
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

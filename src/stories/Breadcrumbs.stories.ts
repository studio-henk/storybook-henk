import type { Meta, StoryObj } from "@storybook/html";

import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-breadcrumbs.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-breadcrumbs.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const sectionTemplate = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-breadcrumbs", snippetRaw);
  (engine as any).registerPartial("henk-breadcrumbs", snippetRaw);
}
if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-breadcrumbs"] = snippetRaw;
  (engine as any).__partials["henk-breadcrumbs"] = snippetRaw;
}

const meta = {
  title: "Sections/Breadcrumbs",
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const rendered = engine.parseAndRenderSync(sectionTemplate, {
      template: "page",
      page: { title: "Page" },
      page_title: "Page",
    });
    const container = document.createElement("div");
    container.innerHTML = rendered;
    return container;
  },
};

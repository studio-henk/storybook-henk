import type { Meta, StoryObj } from "@storybook/html";

import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-grid.liquid?raw";
import gridSnippetRaw from "../snippets/henk-snippet-grid.liquid?raw";
import henkCardSnippetRaw from "../snippets/henk-card.liquid?raw";
import henkTagSnippetRaw from "../snippets/henk-tag.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const sectionTemplate = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-grid", gridSnippetRaw);
  (engine as any).registerPartial("henk-card", henkCardSnippetRaw);
  (engine as any).registerPartial("henk-tag", henkTagSnippetRaw);
}
if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-grid"] = gridSnippetRaw;
  (engine as any).__partials["henk-card"] = henkCardSnippetRaw;
  (engine as any).__partials["henk-tag"] = henkTagSnippetRaw;
}

const meta = {
  title: "Sections/Grid",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const blocks = [
      {
        id: "card_1",
        type: "card",
        settings: {
          title: "Card 1",
          subtitle: "Short description",
          image: "https://placehold.co/1260x1260",
          image_alt: "Card1",
          href: "#",
          rounded: false,
          shadow: false,
        },
      },
      {
        id: "card_2",
        type: "card",
        settings: {
          title: "Card 2",
          subtitle: "Short description",
          image: "https://placehold.co/1260x1260",
          image_alt: "Card2",
          href: "#",
          rounded: false,
          shadow: false,
        },
      },
      {
        id: "card_3",
        type: "card",
        settings: {
          title: "Card 3",
          subtitle: "Short description",
          image: "https://placehold.co/1260x1260",
          image_alt: "Card3",
          href: "#",
          rounded: false,
          shadow: false,
        },
      },
    ];

    const rendered = engine.parseAndRenderSync(sectionTemplate, {
      section: { id: "grid", settings: {}, blocks },
    });

    const container = document.createElement("div");
    container.innerHTML = rendered;
    return container;
  },
};

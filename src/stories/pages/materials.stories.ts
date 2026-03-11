import type { Meta, StoryObj } from "@storybook/html";

import engine from "@src/liquid-engine.js";
import { renderPageContent, renderThemePage } from "./page-utils";
import gridSnippetRaw from "../../snippets/henk-snippet-grid.liquid?raw";
import materialenTemplate from "./page.materialen.json";

const meta = {
  title: "Pages/Materials",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const page = {
      title: "Materialen",
      content:
        "<p>Wij hechten veel waarde aan het design, de kwaliteit en duurzaamheid van onze meubels. Daarom selecteren wij de materialen die wij in onze collectie aanbieden zorgvuldig.</p>",
    };

    const materialTypes = [
      {
        name: "Wood",
        url: "#",
        image: "https://placehold.co/1260x1260",
      },
      {
        name: "HPL",
        url: "#",
        image: "https://placehold.co/1260x1260",
      },
      {
        name: "Steel",
        url: "#",
        image: "/assets/p-p-ral-9005-texture-1000x1000.webp",
      },
      {
        name: "Fabrics",
        url: "#",
        image: "https://placehold.co/1260x1260",
      },
    ];

    const gridHtml = engine.parseAndRenderSync(gridSnippetRaw, {
      blocks: materialTypes.map((material) => ({
        type: "card",
        settings: {
          title: material.name,
          subtitle: "",
          image: material.image,
          image_alt: material.name,
          href: material.url,
          rounded: false,
          shadow: false,
        },
      })),
    });

    const contentForLayout =
      renderPageContent(materialenTemplate, page) + gridHtml;
    const rendered = renderThemePage({ contentForLayout, page });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

import type { Meta, StoryObj } from "@storybook/html";

import { renderPageContent, renderThemePage } from "./page-utils";
import materialenTemplateRaw from "@templates/page.materialen.json?raw";

const materialenTemplate = JSON.parse(
  materialenTemplateRaw.replace(/\/\*[\s\S]*?\*\//g, "").trimStart(),
);

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
        name: { value: "Wood" },
        system: { url: "/?path=/story/pages-materials-material-type--default" },
        image: "https://placehold.co/1260x1260",
      },
      {
        name: { value: "HPL" },
        system: { url: "#" },
        image: "https://placehold.co/1260x1260",
      },
      {
        name: { value: "Staal" },
        system: { url: "#" },
        image: "/assets/p-p-ral-9005-texture-1000x1000.webp",
      },
      {
        name: { value: "Fabrics" },
        system: { url: "#" },
        image: "https://placehold.co/1260x1260",
      },
    ];

    const contentForLayout = renderPageContent(materialenTemplate, page, {
      shop: { metaobjects: { material_type: { values: materialTypes } } },
    });
    const rendered = renderThemePage({ contentForLayout, page });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

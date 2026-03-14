import type { Meta, StoryObj } from "@storybook/html";

import { renderPageContent, renderThemePage } from "./page-utils";
import materialTypeTemplateRaw from "@templates/metaobject/material_type.json?raw";

const materialTypeTemplate = JSON.parse(
  materialTypeTemplateRaw.replace(/\/\*[\s\S]*?\*\//g, "").trimStart(),
);

const meta = {
  title: "Pages/Materials/Material type",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const materialTypes = [
      {
        name: { value: "Wood" },
        system: { url: "#", handle: "wood" },
        image: "https://placehold.co/1260x1260",
      },
      {
        name: { value: "HPL" },
        system: { url: "#", handle: "hpl" },
        image: "https://placehold.co/1260x1260",
      },
      {
        name: { value: "Staal" },
        system: { url: "#", handle: "staal" },
        image: "/assets/p-p-ral-9005-texture-1000x1000.webp",
      },
      {
        name: { value: "Fabrics" },
        system: { url: "#", handle: "fabrics" },
        image: "https://placehold.co/1260x1260",
      },
    ];

    const metaobject = {
      name: { value: "Wood" },
      description: { value: "<p>Oak and walnut finishes for the Wood collection.</p>" },
      system: { url: "#", handle: "wood" },
    };

    const materialFamilies = [
      {
        name: { value: "Oak stain" },
        system: { url: "#", handle: "oak-stain" },
        material_type: { value: metaobject },
      },
      {
        name: { value: "Oak hardwax oil" },
        system: { url: "#", handle: "oak-hardwax-oil" },
        material_type: { value: metaobject },
      },
      {
        name: { value: "Oak lacquer" },
        system: { url: "#", handle: "oak-lacquer" },
        material_type: { value: metaobject },
      },
      {
        name: { value: "Walnut lacquer" },
        system: { url: "#", handle: "walnut-lacquer" },
        material_type: { value: metaobject },
      },
    ];

    const page = {
      title: metaobject.name.value,
      content: "",
    };

    const contentForLayout = renderPageContent(materialTypeTemplate, page, {
      template: "metaobject/material_type",
      metaobject,
      shop: {
        metaobjects: {
          material_type: { values: materialTypes },
          material_family: { values: materialFamilies },
        },
      },
    });
    const rendered = renderThemePage({ contentForLayout, page });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

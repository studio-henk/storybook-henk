import type { Meta, StoryObj } from "@storybook/html";

import { renderPageContent, renderThemePage } from "./page-utils";
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
    const contentForLayout = renderPageContent(materialenTemplate, page);
    const rendered = renderThemePage({ contentForLayout, page });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

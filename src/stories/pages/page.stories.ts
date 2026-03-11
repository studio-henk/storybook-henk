import type { Meta, StoryObj } from "@storybook/html";

import { renderPageContent, renderThemePage } from "./page-utils";
import pageTemplate from "./page.json";

const meta = {
  title: "Pages/Page",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const page = {
      title: "Page",
      content: "<p>Example page content.</p>",
    };
    const contentForLayout = renderPageContent(pageTemplate, page);
    const rendered = renderThemePage({ contentForLayout, page });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import { createDescriptionList, DLItem } from "./DescriptionList";

const meta: Meta = {
  title: "Base/DescriptionList",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A semantic description list (dl) with terms (dt) and descriptions (dd).",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const sampleItems: DLItem[] = [
  { term: "Name", description: "Studio HENK" },
  { term: "Founded", description: "2010" },
  { term: "Location", description: "Amsterdam, NL" },
];

export const Default: Story = {
  render: () => createDescriptionList({ items: sampleItems }),
};

export const Small: Story = {
  render: () =>
    createDescriptionList({
      items: sampleItems,
      className: "henk-dl fs-small",
    }),
};


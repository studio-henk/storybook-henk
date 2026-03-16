import type { Meta, StoryObj } from "@storybook/html";

import { renderLiquidComponent } from "@utils/liquid-component";
import helloWorldTemplate from "src/components/hello-world.liquid?raw";

const meta = {
  title: "POC/Liquid Component",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: { control: "text" },
  },
  args: {
    name: "Storybook",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) =>
    renderLiquidComponent({ template: helloWorldTemplate, props: args }),
};

import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import bcorp from "../snippets/henk-asset-logo-bcorp.liquid?raw";

const render = (args: any) => {
  const rendered = engine.parseAndRenderSync(bcorp, args);
  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Snippets/Assets/Logos",
  render: (args) => render(args),
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    title: { control: "text" },
  },
  args: {
    href: "/",
    title: "B Corp",
  },
};

export default meta;

type Story = StoryObj;

export const BCorp: Story = {};

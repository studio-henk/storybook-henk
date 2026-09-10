import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import RawLiquid from "@src/snippets/henk-snippet-splitscreen.liquid?raw";

const renderRawLiquid = (args: any) => {
  const rendered = engine.parseAndRenderSync(RawLiquid, {});

  return rendered;
};

const meta: Meta = {
  title: "Snippets/Components/SplitScreen",
  render: (args) => renderRawLiquid(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: RawLiquid,
    docs: {
      description: {
        component: "Test snippet written in Liquid",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

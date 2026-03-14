import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import TestSnippet from "@src/snippets/henk-test-snippet.liquid?raw";

const renderTestSnippet = (args: any) => {
  const rendered = engine.parseAndRenderSync(TestSnippet, {});

  return rendered;
};

const meta: Meta = {
  title: "Snippets/henk-test-snippet",
  render: (args) => renderTestSnippet(args),
  tags: ["autodocs"],
  parameters: {
    customCode: TestSnippet,
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

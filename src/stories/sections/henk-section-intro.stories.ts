import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import section from "@src/sections/henk-section-intro.liquid?raw";

const renderIntro = (args: any) => {
  return engine.parseAndRenderSync(section, {
    section: {
      id: args.id,
      settings: {
        color_scheme: args.color_scheme,
        alignment: args.alignment,
        title: args.title,
        text: args.text,
      },
    },
  });
};

const meta: Meta = {
  title: "Sections/Intro",
  render: (args) => renderIntro(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: section,
    docs: {
      description: {
        component: "Intro section rendered from a Shopify Liquid section.",
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description: "Section ID.",
    },
    color_scheme: {
      control: { type: "select" },
      options: [
        "scheme-1",
        "scheme-2",
        "scheme-3",
        "scheme-4",
        "scheme-5",
        "scheme-6",
        "scheme-7",
        "scheme-8",
        "scheme-9",
      ],
      description: "Colour scheme.",
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Content alignment.",
    },
    title: {
      control: "text",
      description: "Section title.",
    },
    text: {
      control: "text",
      description: "Section text.",
    },
  },
  args: {
    id: "intro-story",
    color_scheme: "scheme-3",
    alignment: "left",
    title: "Fundamental Furniture\nfor Refined Living.",
    text: "<p>This is an example of the intro text.</p>",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Center: Story = {
  args: {
    alignment: "center",
  },
};

export const Right: Story = {
  args: {
    alignment: "right",
  },
};

export const WithoutText: Story = {
  args: {
    text: "",
  },
};

export const WithBreakInTitle: Story = {
  args: {
    title: "First line\nSecond line",
  },
};

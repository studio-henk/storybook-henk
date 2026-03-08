import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-logo.liquid?raw";

const renderLogo = (args: any) => {
  const rendered = engine.parseAndRenderSync(snippet, {
    variant: args.variant,
    href: args.href,
    label: args.label,
  });
  const div = document.createElement("div");
  div.innerHTML = rendered;
  // return the anchor element (snippet may include only markup)
  return div.querySelector("a.henk-logo") || div.querySelector("a") || div;
};

const meta: Meta = {
  title: "Components/Logo",
  render: (args) => renderLogo(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Logo component written in Liquid",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "default-inverted",
        "primary",
        "secondary",
        "transparent",
      ],
      description: "Logo variant",
    },
    href: {
      control: "text",
      description: "URL the logo links to",
    },
    label: {
      control: "text",
      description: "Aria label for accessibility",
    },
  },
  args: {
    variant: "default",
    href: "/nl",
    label: "Studio HENK",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const DefaultInverted: Story = {
  args: {
    variant: "default-inverted",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
  },
};

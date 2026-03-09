import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-button.liquid?raw";

const renderButton = (args: any) => {
  const rendered = engine.parseAndRenderSync(snippet, {
    element: args.element,
    href: args.href,
    type: args.type,
    value: args.value,
    variant: args.variant,
    size: args.size,
    label: args.label,
    title: args.title,
    icon_name: args.icon_name,
    icon_position: args.icon_position,
    icon_only: args.icon_only,
    aria_label: args.aria_label,
    disabled: args.disabled,
    target: args.target,
    attrs: args.attrs,
    extra_classes: args.extra_classes,
  });

  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Components/HenkButtonLiquid",
  render: (args) => renderButton(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Button component written in Liquid",
      },
    },
  },
  argTypes: {
    element: {
      control: { type: "select" },
      options: ["button", "a", "span"],
      description: "Element to render",
    },
    href: { control: "text", description: "URL for <a> element" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "Type attribute for <button>",
    },
    value: { control: "text", description: "Value attribute for <button>" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "ghost", "pill"],
      description: "Visual variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Size modifier",
    },
    label: { control: "text", description: "Button label" },
    title: { control: "text", description: "Optional title attribute" },
    icon_name: { control: "text", description: "Optional icon name" },
    icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Icon placement relative to label",
    },
    icon_only: { control: "boolean", description: "Render only the icon" },
    aria_label: {
      control: "text",
      description: "ARIA label for accessibility",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state (for <button>)",
    },
    target: { control: "text", description: "target for <a>" },
    attrs: {
      control: "object",
      description: "Additional attributes (liquid map)",
    },
    extra_classes: {
      control: "text",
      description: "Additional classes to append",
    },
  },
  args: {
    element: "a",
    href: "#",
    variant: "tertiary",
    size: "large",
    label: "Click me",
    type: "button",
    icon_position: "left",
    icon_only: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

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

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Button with icon",
    icon_name: "feather-chevron-right",
    icon_position: "right",
  },
};

export const IconOnly: Story = {
  args: {
    icon_only: true,
    icon_name: "feather-chevron-right",
    aria_label: "Icon-only button",
  },
};

export const Pill: Story = {
  args: {
    variant: "pill",
    label: "Pill button",
  },
};

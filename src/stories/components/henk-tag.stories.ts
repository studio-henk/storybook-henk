import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-tag.liquid?raw";
import TruckIcon from "@assets/icons/feather-truck.svg?raw";

const renderTag = (args: any) => {
  const rendered = engine.parseAndRenderSync(snippet, {
    label: args.label,
    icon_svg: args.icon_svg,
    icon_position: args.icon_position,
    size: args.size,
    variant: args.variant,
    href: args.href,
  });

  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Components/HenkTagLiquid",
  render: (args) => renderTag(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Tag component written in Liquid",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      name: "label *",
      description: "**Required.** Text content of the tag",
    },
    icon_svg: {
      control: "text",
      description: "Optional SVG icon to be displayed with the tag",
    },
    icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the icon within the tag",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "outlined", "dark", "light"],
      description: "Visual style variant of the tag",
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Size of the tag",
    },
    href: {
      control: "text",
      description: "Optional URL to render an anchor tag",
    },
  },
  args: {
    label: "Fast Delivery",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Fast Delivery",
  },
};

export const Primary: Story = {
  args: {
    label: "Fast Delivery",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Fast Delivery",
    variant: "secondary",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Fast Delivery",
    icon_svg: TruckIcon,
    icon_position: "left",
  },
};

export const Link: Story = {
  args: {
    label: "Fast Delivery",
    variant: "primary",
    href: "https://studio-henk.nl",
  },
};

export const Outlined: Story = {
  args: {
    label: "Fast Delivery",
    variant: "outlined",
  },
};

export const Dark: Story = {
  args: {
    label: "Fast Delivery",
    variant: "dark",
  },
};

export const Light: Story = {
  args: {
    label: "Fast Delivery",
    variant: "light",
  },
};

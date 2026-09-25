import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import cardRaw from "@src/snippets/henk-collection-item.liquid?raw";

const meta: Meta = {
  title: "Snippets/HENK Collection Item",

  render: (args) => {
    const card = engine.parseAndRenderSync(cardRaw, {
      href: args.href,
      image: args.image,
      image_alt: args.image_alt,
      title: args.title,
      price: args.price,
      configurable_label: args.configurable_label,
    });

    return `<div class="sb-collection-card">${card}</div>`;
  },

  tags: ["autodocs", "version:1.0.0"],

  parameters: {
    customCode: cardRaw,
  },

  argTypes: {
    href: {
      control: "text",
    },

    image: {
      control: "text",
    },

    image_alt: {
      control: "text",
    },

    title: {
      control: "text",
    },

    price: {
      control: "text",
    },

    configurable_label: {
      control: "text",
    },
  },

  args: {
    href: "#",
    image: "/assets/slide-banken.avif",
    image_alt: "Bank",
    title: "Ontdek onze banken",
    price: "Vanaf € 1.295",
    configurable_label: "Meerdere varianten",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const LongTitle: Story = {
  args: {
    title:
      "Een bijzonder lange productnaam die over meerdere regels moet kunnen lopen",
  },
};

export const WithoutPrice: Story = {
  args: {
    price: "",
  },
};

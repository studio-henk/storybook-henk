import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-card.liquid?raw";

const renderCard = (args: any) => {
  const safeArgs = { ...(args ?? {}) } as Record<string, any>;
  const rawTags = safeArgs.tags;
  safeArgs.tags = Array.isArray(rawTags) ? rawTags : rawTags ? [rawTags] : [];
  const rendered = engine.parseAndRenderSync(snippet, safeArgs);

  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Components/Cards/HenkCardLiquid",
  render: (args) => renderCard(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Card component rendered from Liquid.",
      },
    },
  },
  argTypes: {
    href: { control: "text" },
    image: { control: "text" },
    image_alt: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    tags: { control: "object" },
    rounded: { control: "boolean" },
    shadow: { control: "boolean" },
    extra_class: { control: "text" },
  },
  args: {
    href: "#",
    image:
      "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
    image_alt: "Henk card image",
    title: "Card title",
    subtitle: "Card subtitle",
    rounded: false,
    shadow: false,
    extra_class: "",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Shadow: Story = {
  args: {
    rounded: true,
    shadow: true,
    tags: ["Second Chance", "Limited"],
  },
};

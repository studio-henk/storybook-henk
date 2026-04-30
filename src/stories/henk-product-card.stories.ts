import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-product-card.liquid?raw";

export type HenkProductCardArgs = {
  href: string;
  image: string;
  image_alt: string;
  title: string;
  subtitle?: string;
  price?: string;
  from_price?: string;
  discounted_price?: string;
  button_label?: string;
  button_variant?: string;
  button_size?: string;
  tags?:
    | Array<{ label: string; variant?: string; size?: string; href?: string }>
    | string[]
    | string;
  variant?: string;
  extra_class?: string;
  content_dir?: string;
  directions_label?: string;
  directions_url?: string;
};

const renderCard = (args: HenkProductCardArgs) => {
  const safeArgs = { ...(args ?? {}) } as Record<string, any>;
  const rawTags = safeArgs.tags;
  safeArgs.tags = Array.isArray(rawTags) ? rawTags : rawTags ? [rawTags] : [];
  const rendered = engine.parseAndRenderSync(snippet, safeArgs);

  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div.firstElementChild ?? div;
};

const meta: Meta<HenkProductCardArgs> = {
  title: "Snippets/Components/ProductCard",
  render: (args: HenkProductCardArgs) => renderCard(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Product card rendered from Liquid.",
      },
    },
  },
  argTypes: {
    href: { control: "text" },
    image: { control: "text" },
    image_alt: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    price: { control: "text" },
    from_price: { control: "text" },
    discounted_price: { control: "text" },
    button_label: { control: "text" },
    button_variant: { control: "text" },
    button_size: { control: "text" },
    tags: { control: "object" },
    variant: { control: "text" },
    extra_class: { control: "text" },
    content_dir: { control: "text" },
  },
  args: {
    variant: "product",
    title: "Card title",
    price: "€ 549",
    from_price: "€ 359",
    image:
      "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
    image_alt: "Base bar stool",
    href: "/en/collections/bar-stools/products/base-bar-stool",
  },
};

export default meta;

type Story = StoryObj<HenkProductCardArgs>;

export const Default: Story = {};

export const WithTags: Story = {
  args: {
    tags: [
      { label: "New", variant: "primary", size: "small" },
      { label: "Fast delivery", variant: "outlined", size: "small" },
    ],
  },
};

export const Subtitle: Story = {
  args: {
    subtitle: "usually product variant / material",
  },
};

export const InGrid: Story = {
  render: () => {
    const cards: HenkProductCardArgs[] = [
      {
        variant: "product",
        href: "/en/collections/bar-stools/products/base-bar-stool",
        image:
          "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
        image_alt: "Ode stool",
        title: "Test Card",
        subtitle: "soil-natural01",
        price: "€ 379",
      },
      {
        variant: "product",
        href: "/en/collections/bar-stools/products/base-bar-stool",
        image:
          "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
        image_alt: "Base stool",
        title: "Base stool 77",
        subtitle: "Eiken hardwax olie naturel 3062",
        price: "€ 379",
        from_price: "€ 359",
        discounted_price: "€ 309",
      },
      {
        variant: "product",
        href: "/en/collections/bar-stools/products/base-bar-stool",
        image:
          "https://www.studio-henk.nl/Images/emersya/stool-without-background/678007/image-thumb__678007__ListerSquareAvif/BS-BSS650-9017.avif",
        image_alt: "Base bar stool",
        title: "Base stool 65",
        subtitle: "Eiken zwart gebeitst",
        price: "€ 379",
        from_price: "€ 359",
        tags: [
          { label: "New", variant: "primary", size: "small" },
          { label: "Fast delivery", variant: "outlined", size: "small" },
        ],
      },
      {
        variant: "product",
        href: "/en/collections/bar-stools/products/base-bar-stool",
        image:
          "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
        image_alt: "Base stool",
        title: "Base stool 77",
        subtitle: "Eiken hardwax olie naturel 3062",
        price: "€ 379",
        from_price: "€ 359",
        discounted_price: "€ 309",
      },
    ];

    const container = document.createElement("div");
    container.className = "henk-grid henk-grid--lines";
    container.innerHTML = `<div class="henk-grid__container">${cards
      .map((card) => engine.parseAndRenderSync(snippet, card))
      .join("")}</div>`;

    return container;
  },
};

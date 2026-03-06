import type { Meta, StoryObj } from "@storybook/html";
import { createProductCard, type ProductCardProps } from "./ProductCard";

const meta: Meta<ProductCardProps> = {
  title: "Components/Cards/ProductCard",
  tags: ["autodocs"],
  render: (args: ProductCardProps) => createProductCard(args),
  argTypes: {
    rounded: {
      control: "boolean",
      description: "Rounded corners",
    },
    shadow: {
      control: "boolean",
      description: "Shadow",
    },
    imageSrc: {
      table: {
        disable: true,
      },
    },
    imageAlt: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    tags: {
      table: {
        disable: true,
      },
    },
    buttonLabel: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "default",
    title: "Card title",
    subtitle: "usually product variant / material",
    price: "€ 549",
    fromPrice: "€ 359",
    imageSrc:
      "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
    imageAlt: "Base bar stool",
    href: "/en/collections/bar-stools/products/base-bar-stool",
    tags: [
      { label: "New", variant: "primary", size: "small" },
      { label: "Fast delivery", variant: "outlined", size: "small" },
    ],
    rounded: false,
    shadow: false,
  },
};

export default meta;

type Story = StoryObj<ProductCardProps>;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    href: "/nl",
    rounded: true,
  },
};

export const Shadow: Story = {
  args: {
    href: "/nl",
    rounded: true,
    shadow: true,
  },
};

export const InGrid = () => {
  const cards: ProductCardProps[] = [
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
      imageAlt: "Ode stool",
      title: "Test Card",
      subtitle: "soil-natural01",
      price: "€ 379",
    },
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
      imageAlt: "Base stool",
      title: "Base stool 77",
      subtitle: "Eiken hardwax olie naturel 3062",
      price: "€ 379",
      fromPrice: "€ 359",
      discountedPrice: "€ 309",
      rounded: true,
    },
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678007/image-thumb__678007__ListerSquareAvif/BS-BSS650-9017.avif",
      imageAlt: "Base bar stool",
      title: "Base stool 65",
      subtitle: "Eiken zwart gebeitst",
      price: "€ 379",
      fromPrice: "€ 359",
      buttonLabel: "Vanaf € 379",
      tags: [
        { label: "New", variant: "primary", size: "small" },
        { label: "Fast delivery", variant: "outlined", size: "small" },
      ],
    },
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/1052120/image-thumb__1052120__ListerSquareAvif/BS-OBLIWC650BS-B-0008-orion-taupe12.avif",
      imageAlt: "Base bar stool",
      title: "Oblique barkruk 65",
      subtitle: "orion-taupe12, zwart",
      fromPrice: "€ 359",
      price: "€ 379",
      buttonLabel: "Vanaf € 469",
    },
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/707161/image-thumb__707161__ListerSquareAvif/BS-BOLS650BS-W-regain-natural01.avif",
      imageAlt: "Base bar stool",
      title: "Bolster Stool 65",
      subtitle: "regain-natural01, wit",
      price: "€ 379",
      fromPrice: "€ 359",
      buttonLabel: "Vanaf € 549",
      tags: [{ label: "Second Chance", variant: "outlined", size: "small" }],
    },
    {
      variant: "default",
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/804288/image-thumb__804288__ListerSquareAvif/BS-ODE650-B-orion-steel149.avif",
      imageAlt: "Ode stool",
      title: "Ode stool 65",
      subtitle: "orion-steel149, zwart",
      price: "€ 379",
      fromPrice: "€ 359",
      buttonLabel: "Vanaf € 549",
    },
  ];

  return `
    <div class="henk-lister-grid">
      ${cards.map((card) => createProductCard(card)).join("")}
    </div>
  `;
};

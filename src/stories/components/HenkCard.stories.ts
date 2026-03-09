import type { Meta, StoryObj } from "@storybook/html-vite";
import { createHenkCard, type HenkCardProps } from "./HenkCard";

const meta: Meta<HenkCardProps> = {
  title: "Components/Cards/HenkCard",
  tags: ["autodocs"],
  render: (args: HenkCardProps) => createHenkCard(args),
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
  },
  args: {
    title: "Card title",
    subtitle: "Card subtitle",
    imageSrc:
      "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
    imageAlt: "Base bar stool",
    href: "/en/collections/bar-stools/products/base-bar-stool",
    rounded: false,
    shadow: false,
  },
};

export default meta;

type Story = StoryObj<HenkCardProps>;

export const Default: Story = {};

export const WithTag: Story = {
  args: {
    href: "/nl",
    tags: [{ label: "New", variant: "primary", size: "small" }],
  },
};

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
  const cards: HenkCardProps[] = [
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
      imageAlt: "Ode stool",
      title: "Test Card",
      subtitle: "Card subtitle",
      tags: [{ label: "New", variant: "primary", size: "small" }],
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
      imageAlt: "Base stool",
      title: "Base stool 77",
      subtitle: "Eiken hardwax olie naturel",
      rounded: true,
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678007/image-thumb__678007__ListerSquareAvif/BS-BSS650-9017.avif",
      imageAlt: "Base bar stool",
      title: "Base stool 65",
      subtitle: "Eiken zwart gebeitst",
      tags: [
        { label: "New", variant: "primary", size: "small" },
        { label: "Fast delivery", variant: "outlined", size: "small" },
      ],
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/1052120/image-thumb__1052120__ListerSquareAvif/BS-OBLIWC650BS-B-0008-orion-taupe12.avif",
      imageAlt: "Base bar stool",
      title: "Oblique barkruk 65",
      subtitle: "orion-taupe12, zwart",
      tags: [{ label: "Sale", variant: "primary", size: "small" }],
    },
  ];

  return `
    <div class="henk-lister-grid">
      ${cards.map((card) => createHenkCard(card)).join("")}
    </div>
  `;
};

// BaseCard.stories.ts
import type { Meta, StoryObj } from "@storybook/html";
import { createBaseCard } from "./BaseCard";
import { createTag } from "./tag";

export default {
  title: "Components/Cards/BaseCard",
  render: (args) => createBaseCard(args),
  args: {
    title: "Card title",
    description: "A short summary / description.",
    imageSrc:
      "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
    imageAlt: "Base bar stool",
    href: "/en/collections/bar-stools/products/base-bar-stool",
    buttonLabel: "Optional button",
  },
} satisfies Meta;

type Story = StoryObj<Parameters<typeof createBaseCard>[0]>;

export const Default: Story = {};

// export const WithoutButton: Story = {
//   args: {
//     buttonLabel: undefined,
//   },
// };

// export const LongDescription: Story = {
//   args: {
//     description:
//       "This is a longer description to test how the BaseCard handles more text. It should wrap and maintain consistent spacing.",
//   },
// };

export const InGrid = () => {
  const cards: BaseCardProps[] = [
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
      imageAlt: "Ode stool",
      title: "Test Card",
      description:
        "This is a longer description to test how the BaseCard handles more text. It should wrap and maintain consistent spacing.",
      buttonLabel: "Vanaf € 549",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
      imageAlt: "Base stool",
      title: "Base stool 77",
      description: "Eiken hardwax olie naturel 3062",
      buttonLabel: "Vanaf € 379",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678007/image-thumb__678007__ListerSquareAvif/BS-BSS650-9017.avif",
      imageAlt: "Base bar stool",
      title: "Base stool 65",
      description: "Eiken zwart gebeitst",
      buttonLabel: "Vanaf € 379",
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
      description: "orion-taupe12, zwart",
      buttonLabel: "Vanaf € 469",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/707161/image-thumb__707161__ListerSquareAvif/BS-BOLS650BS-W-regain-natural01.avif",
      imageAlt: "Base bar stool",
      title: "Bolster Stool 65",
      description: "regain-natural01, wit",
      buttonLabel: "Vanaf € 549",
      tags: [{ label: "Second Chance", variant: "outlined", size: "small" }],
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/804288/image-thumb__804288__ListerSquareAvif/BS-ODE650-B-orion-steel149.avif",
      imageAlt: "Ode stool",
      title: "Ode stool 65",
      description: "orion-steel149, zwart",
      buttonLabel: "Vanaf € 549",
    },
  ];

  return `
    <div class="henk-lister-grid">
      ${cards.map((card) => createBaseCard(card)).join("")}
    </div>
  `;
};

export const VariantMacs = () => {
  const cards: BaseCardProps[] = [
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
      imageAlt: "Ode stool",
      title: "Test Card",
      description: "Vanaf € 379",
      variant: "macs",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif",
      imageAlt: "Base stool",
      title: "Base stool 77",
      description: "Vanaf € 379",
      variant: "macs",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/678007/image-thumb__678007__ListerSquareAvif/BS-BSS650-9017.avif",
      imageAlt: "Base bar stool",
      title: "Base stool 65",
      description: "Vanaf € 379",
      tags: [
        { label: "New", variant: "dark", size: "small" },
        { label: "Fast delivery", variant: "light", size: "small" },
      ],
      variant: "macs",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/1052120/image-thumb__1052120__ListerSquareAvif/BS-OBLIWC650BS-B-0008-orion-taupe12.avif",
      imageAlt: "Base bar stool",
      title: "Oblique barkruk 65",
      description: "Vanaf € 469",
      variant: "macs",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/707161/image-thumb__707161__ListerSquareAvif/BS-BOLS650BS-W-regain-natural01.avif",
      imageAlt: "Base bar stool",
      title: "Bolster Stool 65",
      description: "Vanaf € 549",
      tags: [{ label: "Second Chance", variant: "outlined", size: "small" }],
      variant: "macs",
    },
    {
      href: "/en/collections/bar-stools/products/base-bar-stool",
      imageSrc:
        "https://www.studio-henk.nl/Images/emersya/stool-without-background/804288/image-thumb__804288__ListerSquareAvif/BS-ODE650-B-orion-steel149.avif",
      imageAlt: "Ode stool",
      title: "Ode stool 65",
      description: "Vanaf € 549",
      variant: "macs",
    },
  ];

  return `
    <div class="henk-lister-grid --variant-macs">
      ${cards.map((card) => createBaseCard(card)).join("")}
    </div>
  `;
};

const dirIcon = `
<i class="henk-icon icon--medium">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z"></path>
        <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
      </svg>
    </i>
`;

export const StoreCardVariant = () => {
  const cards: BaseCardProps[] = [
    {
      href: "/en/pages/winkels/amsterdam",
      imageSrc:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?v=1752841549",
      imageAlt: "AMS",
      title: "Amsterdam",
      description: `<a class='henk-card__link--directions' href='#'>Rozengracht 204, 1016 NL Amsterdam ${dirIcon}</a>`,
      buttonLabel: "Discover Amsterdam",
      buttonVariant: "secondary",
    },
    {
      href: "/en/pages/winkels/antwwerpen",
      imageSrc:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-store-antwerpen.avif?v=1752841496",
      imageAlt: "ANT",
      title: "Antwerpen",
      description: `<a class='henk-card__link--directions' href='#'>Kloosterstraat 52-Rechts, 2000 Antwerpen ${dirIcon}</a>`,
      buttonLabel: "Discover Antwerpen",
      buttonVariant: "secondary",
    },
  ];

  return `
    <div class="henk-lister-grid henk-section__grid--stores">
      ${cards.map((card) => createBaseCard(card)).join("")}
    </div>
  `;
};

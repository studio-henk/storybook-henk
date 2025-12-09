import type { Meta, StoryObj } from "@storybook/html";
import { createBaseCard, type BaseCardProps } from "./BaseCard";

const meta: Meta<BaseCardProps> = {
  title: "Components/Cards/BaseCard",
  tags: ["autodocs"],
  render: (args: BaseCardProps) => createBaseCard(args),
  argTypes: {
    // variant: {
    //   options: ["default", "store"],
    //   control: { type: "radio" },
    // },
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

type Story = StoryObj<BaseCardProps>;

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

// export const StoreVariant: Story = {
//   args: {
//     variant: "store",
//     href: "/nl/amsterdam",
//     title: "Amsterdam",
//     imageSrc:
//       "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?v=1752841549",
//     contentDir: "vertical",
//     directionsLabel: "Rozengracht 204, 1016 NL Amsterdam",
//     directionsUrl:
//       "https://www.google.com/maps/place/Studio+HENK+Amsterdam+Flagship+store/@52.3726924,4.8772189,17z/data=!4m6!3m5!1s0x47c6096bedafecb5:0xcf2b8610a886605e!8m2!3d52.3726924!4d4.8772189!16s%2Fg%2F11r_xqvrvl?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",
//     tags: [],
//     buttonLabel: "Ontdek Amsterdam",
//     buttonVariant: "primary",
//     buttonSize: "small",
//     rounded: true,
//     shadow: true,
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
      subtitle: "soil-natural01",
      buttonLabel: "Vanaf € 549",
    },
    {
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
      buttonLabel: "Vanaf € 379",
    },
    {
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
      ${cards.map((card) => createBaseCard(card)).join("")}
    </div>
  `;
};

// const dirIcon = `
// <i class="henk-icon icon--medium">
//       <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
//         <path d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z"></path>
//         <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
//       </svg>
//     </i>
// `;

// export const StoreCardVariant = () => {
//   const cards: BaseCardProps[] = [
//     {
//       href: "/en/pages/winkels/amsterdam",
//       imageSrc:
//         "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?v=1752841549",
//       imageAlt: "AMS",
//       title: "Amsterdam",
//       subtitle: `<a class='henk-card__link--directions' href='#'>Rozengracht 204, 1016 NL Amsterdam ${dirIcon}</a>`,
//       buttonLabel: "Discover Amsterdam",
//       buttonVariant: "secondary",
//     },
//     {
//       href: "/en/pages/winkels/antwwerpen",
//       imageSrc:
//         "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-store-antwerpen.avif?v=1752841496",
//       imageAlt: "ANT",
//       title: "Antwerpen",
//       subtitle: `<a class='henk-card__link--directions' href='#'>Kloosterstraat 52-Rechts, 2000 Antwerpen ${dirIcon}</a>`,
//       buttonLabel: "Discover Antwerpen",
//       buttonVariant: "secondary",
//     },
//   ];

//   return `
//     <div class="henk-lister-grid henk-section__grid--stores">
//       ${cards.map((card) => createBaseCard(card)).join("")}
//     </div>
//   `;
// };

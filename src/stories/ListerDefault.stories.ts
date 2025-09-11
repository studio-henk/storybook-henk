import type { Meta, StoryObj } from "@storybook/html";

import { createBaseLayout } from "./templates/BaseLayout";
import { createHeader } from "./TheHeader";
import { TheFooter } from "./TheFooter";
import { createSectionHeader } from "./SectionHeader";
import { createBaseCard, BaseCardProps } from "./BaseCard";

function wrapWithShopifySection(
  element: HTMLElement,
  id?: string,
): HTMLElement {
  const section = document.createElement("section");
  section.className = "shopify-section";
  if (id) section.id = id;
  section.appendChild(element);
  return section;
}

const meta: Meta = {
  title: "Pages/Lister",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    // --- Header & Footer ---
    const header = createHeader({
      cartCount: 0,
      align: "center",
      inBetween: true,
      logoProps: { variant: "transparent", href: "/" },
    });
    const footer = TheFooter({});

    // --- Main content ---
    const mainContent = document.createDocumentFragment();

    const sectionHeader = createSectionHeader({
      id: "lister-default-header",
      caption: "",
      title: "Product Lister",
      level: 1,
      content: "<p>Bekijk onze selectie van bar stools.</p>",
      alignLeft: false,
    });

    mainContent.appendChild(
      wrapWithShopifySection(sectionHeader, "section-header"),
    );

    // --- Grid of BaseCards (same data as InGrid) ---
    const cards: BaseCardProps[] = [
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

    const gridContainer = document.createElement("div");
    gridContainer.className = "henk-lister-grid henk-section";
    gridContainer.innerHTML = cards
      .map((card) => createBaseCard(card))
      .join("");

    mainContent.appendChild(
      wrapWithShopifySection(gridContainer, "shopify-section-lister"),
    );

    return createBaseLayout({ header, mainContent, footer });
  },
};

export const New: Story = {
  render: () => {
    // --- Header & Footer ---
    const header = createHeader({
      cartCount: 0,
      align: "center",
      inBetween: true,
      logoProps: { variant: "transparent", href: "/" },
    });
    const footer = TheFooter({});

    // --- Main content ---
    const mainContent = document.createDocumentFragment();

    const sectionHeader = createSectionHeader({
      id: "lister-default-header",
      caption: "",
      title: "Product Lister",
      level: 1,
      content: "<p>Bekijk onze selectie van bar stools.</p>",
      alignLeft: false,
    });

    mainContent.appendChild(
      wrapWithShopifySection(sectionHeader, "section-header"),
    );

    // --- Grid of BaseCards (same data as InGrid) ---
    const cards: BaseCardProps[] = [
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
          { label: "New", variant: "primary", size: "small" },
          { label: "Fast delivery", variant: "outlined", size: "small" },
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

    const gridContainer = document.createElement("div");
    gridContainer.className = "henk-lister-grid henk-section --variant-macs";
    gridContainer.innerHTML = cards
      .map((card) => createBaseCard(card))
      .join("");

    mainContent.appendChild(
      wrapWithShopifySection(gridContainer, "shopify-section-lister"),
    );

    return createBaseLayout({ header, mainContent, footer });
  },
};

import type { Meta, StoryObj } from "@storybook/html";

import { createBaseLayout } from "@templates/BaseLayout";
import { createHeader } from "@stories/TheHeader";
import { TheFooter } from "@stories/TheFooter";
import { HeaderBlock } from "@stories/SectionHeader";
import { createProductCard, ProductCardProps } from "@components/ProductCard";
import ChevronRight from "@assets/feather-chevron-right.svg?raw";
import { createButtonGroup, ButtonGroupProps } from "@components/ButtonGroup";

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

    const sectionHeader = HeaderBlock({
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

    // --- Grid of ProductCards (same data as InGrid) ---
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
      },
    ];

    const gridContainer = document.createElement("div");
    gridContainer.className = "henk-lister-grid henk-section";
    gridContainer.innerHTML = cards
      .map((card) => createProductCard(card))
      .join("");

    mainContent.appendChild(
      wrapWithShopifySection(gridContainer, "shopify-section-lister"),
    );

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "henk-pagination henk-section";

    // buttongroup wrapper
    const buttonGroupInPagination = createButtonGroup({
      buttons: [
        {
          element: "a",
          label: "Next page",
          variant: "primary",
          href: "#next",
          iconSvg: ChevronRight,
          iconPosition: "right",
        },
      ],
      alignment: "center",
    } as ButtonGroupProps);

    paginationContainer.innerHTML = `
    <nav class="pagination" role="navigation" aria-label="Paginering">
      ${buttonGroupInPagination.outerHTML}
    </nav>
`;

    mainContent.appendChild(paginationContainer);

    return createBaseLayout({ header, mainContent, footer });
  },
};

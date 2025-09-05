import type { Meta, StoryObj } from "@storybook/html";

import { createBaseLayout } from "./templates/BaseLayout";
import { createHeader } from "./TheHeader";
import { TheFooter } from "./TheFooter";
import { createSectionHeader } from "./SectionHeader";
import { createStoreCard } from "./StoreCard";
import { createStoresGrid } from "./Grid";

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
  title: "Pages/StoresOverview",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const StoresOverview: Story = {
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
    // const mainContent = document.createElement("div");
    const mainContent = document.createDocumentFragment();

    const sectionHeader = createSectionHeader({
      id: "stores-overview-header",
      caption: "",
      title: "Onze winkels",
      level: 1,
      content: "Ontdek onze verschillende Studio HENK winkels.",
      alignLeft: false,
    });

    mainContent.appendChild(
      wrapWithShopifySection(sectionHeader, "section-header"),
    );

    // --- Store cards ---
    const cards = [
      createStoreCard({
        name: "Amsterdam",
        address: "Rozengracht 204, 1016 NL Amsterdam",
        imageUrl:
          "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?v=1752841549",
        imageAlt: "Visit our store in Amsterdam",
        href: "/pages/winkels/amsterdam",
        directionsUrl:
          "https://www.google.com/maps/place/Studio+HENK+Amsterdam+Flagship+store/@52.3726924,4.8772189,17z",
      }),
      createStoreCard({
        name: "Antwerpen",
        address: "Kloosterstraat 52-Rechts, 2000 Antwerpen",
        imageUrl:
          "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-store-antwerpen.avif?v=1752841496",

        imageAlt: "Visit our store in Antwerp",
        href: "/pages/winkels/antwerpen",
        directionsUrl:
          "https://www.google.com/maps/place/Studio+HENK+Antwerpen+Flagship+store/@51.2159204,4.3922698,17z",
      }),
      createStoreCard({
        name: "Haarlem",
        address: "Barteljorisstraat 13, 2011 RA Haarlem",
        imageUrl:
          "https://surf-turf-2-0.myshopify.com/cdn/shop/files/HaarlemHero.avif?v=1752841549",

        imageAlt: "Visit our store in Haarlem",
        href: "/pages/winkels/haarlem",
        directionsUrl:
          "https://www.google.com/maps/place/Studio+HENK+Haarlem+Brand+Store/@52.3824416,4.6327778,17z",
      }),
      createStoreCard({
        name: "Rotterdam",
        address: "Mariniersweg 47, 3011 ND Rotterdam",
        imageUrl:
          "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Storefront_rotterdam_2000x2500_V3.avif?v=1752841549",

        imageAlt: "Visit our store in Rotterdam",
        href: "/pages/winkels/rotterdam",
        directionsUrl:
          "https://www.google.com/maps/place/Studio+HENK+Rotterdam+Brand+Store/@51.923329,4.486247,17z",
      }),
      createStoreCard({
        name: "Utrecht",
        address: "Janskerkhof 5, 3512 BK Utrecht",
        imageUrl:
          "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-store-utrecht.avif?v=1752841549",

        imageAlt: "Visit our store in Utrecht",
        href: "/pages/winkels/utrecht",
        directionsUrl:
          "https://www.google.com/maps/place/Studio+HENK+Utrecht+Brand+Store/@52.0928178,5.118819,17z",
      }),
    ];

    const grid = createStoresGrid(cards);

    mainContent.appendChild(
      wrapWithShopifySection(grid, "shopify-section-stores"),
    );

    return createBaseLayout({ header, mainContent, footer });
  },
};

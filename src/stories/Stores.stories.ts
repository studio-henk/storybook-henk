import type { Meta, StoryObj } from "@storybook/html";

import { createBaseLayout } from "./templates/BaseLayout";
import { createHeader } from "./TheHeader";
import { TheFooter } from "./TheFooter";
import { createSplitScreen } from "./SplitScreen";
import { createThreeColumnBlock } from "./ThreeColumnBlock";
import { NewsletterBlock } from "./NewsletterBlock.stories.js";
import { createBreadcrumbs } from "./Breadcrumbs";
import { createSectionHeader } from "./SectionHeader";

function wrapWithShopifySection(
  element: HTMLElement,
  id?: string,
): HTMLElement {
  const section = document.createElement("section");
  section.className = "shopify-section";
  if (id) {
    section.id = id;
  }
  section.appendChild(element);
  return section;
}

function htmlToNode(html: string): HTMLElement {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
}

const meta = {
  title: "Pages/StoresDetail",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const StoresDetail: Story = {
  render: () => {
    const header = createHeader({
      cartCount: 3,
      align: "center",
      inBetween: true,
      logoProps: { variant: "transparent", href: "/" },
    });
    const footer = TheFooter({});

    const mainContent = document.createElement("div");
    mainContent.id = "stores-main-content";

    const breadcrumbs = createBreadcrumbs({
      breadcrumbs: [
        { name: "Home", fullPath: "/" },
        { name: "Stores", fullPath: "/stores" },
        { name: "Amsterdam", fullPath: "/stores/amsterdam" },
      ],
    });
    mainContent.appendChild(
      wrapWithShopifySection(breadcrumbs, "section-breadcrumbs"),
    );

    // --- Section Header ---
    const sectionHeader = createSectionHeader({
      id: "stores-header",
      caption: "",
      title: "Studio HENK Amsterdam",
      level: "1",
      content: "",
      alignLeft: false,
    });

    mainContent.appendChild(
      wrapWithShopifySection(sectionHeader, "section-header"),
    );

    const split1 = createSplitScreen({
      id: "split-screen-1",
      bgColor: "default",
      reverse: false,
      title: "Bezoek ons in Amsterdam",
      level: 2,
      display: false,
      content:
        "<p>Onze deuren staan open voor al je vragen over onze producten of voor inspiratie om je interieur te vernieuwen. Boek een gratis adviesgesprek met een van onze interieuradviseurs in onze winkel aan de Rozengracht. Je bent ook zonder afspraak van harte welkom.</p>",
      imageUrl:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?crop=center&height=1728&v=1752841549&width=1152",
      imageAlt: "",
      imageLink: "/interior-advice",
      buttonUrl: "/interior-advice",
      buttonText: "Maak een afspraak",
      buttonVariant: "primary",
    });

    mainContent.appendChild(wrapWithShopifySection(split1, "section-split1"));
    // mainContent.appendChild(wrapWithShopifySection(threecolumn1, 'section-threecolumn1'));
    // mainContent.appendChild(wrapWithShopifySection(videoBlock1, 'section-videoBlock1'));
    // mainContent.appendChild(wrapWithShopifySection(threecolumn2, 'section-threecolumn2'));
    // mainContent.appendChild(wrapWithShopifySection(split2, 'section-split2'));
    // mainContent.appendChild(wrapWithShopifySection(split3, 'section-split3'));
    // mainContent.appendChild(wrapWithShopifySection(threecolumn3, 'section-threecolumn3'));
    mainContent.appendChild(htmlToNode(NewsletterBlock()));

    return createBaseLayout({ header, mainContent, footer });
  },
};

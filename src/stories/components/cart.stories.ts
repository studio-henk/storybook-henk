import { createPageTemplate } from "@templates/PageTemplate";
import { createSectionHeader } from "@stories/SectionHeader";
import { createInfoBox } from "@components/InfoBox";
import { createCartContent } from "@stories/createCartContent";
import { mockShopifyCart } from "@utils/mockShopifyCart";
import ChevronLeft from "@assets/icons/icon-chevron-left.svg?raw";

// Import the stepper component (you don’t need to use <script> tags in Storybook)
import "@stories/components/henk-quantity-stepper.js";

import { NewsletterBlock as RawNewsletterBlock } from "@stories/NewsletterBlock.stories";

// Cast the story to get a render function
const NewsletterBlock = RawNewsletterBlock.render as () => string;

function htmlToNode(html: string): HTMLElement {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
}

export default {
  title: "Pages/Cart",
};

export const Empty = () => {
  return createPageTemplate({
    headerProps: {
      logoProps: { variant: "transparent", href: "/" },
      cartCount: 0,
      align: "center",
      inBetween: true,
    },
    mainContent: () => {
      const fragment = document.createDocumentFragment();

      const sectionHeader = createSectionHeader({
        title: "Cart is currently empty",
        alignLeft: false,
        level: 1,
        buttonUrl: "./collections",
        buttonText: "Explore the collection",
        buttonVariant: "tertiary",
      });
      fragment.appendChild(sectionHeader);

      const gridInfoBox = document.createElement("section");
      gridInfoBox.className = "grid-info-box henk-section";

      const box1 = createInfoBox({
        title: "Delivery by appointment",
        content:
          "<p>Our carrier will get in touch with you once your order is ready for delivery. You can then choose the desired delivery moment yourself.</p>",
        iconName: "icon-calendar",
      });

      const box2 = createInfoBox({
        title: "Free delivery and assembly",
        content: `
          <p>Our products are delivered and assembled for free in the Netherlands and Belgium (except for Wadden Island and Wallonia).</p>
          <p class="fs-small">*With the exception of wall shelves, second-chance items, and non-furniture products.</p>
        `,
        iconName: "icon-truck-thick",
      });

      const box3 = createInfoBox({
        title: "How can we assist?",
        content:
          "<p>If you have any further questions, please contact us at +31(0)20 - 233 38 20.</p>",
        iconName: "icon-phone-thick",
      });

      gridInfoBox.append(box1, box2, box3);
      fragment.appendChild(gridInfoBox);

      // Append NewsletterBlock as the last section
      fragment.appendChild(htmlToNode(NewsletterBlock()));

      return fragment;
    },
  });
};

export const NotEmpty = () => {
  return createPageTemplate({
    headerProps: {
      logoProps: { variant: "transparent", href: "/" },
      cartCount: 3,
      align: "center",
      inBetween: true,
    },
    mainContent: () => {
      const fragment = document.createDocumentFragment();

      const sectionHeader = createSectionHeader({
        title: "Shopping cart",
        alignLeft: true,
        level: 1,
        buttonUrl: "?path=/story/pages-homepage--home-page",
        buttonText: "Continue Shopping",
        buttonVariant: "ghost",
        buttonIcon: ChevronLeft,
      });
      fragment.appendChild(sectionHeader);

      fragment.appendChild(createCartContent(mockShopifyCart));

      const gridInfoBox = document.createElement("section");
      gridInfoBox.className = "grid-info-box henk-section";

      const box1 = createInfoBox({
        title: "Delivery by appointment",
        content:
          "<p>Our carrier will get in touch with you once your order is ready for delivery. You can then choose the desired delivery moment yourself.</p>",
        iconName: "icon-calendar",
      });

      const box2 = createInfoBox({
        title: "Free delivery and assembly",
        content: `
          <p>Our products are delivered and assembled for free in the Netherlands and Belgium (except for Wadden Island and Wallonia).</p>
          <p class="fs-small">*With the exception of wall shelves, second-chance items, and non-furniture products.</p>
        `,
        iconName: "icon-truck-thick",
      });

      const box3 = createInfoBox({
        title: "How can we assist?",
        content:
          "<p>If you have any further questions, please contact us at +31(0)20 - 233 38 20.</p>",
        iconName: "icon-phone-thick",
      });

      gridInfoBox.append(box1, box2, box3);
      fragment.appendChild(gridInfoBox);

      // Append NewsletterBlock as the last section
      fragment.appendChild(htmlToNode(NewsletterBlock()));

      return fragment;
    },
  });
};

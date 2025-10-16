import { createPageTemplate } from "@stories/templates/PageTemplate";
import { createSectionHeader } from "./SectionHeader";
import { createInfoBox } from "./InfoBox";
import { createCartContent } from "./createCartContent";
import { mockShopifyCart } from "@utils/mockShopifyCart";
import ChevronLeft from "@assets/icons/icon-chevron-left.svg?raw";

// Import the stepper component (you don’t need to use <script> tags in Storybook)
import "@stories/components/henk-quantity-stepper.js";

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

      // --- Stepper logic (like Shopify)
      customElements.whenDefined("henk-quantity-stepper").then(() => {
        // Remove fallback non-JS inputs
        fragment.querySelectorAll("[data-js-replace]").forEach((input) => {
          input.remove();
        });

        // Add quantity change handler
        const steppers = fragment.querySelectorAll("henk-quantity-stepper");
        steppers.forEach((stepper) => {
          let debounceTimer;
          stepper.addEventListener("quantity-change", () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              const form = stepper.closest("form");
              if (form) {
                form.submit();
              }
            }, 400);
          });
        });
      });

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
        buttonUrl: "./collections",
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
      return fragment;
    },
  });
};

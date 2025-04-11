/** @type { import('@storybook/html').Preview } */

// import "../src/styles/css/henk-styles.min.css";
import "@styles/henk-styles.min.css";

// import "../src/styles/_font-face.css";
// import "../src/styles/tokens/_tokens-font.css";
// import "../src/styles/css/tokens/_tokens-colors.css";
// import "../src/styles/tokens/_tokens-size-font.css";
// import "../src/styles/tokens/_tokens-size-spacing.css";
//
// import "../src/styles/css/base/_base.css";
// import "../src/styles/base/_base-typography-headings.css";
// import "../src/styles/base/_base-typography-fontsizes.css";
// import "../src/styles/base/_base-typography-fontweight.css";
//
// import "../src/styles/css/components/base/_button.css";
//
// import "../stories/components/base/henk-icon.css";
// import "../stories/components/star-rating.css";
// import "../src/styles/css/sections/_henk-footer.css";
//
// import "../stories/components/base/forms/_form-messages.css";
//
// import "../src/styles/components/_BaseModal.css";
// import "../src/styles/css/components/_info-box.css";
//
// import "../src/styles/components/bricks/faq-brick/_faq-brick.css";
// import "../src/styles/components/bricks/doubleimage-brick/_doubleimage-brick.css";
// import "../src/styles/components/bricks/hero-video-brick/_hero-video-brick.css";
// import "../src/styles/components/bricks/hero-brick/_hero-brick.css";
// import "../src/styles/components/bricks/BlockQuoteBrick/BlockQuoteBrick.css";
// import "../src/styles/components/bricks/_StoreBrick.css";
// import "../src/styles/components/bricks/shop-product-row/shop-product-row-brick.css";
//
// import "../src/styles/components/molecules/molecule-l-button-group/_molecule-l-button-group.css";
// import "../src/styles/components/molecules/sh-molecule-bg-box/_sh-molecule-bg-box.css";
// import "../src/styles/components/molecules/sh-molecule-padding-box/_sh-molecule-padding-box.css";
//
// import "../src/styles/components/organisms/org-breadcrumbs/_org-breadcrumbs.css";
// import "../src/styles/components/organisms/org-details/_org-details.css";
// import "../src/styles/components/organisms/org-top-message-bar/_org-top-message-bar.css";
// import "../src/styles/components/organisms/org-cl-table/_org-cl-table.css";
// import "../src/styles/components/organisms/org-datepicker/_org-datepicker.css";
// import "../src/styles/components/organisms/org-virtualtour/_org-virtualtour.css";
// import "../src/styles/components/organisms/org-cookie-bar/_org-cookie-bar.css";
// import "../src/styles/components/organisms/org-tooltip/_org-tooltip.css";
// import "../src/styles/components/organisms/org-nav-list-links/_org-nav-list-links.css";
// import "../src/styles/components/organisms/org-newsletter-form/_org-newsletter-form.css";
// import "../src/styles/components/organisms/org-social-share/_org-social-share.css";
// import "../src/styles/components/organisms/org-button-counter/_org-button-counter.css";
// import "../src/styles/components/organisms/org-addtocart-console/_org-addtocart-console.css";
// import "../src/styles/components/organisms/org-segmented-control/_org-segmented-control.css";
// import "../src/styles/components/organisms/org-samples-app/_org-samples-app.css";
// import "../src/styles/components/organisms/org-alert/_sh-org-alert.css";
// import "../src/styles/components/organisms/org-loader/_org-loader.css";
// import "../src/styles/components/organisms/org-steps-block/_org-steps-block.css";
// import "../src/styles/components/organisms/org-reviews/_org-reviews.css";
// import "../src/styles/components/organisms/org-blog-teaser/_org-blog-teaser.css";
// import "../src/styles/components/organisms/org-grid-lister/_org-grid-lister.css";
// import "../src/styles/components/organisms/org-checkout-summary-scroll/_org-checkout-summary-scroll.css";
// import "../src/styles/components/organisms/org-block/_org-block.css";
// import "../src/styles/components/organisms/org-usp/_org-usp.css";
// import "../src/styles/components/organisms/org-stories/_org-stories.css";
// import "../src/styles/components/organisms/sh-big-fat-error-box/_sh-big-fat-error-box.css";
// import "../src/styles/components/organisms/sh-l-flex-container/_sh-l-flex-container.css";
// import "../src/styles/components/organisms/sh-media-block/_sh-media-block.css";
// import "../src/styles/components/organisms/org-k-block/_org-k-block.css";
// import "../src/styles/components/organisms/org-base-slider/_org-base-slider.css";
// import "../src/styles/components/organisms/org-base-slider/_org-slider-variant-A.css";
// import "../src/styles/components/organisms/org-base-slider/_org-slider-variant-B.css";
// import "../src/styles/components/organisms/org-modal/_org-modal.css";
// import "../src/styles/components/organisms/org-sheet/_org-sheet.css";
// import "../src/styles/components/organisms/org-page-header/_org-page-header.css";
// import "../src/styles/components/organisms/org-cart-list/_cart-list.css";
// import "../src/styles/components/organisms/org-info-section/_info-section.css";
// import "../src/styles/components/organisms/org-action-console/_action-console.css";
// import "../src/styles/components/organisms/org-media/_org-media.css";
// import "../src/styles/components/organisms/org-product-details/_org-product-details.css";
// import "../src/styles/components/organisms/org-cost-section/_org-cost-section.css";
// import "../src/styles/components/organisms/org-form/_org-form.css";
// import "../src/styles/components/organisms/organism-grid-section-infobox/organism-grid-section-infobox.css";
// import "../src/styles/components/organisms/organism-cart-page-layout-container/organism-cart-page-layout-container.css";
// import "../src/styles/components/organisms/org-side-modal/org-side-modal.css";
// import "../src/styles/components/organisms/_organism-form.css";
//
// import "../src/styles/components/web-components/wc-stepper-quantity/wc-stepper-quantity.css";
//
// import "../src/styles/components/third-party/_swiper-element.css";

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "Colour",
          "Tokens",
          [
            "Colours",
            ["Primitives", "Semantic"],
            "Type",
            ["Size", "Line-height"],
          ],
          "Typography",
          "Components",
          ["Base", ["HeadingGroup", "ContentDivider", "*"], "Web Components"],
          "Sections",
          "Pages",
          "*",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: false,
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
  },
};

export default preview;

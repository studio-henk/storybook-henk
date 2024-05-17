/** @type { import('@storybook/html').Preview } */

// current henk styles
import '../src/styles/_normalize.css';
import "../src/styles/_font-face.css";
import "../src/styles/_config.css";
import "../src/styles/base/_base.css";
import "../src/styles/base/_base-typography-headings.css";

import '../src/styles/tokens/_tokens-colors.css';
import '../src/styles/tokens/_tokens-size-font.css';
import '../src/styles/tokens/_tokens-size-spacing.css';
import "../src/styles/_backgrounds.css";

// preview.js

import '../src/styles/utils/modifiers.css';
import '../src/styles/utils/helpers.css';
import '../src/styles/utils/data-attrs.css'; 
import '../src/styles/utils/sections.css';

import '../src/styles/layout/grid.css';
import '../src/styles/layout/sh-l-grid.css';
import '../src/styles/layout/sh-l-page-main.css';

import '../src/styles/base/_icons.css';

import '../src/styles/basics/_selector.css';
import '../src/styles/basics/_toggle.css';

import '../src/styles/components/_product-card.css';
import '../src/styles/components/_product-slider.css';
import '../src/styles/components/_breadcrumbs.css';
import '../src/styles/components/_related-products.css';
import '../src/styles/components/_seo.css';
import '../src/styles/components/_choose-card.css';
import '../src/styles/components/radio-menu.css';
import '../src/styles/components/product-order.css';
import '../src/styles/components/product-specificaties.css';
import '../src/styles/components/post.css';
import '../src/styles/components/quote.css';
import '../src/styles/components/people.css';
import '../src/styles/components/quick-cart.css';
import '../src/styles/components/detail-image.css';
import '../src/styles/components/datepicker.css';
import '../src/styles/components/_mdl-shop-product.css';
import '../src/styles/components/_BaseModal.css';
import '../src/styles/components/_info-box.css';

import '../src/styles/components/atoms/atom-button/atom-button-new.css';
import '../src/styles/components/atoms/atom-dl/atom-dl.css';
import '../src/styles/components/atoms/atom-sup/atom-sup.css';
import '../src/styles/components/atoms/atom-icon/sh-atom-icon.css';
import '../src/styles/components/atoms/atom-tag/atom-tag.css';
import '../src/styles/components/atoms/atom-blockquote/atom-blockquote.css';
import '../src/styles/components/atoms/atom-figure/atom-figure.css';
import '../src/styles/components/atoms/atom-picture/atom-picture.css';
import '../src/styles/components/atoms/atom-overlay/atom-overlay.css';
import '../src/styles/components/atoms/_atom-input.css';
import '../src/styles/components/atoms/_atom-label.css';
import '../src/styles/components/atoms/_atom-select.css';
import '../src/styles/components/atoms/atom-checkbox/atom-checkbox.css';
import '../src/styles/components/atoms/atom-radio/atom-radio.css';
import '../src/styles/components/atoms/atom-textarea/atom-textarea.css';
import '../src/styles/components/atoms/_atom-badge.css';
import '../src/styles/components/atoms/_atom-logo.css';

import '../src/styles/components/bricks/faq-brick/_faq-brick.css';
import '../src/styles/components/bricks/doubleimage-brick/_doubleimage-brick.css';
import '../src/styles/components/bricks/hero-video-brick/_hero-video-brick.css';
import '../src/styles/components/bricks/hero-brick/_hero-brick.css';
import '../src/styles/components/bricks/SectionHeader/_SectionHeader.css';
import '../src/styles/components/bricks/BlockQuoteBrick/BlockQuoteBrick.css';
import '../src/styles/components/bricks/_StoreBrick.css';
import '../src/styles/components/bricks/shop-product-row/shop-product-row-brick.css';

import '../src/styles/components/molecules/molecule-l-button-group/_molecule-l-button-group.css';
import '../src/styles/components/molecules/sh-molecule-bg-box/_sh-molecule-bg-box.css';
import '../src/styles/components/molecules/sh-molecule-padding-box/_sh-molecule-padding-box.css';
import '../src/styles/components/molecules/molecule-heading-badge/molecule-heading-badge.css';
import '../src/styles/components/molecules/_molecule-input-label.css';
import '../src/styles/components/molecules/_molecule-label-checkbox.css';
import '../src/styles/components/molecules/_molecule-label-radio.css';
import '../src/styles/components/molecules/_molecule-label-select.css';

import '../src/styles/components/organisms/org-breadcrumbs/_org-breadcrumbs.css';
import '../src/styles/components/organisms/org-details/_org-details.css';
import '../src/styles/components/organisms/org-top-message-bar/_org-top-message-bar.css';
import '../src/styles/components/organisms/org-cl-table/_org-cl-table.css';
import '../src/styles/components/organisms/org-datepicker/_org-datepicker.css';
import '../src/styles/components/organisms/org-virtualtour/_org-virtualtour.css';
import '../src/styles/components/organisms/org-cookie-bar/_org-cookie-bar.css';
import '../src/styles/components/organisms/org-g-rating-avg/_org-g-rating-avg.css';
import '../src/styles/components/organisms/org-tooltip/_org-tooltip.css';
import '../src/styles/components/organisms/org-nav-list-links/_org-nav-list-links.css';
import '../src/styles/components/organisms/org-newsletter-form/_org-newsletter-form.css';
import '../src/styles/components/organisms/org-social-share/_org-social-share.css';
import '../src/styles/components/organisms/org-footer/_org-footer.css';
import '../src/styles/components/organisms/org-button-counter/_org-button-counter.css';
import '../src/styles/components/organisms/org-addtocart-console/_org-addtocart-console.css';
import '../src/styles/components/organisms/org-segmented-control/_org-segmented-control.css';
import '../src/styles/components/organisms/org-samples-app/_org-samples-app.css';
import '../src/styles/components/organisms/org-alert/_sh-org-alert.css';
import '../src/styles/components/organisms/org-loader/_org-loader.css';
import '../src/styles/components/organisms/org-steps-block/_org-steps-block.css';
import '../src/styles/components/organisms/org-reviews/_org-reviews.css';
import '../src/styles/components/organisms/org-blog-teaser/_org-blog-teaser.css';
import '../src/styles/components/organisms/org-grid-lister/_org-grid-lister.css';
import '../src/styles/components/organisms/org-checkout-summary-scroll/_org-checkout-summary-scroll.css';
import '../src/styles/components/organisms/org-block/_org-block.css';
import '../src/styles/components/organisms/org-usp/_org-usp.css';
import '../src/styles/components/organisms/org-stories/_org-stories.css';
import '../src/styles/components/organisms/sh-big-fat-error-box/_sh-big-fat-error-box.css';
import '../src/styles/components/organisms/sh-l-flex-container/_sh-l-flex-container.css';
import '../src/styles/components/organisms/sh-media-block/_sh-media-block.css';
import '../src/styles/components/organisms/org-k-block/_org-k-block.css';
import '../src/styles/components/organisms/org-base-slider/_org-base-slider.css';
import '../src/styles/components/organisms/org-base-slider/_org-slider-variant-A.css';
import '../src/styles/components/organisms/org-base-slider/_org-slider-variant-B.css';
import '../src/styles/components/organisms/org-modal/_org-modal.css';
import '../src/styles/components/organisms/org-sheet/_org-sheet.css';
import '../src/styles/components/organisms/org-page-header/_org-page-header.css';
import '../src/styles/components/organisms/org-cart-list/_cart-list.css';
import '../src/styles/components/organisms/org-info-section/_info-section.css';
import '../src/styles/components/organisms/org-action-console/_action-console.css';
import '../src/styles/components/organisms/org-media/_org-media.css';
import '../src/styles/components/organisms/org-product-details/_org-product-details.css';
import '../src/styles/components/organisms/org-cost-section/_org-cost-section.css';
import '../src/styles/components/organisms/org-form/_org-form.css';
import '../src/styles/components/organisms/organism-grid-section-infobox/organism-grid-section-infobox.css';
import '../src/styles/components/organisms/organism-cart-page-layout-container/organism-cart-page-layout-container.css';
import '../src/styles/components/organisms/org-side-modal/org-side-modal.css';
import '../src/styles/components/organisms/_organism-form.css';

import '../src/styles/components/web-components/wc-stepper-quantity/wc-stepper-quantity.css';

import '../src/styles/components/third-party/_swiper-element.css';

import '../src/styles/patterns/_inputs.css';
import '../src/styles/patterns/_collapser.css';
import '../src/styles/patterns/_lists.css';
import '../src/styles/patterns/_modal.css';
import '../src/styles/patterns/_form.css';
import '../src/styles/patterns/_popover.css';
import '../src/styles/patterns/_tables.css';
import '../src/styles/patterns/_sticky.css';

import '../src/styles/modules/_filter.css';
import '../src/styles/modules/_stores-map.css';
import '../src/styles/modules/_fabric.css';
import '../src/styles/modules/content-blocks.css';

import '../src/styles/external/_googlemaps.css';
import '../src/styles/external/_setmore.css';

import '../src/styles/animation/_fadeIns.css';
import '../src/styles/animation/_interactions.css';

import '../src/styles/pages/_product-detail.css';
import '../src/styles/pages/_configurator.css';
import '../src/styles/pages/_projects.css';
import '../src/styles/pages/_prices.css';
import '../src/styles/pages/_contact.css';
import '../src/styles/pages/_faq.css';
import '../src/styles/pages/_shopping-cart.css';
import '../src/styles/pages/_checkout.css';
import '../src/styles/pages/_over-ons.css';
import '../src/styles/pages/_payment.css';
import '../src/styles/pages/_conditions.css';
import '../src/styles/pages/_maintenance.css';
import '../src/styles/pages/_closet.css';
import '../src/styles/pages/_search.css';
import '../src/styles/pages/_campaign.css';
import '../src/styles/pages/_rozengracht.css';
import '../src/styles/pages/_press.css';
import '../src/styles/pages/_cart.css';
import '../src/styles/pages/_listerpage.css';
import '../src/styles/pages/_instockapp.css';
import '../src/styles/pages/_stores.css';
import '../src/styles/pages/_collection.css';
import '../src/styles/pages/_configurator-extension.css';


const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Colors', 'Typography', 'Components', ['Base', 'Bars'], '*'],
      },
    },
    controls: {         
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },    
  },  
};

export default preview;

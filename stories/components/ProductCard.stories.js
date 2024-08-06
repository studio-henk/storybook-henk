// src/stories/ProductCard.stories.js
// import './ProductCard.css';  

export default {
  title: 'Components/ProductCard',
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => `
  <div class="mdl-shop-product" data-variant="ar-portrait" data-hover="dissolve">
    <a class="mdl-shop-product__link">
      <div class="mdl-shop-product__image-mask">
        <img class="mdl-shop-product__image" src="https://assets.studio-henk.nl/assets/Images/instock-page/products/studio-henk-butterfly-black.png" width="1417" height="1417" alt="Product Image">
      </div>
      <div class="mdl-shop-product__image-mask">
        <img class="mdl-shop-product__image-hover" src="https://assets.studio-henk.nl/assets/Images/instock-page/butterfly-dining-table-studio-henk1.jpg" alt="Hover Image">
      </div>
      <div class="mdl-shop-product__content">
        <p class="mdl-shop-product__title">Butterfly Dining Table</p>
        <p class="mdl-shop-product__desc">FSC certified Oak with a Black Steel Frame Finish</p>
        <p class="mdl-shop-product__price">€2439</p>
      </div>
      <div class="sh-molecule-l-button-group">
        <span class="sh-atom-tag" style="color: var(--color-alias-highlight-default);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-truck-fast">
            <!-- SVG Path -->
          </svg> fast delivery
        </span>
        <span class="sh-atom-button" data-shape="circle" data-style="soft" data-size="small">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG Path -->
          </svg>
        </span>
      </div>
    </a>
  </div>
`;

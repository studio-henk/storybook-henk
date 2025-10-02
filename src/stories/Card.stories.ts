import type { Meta, StoryObj } from "@storybook/html";

const scriptId2 = "product-card2-script";

if (!document.getElementById(scriptId2)) {
  const script = document.createElement("script");
  script.src = "/assets/product-card2.mjs"; // path to the compiled file
  script.type = "module";
  script.id = scriptId2;
  document.head.appendChild(script);
}

// Dynamically add the script only once
const scriptId = "product-card-wc-loader";
if (!document.getElementById(scriptId)) {
  const script = document.createElement("script");
  script.src = "/assets/product-card.v.1.0.2.js";
  script.id = scriptId;
  document.head.appendChild(script);
}

export default {
  title: "Components/Composites/Cards/Web Component Card",
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta;
// --- Minimal base card as the default ---
// export const Default = () => `
// <div class="henk-card">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Card title</h3>
//     <p class="henk-card__description">A short summary / description.</p>
//     <a href="..." class="henk-button henk-card__button">Optional button</a>
//   </div>
// </div>
// `;

// --- Grid of minimal base cards ---
// export const InGrid = () => `
// <div class="henk-lister-grid">
//
// <div class="henk-card">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-showroom-amsterdam-rozengracht6-2.avif?v=1752841549" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Card title</h3>
//     <p class="henk-card__description">A short summary / description.</p>
//     <a href="..." class="henk-button henk-card__button">Optional button</a>
//   </div>
// </div>
//
// <div class="henk-card">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Card title</h3>
//     <p class="henk-card__description">A short summary / description.</p>
//     <a href="..." class="henk-button henk-card__button">Optional button</a>
//   </div>
// </div>
// </div>
// `;
// export const Default = () => `
//   <product-card
//     product-id="12345"
//     product-name="Otto S"
//     product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
//     product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
//     product-prices="['€379', '€379', '€379', '€659']"
//     product-links="['link1', 'link2', 'link3', 'link4']"
//     product-tags="['Snelle levering']"
//     product-usps="[]"
//     product-options="['opt1', 'opt2']"
//     product-swatch-size="small"
//     fabric-label="Stoffering"
//     fabric-label-suffix="Meer +"
//     fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
//     fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
//   ></product-card>
// `;

export const WCInGrid = () => `
  <div class="henk-lister-grid">
  <product-card
    product-id="12345"
    product-name="Otto S"
    product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
    product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
    product-prices="['€379', '€379', '€379', '€659']"
    product-links="['link1', 'link2', 'link3', 'link4']"
    product-tags="['Snelle levering']"
    product-usps="[]"
    product-options="['opt1', 'opt2']"
    product-swatch-size="small"
    fabric-label="Stoffering"
    fabric-label-suffix="Meer +"
    fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
    fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
  ></product-card>
  <product-card
    product-id="12345"
    product-name="Otto S"
    product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
    product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
    product-prices="['€379', '€379', '€379', '€659']"
    product-links="['link1', 'link2', 'link3', 'link4']"
    product-tags="['Snelle levering']"
    product-usps="[]"
    product-options="['opt1', 'opt2']"
    product-swatch-size="small"
    fabric-label="Stoffering"
    fabric-label-suffix="Meer +"
    fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
    fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
  ></product-card>

  <product-card
    product-id="12345"
    product-name="Otto S"
    product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
    product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
    product-prices="['€379', '€379', '€379', '€659']"
    product-links="['link1', 'link2', 'link3', 'link4']"
    product-tags="['Snelle levering']"
    product-usps="[]"
    product-options="['opt1', 'opt2']"
    product-swatch-size="small"
    fabric-label="Stoffering"
    fabric-label-suffix="Meer +"
    fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
    fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
  ></product-card>
  <product-card
    product-id="12345"
    product-name="Otto S"
    product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
    product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
    product-prices="['€379', '€379', '€379', '€659']"
    product-links="['link1', 'link2', 'link3', 'link4']"
    product-tags="['Snelle levering']"
    product-usps="[]"
    product-options="['opt1', 'opt2']"
    product-swatch-size="small"
    fabric-label="Stoffering"
    fabric-label-suffix="Meer +"
    fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
    fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
  ></product-card>
  <product-card
    product-id="12345"
    product-name="Otto S"
    product-description="Otto is een eenvoudige, multifunctionele poef. De poef heeft een eikenhouten onderstel - een referentie aan de Giuseppe."
    product-images="['https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-plumb168', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-orion-saffron183', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-cyber-ocre23', 'https://www.studio-henk.nl/emarsya-image/poufs/slider-image/OT-OTTOS-3041-twillweave-750']"
    product-prices="['€379', '€379', '€379', '€659']"
    product-links="['link1', 'link2', 'link3', 'link4']"
    product-tags="['Snelle levering']"
    product-usps="[]"
    product-options="['opt1', 'opt2']"
    product-swatch-size="small"
    fabric-label="Stoffering"
    fabric-label-suffix="Meer +"
    fabric-images="['https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-PLUMB168.jpg', 'https://assets.studio-henk.nl/assets/_default_upload_bucket/Orion-saffron183_1.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/CYBER-OCRE23.jpg', 'https://assets.studio-henk.nl/assets/Images/fabrics/small/twillweave-750.jpg']"
    fabric-names="['plumb168', 'orion saffron183', 'ocre23', 'twillweave 750']"
  ></product-card>
</div>
`;

// export const Variant2 = () => `
//
//   <div class="henk-lister-grid --variant-macs">
// <div class="henk-card --variant-2">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Blanket sofa</h3>
//     <p class="henk-card__description">from €3978.00</p>
//     <!-- <a href="..." class="henk-button henk-card__button">Optional button</a>-->
//   </div>
// </div>
//
// <div class="henk-card --variant-2">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Blanket sofa</h3>
//     <p class="henk-card__description">from €3978.00</p>
//     <!--<a href="..." class="henk-button henk-card__button">Optional button</a>-->
//   </div>
// </div>
//
// <div class="henk-card --variant-2">
//   <a href="/en/collections/bar-stools/products/base-bar-stool" class="henk-card__image-link">
//     <figure class="henk-card__image-container">
//       <img class="henk-card__img" src="https://www.studio-henk.nl/Images/emersya/stool-without-background/678010/image-thumb__678010__ListerSquareAvif/BS-BSS770-3062.avif" alt="Base bar stool">
//     </figure>
//   </a>
//   <div class="henk-card__content">
//     <h3 class="henk-card__title">Blanket sofa</h3>
//     <p class="henk-card__description">from €3978.00</p>
//     <!--<a href="..." class="henk-button henk-card__button">Optional button</a>-->
//   </div>
// </div>
// </div>
// `;

export const NewWC = () => `
<product-card2 product-id="123" product-name="Foo" product-description="Desc"></product-card2>
`;

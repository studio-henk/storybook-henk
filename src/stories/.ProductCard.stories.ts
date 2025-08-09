import type { Meta, StoryObj } from '@storybook/html';

const scriptId2 = 'product-card2-script';

if (!document.getElementById(scriptId2)) {
    const script = document.createElement('script');
    script.src = '/assets/product-card2.mjs';  // path to the compiled file
    script.type = 'module';
    script.id = scriptId2;
    document.head.appendChild(script);
}


// Dynamically add the script only once
const scriptId = 'product-card-wc-loader';
if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.src = '/assets/product-card.v.1.0.2.js';
    script.id = scriptId;
    document.head.appendChild(script);
}

export default {
    title: 'Components/ProductCard',
    parameters: {
        // layout: 'centered',
    },
} satisfies Meta;

export const Default = () => `
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
`;

export const InGrid = () => `
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

export const New = () => `
<product-card2 product-id="123" product-name="Foo" product-description="Desc"></product-card2>
`;

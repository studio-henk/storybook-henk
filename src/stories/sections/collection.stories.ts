import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

import collectionRaw from "@src/sections/collection.liquid?raw";
import collectionItemRaw from "@src/snippets/henk-collection-item.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;

const STYLESHEET_RE =
  /\{%\s*stylesheet\s*%\}[\s\S]*?\{%\s*endstylesheet\s*%\}/i;

const cleanedSection = collectionRaw
  // Remove options/filter/sort bar.
  .replace(
    /\{%-?\s*comment\s*-?%\}\s*NOTE:\s*only show options bar when more than 1 card[\s\S]*?(?=\{%-?\s*assign\s+products_per_page)/i,
    "",
  )
  // Remove schema-collection.
  .replace(/\{%-?\s*render\s+'schema-collection'[\s\S]*?%\}\s*/i, "")
  // Remove pagination render.
  .replace(/\{%-?\s*render\s+'henk-pagination'[\s\S]*?%\}\s*/i, "")
  // Remove paginate wrapper.
  .replace(
    /\{%-?\s*paginate\s+collection\.products\s+by\s+products_per_page\s*-?%\}\s*/i,
    "",
  )
  .replace(/\{%-?\s*endpaginate\s*-?%\}/i, "")
  // Remove section schema.
  .replace(SCHEMA_RE, "")
  // Remove section stylesheet.
  .replace(STYLESHEET_RE, "");
// .replace(/(\{%-?\s*endcapture\s*-?%\})/i, "$1\n{{ price_output }}");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-collection-item", collectionItemRaw);
} else if ((engine as any).__partials) {
  (engine as any).__partials["henk-collection-item"] = collectionItemRaw;
}

if (!(engine as any).__collectionFiltersRegistered) {
  engine.registerFilter("money_without_trailing_zeros", (value) => {
    if (value == null || value === "") return "";

    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value) / 100);
  });

  (engine as any).__collectionFiltersRegistered = true;
}

const products = [
  {
    url: "#",
    title: "Ode fauteuil",
    price: 83900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/ODELOUNGEZA_d77809e8-03eb-47d8-b477-a72826ba9ccf.jpg?v=1782736597&width=1260",
  },
  {
    url: "#",
    title: "Luna fauteuil",
    price: 109900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/LN5.jpg?v=1782737837&width=1260",
  },
  {
    url: "#",
    title: "Co fauteuil",
    price: 90900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/studio_Henk_September_Campaign_2021_Elias-89.avif?v=1781854714&width=1260",
  },
  {
    url: "#",
    title: "Lean fauteuil",
    price: 100900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/LL4_ee439018-a17b-44c8-a042-ffdb4cdfa538.jpg?v=1782737407&width=1260",
  },
  {
    url: "#",
    title: "Oblique fauteuil",
    price: 90900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/studio_Henk_September_Campaign_2021_Elias-81.avif?v=1781854768&width=1260",
  },
  {
    url: "#",
    title: "Ode fauteuil met armleuningen",
    price: 90900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/ODEMETARM.jpg?v=1782736756&width=1260",
  },
  {
    url: "#",
    title: "Cave fauteuil",
    price: 167900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/Studio_HENK_June_Campaign-574.avif?v=1781854829&width=1260",
  },
  {
    url: "#",
    title: "Modulo fauteuil",
    price: 211900,
    price_varies: true,
    featured_image:
      "https://www.studio-henk.nl/cdn/shop/files/StudioHENK_Modulo15_01.avif?v=1781855165&width=1260",
  },
];

const meta: Meta = {
  title: "Sections/Collection",

  render: (args) =>
    engine.parseAndRenderSync(cleanedSection, {
      collection: {
        all_types: "",
        all_products_count: args.products.length,
        filters: [],
        active_filters_count: 0,
        url: "#",
        products: args.products,
      },
    }),

  tags: ["autodocs", "version:1.0.0"],

  parameters: {
    customCode: collectionRaw,
    docs: {
      description: {
        component:
          "Collection product listing rendered from the Shopify collection section with mocked collection data.",
      },
    },
  },

  argTypes: {
    products: {
      control: "object",
      description: "Mock collection products.",
    },
  },

  args: {
    products,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

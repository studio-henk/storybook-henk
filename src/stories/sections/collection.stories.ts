import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

import collectionRaw from "@src/sections/collection.liquid?raw";
import collectionItemRaw from "@src/snippets/henk-collection-item.liquid?raw";

import collectionPromoRaw from "@src/snippets/henk-collection-promo.liquid?raw";

// import paginationRaw from "@src/snippets/henk-pagination.liquid?raw";

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
  // Remove paginate wrapper.
  .replace(
    /\{%-?\s*paginate\s+collection\.products\s+by\s+products_per_page\s*-?%\}\s*/i,
    "",
  )
  .replace(/\{%-?\s*endpaginate\s*-?%\}/i, "")
  // Remove pagination render; we'll add a static preview separately.
  .replace(/\{%-?\s*render\s+['"]henk-pagination['"][\s\S]*?%\}/i, "")
  // Remove paginate wrapper.
  .replace(/\{%-?\s*paginate\b[\s\S]*?%\}\s*/i, "")
  .replace(/\{%-?\s*endpaginate\s*-?%\}/i, "")
  // Remove section schema.
  .replace(SCHEMA_RE, "")
  // Remove section stylesheet.
  .replace(STYLESHEET_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-collection-item", collectionItemRaw);
  (engine as any).registerPartial("henk-collection-promo", collectionPromoRaw);
} else if ((engine as any).__partials) {
  (engine as any).__partials["henk-collection-item"] = collectionItemRaw;
  (engine as any).__partials["henk-collection-promo"] = collectionPromoRaw;
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

// const mockPaginate = {
//   current_page: "1",
//   current_offset: 0,
//   page_size: 3,
//   items: 8,
//   pages: 3,
//   parts: [
//     { title: "1", is_link: false, url: "?page=1" },
//     { title: "2", is_link: true, url: "?page=2" },
//     { title: "3", is_link: true, url: "?page=3" },
//   ],
//   previous: null,
//   next: { url: "?page=2", title: "Next" },
// };

const staticPagination = `
  <div class="henk-pagination henk-section">
    <nav class="pagination" role="navigation" aria-label="Paginering">
      <div class="henk-button-group henk-button-group--center">
        <ol class="henk-pagination__pages">
          <li><span class="henk-pagination__item henk-pagination__number henk-button is-current" aria-current="page">1</span></li>
          <li><span class="henk-pagination__item henk-pagination__number henk-button">2</span></li>
        </ol>
        <span class="henk-pagination__item pagination__item--next henk-button">Volgende</span>
      </div>
    </nav>
  </div>
`;

const meta: Meta = {
  title: "Sections/Collection",

  // render: (args) => {
  //   const html = engine.parseAndRenderSync(cleanedSection, {
  //     collection: {
  //       all_types: "",
  //       products_count: args.products.length,
  //       all_products_count: args.products.length,
  //       filters: [],
  //       active_filters_count: 0,
  //       url: "#",
  //       products: args.products,
  //     },
  //   });
  //
  //   return html + staticPagination;
  // },
  render: (args) =>
    engine.parseAndRenderSync(cleanedSection, {
      collection: {
        all_types: "",
        products_count: args.products.length,
        all_products_count: args.products.length,
        filters: [],
        active_filters_count: 0,
        url: "#",
        products: args.products,
      },
    }) + staticPagination,

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

const promos = [
  {
    color: {
      value: "off-white",
    },
    title: "Discover our collection",
    description: {
      value: "Explore our latest furniture and find your perfect piece.",
    },
    link: {
      value: {
        url: "#",
      },
    },
    image: {
      src: "https://placehold.co/1200x1200?text=Collection+Promo",
      alt: "Collection promo",
    },
  },
  {
    color: {
      value: "blue",
    },
    title: "Made for living",
    description: {
      value: "Thoughtfully designed furniture for everyday living.",
    },
    link: {
      value: {
        url: "#",
      },
    },
    image: {
      src: "https://placehold.co/1200x1200?text=Second+Promo",
      alt: "Second collection promo",
    },
  },
];

export const WithPromos: Story = {
  args: {
    products,
  },

  render: (args) =>
    engine.parseAndRenderSync(cleanedSection, {
      collection: {
        all_types: "",
        products_count: args.products.length,
        all_products_count: args.products.length,
        filters: [],
        active_filters_count: 0,
        url: "#",
        products: args.products,
        metafields: {
          custom: {
            collection_promos: {
              value: promos,
            },
          },
        },
      },
    }) + staticPagination,
};

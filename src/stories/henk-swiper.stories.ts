import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-swiper.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-swiper.liquid?raw";
import iconSnippet from "@src/snippets/henk-icon.liquid?raw";

import imageRaw from "@src/snippets/image.liquid?raw";

const DOC_RE = /\{%\s*doc\s*%\}[\s\S]*?\{%\s*enddoc\s*%\}/i;
const imageSnippet = imageRaw.replace(DOC_RE, "");

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-swiper", snippetRaw);
  (engine as any).registerPartial("henk-icon", iconSnippet);
  (engine as any).registerPartial("image", imageSnippet);
} else if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-swiper"] = snippetRaw;
  (engine as any).__partials["henk-icon"] = iconSnippet;
  (engine as any).__partials["image"] = imageSnippet;
}

const meta: Meta = {
  title: "Sections/Swiper",

  render: (args) => {
    return engine.parseAndRenderSync(cleanedSection, {
      section: {
        id: args.id,
        settings: {
          bg_color: args.bg_color,
          heading_level: args.heading_level,
          title: args.title,
          text: args.text,
        },
        blocks: args.blocks || [],
      },
    });
  },

  tags: ["autodocs", "version:1.0.0"],

  parameters: {
    customCode: sectionRaw,
    docs: {
      description: {
        component:
          "Swiper section rendered from the Shopify Liquid section and snippet.",
      },
    },
  },

  argTypes: {
    id: {
      control: "text",
      description: "Section ID used to generate unique Swiper navigation IDs.",
    },

    bg_color: {
      control: { type: "select" },
      options: [
        "default",
        "ivory",
        "off-white",
        "brown",
        "beige",
        "soft-blue",
        "blue",
        "gold",
        "green",
        "yellow",
      ],
    },

    heading_level: {
      control: { type: "select" },
      options: ["1", "2", "3"],
    },

    title: {
      control: "text",
    },

    text: {
      control: "text",
    },

    blocks: {
      control: "object",
      description: "Swiper content blocks.",
    },
  },

  args: {
    id: "swiper-story",

    bg_color: "ivory",

    heading_level: "2",

    title: "Onze collectie",

    text: "",

    blocks: [
      {
        id: "block-7",
        settings: {
          image: "/assets/slide-eettafels.avif",
          image_alt: "",
          title: "Ontdek onze eettafels",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-12",
        settings: {
          image: "/assets/slide-stoelen.avif",
          image_alt: "",
          title: "Ontdek onze stoelen",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-11",
        settings: {
          image: "/assets/slide-salontafels.avif",
          image_alt: "",
          title: "Ontdek onze salontafels",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-1",
        settings: {
          image: "/assets/slide-banken.avif",
          image_alt: "",
          title: "Ontdek onze banken",
          button_url: "#",
        },
      },
      {
        id: "block-2",
        settings: {
          image: "/assets/slide-bureaus.avif",
          image_alt: "",
          title: "Ontdek onze bureaus",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-3",
        settings: {
          image: "/assets/slide-collect-cabinet.avif",
          image_alt: "",
          title: "collect-cabinet",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-4",
        settings: {
          image: "/assets/slide-column-kast.avif",
          image_alt: "",
          title: "column-kast",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-5",
        settings: {
          image: "/assets/slide-dressoirs.avif",
          image_alt: "",
          title: "dressoirs",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-6",
        settings: {
          image: "/assets/slide-eettafelbanken.avif",
          image_alt: "",
          title: "eettafelbanken",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-8",
        settings: {
          image: "/assets/slide-fauteuils.avif",
          image_alt: "",
          title: "fauteuils",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-9",
        settings: {
          image: "/assets/slide-krukken.avif",
          image_alt: "",
          title: "krukken",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-10",
        settings: {
          image: "/assets/slide-poefs.avif",
          image_alt: "",
          title: "poefs",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-13",
        settings: {
          image: "/assets/slide-vazen.avif",
          image_alt: "",
          title: "vazen",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-14",
        settings: {
          image: "/assets/slide-verlichting.avif",
          image_alt: "",
          title: "verlichting",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-15",
        settings: {
          image: "/assets/slide-wandkasten.avif",
          image_alt: "",
          title: "wandkasten",
          text: "",
          button_url: "#",
        },
      },
      {
        id: "block-16",
        settings: {
          image: "/assets/slide-wandplanken.avif",
          image_alt: "",
          title: "wandplanken",
          text: "",
          button_url: "#",
        },
      },
    ],
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    title: "HENK visits",
    text: "<p>Binnenkijken voor inspiratie: bekijk HENK meubels in echte interieurs.</p>",
    blocks: [
      {
        id: "blog-1",
        settings: {
          image: "/assets/slide-binnenkijker-1.webp",
          image_alt: "",
          title: "Rachel Spanjersberg",
          text: "Federico Salontafel",
          button_url: "#",
        },
      },
      {
        id: "blog-2",
        settings: {
          image: "/assets/slide-binnenkijker-2.webp",
          image_alt: "",
          title: "Sophie Noyen",
          text: "Column Eettafel",
          button_url: "#",
        },
      },
      {
        id: "blog-3",
        settings: {
          image: "/assets/slide-binnenkijker-3.webp",
          image_alt: "",
          title: "Xander Albers",
          text: "Soft Bijzettafel",
          button_url: "#",
        },
      },
      {
        id: "blog-4",
        settings: {
          image: "/assets/slide-binnenkijker-4.webp",
          image_alt: "",
          title: "Julie Verheyen",
          text: "Column Eettafel",
          button_url: "#",
        },
      },
    ],
  },
};

// export const Beige: Story = {
//   args: {
//     bg_color: "beige",
//   },
// };

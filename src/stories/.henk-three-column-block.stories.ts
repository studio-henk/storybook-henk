import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-three-column-block.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}([\s\S]*?)\{%\s*endschema\s*%\}/i;
let schema: any = null;
const schemaMatch = sectionRaw.match(SCHEMA_RE);
if (schemaMatch) {
  try {
    schema = JSON.parse(schemaMatch[1]);
  } catch (e) {
    schema = null;
  }
}
const cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

const render = (args: any) => {
  const rendered = engine.parseAndRenderSync(cleanedSection, {
    section: {
      id: "henk-three-column-block",
      settings: args,
      blocks: args.blocks || [],
    },
  });
  return rendered;
};

function schemaSettingsToControls(sch: any) {
  const argTypes: Record<string, any> = {};
  const defaults: Record<string, any> = {};
  if (!sch || !Array.isArray(sch.settings)) return { argTypes, defaults };

  sch.settings.forEach((s: any) => {
    const id = s.id;
    if (!id) return;

    if (s.hasOwnProperty("default")) defaults[id] = s.default;

    switch (s.type) {
      case "select":
      case "radio":
        argTypes[id] = {
          control: "select",
          options: Array.isArray(s.options)
            ? s.options.map((o: any) => o.value)
            : undefined,
          description: s.label || s.id,
        };
        break;
      case "checkbox":
        argTypes[id] = { control: "boolean", description: s.label || s.id };
        break;
      case "url":
      case "text":
      case "textarea":
      case "richtext":
        argTypes[id] = { control: "text", description: s.label || s.id };
        break;
      case "header":
      case "paragraph":
        break;
      default:
        argTypes[id] = { control: "text", description: s.label || s.id };
    }
  });

  return { argTypes, defaults };
}

const { argTypes: schemaArgTypes, defaults: schemaDefaults } =
  schemaSettingsToControls(schema);

const defaultBlocks = [
  {
    type: "column",
    settings: {
      hide_image: false,
      image: "/assets/samplesservice2@2x.avif",
      image_alt: "",
      image_link: "",
      heading: "Ontdek onze sample service",
      text: "Ontdek onze materialen vanuit het comfort van je eigen huis. Kies voor door ons samengestelde pakketten of selecteer zelf welke stalen je wilt uitproberen.",
      button_label: "Bekijk de samples",
      button_url: "#",
      button_target_blank: false,
      button_variant: "secondary",
    },
  },
  {
    type: "column",
    settings: {
      hide_image: false,
      image: "/assets/studio-henk-interior-advice-2@2x.avif",
      image_alt: "",
      image_link: "",
      heading: "Gratis interieuradvies",
      text: "Onze interieuradviseurs staan voor je klaar als je je interieur wilt veranderen of advies nodig hebt over het personaliseren van je favoriete HENK meubelstuk.",
      button_label: "Plan je bezoek",
      button_url: "#",
      button_target_blank: false,
      button_variant: "secondary",
    },
  },
  {
    type: "column",
    settings: {
      hide_image: false,
      image: "/assets/Our Stores@2x.avif",
      image_alt: "",
      image_link: "",
      heading: "Bezoek onze winkels",
      text: "Ervaar de hele collectie ​​in een van onze eigen winkels in Amsterdam, Antwerpen en Utrecht. Of bezoek een van onze verkooppunten bij jou in de buurt.",
      button_label: "Ontdek onze winkels",
      button_url: "#",
      button_target_blank: false,
      button_variant: "secondary",
    },
  },
];

const meta: Meta = {
  title: "Sections/Three Column Block",
  render: (args) => render(args),
  tags: ["autodocs", "version:1.0.0"],
  argTypes: schemaArgTypes,
  args: { ...schemaDefaults, blocks: defaultBlocks },
  parameters: {
    customCode: sectionRaw,
    docs: {
      description: {
        component: "Three column block written in Liquid (Shopify section).",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const USP: Story = {
  args: {
    title: "",
    align_center: true,
    blocks: [
      {
        type: "column",
        settings: {
          heading: "Duurzaam ontworpen",
          text: "Wij ontwerpen meubels die generaties lang meegaan, met oog voor de hoogste kwaliteit, vakmanschap en duurzaamheid.",
        },
      },
      {
        type: "column",
        settings: {
          heading: "Volledig aanpasbaar design",
          text: "Creëer een uniek design meubel dat past bij jouw stijl, met een ruime keuze uit materialen, kleuren en afmetingen.",
        },
      },
      {
        type: "column",
        settings: {
          heading: "Op maat gemaakt in Europa",
          text: "Wij produceren op bestelling om verspilling van grondstoffen te voorkomen. Grotendeels in Nederland, altijd binnen Europa.",
        },
      },
    ],
  },
};

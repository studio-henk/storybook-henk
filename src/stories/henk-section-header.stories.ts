import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-header.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-section-header.liquid?raw";
import { withSectionWrapper } from "@decorators/withSectionWrapper";

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

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-section-header", snippetRaw);
}
if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-section-header"] = snippetRaw;
}

const render = (args: any) => {
  const rendered = engine.parseAndRenderSync(cleanedSection, {
    section: { settings: args },
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

const baseArgs = {
  section_id: "intro",
  caption: "Actie",
  level: "2",
  title: "Gratis salontafel",
  content:
    "<p>Iced coffees, blote voeten, lange zomeravonden en een slapende hond. Studio HENK heeft zin in de zomer. Om het nieuwe seizoen te vieren geven we een salontafel cadeau bij een aankoop vanaf € 1000.</p>",
  align_left: false,
  button_url: "#",
  button_text: "Lees meer",
};

const meta: Meta = {
  title: "Sections/SectionHeader",
  render: (args) => render(args),
  decorators: [withSectionWrapper],
  tags: ["autodocs"],
  argTypes: schemaArgTypes,
  args: { ...baseArgs, ...schemaDefaults },
  parameters: {
    customCode: sectionRaw,
    docs: {
      description: {
        component: "Section header written in Liquid (Shopify section).",
      },
    },
  },
};

export default meta;

type Story = StoryObj;
export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "@src/sections/henk-section-faq.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const sectionTemplate = sectionRaw.replace(SCHEMA_RE, "");

const DEFAULT_ITEMS = [
  {
    summary: "What is the purpose of this component?",
    content:
      "<p>This component is used to display a list of frequently asked questions.</p>",
    variant: "plusmin",
  },
  {
    summary: "How many samples can I order?",
    content:
      "<p>You are free to assemble your own samples or choose from our curated sample packs, which include six material samples each. You can help us reduce waste by ordering only the samples you need.</p>",
    variant: "plusmin",
  },
  {
    summary: "When can I expect my samples?",
    content:
      "<p>You should expect your samples within 7 days. Please contact us if you have not received your samples within one week.</p>",
    variant: "plusmin",
  },
];

const renderFAQ = (args: any) => {
  const title = args.title || "Frequently Asked Questions";
  const groupName = args.name || "cc";
  const items =
    args.detailsItems && Array.isArray(args.detailsItems)
      ? args.detailsItems
      : DEFAULT_ITEMS;

  const rendered = engine.parseAndRenderSync(sectionTemplate, {
    section: {
      id: "faq",
      settings: { title, name: groupName },
      blocks: items.map((item: any, index: number) => ({
        id: `faq-${index + 1}`,
        type: "item",
        settings: {
          summary: item.summary,
          content: item.content,
          icon_name: item.iconName,
          icon_size: item.iconSize,
          icon_class: item.iconClassName,
          variant: item.variant,
        },
      })),
    },
  });

  const wrapper = document.createElement("div");
  wrapper.innerHTML = rendered;
  return wrapper.firstElementChild ?? wrapper;
};

const meta: Meta = {
  title: "Sections/FAQ-Section",
  render: (args) => renderFAQ(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    docs: {
      description: {
        component:
          "FAQ section built from the Liquid section and details snippet. Ensure all details share the same `name` so only one widget opens at a time.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    name: { control: "text" },
    detailsItems: { control: "object" },
  },
  args: {
    title: "Frequently Asked Questions",
    name: "cc",
    detailsItems: DEFAULT_ITEMS,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: { title: "FAQ" },
};

export const HenkFAQSection: Story = {
  render: () => renderFAQ({}),
};

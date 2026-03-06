import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "./henk-detailscomponent.liquid?raw";

// Vite glob to load raw SVGs from src/assets/icons at runtime
const svgModules = import.meta.glob("../../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Build synchronous map of filename -> svg content for use in Liquid inline filter
const svgMap: Record<string, string> = {};
Object.entries(svgModules).forEach(([filePath, content]) => {
  const filename = filePath.split("/").pop();
  if (filename) svgMap[filename] = content as string;
});
engine.__svg_map = svgMap;

const DEFAULT_ITEMS = [
  {
    summary: "What is the purpose of this component?",
    iconName: "feather-help-circle",
    content:
      "<p>This component is used to display a list of frequently asked questions.</p>",
    variant: "plusmin",
  },
  {
    summary: "How many samples can I order?",
    iconName: "feather-help-circle",
    content:
      "<p>You are free to assemble your own samples or choose from our curated sample packs, which include six material samples each. You can help us reduce waste by ordering only the samples you need.</p>",
    variant: "plusmin",
  },
  {
    summary: "When can I expect my samples?",
    iconName: "feather-calendar",
    content:
      "<p>You should expect your samples within 7 days. Please contact us if you have not received your samples within one week.</p>",
    variant: "plusmin",
  },
];

const renderFAQ = (args: any) => {
  const title = args.title || "Frequently Asked Questions";
  const groupName = args.name || "cc"; // same name for all details so only one opens
  const items =
    args.detailsItems && Array.isArray(args.detailsItems)
      ? args.detailsItems
      : DEFAULT_ITEMS;

  const section = document.createElement("section");
  section.className = "henk-faq-section henk-section";

  const sectionInner = document.createElement("div");
  sectionInner.className = "henk-section__inner";
  section.appendChild(sectionInner);

  const h2 = document.createElement("h2");
  h2.className = "henk-faq-section__title";
  h2.innerText = title;
  sectionInner.appendChild(h2);

  const container = document.createElement("div");
  container.className = "henk-details-group";

  items.forEach((it: any) => {
    const payload = { ...it, name: groupName };
    // Pre-render icon into payload.icon_html to avoid relying on partials
    if (payload.iconName) {
      const filename = `${payload.iconName}.svg`;
      const svg_content = svgMap[filename];
      if (svg_content) {
        const icon_class =
          (payload.iconClassName || "") +
          (payload.iconSize === "small" ? " icon--small" : " icon--large");
        payload.icon_html = `<i class="henk-icon ${icon_class}">${svg_content}</i>`;
      } else {
        payload.icon_html = "";
      }
    }

    const rendered = engine.parseAndRenderSync(snippet, payload);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = rendered;
    container.appendChild(wrapper);
  });

  sectionInner.appendChild(container);
  return section;
};

const meta: Meta = {
  title: "Sections/HenkFAQSection",
  render: (args) => renderFAQ(args),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "FAQ section built from the Liquid details snippet. Ensure all details share the same `name` so only one widget opens at a time.",
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
  render: () => {
    const el = renderFAQ({});
    return el.outerHTML;
  },
};

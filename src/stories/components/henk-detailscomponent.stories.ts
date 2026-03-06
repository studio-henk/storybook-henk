import type { Meta, StoryObj } from "@storybook/html";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "./henk-detailscomponent.liquid?raw";
import iconSnippet from "./henk-icon.liquid?raw";
// Register the henk-icon partial so `{% render 'henk-icon' %}` works
if (engine.registerPartial) engine.registerPartial("henk-icon", iconSnippet);

// Vite glob to load raw SVGs from src/assets/icons at runtime
const svgModules = import.meta.glob("../../assets/icons/*.svg", { query: "?raw", import: "default", eager: true });

// Build synchronous map of filename -> svg content for use in Liquid inline filter
const svgMap: Record<string,string> = {};
Object.entries(svgModules).forEach(([filePath, content]) => {
  const filename = filePath.split('/').pop();
  if (filename) svgMap[filename] = content as string;
});
engine.__svg_map = svgMap;

const ICON_NAMES = [
  "feather-alert-circle",
  "feather-alert-triangle",
  "feather-arrow-left",
  "feather-arrow-right",
  "feather-calendar",
  "feather-check",
  "feather-chevron-down",
  "feather-chevron-left",
  "feather-chevron-right",
  "feather-chevron-up",
  "feather-help-circle",
  "feather-info",
  "feather-map-pin",
  "feather-menu",
  "feather-minus",
  "feather-navigation",
  "feather-phone-call",
  "feather-phone",
  "feather-plus",
  "feather-search",
  "feather-shopping-bag",
  "feather-shopping-cart",
  "feather-smartphone",
  "feather-star",
  "feather-trash-2",
  "feather-trash",
  "feather-truck",
  "feather-volume-2",
  "feather-volume-x",
  "feather-x",
  "henk-bag",
  "henk-navigate",
  "henk-success",
  "social-facebook",
  "social-instagram",
  "social-pinterest",
  "social-tiktok",
  "social-youtube",
];

const renderDetails = (args: any) => {
  // Pre-render icon HTML and pass as `icon_html` to avoid relying on `{% render %}` at runtime
  let icon_html = args.icon_html || "";
  if (!icon_html && args.iconName) {
    let icon_class = args.iconClassName || "";
    if (args.iconSize === "small") {
      icon_class = icon_class + " icon--small";
    } else if (args.iconSize === "large" || !args.iconSize) {
      icon_class = icon_class + " icon--large";
    }
    const filename = `${args.iconName}.svg`;
    const svg_content = svgMap[filename];
    if (svg_content) {
      icon_html = `<i class="henk-icon ${icon_class}">${svg_content}</i>`;
    } else {
      icon_html = "";
    }
  }

  const rendered = engine.parseAndRenderSync(snippet, {
    summary: args.summary,
    content: args.content,
    variant: args.variant,
    name: args.name,
    iconName: args.iconName,
    iconSize: args.iconSize,
    iconClassName: args.iconClassName,
    icon_html,
  });
  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Components/HenkDetailsComponent",
  render: (args) => renderDetails(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component:
          "Details component written in Liquid. Provide `summary`, `content`, and optional `iconName`, `variant`, `name`.",
      },
    },
  },
  argTypes: {
    summary: { control: "text" },
    content: { control: "text" },
    variant: { control: { type: "select", options: ["default", "plusmin"] } },
    name: { control: "text" },
    iconName: { control: { type: "select", options: ICON_NAMES } },
    iconSize: { control: { type: "select", options: ["small", "large"] } },
    iconClassName: { control: "text" },
  },
  args: {
    summary: "Summary",
    content: `<p>Op onze onderhoudspagina vind je uitgebreide informatie over het gebruik en onderhoud van onze meubels. Zo adviseren wij het gebruik van onderzetters en schoonmaken met licht vochtig doekje (eventueel mild sopje, wel nadrogen). Hout van iedere kwaliteit werkt, en reageert op (lucht-)vocht(-igheid), warmte(-wisselingen) en licht; voorkom schommelingen hierin of blootstelling hieraan dus. Ook afwerkingen bieden slechts gedeeltelijke bescherming tegen vlekken en krassen. Scheuren of verkleuren, gevolgen van dergelijke blootstelling of schommelingen, alsook krassen, slijtagesporen, kringen of vlekken vallen daarom niet onder de garantie, zij zijn immers het gevolg van gebruik door de klant. Raadpleeg ook onze algemene voorwaarden. Je vindt op onze onderhoudspagina onder meer informatie over:</p><ul>
	<li>gebruik van je meubel</li>
	<li>stappenplan voor grondig onderhoud bij diepe krassen/vlekken</li>
	<li>services</li>
</ul>`,
    variant: "default",
    name: "cc",
    iconName: undefined,
    iconSize: "large",
    iconClassName: "",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const PlusMinVariant: Story = {
  args: {
    variant: "plusmin",
    summary: "Summary",
    content: `<p>Op onze <a href=\"#\">onderhoudspagina</a> vind je uitgebreide informatie over het gebruik en onderhoud van onze meubels. Zo adviseren wij het gebruik van onderzetters en schoonmaken met licht vochtig doekje (eventueel mild sopje, wel nadrogen). Hout van iedere kwaliteit werkt, en reageert op (lucht-)vocht(-igheid), warmte(-wisselingen) en licht; voorkom schommelingen hierin of blootstelling hieraan dus. Ook afwerkingen bieden slechts gedeeltelijke bescherming tegen vlekken en krassen. Scheuren of verkleuren, gevolgen van dergelijke blootstelling of schommelingen, alsook krassen, slijtagesporen, kringen of vlekken vallen daarom niet onder de garantie, zij zijn immers het gevolg van gebruik door de klant. Raadpleeg ook onze algemene voorwaarden. Je vindt op onze onderhoudspagina onder meer informatie over:</p><ul>
	<li>gebruik van je meubel</li>
	<li>stappenplan voor grondig onderhoud bij diepe krassen/vlekken</li>
	<li>services</li>
</ul>`,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "plusmin",
    iconName: "feather-truck",
    summary: "Summary",
    content: `<p>Op onze <a href=\"#\">onderhoudspagina</a> vind je uitgebreide informatie over het gebruik en onderhoud van onze meubels. Zo adviseren wij het gebruik van onderzetters en schoonmaken met licht vochtig doekje (eventueel mild sopje, wel nadrogen). Hout van iedere kwaliteit werkt, en reageert op (lucht-)vocht(-igheid), warmte(-wisselingen) en licht; voorkom schommelingen hierin of blootstelling hieraan dus. Ook afwerkingen bieden slechts gedeeltelijke bescherming tegen vlekken en krassen. Scheuren of verkleuren, gevolgen van dergelijke blootstelling of schommelingen, alsook krassen, slijtagesporen, kringen of vlekken vallen daarom niet onder de garantie, zij zijn immers het gevolg van gebruik door de klant. Raadpleeg ook onze algemene voorwaarden. Je vindt op onze onderhoudspagina onder meer informatie over:</p><ul>
	<li>gebruik van je meubel</li>
	<li>stappenplan voor grondig onderhoud bij diepe krassen/vlekken</li>
	<li>services</li>
</ul>`,
  },
};

export const MultipleDetailsComponents = () => {
  const groupName = "cc"; // ensure all items share the same name so only one can be open
  const items = [
    { summary: "What is the purpose of this component?", iconName: "feather-help-circle", content: "<p>This component is used to display a list of frequently asked questions.</p>", variant: "plusmin" },
    { summary: "How many samples can I order?", iconName: "feather-help-circle", content: "<p>You are free to assemble your own samples or choose from our curated sample packs, which include six material samples each. You can help us reduce waste by ordering only the samples you need.</p>", variant: "plusmin" },
    { summary: "When can I expect my samples?", iconName: "feather-calendar", content: "<p>You should expect your samples within 7 days. Please contact us if you have not received your samples within one week.</p>", variant: "plusmin" },
    { summary: "Why do you want me to return the samples?", iconName: "feather-help-circle", content: "<p>By returning your samples, you can help us ensure that nothing goes to waste. We repurpose samples by using them in the stores if they are still in good condition.</p>", variant: "plusmin" },
    { summary: "How can I return my samples?", iconName: "feather-truck", content: "<p>You can return your sample pack to any of our stores or mail it to us for free via Antwoordnummer 98189, 1000 VA Amsterdam.</p>", variant: "plusmin" },
    { summary: "Will I be reimbursed for the samples?", iconName: "feather-help-circle", content: "<p>When you return the samples to one of our stores, we will reimburse the cost as a discount with your order. Unfortunately, we're not able to offer reimbursement when you return your samples to us via mail.</p>", variant: "plusmin" },
  ];

  const container = document.createElement("div");
  container.className = "henk-details-group";
  items.forEach((it) => {
    const payload = { ...it, name: groupName };
    const rendered = engine.parseAndRenderSync(snippet, payload);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = rendered;
    container.appendChild(wrapper);
  });
  return container;
};

MultipleDetailsComponents.storyName = "Multiple Details Components";

MultipleDetailsComponents.parameters = {
  docs: {
    description: {
      story: "The name attribute has to be the same for each in order to have only 1 widget open at a time.",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/design/53sW3t6iEWcFKp97iwGc2D/Component--CollapsibleContent?node-id=3407-3121&t=bgrDKj2HRAsx1ok7-1",
  },
};

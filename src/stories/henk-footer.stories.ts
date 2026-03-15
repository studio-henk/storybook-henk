import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-footer.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const footerSection = sectionRaw.replace(SCHEMA_RE, "");

const renderFooter = (args: any) => {
  const defaultArgs = {
    footer_menu: { links: [] },
    shop: { policies: [] },
  };
  const safeArgs = { ...defaultArgs, ...args };
  const rendered = engine.parseAndRenderSync(footerSection, {
    linklists: {
      footer: safeArgs.footer_menu,
    },
    shop: safeArgs.shop,
  });

  const footer = document.createElement("footer");
  footer.className = "henk-footer";
  footer.innerHTML = rendered;
  return footer;
};

const meta: Meta = {
  title: "Global/Footer",
  render: (args) => renderFooter(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: footerSection,
    docs: {
      description: {
        component: "Footer section rendered from Liquid with mocked menu data.",
      },
    },
  },
  argTypes: {
    footer_menu: { control: "object" },
    shop: { control: "object" },
  },
  args: {
    footer_menu: {
      links: [
        {
          title: "Collection",
          url: "/collection",
          links: [
            { title: "Dining Tables", url: "/collections/dining-tables" },
            { title: "Coffee Tables", url: "/collections/coffee-tables" },
            { title: "Dining Chairs", url: "/collections/dining-chairs" },
            { title: "Dining Benches", url: "/collections/dining-benches" },
            { title: "Stools", url: "/collections/stools" },
            { title: "Sofas", url: "/collections/sofas" },
            { title: "Lounge Chairs", url: "/collections/lounge-chairs" },
            { title: "Poufs", url: "/collections/poufs" },
            { title: "Cabinets", url: "/collections/cabinets" },
            { title: "Accessories", url: "/collections/accessories" },
          ],
        },
        {
          title: "About",
          url: "/about",
          links: [
            { title: "About HENK", url: "/about/henk" },
            { title: "Sustainability", url: "/about/sustainability" },
            { title: "Careers", url: "/about/careers" },
            { title: "Contact", url: "/contact" },
            { title: "Press", url: "/press" },
            { title: "Image Bank", url: "/image-bank" },
          ],
        },
        {
          title: "Services",
          url: "/services",
          links: [
            {
              title: "Materials",
              url: "/?path=/story/pages-materials--default",
            },
            // { title: "Samples Service", url: "/services/samples" },
            { title: "Interior Advice", url: "/services/interior-advice" },
            { title: "Maintenance", url: "/services/maintenance" },
            { title: "Manuals", url: "/services/manuals" },
            { title: "Stock", url: "/services/stock" },
            { title: "Price List", url: "/services/price-list" },
          ],
        },
        {
          title: "Support",
          url: "/support",
          links: [
            { title: "Contact", url: "/support/contact" },
            { title: "FAQ", url: "/support/faq" },
            { title: "Delivery Times", url: "/support/delivery-times" },
          ],
        },
        {
          title: "Stores",
          url: "/stores",
          links: [
            { title: "Amsterdam", url: "/stores/amsterdam" },
            { title: "Antwerpen", url: "/stores/antwerpen" },
            { title: "Rotterdam", url: "/stores/rotterdam" },
            { title: "Utrecht", url: "/stores/utrecht" },
          ],
        },
      ],
    },
    shop: {
      policies: [
        {
          title: "Intellectual Property",
          url: "/policies/intellectual-property",
        },
        { title: "Privacy Policy", url: "/policies/privacy-policy" },
        { title: "Cookie Statement", url: "/policies/cookies" },
        { title: "Terms and Conditions", url: "/policies/terms" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

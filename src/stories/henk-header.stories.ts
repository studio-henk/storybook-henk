import type { Meta, StoryObj } from "@storybook/html-vite";
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-header.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const headerSection = sectionRaw.replace(SCHEMA_RE, "");

const renderHeader = (args: any) => {
  const rendered = engine.parseAndRenderSync(headerSection, args ?? {});
  const div = document.createElement("div");
  div.innerHTML = rendered;
  return div;
};

const meta: Meta = {
  title: "Global/Header",
  render: (args) => renderHeader(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: headerSection,
    docs: {
      description: {
        component:
          "Header section rendered from Liquid with mocked Shopify globals.",
      },
    },
  },
  argTypes: {
    linklists: { control: "object" },
    routes: { control: "object" },
    template: { control: "text" },
    localization: { control: "object" },
    cart: { control: "object" },
  },
  args: {
    template: "page",
    routes: {
      root_url: "/",
      search_url: "/search",
      cart_url: "/cart",
    },
    cart: {
      item_count: 0,
    },
    localization: {
      language: { iso_code: "nl", endonym_name: "Nederlands" },
      available_languages: [
        { iso_code: "nl", endonym_name: "Nederlands" },
        { iso_code: "en", endonym_name: "English" },
        { iso_code: "de", endonym_name: "Deutsch" },
      ],
    },
    linklists: {
      "main-menu": {
        links: [
          {
            title: "Shop",
            url: "/collections",
            levels: 2,
            links: [
              {
                title: "Highlights",
                url: "#",
                links: [
                  { title: "New in", url: "#" },
                  { title: "Second Chance", url: "#" },
                  { title: "Affordable Choices", url: "#" },
                  { title: "Fast Delivery", url: "#" },
                  { title: "Outdoor Collection", url: "#" },
                ],
              },
              {
                title: "Tafels",
                url: "/collections/tables",
                links: [
                  { title: "Eettafels", url: "/collections/tables" },
                  { title: "Salontafels", url: "/collections/tables" },
                  { title: "Bureaus", url: "/collections/tables/Office" },
                  { title: "Bistrotafels", url: "/collections/tables/Bistro" },
                ],
              },
              {
                title: "Zitmeubels",
                url: "/collections/dining-chairs-1",
                links: [
                  {
                    title: "Eetkamerstoelen",
                    url: "/collections/dining-chairs-1",
                  },
                  { title: "Zitbanken", url: "#" },
                  { title: "Fauteuils", url: "#" },
                  { title: "Barkrukken", url: "#" },
                  {
                    title: "Eetkamerbanken",
                    url: "/collections/dining-benches",
                  },
                  { title: "Poefs", url: "/collections/dining-chairs" },
                ],
              },
              {
                title: "Opbergen",
                url: "/collections",
                links: [
                  { title: "Wandplanken", url: "/collections" },
                  { title: "Dressoirs", url: "/collections/tables" },
                  { title: "TV-meubels", url: "/collections" },
                  { title: "Vitrinekasten", url: "/" },
                  { title: "Boekenkasten", url: "#" },
                ],
              },
              {
                title: "Accessoires",
                url: "/collections",
                links: [
                  { title: "Verlichting", url: "/" },
                  { title: "Vazen", url: "/pages/test-page" },
                  { title: "HENK merchandise", url: "/pages/test-page" },
                ],
              },
            ],
          },
          {
            title: "Services",
            url: "/services",
            levels: 2,
            links: [
              {
                title: "Highlights",
                url: "#",
                links: [{ title: "New in", url: "#" }],
              },
              {
                title: "Service",
                url: "/collections/tables",
                links: [
                  { title: "Contact", url: "/collections/tables" },
                  { title: "FAQ", url: "/collections/tables" },
                  {
                    title: "Interieuradvies",
                    url: "/collections/tables/Office",
                  },
                  {
                    title: "Reparaties en retouren",
                    url: "/collections/tables/Bistro",
                  },
                  {
                    title: "Materialen en onderhoud",
                    url: "/collections/tables/Bistro",
                  },
                ],
              },
            ],
          },
          {
            title: "Explore",
            url: "/explore",
            levels: 2,
            links: [
              {
                title: "Our Stores",
                url: "#",
                links: [
                  { title: "Amsterdam", url: "#" },
                  { title: "Antwerpen", url: "#" },
                  { title: "Utrecht", url: "#" },
                  { title: "Rotterdam", url: "#" },
                  { title: "Haarlem", url: "#" },
                ],
              },
              {
                title: "HENK",
                url: "#",
                links: [
                  { title: "HENK's verhaal", url: "#" },
                  { title: "HENK at home", url: "#" },
                  { title: "Werken bij HENK", url: "#" },
                ],
              },
            ],
          },
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Homepage: Story = {
  args: {
    template: "index",
  },
};

export const CartWithItems: Story = {
  args: {
    cart: { item_count: 3 },
  },
};

export const NoLocalization: Story = {
  args: {
    localization: null,
  },
};

import type { Meta, StoryObj } from "@storybook/html";

import engine from "@src/liquid-engine.js";
import themeRaw from "./theme.liquid?raw";
import headerSectionRaw from "../../sections/henk-header.liquid?raw";
import footerSectionRaw from "../../sections/henk-footer.liquid?raw";
import headerMeta from "../henk-header.stories";
import footerMeta from "../henk-footer.stories";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const headerSection = headerSectionRaw.replace(SCHEMA_RE, "");
const footerSection = footerSectionRaw.replace(SCHEMA_RE, "");

const meta = {
  title: "Layout/Theme",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const headerArgs = ((headerMeta as { args?: any }).args) || {};
    const footerArgs = ((footerMeta as { args?: any }).args) || {};

    const sectionGroups = {
      "header-group": {
        sections: {
          header: {
            template: headerSection,
            settings: {},
          },
        },
        order: ["header"],
      },
      "footer-group": {
        sections: {
          footer: {
            template: footerSection,
            settings: {},
          },
        },
        order: ["footer"],
      },
    };

    const rendered = engine.parseAndRenderSync(themeRaw, {
      section_groups: sectionGroups,
      content_for_layout: "<div>content_for_layout</div>",
      linklists: {
        ...(headerArgs.linklists || { "main-menu": { links: [] } }),
        footer: footerArgs.footer_menu || { links: [] },
      },
      routes: headerArgs.routes || { root_url: "/", search_url: "/search", cart_url: "/cart" },
      cart: headerArgs.cart || { item_count: 0 },
      localization: headerArgs.localization || { language: { iso_code: "nl", endonym_name: "Nederlands" } },
      shop: footerArgs.shop || { policies: [] },
    });
    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    return template.content.firstElementChild as HTMLElement;
  },
};

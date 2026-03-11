import engine from "@src/liquid-engine.js";

import themeRaw from "../layout/theme.liquid?raw";
import headerSectionRaw from "../../sections/henk-header.liquid?raw";
import footerSectionRaw from "../../sections/henk-footer.liquid?raw";
import pageSectionRaw from "../../sections/page.liquid?raw";
import sectionHeaderSectionRaw from "../../sections/henk-section-header.liquid?raw";
import breadcrumbsSectionRaw from "../../sections/henk-section-breadcrumbs.liquid?raw";
import breadcrumbsSnippetRaw from "../../snippets/henk-snippet-breadcrumbs.liquid?raw";
import sectionHeaderSnippetRaw from "../../snippets/henk-snippet-section-header.liquid?raw";
import headerMeta from "../henk-header.stories";
import footerMeta from "../henk-footer.stories";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const headerSection = headerSectionRaw.replace(SCHEMA_RE, "");
const footerSection = footerSectionRaw.replace(SCHEMA_RE, "");
const pageSection = pageSectionRaw.replace(SCHEMA_RE, "");
const sectionHeaderSection = sectionHeaderSectionRaw.replace(SCHEMA_RE, "");
const breadcrumbsSection = breadcrumbsSectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-breadcrumbs", breadcrumbsSnippetRaw);
  (engine as any).registerPartial("henk-breadcrumbs", breadcrumbsSnippetRaw);
  (engine as any).registerPartial("henk-snippet-section-header", sectionHeaderSnippetRaw);
}
if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-breadcrumbs"] = breadcrumbsSnippetRaw;
  (engine as any).__partials["henk-breadcrumbs"] = breadcrumbsSnippetRaw;
  (engine as any).__partials["henk-snippet-section-header"] = sectionHeaderSnippetRaw;
}

export type PageData = {
  title: string;
  content: string;
};

export function renderPageContent(template: any, page: PageData) {
  const map: Record<string, string> = {
    page: pageSection,
    "henk-section-header": sectionHeaderSection,
    "henk-section-breadcrumbs": breadcrumbsSection,
  };

  if (!template || !Array.isArray(template.order)) return "";

  return template.order
    .map((id: string) => {
      const def = template.sections?.[id];
      if (!def || def.disabled) return "";
      const sectionTemplate = map[def.type];
      if (!sectionTemplate) return "";

      let settings = def.settings || {};
      if (def.type === "henk-section-header") {
        settings = {
          ...settings,
          title: page.title,
          content: page.content,
        };
      }

      return engine.parseAndRenderSync(sectionTemplate, {
        section: { id, settings },
        template: "page",
        page,
        page_title: page.title,
      });
    })
    .join("");
}

export function renderThemePage({
  contentForLayout,
  page,
}: {
  contentForLayout: string;
  page: PageData;
}) {
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

  return engine.parseAndRenderSync(themeRaw, {
    section_groups: sectionGroups,
    content_for_layout: contentForLayout,
    linklists: {
      ...(headerArgs.linklists || { "main-menu": { links: [] } }),
      footer: footerArgs.footer_menu || { links: [] },
    },
    routes: headerArgs.routes || { root_url: "/", search_url: "/search", cart_url: "/cart" },
    cart: headerArgs.cart || { item_count: 0 },
    localization: headerArgs.localization || { language: { iso_code: "nl", endonym_name: "Nederlands" } },
    shop: footerArgs.shop || { policies: [] },
    template: "page",
    page,
    page_title: page.title,
  });
}

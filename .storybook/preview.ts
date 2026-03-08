/** @type { import('@storybook/html').Preview } */
// import {
//   BADGE,
//   BadgesConfig,
//   BADGE_LOCATION,
// } from "@geometricpanda/storybook-addon-badges";
// import '../src/assets/henk-main.css';
// import "../public/assets/henk-tokens.css";
// import "../src/assets/henk-main.dark.css";
// import "../public/assets/henk-base.css";

// import "../src/scripts/henk-expand-button.ts";
// import "../src/scripts/henk-popover-language-button-sync.ts";

// main.ts or Storybook preview.ts
document.documentElement.classList.add("no-js");
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js-enabled");

// import { mobileMenu } from "../src/scripts/henk-mobile-menu.ts";

// document.addEventListener("DOMContentLoaded", () => {
//   mobileMenu.setupMatchMedia();
// });

import { DocsContainer } from "@storybook/addon-docs";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

const liquidModules = import.meta.glob("../src/**/*.liquid", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const stylesheetBlocks: string[] = [];
Object.values(liquidModules).forEach((liquidSource) => {
  if (typeof liquidSource !== "string") return;
  const matches = liquidSource.matchAll(
    /{%\s*stylesheet\s*%}([\s\S]*?){%\s*endstylesheet\s*%}/g,
  );
  for (const match of matches) {
    const block = match[1];
    if (!block) continue;
    const cleanedBlock = block.replace(/{%\s*comment\s*%}[\s\S]*?{%\s*endcomment\s*%}/g, "");
    const rendered = engine.parseAndRenderSync(cleanedBlock, {});
    if (rendered.trim().length > 0) stylesheetBlocks.push(rendered);
  }
});

if (stylesheetBlocks.length > 0) {
  const existingStylesheets = document.getElementById(
    "henk-liquid-stylesheets",
  );
  const stylesheetMarkup = stylesheetBlocks.join("\n");
  if (existingStylesheets && existingStylesheets instanceof HTMLStyleElement) {
    existingStylesheets.textContent = stylesheetMarkup;
  } else {
    const stylesheetStyle = document.createElement("style");
    stylesheetStyle.id = "henk-liquid-stylesheets";
    stylesheetStyle.textContent = stylesheetMarkup;
    document.head.appendChild(stylesheetStyle);
  }
}

const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "system",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (storyFn, context) => {
      const theme = context?.globals?.theme;
      const root = document.documentElement;

      if (theme === "system") {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", theme);
      }

      return storyFn();
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "Colour",
          ["Palette", "Example"],
          "Tokens",
          [
            "Properties",
            "Colours",
            ["Primitives", "Semantic"],
            "Type",
            ["Size", "Line-height"],
          ],
          "Typography",
          ["Intro", "Family", "*"],
          "Base",
          ["Headings", "Paragraph", "TextLink", "List", "DescriptionList"],
          "Components",
          [
            "Logo",
            "Icon",
            "Button",
            "ButtonGroup",
            "Tag",
            "HeaderBlock",
            "*",
            "Cards",
            "Forms",
            [
              "Label",
              "Input",
              "LabeledInput",
              "Checkbox",
              "LabeledCheckbox",
              "Select",
              "LabeledSelect",
              "Textarea",
              "LabeledTextarea",
              "Fieldset",
              "*",
            ],
          ],
          "Sections",
          ["SectionHeader", "*"],
          "Global",
          ["Header", "Footer", "*"],
          "Pages",
          ["HomePage", "Stores", ["Overview", "Detail"]],
          "Development",
          "*",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
    // badgesConfig: {
    //   [BADGE.SHOPIFY]: {
    //     styles: {
    //       backgroundColor: "#FFF",
    //       borderColor: "#018786",
    //       color: "#018786",
    //     },
    //     location: [BADGE_LOCATION.TOOLBAR],
    //     title: "Not on Shopify Yet",
    //   },
    // },
    docs: {
      container: ({ context, children }) => {
        const theme = context?.globals?.theme || "light";
        const root = document.documentElement;

        if (theme === "system") {
          root.removeAttribute("data-theme");
        } else {
          root.setAttribute("data-theme", theme);
        }

        return DocsContainer({ context, children });
      },
    },
  },
};

export default preview;

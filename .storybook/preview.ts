/** @type { import('@storybook/html-vite').Preview } */
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

import { DocsContainer } from "@storybook/addon-docs/blocks";
import addonPerformancePanel from "@github-ui/storybook-addon-performance-panel/universal";

// main.ts or Storybook preview.ts
document.documentElement.classList.add("no-js");
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js-enabled");

// import { mobileMenu } from "../src/scripts/henk-mobile-menu.ts";

// document.addEventListener("DOMContentLoaded", () => {
//   mobileMenu.setupMatchMedia();
// });

// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

const svgModules = import.meta.glob("../src/assets/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const svgMap: Record<string, string> = {};
Object.entries(svgModules).forEach(([filePath, content]) => {
  const filename = filePath.split("/").pop();
  if (filename) svgMap[filename] = content as string;
});
engine.__svg_map = svgMap;

const liquidModules = import.meta.glob("../src/**/*.liquid", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const partialModules = import.meta.glob(
  "../src/{snippets,stories/components}/**/*.liquid",
  {
    query: "?raw",
    import: "default",
    eager: true,
  },
) as Record<string, string>;

Object.entries(partialModules).forEach(([filePath, content]) => {
  const base = filePath.split("/").pop() || filePath;
  const filename = base.replace(/\?.*$/, "");
  const name = filename.replace(/\.liquid$/i, "");
  if (!name) return;
  if (typeof (engine as any).registerPartial === "function") {
    (engine as any).registerPartial(name, content as string);
    (engine as any).registerPartial("snippets/" + name, content as string);
    (engine as any).registerPartial(name + ".liquid", content as string);
  }
  if ((engine as any).__partials) {
    (engine as any).__partials[name] = content as string;
    (engine as any).__partials["snippets/" + name] = content as string;
    (engine as any).__partials[name + ".liquid"] = content as string;
  }
});

const stylesheetBlocks: string[] = [];
Object.values(liquidModules).forEach((liquidSource) => {
  if (typeof liquidSource !== "string") return;
  const matches = liquidSource.matchAll(
    /{%\s*stylesheet\s*%}([\s\S]*?){%\s*endstylesheet\s*%}/g,
  );
  for (const match of matches) {
    const block = match[1];
    if (!block) continue;
    const cleanedBlock = block.replace(
      /{%\s*comment\s*%}[\s\S]*?{%\s*endcomment\s*%}/g,
      "",
    );
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
    addons: [addonPerformancePanel()],
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
      options: {
        light: {
          name: "light",
          value: "#f7f7f7",
        },

        dark: {
          name: "dark",
          value: "#000000",
        },
      },

      disabled: true,
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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light",
    },
  },
};

export default preview;

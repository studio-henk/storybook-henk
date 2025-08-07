/** @type { import('@storybook/html').Preview } */
import {
  BADGE,
  BadgesConfig,
  BADGE_LOCATION,
} from "@geometricpanda/storybook-addon-badges";

import { DocsContainer } from "@storybook/addon-docs";

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
          "Components",
          [
            "Headings",
            "Paragraph",
            "TextLink",
            "Logo",
            "Icon",
            "LinkButton",
            "ButtonGroup",
          ],
          "Sections",
          ["SectionHeader", "*"],
          "Global",
          ["Header", "Footer", "*"],
          "Pages",
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
    badgesConfig: {
      [BADGE.SHOPIFY]: {
        styles: {
          backgroundColor: "#FFF",
          borderColor: "#018786",
          color: "#018786",
        },
        location: [BADGE_LOCATION.TOOLBAR],
        title: "Not on Shopify Yet",
      },
    },
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

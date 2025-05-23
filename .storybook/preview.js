/** @type { import('@storybook/html').Preview } */

import "../src/styles/global.min.css";
import "../src/styles/content.min.css";

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "Colour",
          "Tokens",
          [
            "Colours",
            ["Primitives", "Semantic"],
            "Type",
            ["Size", "Line-height"],
          ],
          "Typography",
          "Components",
          [
            "Base",
            "TextLink",
            "Logo",
            "Icon",
            "IconButton",
            "Button",
            "ButtonGroup",
            ["HeadingGroup", "ContentDivider", "*"],
            "Web Components",
          ],
          "Sections",
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
      disable: false,
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
  },
};

export default preview;

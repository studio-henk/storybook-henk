/** @type { import('@storybook/html').Preview } */

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "Colour",
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
            "Base",
            "TextLink",
            "Logo",
            "Icon",
            "LinkButton",
            "IconButton",
            "ButtonGroup",
            ["HeadingGroup", "ContentDivider", "*"],
            "Web Components",
          ],
          "Sections",
          ["SectionHeader", "*"],
          "Global",
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
  },
};

export default preview;

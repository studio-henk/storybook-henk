// import "@assets/utils/_henk-helpers.css";
// import "@assets/utils/_henk-size-font.css";

import type { Meta, StoryObj } from "@storybook/html";
import { createHeadingElement, type HeadingProps } from "./Headings";

const meta: Meta<HeadingProps> = {
  title: "Base/Headings",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `<h1>` to `<h6>` HTML elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. All the levels come in font-weight normal, semibold and style italic.",
      },
    },
    controls: { exclude: ["tag"] },
  },
  render: ({
    tag,
    text,
    weight = "normal",
    style = "normal",
    display = false,
  }) => {
    return createHeadingElement({ tag, text, weight, style, display })
      .outerHTML;
  },
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const HeadingDisplay: Story = {
  name: "Display heading",
  args: {
    tag: "h1",
    text: "Display Heading",
    display: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A large display-style heading based on an `<h1>` element, using the `display: true` prop for enhanced styling.",
      },
    },
  },
};

export const Heading1: Story = {
  args: {
    tag: "h1",
    text: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    tag: "h2",
    text: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    tag: "h3",
    text: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    tag: "h4",
    text: "Heading 4",
  },
};

export const Heading5: Story = {
  args: {
    tag: "h5",
    text: "Heading 5",
  },
};

export const Heading6: Story = {
  args: {
    tag: "h6",
    text: "Heading 6",
  },
};

export const Heading1Medium: Story = {
  args: {
    tag: "h1",
    text: "Heading 1 Medium",
    weight: "medium",
  },
};

export const Heading1Bold: Story = {
  args: {
    tag: "h1",
    text: "Heading 1 Bold",
    weight: "bold",
  },
};

export const Heading1Lineheight: Story = {
  args: {
    tag: "h1",
    text: "Heading 1 with much much much much much much more text to see how it flows over multiple lines",
  },
};

// Uncomment if you want to use italic style heading
// export const Heading1Italic: Story = {
//   args: {
//     tag: 'h1',
//     text: 'Heading 1 Italic',
//     style: 'italic',
//   },
// };

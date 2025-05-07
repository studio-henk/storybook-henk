import { fn } from "@storybook/test";
import { createHeadingGroup } from "./HeadingGroup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/HeadingGroup",
  tags: ["autodocs"],
  parameters: {
    // badges: [BADGE.BETA],
    docs: {
      description: {
        component:
          "The ```<hgroup>``` HTML element represents a heading and related content. It groups a single ```<h1>-<h6>``` element with one or more ```<p>``` elements.",
      },
    },
  },
  render: ({ level, heading, paragraphs, reverse, ...args }) => {
    return createHeadingGroup({ level, heading, paragraphs, reverse, ...args });
  },
  argTypes: {
    level: {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6"],
    },
    heading: { control: "text" },
    paragraphs: { control: "array" },
    reverse: { control: "boolean" },
    className: { control: "text" },
  },
  args: {
    paragraphs: [],
    reverse: false,
  },
};

/** Default: a h2 followed by a p, left aligned */
export const Default = {
  args: {
    heading: "Secondary Heading",
    paragraphs: ["Related content"],
  },
};

/** Default: a h2 followed by a p but visually reverse, left aligned */
export const DefaultReverse = {
  args: {
    heading: "Secondary Heading",
    paragraphs: ["Related content"],
    reverse: true,
  },
};

/** Default: a h1 followed by a p, left aligned, h1 set by level prop */
export const Level1 = {
  args: {
    level: "1",
    heading: "Primary Heading",
    paragraphs: ["Related content"],
  },
};

// export const Level2 = {
//   args: {
//     level: '2',
//     heading: 'Level 2 Heading',
//     paragraphs: ['Related content'],
//   },
// };

// export const Level3 = {
//   args: {
//     level: '3',
//     heading: 'Level 3 Heading',
//     paragraphs: ['Related content'],
//   },
// };

/** title only, left aligned */
export const TitleOnly = {
  args: {
    level: "1",
    heading: "Level 1 Heading Only",
  },
};

/** a h2 followed by multiple p elements, left aligned */
export const MultipleParagraphs = {
  args: {
    heading: "Level 2 Heading",
    paragraphs: ["Related content", "and more related content"],
  },
};

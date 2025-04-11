// import {withDesign} from "storybook-addon-designs";
import "./atom-paragraph.css";
import { createBaseParagraph } from "./BaseParagraph";
// import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
  title: "Typography/Paragraph",
  component: "createBaseParagraph",
  tags: ["autodocs"],
  parameters: {
    // badges: [BADGE.BETA],
    docs: {
      description: {
        component:
          "The ```<p>``` <abbr>HTML</abbr> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.",
      },
    },
  },
  argTypes: {
    text: { control: "text" },
  },
};

const Template = ({ text, ...args }) => {
  return createBaseParagraph({ text, ...args });
};

export const Base = Template.bind({});
Base.args = {
  text: "This is a paragraph.",
};

Base.parameters = {
  // controls: { exclude: ['variant'] },
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=16%3A144&t=rsNgWdfYtt2CC04f-1",
  },
};

// Bringhurst
export const Bringhurst = Template.bind({});
Bringhurst.args = {
  text: "Bringhurst said line measure should be ca. 66 characters per line.",
};

Bringhurst.parameters = {
  docs: {
    description: {
      story:
        "> _Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal. For multiple column work, a better average is 40 to 50 characters_. See https://webtypography.net/2.1.2",
    },
  },
};

// multiple paragraphs
const MultiTemplate = ({ text1, text2, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  return `
    <p>${text1}</p>
    <p>${text2}</p>
  `;
  // return createBaseParagraph({ text, ...args });
};

export const TwoParas = MultiTemplate.bind({});
TwoParas.args = {
  text1:
    "The &lt;p&gt; <abbr>HTML</abbr> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but <abbr title='Hypertext Markup Language'>HTML</abbr> paragraphs can be any structural grouping of related content, such as images or form fields.",
  text2:
    'Paragraphs are block-level elements, and notably will <a href="#">automatically</a> close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
};

// const WithContainerWithBGColor = ({text1, text2, ...args}) => {
//   return `
//   <div class="container --bg-primary" style="padding: 24px;">
//   <p>${text1}</p>
//   <p>${text2}</p>
//   </div>
// `;
// };

// export const WithPrimaryColor = WithContainerWithBGColor.bind({});
// WithPrimaryColor.args = {
//     text1: 'The &lt;p&gt; HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
//     text2: 'Paragraphs are block-level elements, and notably will <a href="#">automatically</a> close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
// };

// const WithContainerWithSecondary = ({text1, text2, ...args}) => {
//   return `
//   <div class="container --bg-secondary" style="padding: 24px;">
//   <p>${text1}</p>
//   <p>${text2}</p>
//   </div>
// `;
// };

// export const WithSecondaryColor = WithContainerWithSecondary.bind({});
// WithSecondaryColor.args = {
//     text1: 'The &lt;p&gt; HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
//     text2: 'Paragraphs are block-level elements, and notably will <a href="#">automatically</a> close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
// };

// const WithTertiaryBG = ({text1, text2, ...args}) => {
//   return `
//   <div class="container --bg-tertiary" style="padding: 24px;">
//   <p>${text1}</p>
//   <p>${text2}</p>
//   </div>
// `;
// };

// export const WithTertiaryColor = WithTertiaryBG.bind({});
// WithTertiaryColor.args = {
//     text1: 'The &lt;p&gt; HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
//     text2: 'Paragraphs are block-level elements, and notably will <a href="#">automatically</a> close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
// };

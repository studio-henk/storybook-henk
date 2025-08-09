
import type { Meta, StoryObj } from '@storybook/html';
import { createBaseParagraph, BaseParagraphOptions } from './Paragraph';

const meta: Meta<BaseParagraphOptions> = {
    title: 'Components/Paragraph',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'The ```<p>``` <abbr>HTML</abbr> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
            },
        },
    },
    argTypes: {
        text: { control: 'text' },
        variant: { control: 'text' },
    },
    render: ({ text, variant }) => createBaseParagraph({ text, variant }),
};

export default meta;

type ParagraphStory = StoryObj<BaseParagraphOptions>;

export const Base: ParagraphStory = {
    args: {
        text: 'This is a paragraph.',
    },
    parameters: {
        docs: {
            description: {
                story:
                    'Represents the **default paragraph** style used for body text. It reflects the base *font size*, *weight*, and *line height* defined in the typography scale, and is suitable for general content across the UI.',
            },
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/JMl8SVdoCbQWqgWYrN6lD4/HENK-DS?node-id=4180-10676&t=BpmTZZxfDyyVVOo0-1',
        },
    },
};

export const Link: ParagraphStory = {
    args: {
        text: "This is a <a href='#'>paragraph with a link</a>.",
    },
};

export const Bringhurst: ParagraphStory = {
    args: {
        text:
            'Bringhurst said line measure should be ca. 66 characters per line.',
    },
    parameters: {
        docs: {
            description: {
                story:
                    '> Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal. For multiple column work, a better average is 40 to 50 characters_. See https://webtypography.net/2.1.2',
            },
        },
    },
};

// Multiple paragraphs story - since your createBaseParagraph creates only one <p>, 
// here we directly return HTML string with two <p> elements:

const MultiParagraphTemplate = ({ text1, text2 }: { text1: string; text2: string }) => `
  <p>${text1}</p>
  <p>${text2}</p>
`;

type MultiParagraphArgs = {
    text1: string;
    text2: string;
};

export const TwoParagraphs: StoryObj<MultiParagraphArgs> = {
    render: MultiParagraphTemplate,
    args: {
        text1:
            'The &lt;p&gt; <abbr>HTML</abbr> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but <abbr title="Hypertext Markup Language">HTML</abbr> paragraphs can be any structural grouping of related content, such as images or form fields.',
        text2:
            'Paragraphs are block-level elements, and notably will <a href="#">automatically</a> close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
    },
};
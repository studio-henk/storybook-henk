// Headings.stories.ts

import { StoryObj } from '@storybook/html';
import { createHeadingElement, HeadingProps } from './Headings';

type HeadingStory = StoryObj<HeadingProps>;

export default {
    title: 'Typography/Headings',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The ```<h1>``` to ```<h6>``` HTML elements represent six levels of section headings. ```<h1>``` is the highest section level and ```<h6>``` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. All the levels come in font-weight normal, semibold and style italic.',
            },
        },
        controls: { exclude: ['tag'] },
    },
    render: ({ tag, text, weight = 'normal', style = 'normal' }) => {
        return createHeadingElement({ tag, text, weight, style }).outerHTML;
    },
};

export const Heading1: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1',
    },
};

export const Heading2: HeadingStory = {
    args: {
        tag: 'h2',
        text: 'Heading 2',
    },
};

export const Heading3: HeadingStory = {
    args: {
        tag: 'h3',
        text: 'Heading 3',
    },
};

export const Heading4: HeadingStory = {
    args: {
        tag: 'h4',
        text: 'Heading 4',
    },
};

export const Heading5: HeadingStory = {
    args: {
        tag: 'h5',
        text: 'Heading 5',
    },
};

export const Heading6: HeadingStory = {
    args: {
        tag: 'h6',
        text: 'Heading 6',
    },
};

export const Heading1Semibold: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1 Semibold',
        weight: 'semibold',
    },
};

export const Heading1Lineheight: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1 with much much much much much much more text to see how it flows over multiple lines',
    },
};

// export const Heading1Italic: HeadingStory = {
//     args: {
//         tag: 'h1',
//         text: 'Heading 1 Italic',
//         style: 'italic',
//     },
// };
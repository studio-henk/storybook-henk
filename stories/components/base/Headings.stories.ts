import { StoryObj } from '@storybook/html';

interface HeadingProps {
    tag: string;
    text: string;
    weight?: 'normal' | 'semibold';
    style?: 'normal' | 'italic';
}

type HeadingStory = StoryObj<HeadingProps>;

export default {
    title: 'Components/Base/Headings',
    tags: ['autodocs'],
    parameters: {
        // badges: [BADGE.BETA],
        docs: {
            description: {
                component: 'The ```<h1>``` to ```<h6>``` HTML elements represent six levels of section headings. ```<h1>``` is the highest section level and ```<h6>``` is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block. All the levels come in font-weight normal, semibold and style italic.',
            },
        },
        controls: { exclude: ['tag'] },
    },
    render: ({ tag, text, weight = 'normal', style = 'normal' }) => {        
        const classes: string[] = [];
        if (weight === 'semibold') classes.push('fw-500');
        if (style === 'italic') classes.push('fs-italic');
        const className = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
        return `<${tag}${className}>${text}</${tag}>`;
    },
};

// type HeadingStory = StoryObj<{ tag: string; text: string }>;

/** font-size: 31px on small screens, grows to 39px on 1728px screen and then grows on.<br>
 * line-height: 32px on small screens, grows to 48px on 1728px screen and then grows on.
 */
export const Heading1: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1',        
    },
};

/** font-size: 25px on small screens, grows to 31px on 1728px screen and then grows on.<br> 
 * line-height: 28px on small screens, grows to 39px on 1728px screen and then grows on.
*/
export const Heading2: HeadingStory = {
    args: {
        tag: 'h2',
        text: 'Heading 2',
    },
};

/** font-size: 20px on small screens, grows to 25px on 1728px screen and then grows on. */
export const Heading3: HeadingStory = {
    args: {
        tag: 'h3',
        text: 'Heading 3',
    },
};

/** font-size: 16px on small screens, grows to 20px on 1728px screen and then grows on. */
export const Heading4: HeadingStory = {
    args: {
        tag: 'h4',
        text: 'Heading 4',
    },
};

/** font-size: 16px on all screens. */
export const Heading5: HeadingStory = {
    args: {
        tag: 'h5',
        text: 'Heading 5',
    },
};

/** font-size: 16px on all screens. */
export const Heading6: HeadingStory = {
    args: {
        tag: 'h6',
        text: 'Heading 6',
    },
};

/** font-weight: 500. */
export const Heading1Semibold: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1',
        weight: 'semibold',
    },
};

/** font-style: italic. */
export const Heading1Italic: HeadingStory = {
    args: {
        tag: 'h1',
        text: 'Heading 1',
        weight: 'normal',
        style: 'italic',
    },
};
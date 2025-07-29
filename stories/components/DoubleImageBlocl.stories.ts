
import type { Meta, StoryObj, Decorator } from '@storybook/html';
import { createDoubleImageBlock, DoubleImageBlockProps } from './DoubleImageBlock';

// Decorator to wrap each story in a <section> tag (mimicking Shopify's DOM)
const withSectionWrapper: Decorator = (Story) => {
    const section = document.createElement('section');
    section.className = 'shopify-section';

    const storyHtml = Story();
    const fragment =
        typeof storyHtml === 'string'
            ? document.createRange().createContextualFragment(storyHtml)
            : storyHtml;

    section.appendChild(fragment);
    return section;
};

const meta: Meta<DoubleImageBlockProps> = {
    title: 'Sections/DoubleImageBlock',
    component: createDoubleImageBlock,
    decorators: [withSectionWrapper],
    tags: ['autodocs'],
    render: (args) => createDoubleImageBlock(args),
    argTypes: {
        reverseLayout: { control: 'boolean', description: 'Reverse layout order' },
        largeImage: { control: 'text', description: 'URL for large image' },
        largeImageUrl: { control: 'text', description: 'Link for large image' },
        largeImageNewTab: { control: 'boolean', description: 'Open large image link in new tab' },
        smallImage: { control: 'text', description: 'URL for small image' },
        smallImageUrl: { control: 'text', description: 'Link for small image' },
        smallImageNewTab: { control: 'boolean', description: 'Open small image link in new tab' },
    },
    args: {
        reverseLayout: false,
        largeImage: 'https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&height=1400&v=1753351591&width=1120',
        largeImageUrl: '',
        largeImageNewTab: false,
        smallImage: 'https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_40.avif?crop=center&height=998&v=1753351590&width=808',
        smallImageUrl: '',
        smallImageNewTab: false,
    },
};

export default meta;
export const Default: StoryObj<DoubleImageBlockProps> = {};
export const Reversed: StoryObj<DoubleImageBlockProps> = {
    args: {
        reverseLayout: true,
    },
};
export const WithLinks: StoryObj<DoubleImageBlockProps> = {
    args: {
        largeImageUrl: '#',
        largeImageNewTab: true,
        smallImageUrl: '#',
        smallImageNewTab: true,
    },
};

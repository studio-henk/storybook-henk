import type { Meta, StoryObj } from '@storybook/html';
import type { SectionHeaderProps } from './SectionHeader';
import { createSectionHeader } from './SectionHeader';
import codeLiquid from './henk-section-header.liquid?raw';
import { withSectionWrapper } from '@decorators/withSectionWrapper';

const meta: Meta = {
    title: 'Sections/SectionHeader',
    decorators: [withSectionWrapper],
    tags: ['autodocs'],
    render: (args) => createSectionHeader(args as SectionHeaderProps),
    parameters: {
        docs: {
            description: {
                component:
                    'This block should be used on top of pages with an h1 for the heading and h2 when used as a section between other sections.',
            },
        },
        controls: {},
        customCode: codeLiquid,
    },
    argTypes: {
        alignLeft: {
            control: { type: 'boolean' },
            description: 'Aligns the content to the left',
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        bgColor: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
        },
        id: {
            control: 'text',
            table: { disable: true },
        },
        caption: { control: 'text' },
        title: {
            control: 'text',
            name: 'title *',
            description: '**Required.** Heading text for the section.',
        },
        level: {
            control: { type: 'select' },
            options: ['1', '2', '3', 'display'],
        },
        content: { control: 'text' },
        buttonUrl: { control: 'text' },
        buttonText: { control: 'text' },
        buttonVariant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
        },
    },
    args: {
        alignLeft: false,
        bgColor: 'default',
        id: 'section-header-1',
        caption: 'This is a caption',
        title: 'Section Title',
        level: '2',
        content:
            '<p>This is some content inside the <a href="#">section</a> header.</p>',
        buttonUrl: 'https://example.com',
        buttonText: 'Click Me',
        buttonVariant: 'default',
    },
};

export default meta;

export const Default: StoryObj = {};

export const Primary: StoryObj = {
    args: {
        bgColor: 'primary',
        buttonVariant: 'secondary',
    },
    parameters: {
        docs: {
            description: {
                story: 'Black text color passes contrast test: AA.',
            },
        },
    },
};

export const Secondary: StoryObj = {
    args: {
        bgColor: 'secondary',
        buttonVariant: 'primary',
    },
};

export const Display: StoryObj = {
    args: {
        level: 'display'
    }
};
import type { Meta, StoryObj } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { createList, type CreateListOptions } from '@stories/List.ts';

const meta: Meta<CreateListOptions> = {
    title: 'Components/List',
    tags: ['autodocs'],
    decorators: [],
    render: (args) => createList(args),
    parameters: {
        docs: {
            description: {
                component: 'Unordered and Ordered Lists',
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'responsive',
        },
        // customCode: listCode,
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Items to be shown.',
        },
        listType: {
            control: { type: 'radio' },
            options: ['ul', 'ol'],
        },
        markerType: {
            control: { type: 'radio' },
            options: ['disc', 'checkmark', 'plus', 'min', 'em-dash', 'no-bullets'],
        },
    },
    args: {
        listType: 'ul',
        markerType: 'disc',
        items: ['item 1', 'item 2'],
    },
};

export default meta;

export const Default: StoryObj = {};

export const OrderedList: StoryObj = {
    args: {
        listType: 'ol',
        items: ['item 1', 'item 2', 'item 3'],
    },
};

export const Checkmarks: StoryObj = {
    args: {
        markerType: 'checkmark',
    },
};

export const EmDash: StoryObj = {
    args: {
        markerType: 'em-dash',
    },
};

export const NoBullets: StoryObj = {
    args: {
        markerType: 'no-bullets',
    },
};
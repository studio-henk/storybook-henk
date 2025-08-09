
import type { Meta, StoryObj } from '@storybook/html';
import { createLinkButton, LinkButtonProps } from './LinkButton';
// Import raw SVGs
import ChevronRight from "@assets/icons/icon-chevron-right.svg?raw";

const meta: Meta<LinkButtonProps> = {
    title: 'Components/LinkButton',
    tags: ['autodocs'],
    render: (args) => createLinkButton(args),
    argTypes: {
        href: {
            control: 'text',
            description: 'URL for the link button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '#' },
            },
        },
        label: {
            control: 'text',
            description: 'Button label text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
            },
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: 'Visual variant of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'tertiary' },
            },
        },
        size: {
            control: 'radio',
            options: ['small', 'large'],
            description: 'Size of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'large' },
            },
        },
        iconSvg: {
            control: false,
            description: 'Raw SVG markup for icon',
        },
        iconPosition: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Icon position relative to label',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button',
        },
        target: {
            control: 'text',
            description: 'Link target attribute',
        },
        title: {
            control: 'text',
            description: 'Title attribute',
        },
    },
    args: {
        href: '#',
        label: 'Label',
        variant: 'tertiary',
        iconPosition: 'left',
        disabled: false,
        size: 'large',
    },
};

export default meta;

type Story = StoryObj<LinkButtonProps>;

export const Default: Story = {};

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        label: 'Tertiary Button',
        variant: 'tertiary',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Button',
        disabled: true,
    },
};

export const WithIconRight: Story = {
    args: {
        label: 'Button with icon',
        iconSvg: ChevronRight,
        iconPosition: 'right',
        iconSize: 'small',
    },
};

export const Small: Story = {
    args: {
        label: 'Small Button',
        size: 'small',
        variant: 'secondary',
    },
};

export const SmallWithIconRight: Story = {
    args: {
        label: 'Small with icon',
        size: 'small',
        variant: 'secondary',
        iconSvg: ChevronRight,
        iconPosition: 'right',
        iconSize: 'small',
    },
};
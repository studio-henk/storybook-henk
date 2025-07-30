
import { fn } from '@storybook/test';
import { createLinkButton, LinkButtonProps } from './LinkButton';
// Import raw SVGs
import ArrowRight from '../assets/icons/icon-arrow-right.svg?raw';
import CloseDefault from '../assets/icons/icon-x.svg?raw';

export default {
    title: 'Components/LinkButton',
    tags: ['autodocs'],
    render: (args: LinkButtonProps) => createLinkButton(args),
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
            control: false, // hide raw SVG input from controls, use args directly
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
        onClick: { action: 'clicked' },
    },
    args: {
        href: '#',
        label: 'Label',
        variant: 'tertiary',
        iconPosition: 'left',
        disabled: false,
        size: 'large',
        onClick: fn(),
    },
};

export const Default = {};

export const Primary = {
    args: {
        label: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary = {
    args: {
        label: 'Secondary Button',
        variant: 'secondary',
    },
};


export const tertiary = {
    args: {
        label: 'Tertiary Button',
        variant: 'tertiary',
    },
};

export const Disabled = {
    args: {
        label: 'Disabled Button',
        disabled: true,
    },
};

export const WithIconRight = {
    args: {
        label: 'Button with icon',
        iconSvg: ArrowRight,
        iconPosition: 'right',
    },
};

export const Small = {
    args: {
        label: 'Small Button',
        size: 'small',
        variant: 'secondary',
    },
};

export const SmallWithIconRight = {
    args: {
        label: 'Small with icon',
        size: 'small',
        variant: 'secondary',
        iconSvg: ArrowRight,
        iconPosition: 'right',
    },
};

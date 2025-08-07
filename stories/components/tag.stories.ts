import type { Meta, StoryObj } from '@storybook/html';
import { createTag, type TagProps } from "./tag";
import TruckIcon from "@assets/icons/icon-truck.svg?raw";

const meta = {
    title: 'Components/Tag',
    tags: ['autodocs'],
    render: (args: TagProps) => createTag(args),
    argTypes: {
        label: {
            control: 'text',
            name: 'label *',
            description: '**Required.** Text content of the tag',
        },
        iconSvg: {
            control: 'text',
            description: 'Optional SVG icon to be displayed with the tag',
        },
        iconPosition: {
            control: { type: 'select' },
            options: ['left', 'right'],
            description: 'Position of the icon within the tag',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
            description: 'Visual style variant of the tag',
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'large'],
            description: 'Size of the tag',
        },
    },
    args: {
        label: 'Fast Delivery',
    },
} satisfies Meta<TagProps>;

export default meta;

type Story = StoryObj<TagProps>;

export const Default: Story = {
    args: {
        label: 'Fast Delivery',
    },
};

export const Primary: Story = {
    args: {
        label: 'Fast Delivery',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Fast Delivery',
        variant: 'secondary',
    },
};

export const Small: Story = {
    args: {
        label: 'Fast Delivery',
        size: 'small',
    },
};

export const WithIconLeft: Story = {
    args: {
        label: 'Fast Delivery',
        iconSvg: TruckIcon,
        iconPosition: 'left',
    },
};

export const SmallWithIconLeft: Story = {
    args: {
        label: 'Fast Delivery',
        iconSvg: TruckIcon,
        iconPosition: 'left',
        size: 'small',
        href: 'https://studio-henk.nl',
    },
};

export const Link: Story = {
    args: {
        label: 'Fast Delivery',
        variant: 'primary',
        href: 'https://studio-henk.nl',
    },
};

export const Outlined: Story = {
    args: {
        label: 'Fast Delivery',
        variant: 'outlined',
    },
};
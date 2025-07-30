
import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';
import { createButtonGroup } from './ButtonGroup';
import ShareIcon from '../assets/icons/icon-share.svg?raw';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta = {
    title: 'Components/ButtonGroup',
    tags: ['autodocs'],
    render: (args) => createButtonGroup(args),
    argTypes: {
        buttons: { control: 'object' },
        alignment: {
            control: { type: 'radio' },
            options: ['left', 'center', 'right', 'space-between', 'fill'],
        },
        fill: { control: 'boolean' },
    },
    args: { onClick: fn() },
    parameters: {
        docs: {
            description: {
                component:
                    'HENK follows the convention followed by the majority: Primary action on the right. See research: https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/',
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'responsive',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGroup: Story = {
    args: {
        buttons: [
            { label: 'Button 1', variant: 'secondary', buttonElement: 'a' },
            { label: 'Button 2', variant: 'primary', buttonElement: 'button' },
        ],
        fill: false,
    },
};

export const GroupAlignedLeft: Story = {
    args: {
        buttons: [
            { label: 'Button 1', variant: 'secondary', buttonElement: 'a' },
            { label: 'Button 2', variant: 'primary', buttonElement: 'button' },
        ],
        alignment: 'left',
        fill: false,
    },
};

export const GroupAlignedCenter: Story = {
    args: {
        buttons: [
            { label: 'Button 1', variant: 'secondary', buttonElement: 'a' },
            { label: 'Button 2', variant: 'primary', buttonElement: 'button' },
        ],
        alignment: 'center',
        fill: false,
    },
};

export const GroupAlignedSpaceBetween: Story = {
    args: {
        buttons: [
            { label: 'Button 1', variant: 'secondary', buttonElement: 'a' },
            { label: 'Button 2', variant: 'primary', buttonElement: 'button' },
        ],
        alignment: 'space-between',
        fill: false,
    },
};

export const FillContainerGroup: Story = {
    args: {
        buttons: [
            { label: 'Clear All', variant: 'secondary', buttonElement: 'a' },
            { label: 'Apply', variant: 'primary', buttonElement: 'button' },
        ],
        alignment: 'fill',
    },
};

export const FillContainerGroupMobile: Story = {
    args: {
        buttons: [
            { label: 'Clear All', variant: 'secondary', buttonElement: 'a' },
            { label: 'Apply', variant: 'primary', buttonElement: 'button' },
        ],
        alignment: 'fill',
    },
    parameters: {
        viewport: {
            defaultViewport: 'iphonex',
        },
    },
};

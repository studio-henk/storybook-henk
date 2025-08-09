import type { Meta, StoryObj } from '@storybook/html';
import { TheFooter, type TheFooterProps } from './TheFooter';
import { withSectionWrapper } from '@decorators/withSectionWrapper';

const meta = {
    title: 'Global/TheFooter',
    component: TheFooter,
    decorators: [withSectionWrapper],
    render: ({ bgColor }: TheFooterProps) => {
        const footer = TheFooter({ bgColor });
        return footer;
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'TheFooter component renders the site footer with multiple columns of navigational links, social badges, and a Trustpilot rating widget, providing users with easy access to key site sections and trust signals.',
            },
        },
    },
    // argTypes: {
    //     bgColor: {
    //         control: { type: 'select' },
    //         options: ['default', 'primary', 'secondary', 'tertiary'],
    //         table: {
    //             type: { summary: "select" },
    //             defaultValue: { summary: "default" },
    //         },
    //     },
    // },
  //   args: {
  //       bgColor: 'default',
  // },
} satisfies Meta<TheFooterProps>;

export default meta;

export const Default: StoryObj = {};

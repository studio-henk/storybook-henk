import type { Meta, StoryObj } from '@storybook/html';
import { TheFooter, type TheFooterProps } from './TheFooter';
import { withSectionWrapper } from '@decorators/withSectionWrapper';

const meta = {
  title: 'Global/TheFooter',
  component: TheFooter,
  decorators: [withSectionWrapper],
  render: (args: TheFooterProps) => {
    const footer = TheFooter(args);
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
} satisfies Meta<TheFooterProps>;

export default meta;

export const Default: StoryObj = {};

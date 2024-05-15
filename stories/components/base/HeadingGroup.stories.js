import { fn } from '@storybook/test';
import { createHeadingGroup } from './HeadingGroup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Base/HeadingGroup',
  tags: ['autodocs'],
  render: ({ heading, subheading, level, reverse, ...args }) => {
    return createHeadingGroup({ heading, subheading, level, reverse, ...args });
  },
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    reverse: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {
    reverse: false,
  },
};

export const Default = {
  args: {
    level: '1',
    heading: 'Primary Heading',
    subheading: 'Subheading',
  },
};

export const Reverse = {
  args: {
    level: '1',
    heading: 'Primary Heading',
    subheading: 'Subheading',
    reverse: true,
  },
};

export const Level2 = {
  args: {
    level: '2',
    heading: 'Level 2 Heading',
    subheading: 'Subheading',
  },
};

export const Level3 = {
  args: {
    level: '3',
    heading: 'Level 3 Heading',
    subheading: 'Subheading',
  },
};

export const TitleOnly = {
  args: {
    level: '1',
    heading: 'Level 1 Heading Only',
  },
};


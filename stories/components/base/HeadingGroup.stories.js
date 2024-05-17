import { fn } from '@storybook/test';
import { createHeadingGroup } from './HeadingGroup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Base/HeadingGroup',
  tags: ['autodocs'],
  render: ({ level, heading, paragraphs, reverse, ...args }) => {
    return createHeadingGroup({ level, heading, paragraphs, reverse, ...args });
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    heading: { control: 'text' },
    paragraphs: { control: 'array' },    
    reverse: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {
    paragraphs: [],
    reverse: false,
  },
};

/** The ```<hgroup>``` HTML element represents a heading and related content. It groups a single ```<h1>–<h6>``` element with one or more ```<p>```. */
export const Default = {
  args: {
    heading: 'Secondary Heading',
    paragraphs: ['Related content'],
  },
};

export const DefaultReverse = {
  args: {
    heading: 'Secondary Heading',
    paragraphs: ['Related content'],
    reverse: true,
  },
};

export const Level1 = {
  args: {
    level: '1',
    heading: 'Primary Heading',
    paragraphs: ['Related content'],
  },
};

export const Level2 = {
  args: {
    level: '2',
    heading: 'Level 2 Heading',
    paragraphs: ['Related content'],
  },
};

export const Level3 = {
  args: {
    level: '3',
    heading: 'Level 3 Heading',
    paragraphs: ['Related content'],
  },
};

export const TitleOnly = {
  args: {
    level: '1',
    heading: 'Level 1 Heading Only',
  },
};

export const MultipleParagraphs = {
  args: {
    heading: 'Level 2 Heading',
    paragraphs: ['Related content', 'and more related content'],
  },
};
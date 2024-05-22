// sectionHeader.stories.js

import { createSectionHeader } from './SectionHeader';

export default {
  title: 'Components/SectionHeader',
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'tertiary', 'highlight'],
    },
    id: { control: 'text' },
    byline: { control: 'text' },
    title: { control: 'text' },
    level: {
      control: { type: 'select' },
      options: ['1', '2'],
    },
    content: { control: 'text' },
    buttonUrl: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

const Template = (args) => createSectionHeader(args);

export const Default = Template.bind({});
Default.args = {
  bgColor: 'default',
  id: 'section-header-1',
  byline: 'This is a byline',
  title: 'Section Title',
  level: 2,
  content: '<p>This is some content inside the section header.</p>',
  buttonUrl: 'https://example.com',
  buttonText: 'Click Me',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  bgColor: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  bgColor: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Default.args,
  bgColor: 'tertiary',
}

export const Highlight = Template.bind({});
Highlight.args = {
  ...Default.args,
  bgColor: 'highlight',
}

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  ...Default.args,
  buttonUrl: '',
  buttonText: '',
};
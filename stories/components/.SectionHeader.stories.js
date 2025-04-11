// sectionHeader.stories.js

import { createSectionHeader } from "./SectionHeader";

export default {
  title: "Components/SectionHeader",
  component: createSectionHeader,
  tags: ["autodocs"],
  parameters: {
    controls: { sort: "requiredFirst" },
  },
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary", "highlight"],
    },
    id: { control: "text" },
    byline: { control: "text" },
    title: { control: "text" },
    level: {
      control: { type: "select" },
      options: ["1", "2"],
    },
    content: { control: "text" },
    buttonUrl: { control: "text" },
    buttonText: { control: "text" },
    buttonVariant: {
      control: { type: "select" },
      options: ["default", "default-inverted"],
    },
  },
};

const Template = (args) => createSectionHeader(args);

export const Default = Template.bind({});
Default.args = {
  bgColor: "default",
  id: "section-header-1",
  byline: "This is a byline",
  title: "Section Title",
  level: 2,
  content:
    '<p>This is some content inside the <a href="#">section</a> header.</p>',
  buttonUrl: "https://example.com",
  buttonText: "Click Me",
  buttonVariant: "default",
};

// export const Primary = Template.bind({});
// Primary.args = {
//   ...Default.args,
//   bgColor: 'primary',

// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   ...Default.args,
//   bgColor: 'secondary',
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   ...Default.args,
//   bgColor: 'tertiary',
// }

// export const Highlight = Template.bind({});
// Highlight.args = {
//   ...Default.args,
//   bgColor: 'highlight',
// }

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  ...Default.args,
  buttonUrl: "",
  buttonText: "",
};

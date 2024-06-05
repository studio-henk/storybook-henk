import { fn } from '@storybook/test';
import { createButton } from './ButtonV2';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Base/Button/ButtonV2',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    buttonElement: {
      control: { type: 'radio' },
      options: ['a', 'button', 'span'],
      table: {
        type: { summary: 'html element' },
        defaultValue: { summary: 'a' },
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Variant of the button",
      table: { type: { summary: "string" }, defaultValue: { summary: "Default" } },
      control: "select",
      options: ["default", "primary", "secondary", "tertiary"],
    },
    label: { control: 'text' },
    onClick: { action: 'onClick' },    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Default = {
  args: {
    label: 'Button',
    variant: 'default',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary = {
  args: {
    label: 'Button',
    variant: 'tertiary',
  },
};

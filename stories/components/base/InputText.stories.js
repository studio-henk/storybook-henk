import { fn } from '@storybook/test';
import { createInput } from './InputText';


export default {
  title: 'Components/Base/Input/InputText',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createInput({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
  args: {
    label: 'Button',
    style: 'primary',
  },
};

export const Required = {
  args: {
    required: true,
    label: 'Button',
    style: 'secondary',
  },
};

export const Tertiary = {
  args: {
    label: 'Button',
    style: 'tertiary',
  },
};

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

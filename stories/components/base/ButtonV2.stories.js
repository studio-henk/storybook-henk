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
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    style: 'primary',
  },
};

export const Secondary = {
  args: {
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

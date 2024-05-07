// IconImage.stories.js

import { fn } from '@storybook/test';
import { createIconImage } from './IconImage';

export default {
  title: 'Components/IconImage',
  tags: ['autodocs'],
  render: ({ iconName, ...args }) => {
    // Create the IconImage element with the given iconName
    return createIconImage({ iconName, ...args });
  },
  argTypes: {
    iconName: { control: 'text' }, // Control to input the iconName
  },
};

// Define stories with different props
export const Default = {
  args: {
    iconName: 'icon-share', // Default icon name
  },
};

export const Truck = {
  args: {
    iconName: 'icon-truck', // Custom icon name
  },
};

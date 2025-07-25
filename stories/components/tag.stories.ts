import type { Meta, StoryObj } from '@storybook/html';
import { createTag } from "./tag";
import TruckIcon from "../assets/icons/icon-truck.svg?raw";
// import type { Meta } from '@storybook/html';


const meta = {
  title: 'Components/Tag',
  tags: ['autodocs'],
  render: ({ label, ...args }) => createTag({ label, ...args }),
  argTypes: {
    label: {
      control: 'text',
      name: 'label *',
      description: '**Required.** Text content of the tag',
    },
    iconSvg: {
      control: 'text',
      description: 'Optional SVG icon to be displayed with the tag',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon within the tag',
    },
    variant: {
      control: { type: 'select' },
      options: ['highlight'],
      description: 'Visual style variant of the tag',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Size of the tag',
    },
  },
  args: {
    label: 'Fast Delivery',
  },
} satisfies Meta;

export default meta;

// --- Stories ---
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Fast Delivery',
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Fast Delivery',
    iconSvg: TruckIcon,
    iconPosition: 'left',
  },
};
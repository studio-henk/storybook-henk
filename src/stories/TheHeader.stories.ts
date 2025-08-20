import type { Meta, StoryObj } from "@storybook/html";
import { createHeader, type HeaderProps } from "./TheHeader";
import { withSectionWrapper } from '@decorators/withSectionWrapper';

const meta = {
  title: "Global/Header",
  tags: ["autodocs"],
  decorators: [withSectionWrapper],
  render: (args: HeaderProps) => createHeader(args),
  argTypes: {
    title: {
      control: "text",
      description: "Fallback title if logo is not provided",
    },
  },
  args: {
    logoProps: { variant: "default", href: "/" },
  },
} satisfies Meta<HeaderProps>;

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {};

export const WithCartCountBadge: Story = {
  args: {
    cartCount: 3,
  },
};

export const InvertedLogo: Story = {
  args: {
    logoProps: {
      variant: "default-inverted",
      href: "/",
    },
  },
};

export const PrimaryLogo: Story = {
  args: {
    logoProps: {
      variant: "primary",
      href: "/",
    },
  },
};

export const SecondaryLogo: Story = {
  args: {
    logoProps: {
      variant: "secondary",
      href: "/",
    },
  },
};
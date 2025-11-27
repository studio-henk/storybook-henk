import type { Meta, StoryObj } from "@storybook/html";
import { TextLink, TextLinkProps } from "@stories/base/TextLink";
import ChevronRight from "@assets/icons/feather-chevron-right.svg?raw";
import IconChevronLeft from "@assets/icons/feather-chevron-left.svg?raw";

const meta: Meta<TextLinkProps> = {
  title: "Base/TextLink",
  tags: ["autodocs"],
  render: (args) => TextLink(args),
  argTypes: {
    label: { control: "text" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<TextLinkProps>;

export const Default: Story = {
  args: {
    label: "inline text link",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "With Left Icon",
    iconSvg: IconChevronLeft,
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "With Right Icon",
    iconSvg: ChevronRight,
    iconPosition: "right",
    iconSize: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};

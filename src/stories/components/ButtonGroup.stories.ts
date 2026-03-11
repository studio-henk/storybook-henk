import type { Meta, StoryObj } from "@storybook/html-vite";
import { createButtonGroup } from "@components/ButtonGroup";
import type { ButtonGroupProps } from "@components/ButtonGroup";

import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta: Meta<ButtonGroupProps> = {
  title: "Components/ButtonGroup",
  tags: ["autodocs", "deprecated"],
  render: (args: ButtonGroupProps) => createButtonGroup(args),
  argTypes: {
    buttons: { control: "object" },
    alignment: {
      control: { type: "radio" },
      options: ["left", "center", "right", "space-between"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "HENK follows the convention followed by the majority: Primary action on the right. See research: https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/",
      },
      tags: ["outdated"],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
};

export default meta;
type Story = StoryObj<ButtonGroupProps>;

export const DefaultGroup: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
  },
};

export const GroupAlignedLeft: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "left",
  },
};

export const GroupAlignedCenter: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "center",
  },
};

export const GroupAlignedSpaceBetween: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "space-between",
  },
};

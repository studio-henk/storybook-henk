import type { Meta, StoryObj } from "@storybook/html";
import { createButtonGroup } from "./ButtonGroup";
import type { ButtonGroupProps } from "./ButtonGroup";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta: Meta<ButtonGroupProps> = {
  title: "Components/Composites/ButtonGroup",
  tags: ["autodocs"],
  render: (args: ButtonGroupProps) => createButtonGroup(args),
  argTypes: {
    buttons: { control: "object" },
    alignment: {
      control: { type: "radio" },
      options: ["left", "center", "right", "space-between", "fill"],
    },
    fill: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "HENK follows the convention followed by the majority: Primary action on the right. See research: https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/",
      },
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
    fill: false,
  },
};

export const GroupAlignedLeft: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "left",
    fill: false,
  },
};

export const GroupAlignedCenter: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "center",
    fill: false,
  },
};

export const GroupAlignedSpaceBetween: Story = {
  args: {
    buttons: [
      { label: "Button 1", variant: "secondary", href: "#" },
      { label: "Button 2", variant: "primary", href: "#" },
    ],
    alignment: "space-between",
    fill: false,
  },
};

// export const TertiaryPrimaryAlignedRight: Story = {
//     args: {
//         buttons: [
//             { label: 'Button 1', variant: 'tertiary', href: '#' },
//             { label: 'Button 2', variant: 'primary', href: '#' },
//         ],
//         fill: false,
//     },
// };

// export const TertiarySecondaryAlignedRight: Story = {
//     args: {
//         buttons: [
//             { label: 'Button 1', variant: 'tertiary', href: '#' },
//             { label: 'Button 2', variant: 'secondary', href: '#' },
//         ],
//         fill: false,
//     },
// };

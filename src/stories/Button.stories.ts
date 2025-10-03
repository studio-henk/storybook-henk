import type { Meta, StoryObj } from "@storybook/html";
import { createButton, ButtonProps } from "./Button";

// Import raw SVGs
import ChevronRight from "@assets/icons/icon-chevron-right-thick.svg?raw";
// import ChevronDown from "@assets/icons/icon-chevron-down.svg?raw";
// import IconClose from "@assets/icons/icon-x.svg?raw";
import IconClose from "@assets/icons/icon-close.svg?raw";

const meta: Meta<ButtonProps> = {
  title: "Components/Base/Button",
  tags: ["autodocs"],
  render: (args) => createButton(args),
  argTypes: {
    element: {
      control: "select",
      options: ["button", "a", "span"],
      description: "Underlying HTML element",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Button type attribute (only for <button>)",
      if: { arg: "element", eq: "button" }, // Storybook conditional control
    },
    label: { control: "text", description: "Button label text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "ghost"],
      description: "Visual variant",
    },
    size: {
      control: "radio",
      options: ["small", "large"],
      description: "Button size",
    },
    iconSvg: { control: false, description: "Raw SVG markup for icon" },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Icon position",
    },
    iconSize: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Icon size",
    },
    disabled: { control: "boolean", description: "Disable the button" },
    title: { control: "text", description: "Title attribute" },
    href: {
      control: "text",
      description: "Href for anchor buttons (only for <a>)",
      if: { arg: "element", eq: "a" },
    },
    target: {
      control: "text",
      description: "Target for anchor buttons (only for <a>)",
      if: { arg: "element", eq: "a" },
    },
  },
  args: {
    element: "button",
    label: "Label",
    variant: "tertiary",
    size: "large",
    iconPosition: "left",
    disabled: false,
    type: "button",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Primary: Story = {
  args: { label: "Primary Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Secondary Button", variant: "secondary" },
};

export const Tertiary: Story = {
  args: { label: "Tertiary Button", variant: "tertiary" },
};

export const WithIconRight: Story = {
  args: {
    label: "Button with icon",
    iconSvg: ChevronRight,
    iconPosition: "right",
  },
};

export const Ghost: Story = {
  args: { label: "Ghost Button", variant: "ghost" },
};

export const GhostIcon: Story = {
  args: {
    label: "Ghost Button",
    variant: "ghost",
    iconPosition: "right",
    iconSvg: ChevronRight,
  },
};

export const GhostSmall: Story = {
  args: { label: "Ghost Button", variant: "ghost", size: "small" },
};

export const GhostSmallIcon: Story = {
  args: {
    label: "Ghost Button",
    variant: "ghost",
    size: "small",
    iconPosition: "right",
    iconSvg: ChevronRight,
  },
};

export const Disabled: Story = {
  args: { label: "Disabled Button", disabled: true },
};

export const Small: Story = {
  args: { label: "Small Button", size: "small", variant: "secondary" },
};

export const SmallWithIconRight: Story = {
  args: {
    label: "Small with icon",
    size: "small",
    variant: "secondary",
    iconSvg: ChevronRight,
    iconPosition: "right",
  },
};

export const LinkButton: Story = {
  args: {
    element: "a",
    label: "Go to link",
    href: "/path",
    variant: "primary",
  },
};

export const IconButton: Story = {
  args: {
    element: "button",
    label: "",
    type: "button",
    variant: "primary",
    iconSvg: ChevronRight,
    iconOnly: true,
    ariaLabel: "Go to next slide",
  },
};

export const IconButtonGhost: Story = {
  args: {
    element: "button",
    label: "",
    type: "button",
    variant: "ghost",
    iconSvg: ChevronRight,
    iconOnly: true,
    ariaLabel: "Go to next slide",
  },
};

export const IconButtonSmall: Story = {
  args: {
    element: "button",
    label: "",
    type: "button",
    variant: "primary",
    size: "small",
    iconSvg: ChevronRight,
    iconOnly: true,
    ariaLabel: "Go to next slide",
  },
};

export const IconButtonSmallGhost: Story = {
  args: {
    element: "button",
    label: "",
    type: "button",
    variant: "ghost",
    size: "small",
    iconSvg: ChevronRight,
    iconOnly: true,
    ariaLabel: "Go to next slide",
  },
};

export const CloseButton: Story = {
  args: {
    element: "button",
    label: "CLOSE",
    type: "button",
    variant: "ghost",
    iconSvg: IconClose,
  },
};

export const CloseButtonSmall: Story = {
  args: {
    element: "button",
    label: "CLOSE",
    type: "button",
    variant: "ghost",
    size: "small",
    iconSvg: IconClose,
  },
};

// export const Expand: Story = {
//   args: {
//     element: "button",
//     label: "Open me!",
//     type: "button",
//     variant: "ghost",
//     size: "small",
//     iconSvg: ChevronDown,
//     iconPosition: "right",
//     attrs: {
//       "aria-expanded": "false",
//       "data-js-expand": "true",
//       "data-state": "closed",
//     },
//   },
// };

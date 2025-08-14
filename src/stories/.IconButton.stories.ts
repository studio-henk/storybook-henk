import { fn } from "@storybook/test";
import { createIconButton } from "./IconButton.js";
// Import the raw SVG
import ArrowRight from "../assets/icons/icon-arrow-right.svg?raw";
import CloseDefault from "../assets/icons/icon-x.svg?raw";

export default {
  title: "Components/IconButton",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createIconButton({ label, ...args });
  },
  argTypes: {
    buttonElement: {
      control: { type: "radio" },
      options: ["a", "button", "span"],
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Default" },
      },
      control: "select",
      options: ["outline", "primary", "minimal"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
    label: {
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Share" },
      },
    },
    isLoading: { control: "boolean" },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "large" },
      },
    },
    onClick: { action: "onClick" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    buttonElement: "a",
    label: "Close",
    iconSvg: CloseDefault,
    iconSize: "large"
  },
};

export const Default = {}
// export const Outline = {
//   args: {
//     label: "Close",
//     buttonElement: "a",
//     variant: "outline",
//     iconSvg: CloseDefault,
//     iconPosition: "left",
//     iconSize: "large",
//   },
// };

// export const DefaultAsButton = {
//   args: {
//     label: "Button",
//     buttonElement: "button",
//     iconSvg: CloseDefault,
//     iconPosition: "left",
//     iconSize: "large",
//   },
// };

export const Primary = {
  args: {
    label: "Button",
    variant: "primary",
    iconSvg: CloseDefault,
    iconPosition: "left",
    iconSize: "large",
  },
};

export const Secondary = {
  args: {
    label: "Button",
    variant: "secondary",
    iconSvg: CloseDefault,
    iconPosition: "left",
    iconSize: "large",
  },
};

export const Tertiary = {
  args: {
    label: "Button",
    variant: "tertiary",
    iconSvg: CloseDefault,
    iconPosition: "left",
    iconSize: "large",
  },
};

export const Disabled = {
  args: {
    label: "Button",
    disabled: true,
    iconSvg: CloseDefault,
    iconPosition: "left",
    iconSize: "large",
  },
};

export const Small = {
  args: {
    label: "Small Button",
    size: "small",
    iconSvg: CloseDefault,
    iconPosition: "left",
    iconSize: "small",
  },
};

// export const Medium = {
//   args: {
//     label: "Medium Button",
//     variant: "secondary",
//     size: "medium",
//     iconSvg: CloseDefault,
//     iconPosition: "left",
//     iconSize: "medium",
//   },
// };

// export const Minimal = {
//   args: {
//     label: "Close",
//     buttonElement: "a",
//     variant: "minimal",
//     iconSvg: CloseDefault,
//     iconPosition: "left",
//     iconSize: "large",
//   },
// };

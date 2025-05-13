import { fn } from "@storybook/test";
import { createTextLink } from "./TextLink.js";
// Import the raw SVG
import ShareIcon from "../assets/icons/icon-share.svg?raw";
import ArrowLeft from "../assets/icons/icon-arrow-left.svg?raw";
import ArrowRight from "../assets/icons/icon-arrow-right.svg?raw";
import CloseDefault from "../assets/icons/icon-x.svg?raw";

export default {
  title: "Components/TextLink",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createTextLink({ label, ...args });
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
      options: ["primary", "secondary", "tertiary", "link", "transparent"],
    },
    size: {
      control: { type: "radio" },
      options: ["regular", "small"],
    },
    label: { control: "text" },
    isLoading: { control: "boolean" },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "onClick" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const WithIconLeft = {
  args: {
    label: "Button text",
    variant: "secondary",
    buttonElement: "a",
    iconSvg: ArrowLeft,
    iconPosition: "left",
  },
};

export const WithIconRight = {
  args: {
    label: "Button text",
    variant: "secondary",
    buttonElement: "a",
    iconSvg: ArrowRight,
    iconPosition: "right",
    iconSize: "large",
  },
};

export const Small = {
  args: {
    label: "Small Button",
    variant: "secondary",
    size: "small",
  },
};

export const SmallWithIconRight = {
  args: {
    label: "Small with icon",
    variant: "secondary",
    size: "small",
    buttonElement: "a",
    iconSvg: ArrowRight,
    iconPosition: "right",
    iconSize: "small",
  },
};

export const SmallWithIconLeftButton = {
  args: {
    label: "Small with icon",
    variant: "secondary",
    size: "small",
    buttonElement: "button",
    iconSvg: ArrowLeft,
    iconPosition: "left",
    iconSize: "small",
  },
};

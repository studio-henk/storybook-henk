import { fn } from "@storybook/test";
import { createButton } from "./Button.js";
// Import the raw SVG
import ShareIcon from "../../assets/icons/icon-share.svg?raw";

export default {
  title: "Components/Base/Button/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
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
      options: ["default", "primary", "secondary", "tertiary", "link"],
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

export const Default = {
  args: {
    label: "Button",
    buttonElement: "a",
  },
};

// export const DefaultAsButton = {
//   args: {
//     label: "Button",
//     buttonElement: "button",
//   },
// };

// export const DefaultInverted = {
//   args: {
//     label: "Button",
//     variant: "default-inverted",
//   },
// };

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

// export const Tertiary = {
//   args: {
//     label: "Button",
//     variant: "tertiary",
//   },
// };

export const OutlineLight = {
  args: {
    label: "Button",
    variant: "outline-light",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Disabled = {
  args: {
    label: "Button",
    variant: "default",
    disabled: true,
  },
};

// export const PrimaryDisabled = {
//   args: {
//     label: "Button",
//     variant: "primary",
//     disabled: true,
//   },
// };

export const WithIconLeft = {
  args: {
    label: "Button text",
    variant: "default",
    buttonElement: "a",
    iconSvg: ShareIcon,
    iconPosition: "left",
  },
};

export const WithIconRight = {
  args: {
    label: "Button text",
    variant: "default",
    buttonElement: "a",
    iconSvg: ShareIcon,
    iconPosition: "right",
  },
};

export const IconOnly = {
  args: {
    buttonElement: "button",
    variant: "default",
    label: "Share",
    title: "Share this page",
    iconSvg: ShareIcon,
    iconSize: "large",
    iconOnly: true,
    onClick: () => alert("Icon button clicked!"),
  },
  parameters: {
    controls: { exclude: ["iconPosition", "iconOnly"] },
  },
};

export const Loading = {
  args: {
    label: "Loading",
    variant: "default",
    isLoading: true,
  },
};

export const Small = {
  args: {
    label: "Small Button",
    variant: "default",
    size: "small",
  },
};

export const Link = {
  args: {
    label: "Link",
    variant: "link",
    buttonElement: "a",
    href: "#",
  },
};

export const LinkDisabled = {
  args: {
    label: "Link",
    variant: "link",
    buttonElement: "a",
    href: "#",
    disabled: true,
  },
};

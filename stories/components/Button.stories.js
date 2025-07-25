import { fn } from "@storybook/test";
import { createButton } from "./Button.js";
// Import the raw SVG
import ArrowRight from "../assets/icons/icon-arrow-right.svg?raw";
import CloseDefault from "../assets/icons/icon-x.svg?raw";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    buttonElement: {
      control: { type: "radio" },
      options: ["a", "button", "span"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "a" },
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "tertiary" },
      },
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "radio" },
      options: ["regular", "small"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "regular" },
      },
    },
    label: { 
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Label" },
      },
    },
    // isLoading: { control: "boolean" },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    // iconSize: {
    //   control: { type: "select" },
    //   options: ["small", "medium", "large"],
    // },
    onClick: { action: "onClick" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Default = {
  args: {
    label: "Label",
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

export const Disabled = {
  args: {
    label: "Button",
    disabled: true,
  },
};
// export const Tertiary = {
//   args: {
//     label: "Button",
//     variant: "tertiary",
//   },
// };

// export const OutlineLight = {
//   args: {
//     label: "Button",
//     variant: "outline-light",
//   },
//   parameters: {
//     backgrounds: { default: "dark" },
//   },
// };

// export const PrimaryDisabled = {
//   args: {
//     label: "Button",
//     variant: "primary",
//     disabled: true,
//   },
// };

// export const WithIconLeft = {
//   args: {
//     label: "Button text",
//     variant: "default",
//     buttonElement: "a",
//     iconSvg: ShareIcon,
//     iconPosition: "left",
//   },
// };

export const WithIconRight = {
  args: {
    label: "Button text",
    // variant: "default",
    buttonElement: "a",
    iconSvg: ArrowRight,
    iconPosition: "right",
    iconSize: "large",
  },
};

// export const IconOnly = {
//   args: {
//     buttonElement: "button",
//     variant: "default",
//     label: "Share",
//     title: "Share this page",
//     iconSvg: ShareIcon,
//     iconSize: "large",
//     iconOnly: true,
//     onClick: () => alert("Icon button clicked!"),
//   },
//   parameters: {
//     controls: { exclude: ["iconPosition", "iconOnly"] },
//   },
// };

// export const IconOnlyTransparent = {
//   args: {
//     buttonElement: "button",
//     variant: "transparent",
//     label: "Share",
//     title: "Share this page",
//     iconSvg: ShareIcon,
//     iconSize: "large",
//     iconOnly: true,
//     onClick: () => alert("Icon button clicked!"),
//   },
//   parameters: {
//     controls: { exclude: ["iconPosition", "iconOnly"] },
//   },
// };

// export const IconCloseOnlyTransparent = {
//   args: {
//     buttonElement: "button",
//     variant: "transparent",
//     label: "Close",
//     title: "Close this modal",
//     iconSvg: CloseDefault,
//     iconSize: "large",
//     iconOnly: true,
//     onClick: () => alert("Icon button clicked!"),
//   },
//   parameters: {
//     controls: { exclude: ["iconPosition", "iconOnly"] },
//   },
// };

// export const Loading = {
//   args: {
//     label: "Loading",
//     variant: "default",
//     isLoading: true,
//   },
// };

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

// export const IconOnlySmall = {
//   args: {
//     label: "Small Button",
//     variant: "default",
//     size: "small",
//     iconSvg: ShareIcon,
//     iconSize: "small",
//     iconOnly: true,
//   },
// };

// export const Link = {
//   args: {
//     label: "Link",
//     variant: "link",
//     buttonElement: "a",
//     href: "#",
//   },
// };

// export const LinkWithIcon = {
//   args: {
//     label: "Link",
//     variant: "link",
//     buttonElement: "a",
//     href: "#",
//     iconSvg: ArrowRight,
//     iconPosition: "right",
//     iconSize: "large",
//   },
// };

// export const LinkWithIconMedium = {
//   args: {
//     label: "Link",
//     variant: "link",
//     buttonElement: "a",
//     href: "#",
//     iconSvg: ArrowRight,
//     iconPosition: "right",
//     iconSize: "medium",
//   },
// };

// export const LinkWithIconSmall = {
//   args: {
//     label: "Link",
//     variant: "link",
//     buttonElement: "a",
//     href: "#",
//     iconSvg: ArrowRight,
//     iconPosition: "right",
//     iconSize: "small",
//   },
// };

// export const LinkDisabled = {
//   args: {
//     label: "Link",
//     variant: "link",
//     buttonElement: "a",
//     href: "#",
//     disabled: true,
//   },
// };

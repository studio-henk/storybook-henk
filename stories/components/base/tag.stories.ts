// tag.stories.ts
import { fn } from "@storybook/test";
import { createTag } from "./tag";
import ShareIcon from "../../assets/icons/icon-share.svg?raw"; // Import an icon
import TruckIcon from "../../assets/icons/icon-truck.svg?raw"; // Import an icon

export default {
  title: "Components/Base/Tag",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createTag({ label, ...args });
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text content of the tag",
      required: true,
    },
    iconSvg: {
      control: "text",
      description: "Optional SVG icon to be displayed with the tag",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the icon within the tag",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "highlight", "sustainability"],
      description: "Visual style variant of the tag",
    },
  },
  args: {
    label: "Fast Delivery",
    // iconSvg: TruckIcon, // Default icon
    // iconPosition: "left", // Default position of the icon
    variant: "default", // Default variant
  },
};

export const Default = {
  args: {
    label: "Fast Delivery",
  },
};

export const WithIconLeft = {
    args: {
      label: "Fast Delivery",
      iconSvg: TruckIcon, 
      iconPosition: "left",
    },
  };

export const WithIconRight = {
  args: {
    label: "Fast Delivery",
    iconSvg: TruckIcon, 
    iconPosition: "right",
  },
};

export const variantHighlight = {
  args: {
    label: "Fast Delivery",
    variant: "highlight",
    iconSvg: TruckIcon, 
    iconPosition: "left",
  },
};

export const variantSustainability = {
  args: {
    label: "Sustainable",
    variant: "sustainability",
    iconSvg: TruckIcon, 
    iconPosition: "left",
  },
};

export const Outlined = {
    args: {
      label: "Fast Delivery",
      variant: "outlined",
      iconSvg: TruckIcon, 
      iconPosition: "left",
    },
  };

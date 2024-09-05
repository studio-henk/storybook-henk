import { fn } from "@storybook/test";
import { createList } from "./list.js";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Base/List",
  tags: ["autodocs"],
  render: (args) => {
    return createList(args);
  },
  argTypes: {
    items: { control: "object", description: "Items to be shown." },
    listType: {
      control: { type: "radio" },
      options: ["ul", "ol"],
    },
    markerType: {
      control: { type: "radio" },
      options: ["disc", "checkmark", "plus", "min", "em-dash"],
    },
  },
  args: { listType: "ul", markerType: "disc" },
  parameters: {
    docs: {
      description: {
        component: "Unordered and Ordered Lists",
      },
    },
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "responsive",
    },
  },
};

export const DefaultList = {
  args: {},
};

export const OrderedList = {
  args: {
    items: ["item 1", "item 2", "item 3"],
    listType: "ol",
  },
};

export const Checkmarks = {
  args: {
    markerType: "checkmark",
  },
};

export const EmDash = {
  args: {
    markerType: "em-dash",
  },
};

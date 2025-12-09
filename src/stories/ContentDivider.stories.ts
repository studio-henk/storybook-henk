import type { Meta, StoryObj } from "@storybook/html";
import {
  createContentDivider,
  type CreateDividerProps,
} from "./ContentDivider";
import { withSectionWrapper } from "@decorators/withSectionWrapper";

const meta = {
  title: "Sections/ContentDivider",
  component: createContentDivider,
  decorators: [withSectionWrapper],
  render: ({ bgColor }: CreateDividerProps) => {
    const contentDivider = createContentDivider({ bgColor });
    return contentDivider;
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The ContentDivider component is a simple horizontal line that can be used to separate content.",
      },
    },
  },
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary"],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "default" },
      },
    },
  },
  args: {
    bgColor: "default",
  },
} satisfies Meta<CreateDividerProps>;

export default meta;

export const Default: StoryObj = {};

export const primary: StoryObj = {
  args: {
    bgColor: "primary",
  },
};

// export const Secondary: StoryObj = {
//     args: {
//         bgColor: 'secondary',
//     },
// };

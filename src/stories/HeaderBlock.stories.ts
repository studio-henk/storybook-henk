import type { Meta, StoryObj } from "@storybook/html-vite";
import type { HeaderBlockProps } from "./HeaderBlock";
import { HeaderBlock } from "./HeaderBlock";
// import codeLiquid from "../sections/henk-section-header.liquid?raw";
import { withSectionWrapper } from "@decorators/withSectionWrapper";

const meta: Meta = {
  title: "Components/HeaderBlock",
  decorators: [withSectionWrapper],
  tags: ["autodocs"],
  render: (args) => HeaderBlock(args as HeaderBlockProps),
  parameters: {
    docs: {
      description: {
        component: "Not a section, but a reusable block for sections",
      },
    },
    controls: {},
    // customCode: codeLiquid,
  },
  argTypes: {
    alignLeft: {
      control: { type: "boolean" },
      description: "Aligns the content to the left",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    bgColor: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    id: {
      control: "text",
      table: { disable: true },
    },
    caption: { control: "text" },
    title: {
      control: "text",
      name: "title *",
      description: "**Required.** Heading text for the section.",
    },
    level: {
      control: { type: "select" },
      options: ["1", "2", "3", "display"],
    },
  },
  args: {
    alignLeft: true,
    bgColor: "default",
    id: "section-header-1",
    caption: "This is a caption",
    title: "Section Title",
    level: "2",
  },
};

export default meta;

export const Default: StoryObj = {};

export const LeftAligned: StoryObj = {
  args: {
    alignLeft: true,
  },
};

export const Centered: StoryObj = {
  args: {
    alignLeft: false,
  },
};

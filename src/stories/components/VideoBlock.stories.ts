import type { Meta, StoryObj } from "@storybook/html";
import { VideoBlock } from "@components/VideoBlock";

const meta: Meta = {
  title: "Components/VideoBlock",
  render: (args) => VideoBlock(args),
  argTypes: {
    src: { control: "text", description: "Video source URL (.mp4 or .webm)" },
    poster: { control: "text", description: "Poster image before playback" },
    autoplay: { control: "boolean", description: "Autoplay when in view" },
    loop: { control: "boolean", description: "Loop playback" },
    className: {
      control: "text",
      description: "Custom class for video container",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: false,
    loop: true,
  },
};

export const AutoPlay: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: true,
    loop: true,
  },
};

export const Square: Story = {
  args: {
    src: "/assets/video/sh-rdam.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: true,
    loop: true,
    width: 1080,
    height: 1080,
  },
};

// "Video showing Studio HENK eettafel with the message ‘Eén HENK eettafel, één boom’"

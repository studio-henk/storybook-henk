// src/stories/VideoSection.stories.ts
import type { Meta, StoryObj } from "@storybook/html";
import { VideoSection } from "../components/VideoSection";

const meta: Meta = {
  title: "Sections/VideoSection",
  render: (args) => VideoSection(args),
  argTypes: {
    src: { control: "text", description: "Video source URL (.mp4 or .webm)" },
    poster: { control: "text", description: "Poster image shown before play" },
    autoplay: {
      control: "boolean",
      description: "Autoplay video when in view",
    },
    loop: { control: "boolean", description: "Loop video playback" },
    sectionClassName: {
      control: "text",
      description: "Custom class for section wrapper",
    },
  },
  parameters: {
    layout: "fullscreen", // ensures the section takes full width in Storybook canvas
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: true,
    loop: true,
    width: 1080,
  },
};

export const Cover: Story = {
  args: {
    src: "assets/video/sh-rdam.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: true,
    loop: true,
    width: 1080,
    cover: true,
  },
};

export const Description: Story = {
  args: {
    src: "assets/video/sh-rdam.mp4",
    poster: "https://via.placeholder.com/1280x720",
    autoplay: true,
    loop: true,
    width: 1080,
    cover: true,
    description:
      "Video showing Studio HENK's nieuwe winkel in Rotterdam met de booschap ‘Kom langs in onze nieuwe winkel’",
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-snippet-double-media.liquid?raw";

const sampleImage =
  "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif";

const sampleImageLarge = "/assets/slide-binnenkijker-2.webp";

const sampleVideo = "/assets/converstation_starters_campaign.mp4";

const renderDoubleMediaBlock = (args: any) => {
  return engine.parseAndRenderSync(snippet, {
    props: {
      title: args.title,
      text: args.text,
      heading_level: args.heading_level,
      reverse_layout: args.reverse_layout,

      large_media_type: args.large_media_type,
      large_image: args.large_image,
      large_media_url: args.large_media_url,
      large_media_new_tab: args.large_media_new_tab,
      large_video: args.large_video,
      large_media_has_audio: args.large_media_has_audio,
      video_poster_large: args.video_poster_large,

      small_media_type: args.small_media_type,
      small_image: args.small_image,
      small_media_url: args.small_media_url,
      small_media_new_tab: args.small_media_new_tab,
      small_video: args.small_video,
      small_media_has_audio: args.small_media_has_audio,
      video_poster_small: args.video_poster_small,

      bg_color: args.bg_color,
    },
    section: {
      id: "storybook-double-media",
    },
  });
};

const meta: Meta = {
  title: "Sections/DoubleMediaBlock",
  tags: ["autodocs"],
  render: renderDoubleMediaBlock,
  argTypes: {
    bg_color: {
      control: { type: "select" },
      options: [
        "default",
        "ivory",
        "off-white",
        "brown",
        "beige",
        "soft-blue",
        "blue",
        "gold",
        "green",
        "yellow",
      ],
    },
    reverse_layout: {
      control: "boolean",
    },
  },
  args: {
    title: "Double Media Brick title\ntwo rules",
    text: "",
    heading_level: "2",
    bg_color: "default",
    large_media_type: "image",
    large_image: sampleImageLarge,
    small_media_type: "image",
    small_image: sampleImage,
    reverse_layout: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Reverse: Story = {
  args: {
    reverse_layout: true,
  },
};

export const NoTitle: Story = {
  args: {
    title: "",
    reverse_layout: false,
  },
};

export const WithText: Story = {
  args: {
    title: "With text",
    reverse_layout: false,
    text: "<p>Hier ontdek je de materialen, voel je het vakmanschap en ervaar je hoe onze meubels een fundament leggen voor jouw manier van leven.</p>",
  },
};

export const VideoImage: Story = {
  args: {
    large_media_type: "video",
    large_video: sampleVideo,
    video_poster_large: sampleImage,
    small_media_type: "image",
    small_image: sampleImage,
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-snippet-splitscreen.liquid?raw";

const renderSplitscreen = (args: any) => {
  return engine.parseAndRenderSync(snippet, {
    props: {
      id: args.id,
      title: args.title,
      heading_level: args.heading_level,
      content: args.content,
      media_type: args.media_type,
      image_src: args.image_src,
      image_src_2: args.image_src_2,
      image_alt: args.image_alt,
      video_src: args.video_src,
      video_has_audio: args.video_has_audio,
      video_cover: args.video_cover,
      video_poster: args.video_poster,
      square: args.square,
      image_link: args.image_link,
      image_link_target_blank: args.image_link_target_blank,
      button_url: args.button_url,
      button_text: args.button_text,
      button_setmore: args.button_setmore,
      reverse: args.reverse,
      bg_color: args.bg_color,
    },
  });
};

const meta: Meta = {
  title: "Sections/Split Screen",
  render: (args) => renderSplitscreen(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component:
          "Split screen section rendered from a Shopify Liquid snippet.",
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description: "Section ID.",
    },
    title: {
      control: "text",
      description: "Section heading.",
    },
    heading_level: {
      control: { type: "select" },
      options: ["1", "2", "3"],
      description: "Heading level.",
    },
    content: {
      control: "text",
      description: "Content column HTML.",
    },
    media_type: {
      control: { type: "radio" },
      options: ["image", "video"],
      description: "Media type.",
    },
    image_src: {
      control: "text",
      description: "Image URL.",
    },
    image_src_2: {
      control: "text",
      description: "Optional second image URL.",
    },
    image_alt: {
      control: "text",
      description: "Image alt text.",
    },
    video_src: {
      control: "text",
      description: "Video source.",
    },
    video_has_audio: {
      control: "boolean",
    },
    video_cover: {
      control: "boolean",
    },
    video_poster: {
      control: "text",
    },
    square: {
      control: "boolean",
    },
    image_link: {
      control: "text",
    },
    image_link_target_blank: {
      control: "boolean",
    },
    button_url: {
      control: "text",
    },
    button_text: {
      control: "text",
    },
    button_setmore: {
      control: "boolean",
    },
    reverse: {
      control: "boolean",
    },
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
  },
  args: {
    id: "splitscreen-story",
    title: "Split screen title",
    heading_level: "2",
    content:
      "<p>This is an example of the split screen content.</p><p>It can contain multiple paragraphs.</p>",
    media_type: "image",
    image_src: "/assets/slide-binnenkijker-2.webp",
    image_src_2: "",
    image_alt: "Placeholder image",
    video_src: "",
    video_has_audio: false,
    video_cover: false,
    video_poster: "",
    square: false,
    image_link: "",
    image_link_target_blank: false,
    button_url: "/#",
    button_text: "Button text",
    button_setmore: false,
    reverse: false,
    bg_color: "default",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithBreakInTitle: Story = {
  args: {
    title: "First line\nSecond line",
    image_src: "/assets/slide-binnenkijker-2.webp",
    bg_color: "off-white",
  },
};

export const Reverse: Story = {
  args: {
    reverse: true,
    bg_color: "brown",
  },
};

export const TwoImages: Story = {
  args: {
    image_src_2: "/assets/slide-binnenkijker-4.webp",
    bg_color: "beige",
  },
};

export const WithoutButton: Story = {
  args: {
    button_url: "",
    button_text: "",
    bg_color: "soft-blue",
  },
};

export const Video: Story = {
  args: {
    media_type: "video",
    video_src: "/assets/converstation_starters_campaign.mp4",
    video_has_audio: false,
    video_cover: true,
    square: false,
    video_poster: "",
    bg_color: "blue",
  },
};

export const Gold: Story = {
  args: {
    title: "First line\nSecond line",
    heading_level: "1",
    bg_color: "gold",
  },
};

export const Green: Story = {
  args: {
    title: "First line\nSecond line",
    heading_level: "1",
    bg_color: "green",
  },
};

export const Yellow: Story = {
  args: {
    title: "First line\nSecond line",
    heading_level: "1",
    bg_color: "yellow",
  },
};

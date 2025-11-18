import type { Meta, StoryObj } from "@storybook/html";
import { HeroBlock, HeroBlockProps } from "@components/HeroBlock";

const meta: Meta<HeroBlockProps> = {
  title: "Sections/HeroBlock",
  tags: ["autodocs"],
  render: (args) => HeroBlock(args),
  argTypes: {
    type: {
      control: "select",
      options: ["image", "video"],
      description:
        "Determines whether the hero background is an image or video.",
    },
    src: {
      control: "text",
      description: "Source URL for image or video file.",
    },
    poster: {
      control: "text",
      description: "Poster image for video hero (optional).",
      if: { arg: "type", eq: "video" },
    },
    caption: {
      control: "text",
      description: "Small caption text above the title.",
    },
    title: {
      control: "text",
      description: "Main hero title text.",
    },
    text: {
      control: "text",
      description: "Supporting text or description below the title.",
    },
    className: {
      control: "text",
      description: "Additional CSS class names for the root element.",
    },
    button: {
      control: "object",
      description: "Button configuration (label, href, variant, etc).",
    },
  },
  args: {
    type: "image",
    src: "/assets/images/hero1.jpg",
    caption: "Welcome",
    title: "Explore Our Collection",
    text: "Discover the best products tailored for you.",
    button: {
      label: "Shop Now",
      href: "#",
      variant: "primary",
    },
  },
};

export default meta;
type Story = StoryObj<HeroBlockProps>;

export const Default: Story = {};

export const ImageHero: Story = {
  name: "Image Hero",
  args: {
    type: "image",
    src: "/assets/images/hero1.jpg",
    caption: "Timeless Style",
    title: "Modern Comfort, Classic Design",
    text: "A new season of effortless looks — crafted to last.",
    button: { label: "Shop the Collection", href: "#", variant: "primary" },
  },
};

export const VideoHero: Story = {
  name: "Video Hero",
  args: {
    type: "video",
    src: "/assets/video/sh-rdam.mp4",
    caption: "New Arrivals",
    title: "Fall/Winter 2025",
    text: "Experience craftsmanship in motion.",
    button: { label: "Explore Now", href: "#", variant: "secondary" },
  },
};

export const MinimalHero: Story = {
  name: "Minimal Hero (No Button)",
  args: {
    type: "image",
    src: "https://picsum.photos/1920/1080?grayscale",
    caption: "Simple and Clean",
    title: "Back to Basics",
    text: "",
    button: undefined,
  },
};

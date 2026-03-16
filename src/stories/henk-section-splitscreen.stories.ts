import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-splitscreen.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-splitscreen.liquid?raw";
import videoSnippetRaw from "../snippets/henk-video.liquid?raw";
import buttonSnippetRaw from "../snippets/henk-button.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-splitscreen", snippetRaw);
  (engine as any).registerPartial("henk-video", videoSnippetRaw);
  (engine as any).registerPartial("henk-button", buttonSnippetRaw);
} else if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-splitscreen"] = snippetRaw;
  (engine as any).__partials["henk-video"] = videoSnippetRaw;
  (engine as any).__partials["henk-button"] = buttonSnippetRaw;
}

const render = (args: any) => {
  return engine.parseAndRenderSync(cleanedSection, {
    section: { settings: args },
    routes: { root: "/" },
  });
};

const meta: Meta = {
  title: "Sections/Split Screen",
  render: (args) => render(args),
  tags: ["autodocs", "version:1.0.0"],
  argTypes: {
    id: { control: "text" },
    caption: { control: "text" },
    title: { control: "text" },
    heading_level: { control: "select", options: ["1", "2", "3"] },
    content: { control: "text" },
    media_type: { control: "select", options: ["image", "video"] },
    image_src: { control: "text" },
    image_alt: { control: "text" },
    image_link: { control: "text" },
    image_link_target_blank: { control: "boolean" },
    video_src: { control: "text" },
    video_poster: { control: "text" },
    video_has_audio: { control: "boolean" },
    video_cover: { control: "boolean" },
    rounded_corners: { control: "boolean" },
    square: { control: "boolean" },
    button_url: { control: "text" },
    button_text: { control: "text" },
    button_variant: {
      control: "select",
      options: ["default", "primary", "secondary", "transparent", "ghost"],
    },
    reverse: { control: "boolean" },
  },
  args: {
    id: "splits-default",
    caption: "ONZE MISSIE",
    title: "Een afvalvrije meubelindustrie",
    heading_level: "2",
    content:
      "<p>Als B Corp gebruiken wij de kracht van ons bedrijf om positieve verandering te bewerkstelligen. Het is onze missie om de meubelindustrie van binnenuit te hervormen en deze volledig afvalvrij te maken.</p>",
    media_type: "image",
    image_src: "/assets/ss-bcorp.avif",
    image_alt: "",
    image_link: "",
    image_link_target_blank: false,
    button_url: "#",
    button_text: "Lees meer",
    button_variant: "primary",
    reverse: false,
    video_has_audio: false,
    video_cover: false,
    rounded_corners: false,
    square: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const WithVideo: Story = {
  args: {
    id: "splits-video",
    media_type: "video",
    video_src: "/assets/sh-rdam.mp4",
    video_poster: "/assets/ss-bcorp.avif",
    video_has_audio: true,
    rounded_corners: true,
  },
};

export const Reversed: Story = {
  args: {
    reverse: true,
  },
};

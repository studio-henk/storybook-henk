import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import sectionRaw from "../sections/henk-section-media-scroller.liquid?raw";
import snippetRaw from "../snippets/henk-snippet-media-scroller.liquid?raw";
import cardSnippetRaw from "../snippets/henk-card.liquid?raw";
import tagSnippetRaw from "../snippets/henk-tag.liquid?raw";

const SCHEMA_RE = /\{%\s*schema\s*%\}[\s\S]*?\{%\s*endschema\s*%\}/i;
const cleanedSection = sectionRaw.replace(SCHEMA_RE, "");

if (typeof (engine as any).registerPartial === "function") {
  (engine as any).registerPartial("henk-snippet-media-scroller", snippetRaw);
  (engine as any).registerPartial("henk-card", cardSnippetRaw);
  (engine as any).registerPartial("henk-tag", tagSnippetRaw);
} else if ((engine as any).__partials) {
  (engine as any).__partials["henk-snippet-media-scroller"] = snippetRaw;
  (engine as any).__partials["henk-card"] = cardSnippetRaw;
  (engine as any).__partials["henk-tag"] = tagSnippetRaw;
}

const meta = {
  title: "Sections/Media Scroller",
  render: (args) => {
    const blocks = args.blocks || [];
    return engine.parseAndRenderSync(cleanedSection, {
      section: { blocks },
    });
  },
  tags: ["autodocs", "alpha"],
  args: {
    blocks: [
      {
        id: "block-1",
        settings: {
          image: "/assets/ss-bcorp.avif",
          image_alt: "",
          title: "Card title",
          text: "Short supporting text.",
          button_label: "Learn more",
          button_url: "#",
        },
      },
      {
        id: "block-2",
        settings: {
          image: "/assets/Our Stores@2x.avif",
          image_alt: "",
          title: "Second card",
          text: "Another short text.",
          button_label: "Read more",
          button_url: "#",
        },
      },
      {
        id: "block-3",
        settings: {
          image: "/assets/samplesservice2@2x.avif",
          image_alt: "",
          title: "card 3",
          text: "Another short text.",
          button_label: "Read more",
          button_url: "#",
        },
      },
      {
        id: "block-4",
        settings: {
          image: "/assets/studio-henk-interior-advice-2@2x.avif",
          image_alt: "",
          title: "Card title",
          text: "Short supporting text.",
          button_label: "Learn more",
          button_url: "#",
        },
      },
      {
        id: "block-5",
        settings: {
          image: "/assets/ss-bcorp.avif",
          image_alt: "",
          title: "card",
          text: "Another short text.",
          button_label: "Read more",
          button_url: "#",
        },
      },
      {
        id: "block-6",
        settings: {
          image: "/assets/studio-henk-interior-advice-2@2x.avif",
          image_alt: "",
          title: "card 6",
          text: "Another short text.",
          button_label: "Read more",
          button_url: "#",
        },
      },
    ],
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

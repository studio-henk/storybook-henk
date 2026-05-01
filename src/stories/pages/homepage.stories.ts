import type { Meta, StoryObj } from "@storybook/html";

import { renderPageContent, renderThemePage } from "./page-utils";
import homeTemplateRaw from "@templates/index.json?raw";
import threeColumnMeta, {
  USP as threeColumnUsp,
} from "../henk-three-column-block.stories";

const homeTemplate = JSON.parse(
  homeTemplateRaw.replace(/\/\*[\s\S]*?\*\//g, "").trimStart(),
);

const meta = {
  title: "Pages/Homepage",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: { control: "select", options: ["image", "video"] },
    image: { control: "text" },
    video: { control: "text" },
    video_has_audio: { control: "boolean" },
    video_poster: { control: "text" },
    caption: { control: "text" },
    title: { control: "text" },
    text: { control: "text" },
    button_label: { control: "text" },
    button_url: { control: "text" },
    button_variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "ghost"],
    },
    split_image_src: { control: "text" },
  },
  args: {
    type: "video",
    video: "/assets/converstation_starters_campaign.mp4",
    video_has_audio: true,
    video_poster: "ss-bcorp.avif",
    caption: "Voorjaarscollectie 2026",
    title: "Conversation Starters",
    text: "Sommige meubels doen meer dan er zijn. Ze brengen mensen samen en zetten iets in beweging. Een blik, een vraag, een gesprek dat vanzelf ontstaat.",
    button_label: "Ontdek de collectie",
    button_url: "#",
    button_variant: "secondary",
    split_image_src: "/assets/ss-bcorp.avif",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Home: Story = {
  render: (args) => {
    const heroSection = {
      ...homeTemplate.sections.henk_section_hero_PtWwbK,
      settings: {
        ...homeTemplate.sections.henk_section_hero_PtWwbK.settings,
        ...args,
      },
    };

    const splitscreenBaseSettings =
      homeTemplate.sections.henk_section_splitscreen_BaFKC9.settings;
    const splitscreenSection = {
      ...homeTemplate.sections.henk_section_splitscreen_BaFKC9,
      settings: {
        ...splitscreenBaseSettings,
        button_text:
          splitscreenBaseSettings.button_text ||
          splitscreenBaseSettings.button_label ||
          "Lees meer",
        button_url: splitscreenBaseSettings.button_url,
        button_variant: splitscreenBaseSettings.button_variant,
        image_src: args.split_image_src,
      },
    };

    const buildThreeColumnSection = (args: any) => {
      const { blocks = [], ...settings } = args || {};
      const blockOrder = blocks.map(
        (_: any, index: number) => `column_${index}`,
      );
      const blocksById = blocks.reduce(
        (acc: Record<string, any>, block: any, index: number) => {
          acc[`column_${index}`] = block;
          return acc;
        },
        {},
      );
      return {
        type: "henk-three-column-block",
        settings,
        blocks: blocksById,
        block_order: blockOrder,
      };
    };

    const uspArgs = (threeColumnUsp as { args?: any }).args || {};
    const threeColumnArgs = (threeColumnMeta as { args?: any }).args || {};

    const uspSection = buildThreeColumnSection(uspArgs);
    const threeColumnSection = buildThreeColumnSection(threeColumnArgs);

    const homeHero = {
      sections: {
        henk_section_hero_PtWwbK: heroSection,
        henk_three_column_block_dGiciX: uspSection,
        henk_three_column_block_VtURPr: threeColumnSection,
        henk_section_splitscreen_BaFKC9: splitscreenSection,
      },
      order: [
        "henk_section_hero_PtWwbK",
        "henk_three_column_block_dGiciX",
        "henk_three_column_block_VtURPr",
        "henk_section_splitscreen_BaFKC9",
      ],
    };

    const page = { title: "Home", content: "" };
    const contentForLayout = renderPageContent(homeHero, page, {
      assets_url: "/assets",
      routes: { root: "/" },
    });
    const rendered = renderThemePage({
      contentForLayout,
      page,
    });

    const template = document.createElement("template");
    template.innerHTML = rendered.trim();
    const scripts = Array.from(template.content.querySelectorAll("script"));
    const scriptBodies = scripts.map(
      (oldScript) => oldScript.textContent || "",
    );
    scripts.forEach((oldScript) => oldScript.remove());
    const root = template.content.firstElementChild as HTMLElement;
    if (scriptBodies.length > 0) {
      const runScripts = () => {
        if (!root || !root.isConnected) {
          requestAnimationFrame(runScripts);
          return;
        }
        scriptBodies.forEach((raw) => {
          const immediate = raw
            .replace(
              "document.addEventListener('DOMContentLoaded', function () {",
              "(function () {",
            )
            .replace(/\}\);\s*$/, "})();");
          try {
            // eslint-disable-next-line no-new-func
            new Function(immediate)();
          } catch (error) {
            console.error("Failed to run liquid script", error);
          }
        });
      };
      requestAnimationFrame(runScripts);
    }
    return root;
  },
};

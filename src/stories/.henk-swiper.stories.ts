import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import SwiperLiquid from "@src/snippets/henk-snippet-swiper.liquid?raw";
import cardSnippetRaw from "@src/snippets/henk-card.liquid?raw";
import tagSnippetRaw from "@src/snippets/henk-tag.liquid?raw";

const renderTestSnippet = (args: any) => {
  if (typeof (engine as any).registerPartial === "function") {
    (engine as any).registerPartial("henk-card", cardSnippetRaw);
    (engine as any).registerPartial("henk-tag", tagSnippetRaw);
  } else if ((engine as any).__partials) {
    (engine as any).__partials["henk-card"] = cardSnippetRaw;
    (engine as any).__partials["henk-tag"] = tagSnippetRaw;
  }
  const rendered = engine.parseAndRenderSync(SwiperLiquid, {
    blocks: args.blocks || [],
  });
  const template = document.createElement("template");
  template.innerHTML = rendered.trim();
  const root = template.content.firstElementChild as HTMLElement;
  const initSwiper = () => {
    if (!root || !root.isConnected) {
      requestAnimationFrame(initSwiper);
      return;
    }
    const swiperEl = root.querySelector("swiper-container") as any;
    if (!swiperEl) return;
    Object.assign(swiperEl, {
      slidesPerView: 1.25,
      initialSlide: 0,
      spaceBetween: 16,
      centeredSlides: false,
      loop: true,
      breakpoints: {
        768: { slidesPerView: 2.25 },
        1024: { slidesPerView: 3.25 },
        1440: { slidesPerView: 4 },
      },
      keyboard: { enabled: true, onlyInViewport: false },
    });
    if (typeof swiperEl.initialize === "function" && !swiperEl.initialized) {
      swiperEl.initialize();
    }
  };
  requestAnimationFrame(initSwiper);
  return root;
};

const meta: Meta = {
  title: "Snippets/Swiper",
  render: (args) => renderTestSnippet(args),
  tags: ["autodocs"],
  parameters: {
    customCode: SwiperLiquid,
    docs: {
      description: {
        component: "Test snippet written in Liquid",
      },
    },
  },
  args: {
    blocks: [
      {
        id: "block-1",
        settings: {
          image: "/assets/slide-banken.avif",
          image_alt: "",
          title: "banken",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-2",
        settings: {
          image: "/assets/slide-bureaus.avif",
          image_alt: "",
          title: "bureaus",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-3",
        settings: {
          image: "/assets/slide-collect-cabinet.avif",
          image_alt: "",
          title: "collect-cabinet",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-4",
        settings: {
          image: "/assets/slide-column-kast.avif",
          image_alt: "",
          title: "column-kast",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-5",
        settings: {
          image: "/assets/slide-dressoirs.avif",
          image_alt: "",
          title: "dressoirs",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-6",
        settings: {
          image: "/assets/slide-eettafelbanken.avif",
          image_alt: "",
          title: "eettafelbanken",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-7",
        settings: {
          image: "/assets/slide-eettafels.avif",
          image_alt: "",
          title: "eettafels",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-8",
        settings: {
          image: "/assets/slide-fauteuils.avif",
          image_alt: "",
          title: "fauteuils",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-9",
        settings: {
          image: "/assets/slide-krukken.avif",
          image_alt: "",
          title: "krukken",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-10",
        settings: {
          image: "/assets/slide-poefs.avif",
          image_alt: "",
          title: "poefs",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-11",
        settings: {
          image: "/assets/slide-salontafels.avif",
          image_alt: "",
          title: "salontafels",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-12",
        settings: {
          image: "/assets/slide-stoelen.avif",
          image_alt: "",
          title: "stoelen",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-13",
        settings: {
          image: "/assets/slide-vazen.avif",
          image_alt: "",
          title: "vazen",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-14",
        settings: {
          image: "/assets/slide-verlichting.avif",
          image_alt: "",
          title: "verlichting",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-15",
        settings: {
          image: "/assets/slide-wandkasten.avif",
          image_alt: "",
          title: "wandkasten",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
      {
        id: "block-16",
        settings: {
          image: "/assets/slide-wandplanken.avif",
          image_alt: "",
          title: "wandplanken",
          text: "",
          button_label: "",
          button_url: "#",
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

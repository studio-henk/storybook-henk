// HeroBlock.ts
import { VideoBlock } from "@components/VideoBlock";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import buttonSnippet from "@src/snippets/henk-button.liquid?raw";

export interface HeroBlockProps {
  id?: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title?: string;
  caption?: string;
  text?: string;
  button?: {
    label: string;
    href?: string;
    target?: string;
    variant?: "primary" | "secondary" | "tertiary" | "ghost";
  };
  className?: string;
}

const renderButton = (args) =>
  engine.parseAndRenderSync(buttonSnippet, {
    element: args.element,
    href: args.href,
    type: args.type,
    value: args.value,
    variant: args.variant,
    size: args.size,
    label: args.label,
    title: args.title,
    icon_name: args.icon_name,
    icon_position: args.icon_position,
    icon_only: args.icon_only,
    aria_label: args.aria_label,
    disabled: args.disabled,
    target: args.target,
    attrs: args.attrs,
    extra_classes: args.extra_classes,
  });

export function HeroBlock({
  id = "henk-hero",
  type,
  src,
  poster,
  title,
  caption,
  text,
  button,
  className = "",
}: HeroBlockProps): HTMLElement {
  const section = document.createElement("section");
  section.className = ["henk-hero", className].filter(Boolean).join(" ");
  section.id = id;

  const inner = document.createElement("div");
  inner.className = "henk-hero__inner";

  // Background (image or video)
  let bg: HTMLElement;
  if (type === "video") {
    bg = VideoBlock({
      src,
      poster,
      autoplay: true,
      loop: true,
      cover: true,
      className: "henk-hero__video",
    });
  } else {
    bg = document.createElement("img");
    bg.src = src;
    bg.alt = title || "Hero background";
    bg.className = "henk-hero__image";
  }

  // Content overlay
  const content = document.createElement("div");
  content.className = "henk-hero__content";

  if (caption) {
    const captionEl = document.createElement("p");
    captionEl.className = "henk-hero__caption";
    captionEl.textContent = caption;
    content.appendChild(captionEl);
  }

  if (title) {
    const titleEl = document.createElement("h1");
    titleEl.className = "henk-hero__title";
    titleEl.textContent = title;
    content.appendChild(titleEl);
  }

  if (text) {
    const textEl = document.createElement("p");
    textEl.className = "henk-hero__text";
    textEl.textContent = text;
    content.appendChild(textEl);
  }

  if (button) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderButton({
      element: "a",
      label: button.label,
      href: button.href,
      target: button.target,
      variant: button.variant || "primary",
      extra_classes: "henk-hero__button",
    });
    const btnEl = wrapper.firstElementChild;
    if (btnEl) {
      content.appendChild(btnEl);
    }
  }

  inner.appendChild(bg);
  inner.appendChild(content);
  section.appendChild(inner);

  return section;
}

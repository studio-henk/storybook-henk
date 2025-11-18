// HeroBlock.ts
import { VideoBlock } from "@components/VideoBlock";
import { createButton } from "@components/Button";

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
    const btnEl = createButton({
      element: "a",
      label: button.label,
      href: button.href,
      target: button.target,
      variant: button.variant || "primary",
    });
    btnEl.classList.add("henk-hero__button");
    content.appendChild(btnEl);
  }

  inner.appendChild(bg);
  inner.appendChild(content);
  section.appendChild(inner);

  return section;
}

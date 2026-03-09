// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import buttonSnippet from "@src/snippets/henk-button.liquid?raw";

export interface SectionHeaderProps {
  bgColor?: "default" | "primary" | "secondary";
  id?: string;
  caption?: string;
  title: string;
  level?: 1 | 2 | 3 | "display";
  content?: string;
  buttonUrl?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "tertiary" | "ghost";
  alignLeft?: boolean;
  buttonIcon?: string;
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

export const HeaderBlock = ({
  bgColor = "default",
  id = "",
  caption = "",
  title,
  level = 2,
  content = "",
  buttonUrl = "",
  buttonText = "",
  buttonVariant = "primary",
  alignLeft = false,
  buttonIcon,
}: SectionHeaderProps): HTMLElement => {
  const container = document.createElement("div");

  // Build class list
  const classList = [
    `henk-section henk-section-header`,
    bgColor !== "default" ? `henk-section-header--bg-${bgColor}` : "",
    alignLeft ? "henk-section-header--align-left" : "",
  ]
    .filter(Boolean)
    .join(" ");

  container.className = classList;
  if (id) container.id = id;

  const innerDiv = document.createElement("div");
  innerDiv.className = "henk-section-header__inner";

  const contentDiv = document.createElement("div");
  contentDiv.className = "henk-section-header__content";

  if (caption) {
    const captionP = document.createElement("p");
    captionP.className = "henk-section-header__caption";
    captionP.innerText = caption;
    contentDiv.appendChild(captionP);
  }

  // heading
  let headingTag: keyof HTMLElementTagNameMap = "h2";
  let titleClass = "henk-section-header__title";

  if (level === "display") {
    headingTag = "h1"; // or 'h1' if you prefer
    titleClass += " fs-display";
  } else {
    const headingLevel = Math.min(Math.max(level, 1), 3);
    headingTag = `h${headingLevel}` as keyof HTMLElementTagNameMap;
  }
  const titleElement = document.createElement(headingTag);
  titleElement.className = titleClass;
  titleElement.innerText = title;
  contentDiv.appendChild(titleElement);

  // if (content) {
  //     const contentFragment = document.createRange().createContextualFragment(content);
  //     contentDiv.appendChild(contentFragment);
  // }

  if (content) {
    const contentEl = document.createElement("div");
    contentEl.className = "henk-section-header__text";
    contentEl.innerHTML = content;
    contentDiv.appendChild(contentEl);
  }

  if (buttonUrl && buttonText) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderButton({
      element: "a",
      href: buttonUrl,
      label: buttonText,
      variant: buttonVariant,
      size: "large",
      icon_name: buttonIcon,
      extra_classes: "henk-section-header__button",
    });
    const buttonEl = wrapper.firstElementChild;
    if (buttonEl) {
      contentDiv.appendChild(buttonEl);
    }
  }

  innerDiv.appendChild(contentDiv);
  container.appendChild(innerDiv);

  return container;
};

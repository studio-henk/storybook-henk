// import "@assets/_henk-text-link.css";

export type TextLinkProps = {
  textElement?: "a" | "span";
  href?: string;
  variant?: string;
  label: string;
  title?: string;
  iconSvg?: string;
  iconPosition?: "left" | "right";
  iconSize?: "small" | "medium" | "large";
  target?: string;
  size?: "small" | "medium" | "large";
};

export const TextLink = ({
  textElement = "a",
  href,
  variant,
  label,
  title,
  iconSvg,
  iconPosition,
  iconSize = "large",
  target,
  size,
}: TextLinkProps): HTMLAnchorElement | HTMLSpanElement => {
  const el = document.createElement(textElement);

  if (textElement === "a") {
    (el as HTMLAnchorElement).href = href ?? "#";
    if (target) el.setAttribute("target", target);
  }

  if (textElement === "span") {
    el.setAttribute("role", "presentation");
  }

  // --- Icon logic ---
  const shouldRenderIcon =
    iconSvg && (iconPosition === "left" || iconPosition === "right");
  const iconHtml = shouldRenderIcon
    ? `<i class="henk-icon icon--${iconSize}">${iconSvg}</i>`
    : "";

  el.innerHTML =
    shouldRenderIcon && iconPosition === "left"
      ? `${iconHtml} ${label}`
      : shouldRenderIcon && iconPosition === "right"
        ? `${label} ${iconHtml}`
        : label;

  // --- Class names ---
  const classNames = ["henk-text-link"];
  if (variant) classNames.push(`henk-text-link--${variant}`);
  if (size) {
    classNames.push(`henk-text-link--${size}`);
    if (size === "small") classNames.push("fs-small");
  }

  el.className = classNames.join(" ");

  if (title) el.title = title;

  return el;
};

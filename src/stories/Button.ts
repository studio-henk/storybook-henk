export type IconPosition = "left" | "right";
export type IconSize = "small" | "medium" | "large";
export type ButtonElement = "a" | "button" | "span";

export interface ButtonProps {
  element?: ButtonElement;
  href?: string;
  type?: "button" | "submit" | "reset"; // only for button element
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  label: string;
  title?: string;
  iconSvg?: string;
  iconPosition?: IconPosition;
  iconSize?: IconSize;
  iconOnly?: boolean;
  disabled?: boolean;
  target?: string;
  size?: "small" | "large";

  attrs?: Record<string, string>;
}

export const createButton = ({
  element = "button",
  href,
  type,
  variant,
  label,
  title,
  iconSvg = "",
  iconPosition = "left",
  iconSize,
  iconOnly = false,
  disabled = false,
  target,
  size,
  attrs,
}: ButtonProps): HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement => {
  const btn = document.createElement(element) as
    | HTMLButtonElement
    | HTMLAnchorElement
    | HTMLSpanElement;

  // Element-specific attributes
  if (element === "a") {
    if (href) (btn as HTMLAnchorElement).href = href;
    if (target) (btn as HTMLAnchorElement).target = target;
  }

  if (element === "button") {
    (btn as HTMLButtonElement).type = type || "button";
    if (disabled) (btn as HTMLButtonElement).disabled = true;
  } else if (disabled) {
    btn.setAttribute("aria-disabled", "true");
  }

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  }

  // Icon HTML
  const sizeClass = iconSize ? `icon--${iconSize}` : "";
  const onlyClass = iconOnly ? "icon--only" : "";
  const iconHTML = iconSvg
    ? `<i class="henk-icon ${sizeClass} ${onlyClass}">${iconSvg}</i>`
    : "";

  // Inner content
  btn.innerHTML =
    iconPosition === "left" ? `${iconHTML}${label}` : `${label}${iconHTML}`;

  // Classes
  const classNames = ["henk-button"];
  const DEFAULT_VARIANT = "tertiary";
  if (variant && variant !== DEFAULT_VARIANT) {
    classNames.push(`henk-button--${variant}`);
  }
  const DEFAULT_SIZE = "large";
  if (size && size !== DEFAULT_SIZE) {
    classNames.push(`henk-button--${size}`);
  }
  btn.className = classNames.join(" ");

  if (title) btn.title = title;

  return btn;
};
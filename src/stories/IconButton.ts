
type ButtonElementType = "a" | "button" | "span";
type IconPosition = "left" | "right";
type IconSize = "small" | "large";
type Variant = string;
type Size = "small" | "large";

interface BaseProps {
  buttonElement?: ButtonElementType;
  variant?: Variant;
  label?: string;
  title?: string;
  iconSvg?: string;
  iconPosition?: IconPosition;
  iconSize?: IconSize;
  // onClick?: (event: MouseEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
  size?: Size;
}

interface AnchorProps extends BaseProps {
  buttonElement: "a";
  href?: string;
  target?: string;
}

interface ButtonProps extends BaseProps {
  buttonElement: "button";
  type?: "submit" | "reset" | "button";
}

interface SpanProps extends BaseProps {
  buttonElement: "span";
}

type IconButtonProps = AnchorProps | ButtonProps | SpanProps;

export function createIconButton(
  props: IconButtonProps
): HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement {
  const {
    buttonElement = "a",
    href,
    variant,
    label,
    title,
    iconSvg = "",
    iconPosition = "left",
    iconSize = "large",
    // onClick,
    isLoading = false,
    disabled = false,
    target,
    type = "a",
    size,
  } = props as IconButtonProps & { type?: string };

  const btn = document.createElement(buttonElement) as
    | HTMLButtonElement
    | HTMLAnchorElement
    | HTMLSpanElement;

  if (isLoading) {
    btn.setAttribute("data-state", "loading");
  }

  if (buttonElement === "button") {
    (btn as HTMLButtonElement).type = type!;
    if (disabled) {
      (btn as HTMLButtonElement).disabled = true;
    }
  }

  if (buttonElement === "a") {
    (btn as HTMLAnchorElement).href = href ?? "https://studio-henk.nl/en";
    if (target) {
      (btn as HTMLAnchorElement).target = target;
    }
    if (disabled) {
      btn.setAttribute("aria-disabled", "true");
    }
  }

  if (buttonElement === "span") {
    btn.role = "presentation";
  }

  const sizeClass = `icon--${iconSize}`;
  const iconHtml = iconSvg
    ? `<i class="henk-icon ${sizeClass}">${iconSvg}</i>`
    : "";
  // const visuallyHiddenSpan = `<span class="visually-hidden">${label ?? ""}</span>`;

  // btn.innerHTML = `${iconHtml}${visuallyHiddenSpan}`;
  btn.innerHTML = `${iconHtml}`;

  if (label && (buttonElement === "button" || buttonElement === "a")) {
    btn.setAttribute("aria-label", label);
  }

  const classNames = ["henk-icon-button"];
  if (variant) classNames.push(`henk-icon-button--${variant}`);
  if (size) classNames.push(`henk-icon-button--${size}`);
  btn.className = classNames.join(" ");

  if (title) btn.title = title;
  // if (onClick) btn.addEventListener("click", onClick);

  return btn;
}

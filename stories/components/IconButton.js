/**
 * @typedef {Object} IconButtonProps
 * @property {("a" | "button" | "span")} [buttonElement] - The HTML element to use for the button (defaults to "a").
 * @property {string} [href] - The URL for anchor element if buttonElement is "a".
 * @property {string} [variant] - The variant of the button (e.g., "primary", "secondary").
 * @property {string} [label] - The label text for the button.
 * @property {string} [title] - The title attribute for the button.
 * @property {string} [iconSvg] - The SVG icon HTML to render inside the button.
 * @property {("left" | "right")} [iconPosition] - Position of the icon relative to the label.
 * @property {("small" | "medium" | "large")} [iconSize] - Size of the icon.
 * @property {Function} [onClick] - Click event handler.
 * @property {boolean} [isLoading] - Whether the button is in a loading state.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {string} [target] - The target attribute for anchor elements.
 * @property {("submit" | "reset" | "button")} [type] - The type attribute for the button element (e.g., "submit").
 * @property {("small" | "medium" | "large")} [size] - The size variant of the button.
 */

/**
 * Creates a button element.
 * @param {IconButtonProps} props - The properties for the button.
 * @returns {HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement} The created button element.
 */
export const createIconButton = ({
  buttonElement = "a",
  href,
  variant,
  label,
  title,
  iconSvg = "",
  iconPosition = "left",
  iconSize = "medium",
  onClick,
  isLoading = false,
  disabled = false,
  target,
  type = "button",
  size,
}) => {
  const btn = document.createElement(buttonElement);
  if (isLoading) {
    btn.setAttribute("data-state", "loading");
  }

  if (buttonElement === "button") {
    btn.type = type;
    if (disabled) {
      btn.disabled = true;
    }
  }

  if (buttonElement === "a") {
    btn.href = href ? href : "https://studio-henk.nl/en";
    if (target) {
      btn.target = target;
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

  // Construct the inner HTML based on the presence of a label and the icon position
  // if (label && !iconOnly) {
  const visuallyHiddenSpan = `<span class="visually-hidden">${label}</span>`;

  btn.innerHTML = `${iconHtml}${visuallyHiddenSpan}`;

  if (label && (buttonElement === "button" || buttonElement === "a")) {
    btn.setAttribute("aria-label", label);
  }

  // classes
  const classNames = ["henk-icon-button"];
  if (variant) {
    classNames.push(`henk-icon-button--${variant}`);
  }

  if (size) {
    classNames.push(`henk-icon-button--${size}`);
  }

  btn.className = classNames.join(" ");

  // Add title attribute to button if title is defined
  if (title) {
    btn.title = title;
  }

  // if onClick is defined, add an event listener
  if (onClick) {
    btn.addEventListener("click", onClick);
  }

  return btn;
};

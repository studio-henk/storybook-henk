import { Icon } from "@components/Icon";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import buttonSnippet from "@src/snippets/henk-button.liquid?raw";

export type IconPosition = "left" | "right";
export type ButtonElement = "a" | "button" | "span";

export interface ButtonProps {
  element?: ButtonElement;
  href?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "pill" | "danger" | "success";
  size?: "small" | "large";
  label: string;
  title?: string;
  icon_name?: string;
  icon_position?: IconPosition;
  icon_only?: boolean;
  aria_label?: string;
  disabled?: boolean;
  target?: string;
  attrs?: Record<string, string>;
  extra_classes?: string;
}

export interface InfoBoxProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  content?: string;
  buttonConfig?: ButtonProps | null;
  iconName?: string | null;
  iconSize?: "small" | "large";
}

const renderButton = (args: ButtonProps) =>
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

export const createInfoBox = ({
  variant,
  title = "This is a title",
  content = "<p>This is an info box</p>",
  buttonConfig = null,
  iconName = null,
  iconSize = "large",
}: InfoBoxProps) => {
  const infoBox = document.createElement("div");
  infoBox.className = `info-box`;

  if (variant) {
    infoBox.className = `info-box info-box--variant-${variant.toLowerCase()}`;
  }

  const container = document.createElement("div");
  container.className = "info-box__container";

  // header
  const header = document.createElement("div");
  header.className = [
    "info-box__header",
    iconName ? "info-box__header--has-icon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const heading = document.createElement("p");
  heading.className = "info-box__heading";
  heading.innerText = title;
  header.appendChild(heading);

  // if (iconName) {
  //   const iconEl = document.createElement("i");
  //   iconEl.className = `henk-icon icon--${iconSize}`;
  //   iconEl.innerHTML = Icon({ name: iconName, size: iconSize }) as string;
  //   header.appendChild(iconEl);
  // }

  if (iconName) {
    const iconEl = Icon({ name: iconName, size: iconSize });
    header.appendChild(iconEl);
  }

  container.appendChild(header);

  // body
  const body = document.createElement("div");
  body.className = "info-box__body";
  body.innerHTML = content;
  container.appendChild(body);

  // footer / button
  if (buttonConfig) {
    const footer = document.createElement("div");
    footer.className = "info-box__footer";
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderButton(buttonConfig);
    const button = wrapper.firstElementChild;
    if (button) {
      footer.appendChild(button);
    }
    container.appendChild(footer);
  }

  infoBox.appendChild(container);

  return infoBox;
};

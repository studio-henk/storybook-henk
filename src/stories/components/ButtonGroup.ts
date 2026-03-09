// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-button.liquid?raw";

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

export interface ButtonGroupProps {
  buttons: ButtonProps[];
  alignment?: "left" | "center" | "right" | "space-between";
  fill?: boolean;
}

const renderButton = (args: ButtonProps) =>
  engine.parseAndRenderSync(snippet, {
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

export const createButtonGroup = ({
  buttons,
  alignment = "right",
}: ButtonGroupProps) => {
  const group = document.createElement("div");
  group.className = `henk-button-group henk-button-group--${alignment}`;

  for (const buttonProps of buttons) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderButton(buttonProps);
    const button = wrapper.firstElementChild;
    if (button) {
      group.appendChild(button);
    }
  }

  return group;
};

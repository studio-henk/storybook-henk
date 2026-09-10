import { createLabel } from "@components/forms/Label";
import { createCheckbox } from "@components/forms/Checkbox";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import iconSnippet from "@src/snippets/henk-icon.liquid?raw";
// import "./labeled-checkbox.css";

export interface LabeledCheckboxProps {
  label: { text: string; htmlFor?: string };
  checkbox: {
    id: string;
    checked?: boolean;
    name?: string;
    disabled?: boolean;
    required?: boolean;
  };
  icon?:
    | string
    | { name: string; size?: "small" | "large"; className?: string };
  size?: "small" | "large";
  dataJs?: string;
}

/**
 * Creates a labeled checkbox element with optional icon
 */
const renderIcon = (args: { name: string; class?: string }) =>
  engine.parseAndRenderSync(iconSnippet, {
    name: args.name,
    class: args.class,
  });

export const createLabeledCheckbox = ({
  label,
  checkbox,
  icon,
  size = "large",
  dataJs,
}: LabeledCheckboxProps): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = `henk-labeled-checkbox ${checkbox?.required ? "henk-labeled-checkbox--required" : ""}`;

  if (dataJs) {
    container.setAttribute(`data-js-${dataJs}`, "");
  }

  const checkboxElement = createCheckbox(checkbox);

  // Create the label
  const labelElement = createLabel({
    text: label.text,
    htmlFor: checkbox.id,
    required: checkbox.required,
  });

  // If an icon is provided, render it inside the label
  if (icon) {
    let iconEl: HTMLElement;

    if (typeof icon === "string") {
      // raw SVG string
      iconEl = document.createElement("span");
      iconEl.className = `henk-icon`;
      iconEl.innerHTML = icon;
    } else {
      // icon as object with name, size, className
      const wrapper = document.createElement("div");
      const className = icon.className || (size === "small" ? "icon--small" : "icon--large");
      wrapper.innerHTML = renderIcon({ name: icon.name, class: className });
      iconEl = wrapper.firstElementChild as HTMLElement;
    }

    if (iconEl) {
      labelElement.appendChild(iconEl);
    }
  }

  container.appendChild(checkboxElement);
  container.appendChild(labelElement);

  return container;
};

export { createLabeledCheckbox as LabeledCheckbox };

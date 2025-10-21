import { createLabel } from "@components/forms/Label";
import { createCheckbox } from "@components/forms/Checkbox";
import { Icon } from "@components/Icon"; // <-- import your Icon component
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
      iconEl = Icon({ ...icon, size });
    }

    labelElement.appendChild(iconEl);
  }

  container.appendChild(checkboxElement);
  container.appendChild(labelElement);

  return container;
};

export { createLabeledCheckbox as LabeledCheckbox };

import { createLabel } from "./Label.js";
import { createCheckbox } from "./Checkbox.js";
import "./labeled-checkbox.css";
import { IconTemplate } from "../Icon.stories.js";

/**
 * Creates a labeled checkbox element.
 *
 * @param {Object} options - The options for creating the labeled checkbox.
 * @param {Object} options.label - Options for the label.
 * @param {Object} options.checkbox - Options for the checkbox.
 * @param {Object} [options.icon] - Optional icon for the checkbox.
 * @param {string} [options.size] - Optional size of the checkbox.
 * @param {string} [options.dataJs] - optional data-js attribute
 * @returns {HTMLDivElement} The created labeled checkbox element.
 */
export const createLabeledCheckbox = ({
  label,
  checkbox,
  icon,
  size,
  dataJs,
}) => {
  const container = document.createElement("div");
  // container.className = `henk-labeled-checkbox`;

  container.className = `henk-labeled-checkbox 
    ${checkbox?.required ? "henk-labeled-checkbox--required" : ""}`;

  if (dataJs) {
    container.setAttribute(`data-js-${dataJs}`, "");
  }

  const checkboxElement = createCheckbox(checkbox);

  // Create the label and checkbox elements
  const labelElement = createLabel({
    text: label.text,
    htmlFor: checkbox.id, // Set htmlFor to match the checkbox ID
    required: checkbox.required,
  });

  if (checkbox.required) {
    // const asterisk = document.createElement("span");
    // asterisk.className = "required-indicator";
    // asterisk.innerText = " *";
    // labelElement.appendChild(asterisk);
    // error message span element
    // const errorMessage = document.createElement("span");
    // errorMessage.className = "error-message";
    // errorMessage.innerText = "This field is required";
  }

  // If an icon is provided, include it inside the label
  if (icon) {
    // Create the icon element using IconTemplate
    const iconElement = IconTemplate({ icon, size });
    // Append the icon to the label
    labelElement.innerHTML = `${iconElement} ${labelElement.innerHTML}`;
  }

  container.appendChild(checkboxElement);
  container.appendChild(labelElement);

  return container;
};

export { createLabeledCheckbox as LabeledCheckbox };

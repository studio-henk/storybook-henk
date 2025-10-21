import { createLabel } from "@components/forms/Label";
import { createSelectDropdown } from "./SelectDropdown";

/**
 * @typedef {import('./SelectDropdown').CreateSelectDropdownProps} CreateSelectDropdownProps
 * @typedef {import('./Label').CreateLabelProps} CreateLabelProps
 */

/**
 * @typedef {Object} LabeledSelectProps
 * @property {CreateLabelProps} [label] - The properties for the label element.
 * @property {CreateSelectDropdownProps} select - The properties for the select dropdown.
 * @property {string} [orientation] - The layout variant of the labeled input ("vertical", "horizontal").
 * @property {boolean} [floating] - Indicates if the label is inside the input.
 */

/**
 * Creates a labeled select element.
 *
 * @param {LabeledSelectProps} props - The properties for the labeled select.
 * @returns {HTMLDivElement} The container with the labeled select element.
 */
export const createLabeledSelect = ({
  label,
  select,
  orientation = "vertical",
  floating = false,
} = {}) => {
  const container = document.createElement("div");
  container.className = `henk-labeled-select henk-labeled-select--dir-${orientation} ${floating ? "henk-labeled-select--floating" : ""}`;

  const selectWrapper = createSelectDropdown(select);

  /** @type {HTMLLabelElement | null} */
  let labelElement = null;

  if (label && label.text) {
    labelElement = createLabel(label);
    // container.appendChild(labelElement);
    // If select is required, append asterisk (*) to label text
    if (select.required && labelElement) {
      const asterisk = document.createElement("span");
      asterisk.className = "required-indicator";
      asterisk.innerText = " *";
      labelElement.appendChild(asterisk);
    }
    // If floating, we add the label inside the select wrapper
    if (floating) {
      // Append label to select wrapper
      selectWrapper.appendChild(labelElement);
    } else {
      // For non-floating, append label to the container
      container.appendChild(labelElement);
    }
  }

  // Append input first, then label for floating behavior
  // if (floating) {
  //   container.appendChild(selectElement);
  //   container.appendChild(labelElement);
  // } else {
  //   container.appendChild(labelElement);
  //   container.appendChild(selectElement);
  // }

  // Always append the select wrapper to the container
  container.appendChild(selectWrapper);

  return container;
};

// Exporting createLabeledSelect as LabeledSelect
export { createLabeledSelect as LabeledSelect };

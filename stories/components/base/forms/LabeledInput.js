import { createLabel } from "./Label.js";
import { createInput } from "./Input.js";
import "./labeled-input.css";

/**
 * @typedef {Object} LabeledInputProps
 * @property {Object} label - The label properties.
 * @property {string} label.text - The text content of the label.
 * @property {string} [label.htmlFor] - The ID of the input element associated with the label.
 * @property {Object} input - The input properties.
 * @property {string} [input.id] - The ID of the input element.
 * @property {string} [input.type] - The type of the input element.
 * @property {string} [input.value] - The value of the input element.
 * @property {string} [input.placeholder] - The placeholder text for the input element.
 * @property {boolean} [input.required] - Indicates if the input is required.
 * @property {string} [orientation] - The layout variant of the labeled input ("vertical", "horizontal").
 * @property {boolean} [floating] - Indicates if the label is inside the input.
 */

/**
 * Creates a labeled input element.
 * @param {LabeledInputProps} props - The properties to configure the labeled input element.
 * @returns {HTMLDivElement} The created labeled input element.
 */
export const createLabeledInput = ({
  label,
  input,
  orientation = "vertical",
  floating = false,
}) => {
  const container = document.createElement("div");
  container.className = `henk-labeled-input 
    henk-labeled-input--dir-${orientation} 
    ${floating ? "henk-labeled-input--floating" : ""}
    ${input?.required ? "henk-labeled-input--required" : ""}`;

  const labelElement = createLabel(label);
  const inputElement = createInput(input);

  // If input is required, append asterisk (*) to label text
  if (input.required) {
    const asterisk = document.createElement("span");
    asterisk.className = "required-indicator";
    asterisk.innerText = " *";
    labelElement.appendChild(asterisk);

    // error message span element
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.innerText = "This field is required";

    // Append input first, then label for floating behavior
    if (floating) {
      container.appendChild(inputElement);
      container.appendChild(labelElement);
    } else {
      container.appendChild(labelElement);
      container.appendChild(inputElement);
    }
    container.appendChild(errorMessage);
  } else {
    // Append input first, then label for floating behavior
    if (floating) {
      container.appendChild(inputElement);
      container.appendChild(labelElement);
    } else {
      container.appendChild(labelElement);
      container.appendChild(inputElement);
    }
  }

  return container;
};

// Exporting createLabeledInput as LabeledInput
export { createLabeledInput as LabeledInput };

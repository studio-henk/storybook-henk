import { createLabel } from "./Label.js";
import { createTextarea } from "./Textarea.js";
import "./labeled-textarea.css";

/**
 * @typedef {Object} labeledTextareaProps
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
 * Creates a labeled texxtarea element.
 * @param {labeledTextareaProps} props - The properties to configure the labeled input element.
 * @returns {HTMLDivElement} The created labeled textarea element.
 */
export const createLabeledTextarea = ({
  label,
  textarea,
  orientation = "vertical",
  floating = false,
}) => {
  const container = document.createElement("div");
  container.className = `henk-labeled-textarea`;

  container.className = `henk-labeled-textarea 
    henk-labeled-textarea--dir-${orientation} 
    ${floating ? "henk-labeled-textarea--floating" : ""}
    ${textarea?.required ? "henk-labeled-textarea--required" : ""}`;

  const textareaElement = createTextarea(textarea);

  // Create the label and checkbox elements
  const labelElement = createLabel({
    text: label.text,
    htmlFor: textarea.id,
  });

  if (textarea.required) {
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
      container.appendChild(textareaElement);
      container.appendChild(labelElement);
    } else {
      container.appendChild(labelElement);
      container.appendChild(textareaElement);
    }
    container.appendChild(errorMessage);
  } else {
    // Append input first, then label for floating behavior
    if (floating) {
      container.appendChild(textareaElement);
      container.appendChild(labelElement);
    } else {
      container.appendChild(labelElement);
      container.appendChild(textareaElement);
    }
  }

  // container.appendChild(textareaElement);
  // container.appendChild(labelElement);

  return container;
};

// export { createLabeledCheckbox as LabeledCheckbox };

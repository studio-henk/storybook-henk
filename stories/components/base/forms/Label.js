import "./label.css";

/**
 * @typedef {Object} CreateLabelProps
 * @property {string} text - The text content of the label.
 * @property {string} [htmlFor] - The ID of the input element associated with the label.
 */

/**
 * Creates a label element.
 * @param {CreateLabelProps} props - The properties to configure the label element.
 * @returns {HTMLLabelElement} The created label element.
 */
export const createLabel = ({
  text = "label text",
  htmlFor,
  required = false,
}) => {
  const label = document.createElement("label");
  label.className = "henk-label";

  if (htmlFor) {
    label.htmlFor = htmlFor;
  }

  // Create a span specifically for the main text
  const textSpan = document.createElement("span");
  textSpan.className = "henk-label-text";
  textSpan.innerHTML = text;

  // Add required-indicator inside the text span if required
  if (required) {
    const asterisk = document.createElement("span");
    asterisk.className = "required-indicator";
    asterisk.innerText = " *";
    textSpan.appendChild(asterisk);
  }

  // Append the text span to the label
  label.appendChild(textSpan);

  return label;
};

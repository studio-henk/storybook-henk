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
export const createLabel = ({ text = "label text", htmlFor }) => {
  const label = document.createElement("label");
  label.className = "henk-label";

  if (htmlFor) {
    label.htmlFor = htmlFor;
  }

  label.innerText = text;

  return label;
};

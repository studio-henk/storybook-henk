import "./_henk-textarea.css";

/**
 * @typedef {Object} CreateTextareaProps
 * @property {string} [id] - The ID for the input element.
 * @property {string} [placeholder=''] - The placeholder text for the input.
 * @property {boolean} [required=false] - Whether the input is required.
 * @property {'on'|'off'} [autocomplete=off]
 *
 **/

/**
 * Creates an textarea element.
 * @param {CreateTextareaProps} props - The properties to configure the input element.
 * @returns {HTMLTextAreaElement} The created input element.
 */
export const createTextarea = ({
  autocomplete = "off",
  cols,
  disabled = false,
  form,
  id = "",
  name = "",
  placeholder,
  required = false,
}) => {
  const baseTextarea = document.createElement("textarea");
  baseTextarea.className = ["henk-textarea"].join(" ");
  baseTextarea.name = name;
  baseTextarea.id = id;
  baseTextarea.autocomplete = autocomplete;

  if (placeholder) {
    baseTextarea.placeholder = placeholder;
  }

  if (required) {
    baseTextarea.required = required;
  }

  if (disabled) {
    baseTextarea.disabled = disabled;
  }

  if (form) {
    baseTextarea.setAttribute("form", form);
  }

  if (cols) {
    baseTextarea.cols = cols;
  }

  return baseTextarea;
};

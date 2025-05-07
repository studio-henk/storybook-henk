import "./input.css";

/**
 * @typedef {Object} CreateInputProps
 * @property {string} [id] - The ID for the input element.
 * @property {string} [type='text'] - The type of the input.
 * @property {string} [value=''] - The value of the input.
 * @property {string} [placeholder=''] - The placeholder text for the input.
 * @property {boolean} [required=false] - Whether the input is required.
 */

/**
 * Creates an input element.
 * @param {CreateInputProps} props - The properties to configure the input element.
 * @returns {HTMLInputElement} The created input element.
 */
export const createInput = ({
  id,
  name,
  type = "text",
  value = "",
  placeholder = "",
  required = false,
}) => {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;

  if (required) {
    input.required = required;
  }

  if (id) {
    input.id = id;
  }

  if (name) {
    input.name = name;
  }

  input.className = "henk-input";

  return input;
};

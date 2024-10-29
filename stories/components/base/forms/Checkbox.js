import "./_henk-checkbox.css";

/**
 * Creates a checkbox input element with optional attributes such as `checked`, `id`, `name`, `disabled`, and `required`.
 *
 * @param {Object} options - The options for creating the checkbox.
 * @param {boolean} [options.checked=false] - Whether the checkbox should be initially checked.
 * @param {string} [options.id=""] - The id of the checkbox element.
 * @param {string} [options.name=""] - The name attribute of the checkbox.
 * @param {boolean} [options.disabled=false] - Whether the checkbox is disabled.
 * @param {boolean} [options.required=false] - Whether the checkbox is required.
 * @returns {HTMLInputElement} The created checkbox input element.
 */
export const createCheckbox = ({
  checked = false,
  id = "",
  name = "",
  disabled = false,
  required = false,
}) => {
  const baseCheckbox = document.createElement("input");
  baseCheckbox.type = "checkbox";
  baseCheckbox.className = ["henk-checkbox"].join(" ");

  if (checked) {
    baseCheckbox.setAttribute("checked", "checked");
  }

  if (id) {
    baseCheckbox.setAttribute("id", id);
  }

  if (name) {
    baseCheckbox.name = name;
  }

  if (disabled) {
    baseCheckbox.disabled = disabled;
  }

  if (required) {
    baseCheckbox.required = required;
  }

  return baseCheckbox;
};

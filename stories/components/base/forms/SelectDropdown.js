import "./select.css";

/**
 * @typedef {Object} OptionItem
 * @property {string} value - The value attribute of the option.
 * @property {string} text - The display text of the option.
 */

/**
 * @typedef {Object} CreateSelectDropdownProps
 * @property {OptionItem[]} options - The list of options for the select dropdown.
 * @property {string} [id] - The id attribute for the select element.
 * @property {string} [name] - The name attribute for the select element.
 * @property {string} [className] - The class name for the select element (default: 'henk-select').
 * @property {boolean} [required] - Whether the select is required (default: false).
 * @property {boolean} [customArrow] - Whether to use a custom arrow (default: false).
 * @property {boolean} [dataList] - Whether to render as a datalist (default: false).
 */

/**
 * Creates a select dropdown element.
 *
 * @param {CreateSelectDropdownProps} props - The properties for the select dropdown.
 * @returns {HTMLElement} The select dropdown element.
 */
export const createSelectDropdown = ({
  options = [
    { value: "opt1", text: "Option 1" },
    { value: "opt2", text: "Option 2" },
  ],
  id,
  name,
  className = "henk-select",
  required = false,
  customArrow = false,
  dataList = false,
} = {}) => {
  const select = document.createElement("select");

  if (id) {
    select.id = id;
  }

  if (name) {
    select.name = name;
  }

  if (className) {
    select.className = className;
  }

  if (required) {
    select.required = true;
  }

  // Iterate through options and create option elements
  options.forEach(({ value, text, disabled, selected }) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.text = text;

    // if (value === defaultOption) {
    //   optionElement.selected = true;
    // }

    // Set the option to be disabled or selected based on the properties
    if (disabled) optionElement.disabled = true;
    // if (selected) optionElement.selected = true;

    // Set the selected attribute if specified
    if (selected) {
      optionElement.setAttribute("selected", "selected"); // Explicitly set attribute
    }

    select.appendChild(optionElement);
  });

  if (customArrow) {
    const wrapper = document.createElement("div");
    wrapper.className = "select-wrapper";

    wrapper.appendChild(select);

    return wrapper;
  }

  return select;
};

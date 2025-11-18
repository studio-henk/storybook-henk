export interface OptionItem {
  value: string;
  text: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface SelectDropdownProps {
  options?: OptionItem[];
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  customArrow?: boolean;
  dataList?: boolean;
  ariaLabel?: string;
}

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
  ariaLabel,
}: SelectDropdownProps = {}) => {
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

  if (dataList) {
    select.setAttribute("list", "datalist-options");
  }

  if (ariaLabel) {
    select.setAttribute("aria-label", ariaLabel);
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

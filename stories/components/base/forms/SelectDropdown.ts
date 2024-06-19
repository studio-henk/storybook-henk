import './select.css';

export interface CreateSelectDropdownProps {
  options: string[];
  defaultOption?: string;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  customArrow?: boolean;
  dataList?: boolean;
}

export const createSelectDropdown = ({
  options,
  defaultOption,
  id,
  name,
  className = 'henk-select',
  required = false,
  customArrow = false,
  dataList = false,
}: CreateSelectDropdownProps): HTMLElement => {
  const select = document.createElement('select');

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

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.text = option;
    if (option === defaultOption) {
      optionElement.selected = true;
    }
    select.appendChild(optionElement);
  });

  if (customArrow) {
    const wrapper = document.createElement('div');
    wrapper.className = 'select-wrapper';

    wrapper.appendChild(select);

    return wrapper as HTMLElement;
  }

  return select;
};

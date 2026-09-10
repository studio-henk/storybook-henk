import type { LabelProps } from "@components/forms/Label";
import type { SelectDropdownProps } from "./SelectDropdown";
import { createLabel } from "@components/forms/Label";
import { createSelectDropdown } from "./SelectDropdown";

export interface LabeledSelectProps {
  label?: LabelProps;
  select: SelectDropdownProps;
  orientation?: string;
  floating?: boolean;
}

export const createLabeledSelect = ({
  label,
  select,
  orientation = "vertical",
  floating = false,
}: LabeledSelectProps) => {
  const container = document.createElement("div");
  container.className = `henk-labeled-select henk-labeled-select--dir-${orientation} ${floating ? "henk-labeled-select--floating" : ""}`;

  const selectWrapper = createSelectDropdown(select);

  let labelElement = null;

  if (label && label.text) {
    labelElement = createLabel(label);
    // container.appendChild(labelElement);
    // If select is required, append asterisk (*) to label text
    if (select.required && labelElement) {
      const asterisk = document.createElement("span");
      asterisk.className = "required-indicator";
      asterisk.innerText = " *";
      labelElement.appendChild(asterisk);
    }
    // If floating, we add the label inside the select wrapper
    if (floating) {
      // Append label to select wrapper
      selectWrapper.appendChild(labelElement);
    } else {
      // For non-floating, append label to the container
      container.appendChild(labelElement);
    }
  }

  // Always append the select wrapper to the container
  container.appendChild(selectWrapper);

  return container;
};
export default createLabeledSelect;

// Exporting createLabeledSelect as LabeledSelect
export { createLabeledSelect as LabeledSelect };

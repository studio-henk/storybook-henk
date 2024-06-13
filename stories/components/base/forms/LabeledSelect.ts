import { createLabel, CreateLabelProps } from './Label';
import { createSelectDropdown, CreateSelectDropdownProps } from './SelectDropdown';
// import './labeled-input.css';
import './labeled-select.css';

export interface LabeledSelectProps {
    label?: CreateLabelProps;
    select: CreateSelectDropdownProps;
    variant?: 'vertical' | 'horizontal';
}

export const createLabeledSelect = ({
    label,
    select,
    variant = 'vertical'
}: LabeledSelectProps): HTMLDivElement => {
    console.log('Variant:', variant);
    const container = document.createElement('div');
    container.className = `henk-labeled-select --dir-${variant}`;

    let labelElement: HTMLLabelElement | null = null;

    // const labelElement = createLabel(label);
    if (label && label.text) {
        // const labelElement = createLabel(label);
        labelElement = createLabel(label);
        container.appendChild(labelElement);
    }

    const selectElement = createSelectDropdown(select);

    // If select is required, append asterisk (*) to label text
    if (select.required && labelElement) {
        const asterisk = document.createElement('span');
        asterisk.className = 'required-indicator';
        asterisk.innerText = ' *';
        labelElement.appendChild(asterisk);
    }

    // container.appendChild(labelElement);
    container.appendChild(selectElement);

    return container;
};

// Exporting createLabeledSelect as LabeledSelect
export { createLabeledSelect as LabeledSelect };

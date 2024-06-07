import { CreateLabelProps, createLabel } from './Label';
import { CreateInputProps, createInput } from './Input';
import './labeled-input.css';

export interface LabeledInputProps {
    label: CreateLabelProps;
    input: CreateInputProps;
    variant?: 'vertical' | 'horizontal';
}

export const createLabeledInput = ({
    label,
    input,
    variant = 'vertical'
}: LabeledInputProps): HTMLDivElement => {
    console.log('Variant:', variant);
    const container = document.createElement('div');
    container.className = `henk-labeled-input --dir-${variant}`;

    // Set default label text if label is not provided
    const labelText = label ? (typeof label === 'object' ? label.text : label) : 'Label text here';

    const labelElement = createLabel({ text: labelText });
    const inputElement = createInput(input);

    // If input is required, append asterisk (*) to label text
    if (input.required) {
        const asterisk = document.createElement('span');
        asterisk.className = 'required-indicator';
        asterisk.innerText = ' *';
        labelElement.appendChild(asterisk);
    }

    container.appendChild(labelElement);
    container.appendChild(inputElement);

    return container;
};

// Exporting createLabeledInput as LabeledInput
export { createLabeledInput as LabeledInput };
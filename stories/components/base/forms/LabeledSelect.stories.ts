import { createLabeledSelect, LabeledSelectProps } from './LabeledSelect';

export default {
    title: 'Components/Base/Forms/LabeledSelect',
    tags: ['autodocs'],
    component: createLabeledSelect,
    render: ({ label, select, variant }: LabeledSelectProps) => {
        const labeledSelect = createLabeledSelect({ label, select, variant });
        return labeledSelect;
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
            defaultValue: 'vertical',
        },
        label: {
            control: { type: 'object', subComponent: 'Label' },
            defaultValue: {
                text: 'Label text here',
                htmlFor: 'select-id',
            },
        },
        select: {
            control: { type: 'object', subComponent: 'SelectDropdown' },
            defaultValue: {
                options: ['Option 1', 'Option 2', 'Option 3'],
                defaultOption: 'Option 1',
                id: 'select-id',
                name: 'select-name',
                className: 'henk-select',
                required: false,
            },
        },
    },
    args: {
        label: {
            text: 'Label',
            htmlFor: 'select-id',
        },
        select: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            defaultOption: 'Option 1',
            id: 'select-id',
            name: 'select-name',
            className: 'henk-select',
            required: false,
        },
    },
};

// export const Default = {};
// Default story using render function
export const Default = (args: LabeledSelectProps) => {
    return createLabeledSelect(args); // Pass all args to createLabeledSelect
};
Default.args = {}; 

export const Required = {
    args: {
        label: {
            text: 'Required!',
            htmlFor: 'select-id2',
        },
        select: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            defaultOption: 'Option 1',
            id: 'select-id2',
            name: 'select-name',
            required: true,
        },
    },
};

export const Horizontal = {
    args: {
        variant: 'horizontal',
        label: {
            text: 'Horizontal',
            htmlFor: 'select-id',
        },
        select: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            defaultOption: 'Option 1',
            id: 'select-id',
            name: 'select-name',
            className: 'henk-select',
            required: true,
        },
    },
};

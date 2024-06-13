import { createSelectDropdown, CreateSelectDropdownProps } from './SelectDropdown';

export default {
    title: 'Components/Base/Forms/Base/SelectDropdown',
    tags: ['autodocs'],
    component: createSelectDropdown,
    render: (args: CreateSelectDropdownProps) => createSelectDropdown(args),
    argTypes: {
        options: { control: 'array', defaultValue: ['Option 1', 'Option 2', 'Option 3'] },
        defaultOption: { control: 'text', defaultValue: 'Option 1' },
        id: { control: 'text', defaultValue: 'select-id' },
        name: { control: 'text', defaultValue: 'select-name' },
        className: { control: 'text', defaultValue: 'henk-select' },
        required: { control: 'boolean' },
    },
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultOption: 'Option 1',
        id: 'select-id',
        name: 'select-name',
        className: 'henk-select',
        required: false,
    },
    parameters: {
        // badges: [BADGE.BETA],
        docs: {
            description: {
                component: 'The ```<select>``` HTML element represents a control that provides a menu of options.',
            },
        },
        // controls: { exclude: ['tag'] },
    },
};

export const Default = {};

export const Required = {
    args: {
        required: true,
    },
};
// export const WithCustomClass = {
//     args: {        
//         className: 'custom-class',
//     },
// };

export const WithDifferentDefaultOption = {
    args: {
        defaultOption: 'Option 2',
    },
};

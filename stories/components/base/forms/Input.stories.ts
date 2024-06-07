import { createInput, CreateInputProps } from './Input';

export default {
    title: 'Components/Base/Forms/Input',
    tags: ['autodocs'],
    component: createInput,
    render: (args: CreateInputProps) => createInput(args),
    argTypes: {
        id: { control: 'text', defaultValue: 'input-id' },
        type: { control: 'text', defaultValue: 'text' },
        value: { control: 'text', defaultValue: '' },
        placeholder: { control: 'text', defaultValue: 'Enter text here' },
        required: { control: 'boolean', defaultValue: false }
    },
};

export const Base = {
    args: {
        id: 'input-id',
        type: 'text',
        value: '',
        placeholder: 'Enter text here'
    }
};

export const Required = {
    args: {
        id: 'input-id2',
        type: 'text',
        value: '',
        placeholder: 'Enter text here',
        required: true
    },
};
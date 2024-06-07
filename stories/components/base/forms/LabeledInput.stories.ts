import { createLabeledInput, LabeledInputProps } from './LabeledInput';

export default {
    title: 'Components/Base/Forms/LabeledInput',
    tags: ['autodocs'],
    component: createLabeledInput,
    render: ({ label, input, variant }: LabeledInputProps) => {
        const labeledInput = createLabeledInput({ label, input, variant });
        return labeledInput;
    },
    argTypes: {
        variant: {
            control: { type: 'select' }, 
            options: ['vertical', 'horizontal'],
            defaultValue: 'vertical',
        },        
        label: {
            control: {
                type: 'text',
                defaultValue: 'Label text here'
            }
        },
        input: { control: { type: 'object', subComponent: 'Input' } },
    },    
};

export const Default = {
    args: {
        label: {
            text: 'Label text here',
            htmlFor: 'input-id',
        },
        input: {
            id: 'input-id',
            type: 'text',
            value: '',
            placeholder: 'Enter text here'
        }
    }
};

export const Required = {
    args: {
        label: {
            text: 'Label text here',
            htmlFor: 'input-id'
        },
        input: {
            id: 'input-id',
            type: 'text',
            value: '',
            placeholder: 'Enter text here',
            required: true
        }
    }
};

export const Horizontal = {
    args: {
        variant: 'horizontal',
        label: {
            text: 'Label text here',
            htmlFor: 'input-id'
        },
        input: {
            id: 'input-id',
            type: 'text',
            value: '',
            placeholder: 'Enter text here',
            required: true
        }
    }
};

// import { fn } from '@storybook/test';
import { createLabel, CreateLabelProps } from './Label';

export default {
    title: 'Components/Base/Forms/Base/Label',
    tags: ['autodocs'],
    component: createLabel,
    render: ({ text, ...args }: CreateLabelProps) => {
        return createLabel({ text, ...args });
    },
    argTypes: {
        text: { control: 'text', defaultValue: 'Label text here' },
        htmlFor: { control: 'text', defaultValue: 'input-id' }
    },
};

export const Base = {
    args: {
        text: 'a label',
        htmlFor: 'input-mail',
    },
};

// import './atom-paragraph.css';
import {createContentDivider, type CreateDividerProps} from './ContentDivider';

export default {
    title: 'Components/Base/ContentDivider',
    component: createContentDivider, 
    render: ({ variant, margin, padding }: CreateDividerProps) => {
        const contentDivider = createContentDivider({ variant, margin, padding });
        return contentDivider;
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The ContentDivider component is a simple horizontal line that can be used to separate content.',
            },
        },
    },
    // argTypes: {
    //     text: {control: 'text'},
    // },
};

export const Default = {
    
};

export const DefaultWithMargin = {
    args: {
        variant: 'default',
        margin: '0 3rem',
    }
};

export const DefaultWithPadding = {
    args: {
        variant: 'default',
        padding: '0 3rem',
    }
};

export const Primary = {
    args: {
        variant: 'primary',
    }
};

export const Transparent = {
    args: {
        variant: 'transparent',
    }
};
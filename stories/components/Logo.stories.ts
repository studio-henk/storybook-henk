import { createLogo, type CreateLogoProps } from './Logo';

export default {
    title: 'Components/Logo',
    component: createLogo,
    render: ({ variant, href }: CreateLogoProps) => {
        const logo = createLogo({ variant, href });
        return logo;
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Logo',
            },
        },
    },
    // argTypes: {
    //     text: {control: 'text'},
    // },
};

export const Primary = {
    args: {
        variant: 'primary',
        href: '/nl',
    }
};

export const Secondary = {
    args: {
        variant: 'secondary',
        href: '/en',
    }
};
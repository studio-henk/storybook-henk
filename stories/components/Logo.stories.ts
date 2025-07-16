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

export const Default = {
    args: {
        variant: 'default',
        href: '/nl',
    }
};

export const DefaultInverted = {
    args: {
        variant: 'default-inverted',
        href: '/nl',
    }
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
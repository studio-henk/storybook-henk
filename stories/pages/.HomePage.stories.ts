
import type { Meta, StoryObj } from '@storybook/html';

import { createBaseLayout } from '../templates/BaseLayout';
import { createHeader } from '../components/Header/TheHeader';
import { createFooter } from '../components/Footer/TheFooter';
import { createSplitScreen } from '../components/SplitScreen';
// import { createUspsBar } from '../components/usp-bar/usp-bar';
// import { HeroVideo } from '../components/HeroVideo';
import { Default as HeaderDefault } from '../components/Header/TheHeader.stories';


const meta: Meta = {
    title: 'Pages/HomePage',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj;

// type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
    args: HeaderDefault.args,
    render: (args) => {
        const header = createHeader(args);
        const footer = createFooter();

        const mainContent = document.createElement('div');
        mainContent.id = 'home-main-content';

        // mainContent.appendChild(createUspsBar({ showIcon: false, variant: 'primary' }));
        // mainContent.appendChild(HeroVideo());
        // Add other sections here as needed
        mainContent.appendChild(createSplitScreen({ title: 'hello Home' }));

        return createBaseLayout({ header, mainContent, footer });
    },
};

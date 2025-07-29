
interface SplitScreenProps {
    bgColor?: 'default';
    id?: string;
    title: string;
    level?: 2 | 3;
    content?: string;
    buttonUrl?: string;
    buttonText?: string;
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'tertiary';
    alignLeft?: boolean;
}

export const createSplitScreen = ({
    bgColor = 'default',
    id = '',
    title,
    level = 2,
    content = '',
    buttonUrl = '',
    buttonText = '',
    buttonVariant = 'default',
    alignLeft = false
}: SplitScreenProps): HTMLElement => {
    const container = document.createElement('div');

    // Build class list
    const classList = [
        `henk-split-screen`,
        bgColor !== 'default' ? `henk-split-screen--bg-${bgColor}` : '',
    ].filter(Boolean).join(' ');

    container.className = classList;

    if (id) container.id = id;

    const innerDiv = document.createElement('div');
    innerDiv.className = 'henk-split-screen__inner';

    // grid 
    const gridContainer = document.createElement('div');
    gridContainer.className = 'henk-split-screen__grid';

    const gridItem1 = document.createElement('div');
    gridItem1.className = 'henk-split-screen__grid-item';

    const gridItem2 = document.createElement('div');
    gridItem2.className = 'henk-split-screen__grid-item';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'henk-split-screen__content';

    // Clamp level between 1 and 6 just in case
    const headingLevel = Math.min(Math.max(level, 1), 6);
    const titleElement = document.createElement(`h${headingLevel}`);
    titleElement.className = 'henk-split-screen__title';
    titleElement.innerText = title;
    contentDiv.appendChild(titleElement);

    if (content) {
        const contentFragment = document.createRange().createContextualFragment(content);
        contentDiv.appendChild(contentFragment);
    }

    if (buttonUrl) {
        const button = document.createElement('a');
        button.href = buttonUrl;
        button.className = `henk-button henk-button--${buttonVariant}`;
        button.innerText = buttonText;
        contentDiv.appendChild(button);
    }

    innerDiv.appendChild(contentDiv);
    container.appendChild(innerDiv);

    return container;
};
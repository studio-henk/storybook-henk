
interface SectionHeaderProps {
    bgColor?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'highlight';
    id?: string;
    byline?: string;
    title: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    content?: string;
    buttonUrl?: string;
    buttonText?: string;
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'tertiary';
    alignLeft?: boolean;
}

export const createSectionHeader = ({
    bgColor = 'default',
    id = '',
    byline = '',
    title,
    level = 2,
    content = '',
    buttonUrl = '',
    buttonText = '',
    buttonVariant = 'default',
    alignLeft = false
}: SectionHeaderProps): HTMLElement => {
    const container = document.createElement('div');

    // Build class list
    const classList = [
        `henk-section-header`,
        bgColor !== 'default' ? `henk-section-header--bg-${bgColor}` : '',
        alignLeft ? 'henk-section-header--align-left' : '',
    ].filter(Boolean).join(' ');

    container.className = classList;

    if (id) container.id = id;

    const innerDiv = document.createElement('div');
    innerDiv.className = 'henk-section-header__inner';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'henk-section-header__content';

    if (byline) {
        const bylineP = document.createElement('p');
        bylineP.className = 'henk-section-header__byline';
        bylineP.innerText = byline;
        contentDiv.appendChild(bylineP);
    }

    // Clamp level between 1 and 6 just in case
    const headingLevel = Math.min(Math.max(level, 1), 6);
    const titleElement = document.createElement(`h${headingLevel}`);
    titleElement.className = 'henk-section-header__title';
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

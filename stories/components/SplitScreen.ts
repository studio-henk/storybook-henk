
export interface SplitScreenProps {
    bgColor?: 'default';
    id?: string;
    title: string;
    subtitle?: string;
    level?: 2 | 3;
    content?: string;
    imageUrl?: string;
    imageAlt?: string;
    buttonUrl?: string;
    buttonText?: string;
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'tertiary';
    reverse?: boolean;
}

export const createSplitScreen = ({
    bgColor = 'default',
    id = '',
    title,
    subtitle = '',
    level = 2,
    content = '',
    imageUrl = '',
    imageAlt = '',
    buttonUrl = '',
    buttonText = '',
    buttonVariant = 'default',
    reverse = false,
}: SplitScreenProps): HTMLElement => {
    const container = document.createElement('div');
    container.className = `henk-split-screen${bgColor !== 'default' ? ` henk-split-screen--bg-${bgColor}` : ''}`;
    if (id) container.id = id;

    const inner = document.createElement('div');
    inner.className = 'henk-split-screen__inner';
    if (reverse) inner.dataset.order = 'reverse';

    const grid = document.createElement('div');
    grid.className = 'henk-split-screen__grid';

    // === IMAGE COLUMN ===
    const imageItem = document.createElement('div');
    imageItem.className = 'henk-split-screen__grid-item';
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageAlt || '';
        img.className = 'henk-split-screen__img';
        imageItem.appendChild(img);
    }

    // === CONTENT COLUMN ===
    const contentItem = document.createElement('div');
    contentItem.className = 'henk-split-screen__grid-item';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'henk-split-screen__content';

    const headingLevel = Math.min(Math.max(level, 2), 3);
    const titleEl = document.createElement(`h${headingLevel}`);
    titleEl.className = 'henk-split-screen__title';
    titleEl.innerText = title;
    contentDiv.appendChild(titleEl);

    if (subtitle) {
        const subtitleEl = document.createElement('h3');
        subtitleEl.className = 'henk-split-screen__subtitle';
        subtitleEl.innerText = subtitle;
        contentDiv.appendChild(subtitleEl);
    }

    if (content) {
        const contentEl = document.createElement('div');
        contentEl.className = 'henk-split-screen__text';
        contentEl.innerHTML = content;
        contentDiv.appendChild(contentEl);
    }

    if (buttonUrl && buttonText) {
        const button = document.createElement('a');
        button.href = buttonUrl;
        button.innerText = buttonText;
        button.className = `henk-button henk-button--${buttonVariant}`;
        contentDiv.appendChild(button);
    }

    contentItem.appendChild(contentDiv);
    grid.appendChild(imageItem);
    grid.appendChild(contentItem);
    inner.appendChild(grid);
    container.appendChild(inner);

    return container;
};
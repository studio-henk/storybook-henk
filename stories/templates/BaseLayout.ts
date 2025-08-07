
export interface BaseLayoutProps {
    header: HTMLElement;
    mainContent: HTMLElement;
    footer: HTMLElement;
}

export function createBaseLayout({ header, mainContent, footer }: BaseLayoutProps): HTMLElement {
    const container = document.createElement('div');
    container.id = 'base-layout';

    container.appendChild(header);

    const main = document.createElement('main');
    main.appendChild(mainContent);
    container.appendChild(main);

    container.appendChild(footer);

    return container;
}

// import './_content-divider.css';

export interface CreateDividerProps {
    bgColor?: 'default' | 'primary' | 'secondary' | 'tertiary';
}

export const createContentDivider = ({
    bgColor = 'default',
}: CreateDividerProps): HTMLDivElement => {
    const contentDivider = document.createElement('div');
    const contentDividerRule = document.createElement('hr');
    contentDivider.appendChild(contentDividerRule);

    contentDivider.className = `henk-content-divider henk-content-divider--bg-${bgColor}`;

    return contentDivider;
};


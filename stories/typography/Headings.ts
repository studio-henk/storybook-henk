export interface HeadingProps {
    tag: string;
    text: string;
    weight?: 'normal' | 'semibold';
    style?: 'normal' | 'italic';
}

export const createHeadingElement = ({ tag, text, weight = 'normal', style = 'normal' }: HeadingProps): HTMLElement => {
    const heading = document.createElement(tag);
    heading.textContent = text;
    
    if (weight === 'semibold') {
        heading.classList.add('fw-500');
    }
    
    if (style === 'italic') {
        heading.classList.add('fs-italic');
    }

    return heading;
};
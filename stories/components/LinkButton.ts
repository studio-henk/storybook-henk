
export type IconPosition = 'left' | 'right';
export type IconSize = 'small' | 'medium' | 'large';

export interface LinkButtonProps {
    href: string;
    variant?: string; // e.g. 'primary', 'secondary', 'tertiary'
    label: string;
    title?: string;
    iconSvg?: string; // raw SVG string
    iconPosition?: IconPosition;
    iconSize?: IconSize;
    disabled?: boolean;
    target?: string;
    onClick?: (event: MouseEvent) => void;
    size?: 'small' | 'large';
}

export const createLinkButton = ({
    href,
    variant,
    label,
    title,
    iconSvg = '',
    iconPosition = 'left',
    iconSize,
    disabled = false,
    target,
    onClick,
    size,
}: LinkButtonProps): HTMLAnchorElement => {
    const btn = document.createElement('a');

    btn.href = href;
    if (target) btn.target = target;
    if (disabled) btn.setAttribute('aria-disabled', 'true');

    // Icon HTML
    const sizeClass = iconSize ? `icon--${iconSize}` : '';
    const iconHTML = iconSvg ? `<i class="henk-icon ${sizeClass}">${iconSvg}</i>` : '';

    // Inner content
    btn.innerHTML = iconPosition === 'left'
        ? `${iconHTML} ${label}`
        : `${label} ${iconHTML}`;

    // Classes
    const classNames = ['henk-button'];
    if (variant) classNames.push(`henk-button--${variant}`);
    if (size) classNames.push(`henk-button--${size}`);
    btn.className = classNames.join(' ');

    if (title) btn.title = title;
    if (onClick) btn.addEventListener('click', onClick);

    return btn;
};

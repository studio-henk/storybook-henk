// import './button-group.css';

// ButtonGroup.ts
import { createButton } from "../Button.js";

interface ButtonProps {
    buttonElement?: 'a' | 'button' | 'span';
    href?: string;
    variant?: string;
    label?: string;
    title?: string;
    iconSvg?: string;
    iconPosition?: 'left' | 'right';
    iconSize?: 'small' | 'medium' | 'large';
    iconOnly?: boolean;
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    target?: string;
    size?: 'regular' | 'small';
}

interface ButtonGroupProps {
    buttons: ButtonProps[];
    alignment?: 'left' | 'center' | 'right';
    fill?: boolean; // New prop to control button filling
}

export const createButtonGroup = ({ buttons, alignment = 'right' }: ButtonGroupProps) => {
    const group = document.createElement('div');
    group.className = `henk-button-group henk-button-group--${alignment}`;

    for (const buttonProps of buttons) {
        const button = createButton(buttonProps);
        group.appendChild(button);
    }

    return group;
};
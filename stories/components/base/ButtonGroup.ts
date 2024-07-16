import './button-group.css';

// ButtonGroup.ts
import { createButton } from "./Button";

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

export const createButtonGroup = ({ buttons, alignment = 'right', fill = false }: ButtonGroupProps) => {
    const group = document.createElement('div');
    // const alignmentClass = `henk-button-group--${alignment}`;
    // const fillClass = fill ? 'henk-button-group--fill' : '';
    // group.className = `henk-button-group ${alignmentClass} ${fillClass}`;
    group.className = `henk-button-group henk-button-group--${alignment} ${fill ? 'henk-button-group--fill' : ''}`;

    // buttons.forEach(buttonProps => {
    //     const button = createButton(buttonProps);
    //     group.appendChild(button);
    // });
    for (const buttonProps of buttons) {
        const button = createButton(buttonProps);
        group.appendChild(button);
    }

    return group;
};

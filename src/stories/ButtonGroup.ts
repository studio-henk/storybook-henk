import { createLinkButton } from "./LinkButton";
import type { LinkButtonProps } from './LinkButton';

export interface ButtonGroupProps {
    buttons: LinkButtonProps[];
    alignment?: 'left' | 'center' | 'right' | 'space-between';
    fill?: boolean; // New prop to control button filling
}

export const createButtonGroup = ({ buttons, alignment = 'right' }: ButtonGroupProps) => {
    const group = document.createElement('div');
    group.className = `henk-button-group henk-button-group--${alignment}`;

    for (const buttonProps of buttons) {
        const button = createLinkButton(buttonProps);
        group.appendChild(button);
    }

    return group;
};
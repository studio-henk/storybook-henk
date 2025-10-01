import "@assets/_henk-button-group.css";

import { createButton } from "./Button";
import type { ButtonProps } from "./Button";

export interface ButtonGroupProps {
  buttons: ButtonProps[];
  alignment?: "left" | "center" | "right" | "space-between";
  fill?: boolean; // New prop to control button filling
}

export const createButtonGroup = ({
  buttons,
  alignment = "right",
}: ButtonGroupProps) => {
  const group = document.createElement("div");
  group.className = `henk-button-group henk-button-group--${alignment}`;

  for (const buttonProps of buttons) {
    const button = createButton(buttonProps);
    group.appendChild(button);
  }

  return group;
};

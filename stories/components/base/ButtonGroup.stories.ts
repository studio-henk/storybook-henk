// ButtonGroup.stories.ts
import { fn } from "@storybook/test";
import { createButtonGroup } from "./ButtonGroup";
import ShareIcon from "../../assets/icons/icon-share.svg?raw";

export default {
    title: "Components/Base/ButtonGroup",
    tags: ["autodocs"],
    render: (args) => {
        return createButtonGroup(args);
    },
    argTypes: {
        buttons: { control: 'object' },
        alignment: {
            control: { type: 'radio' },
            options: ['left', 'center', 'right'],
        },
        fill: { control: 'boolean' }, // New control for fill prop
    },
    args: { onClick: fn() },
    parameters: {
        docs: {
            description: {
                component: 'HENK follows the convention followed by the majority: Primary action on the right. See research: https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/',
            },
        },
    },
};

export const DefaultGroup = {
    args: {
        buttons: [
            { label: "Button 1", variant: "secondary", buttonElement: "a" },
            { label: "Button 2", variant: "primary", buttonElement: "button" },
        ],
        fill: false,
    },
};

export const GroupAlignedLeft = {
    args: {
        buttons: [
            { label: "Button 1", variant: "secondary", buttonElement: "a" },
            { label: "Button 2", variant: "primary", buttonElement: "button" },
        ],
        alignment: 'left',
        fill: false,
    },
};

export const GroupAlignedCenter = {
    args: {
        buttons: [
            { label: "Button 1", variant: "secondary", buttonElement: "a" },
            { label: "Button 2", variant: "primary", buttonElement: "button" },
        ],
        alignment: 'center',
        fill: false,
    },
};

export const FillContainerGroup = {
    args: {
      buttons: [
        { label: "Button 1", variant: "secondary", buttonElement: "a" },
        { label: "Button 2", variant: "primary", buttonElement: "button" },
      ],
      alignment: 'space-between',
      fill: true,
    },
  };

export const GroupWithThreeButtons = {
    args: {
        buttons: [
            {
                label: "Button 1",
                variant: "secondary",
                buttonElement: "a",
            },
            {
                label: "Button 2",
                variant: "secondary",
                buttonElement: "button",
            },
            {
                buttonElement: "button",
                iconSvg: ShareIcon,
                iconOnly: true,
                iconSize: "large",
                title: "Share",
            },
        ],
        fill: false,
    },
};

// export const DisabledGroup = {
//   args: {
//     buttons: [
//       { label: "Button 1", variant: "primary", buttonElement: "a", disabled: true },
//       { label: "Button 2", variant: "secondary", buttonElement: "button", disabled: true },
//     ],
//   },
// };

// export const LoadingGroup = {
//   args: {
//     buttons: [
//       { label: "Loading", variant: "default", isLoading: true, buttonElement: "a" },
//       { label: "Button 2", variant: "secondary", buttonElement: "button" },
//     ],
//   },
// };

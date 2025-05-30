import { fn } from "@storybook/test";
import { createButtonGroup } from "./ButtonGroup";
import ShareIcon from "../assets/icons/icon-share.svg?raw";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
    title: "Components/ButtonGroup",
    tags: ["autodocs"],
    render: (args) => {
        return createButtonGroup(args);
    },
    argTypes: {
        buttons: { control: "object" },
        alignment: {
            control: { type: "radio" },
            options: [
                "left",
                "center",
                "right",
                "space-between",
                "fill",
                // "mobile-stacked",
                // "stacked",
            ],
        },
        fill: { control: "boolean" }, // New control for fill prop
    },
    args: { onClick: fn() },
    parameters: {
        docs: {
            description: {
                component:
                    "HENK follows the convention followed by the majority: Primary action on the right. See research: https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/",
            },
        },
        viewport: {
            //👇 The viewports you want to use
            viewports: INITIAL_VIEWPORTS,
            //👇 Your own default viewport
            defaultViewport: "responsive",
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
        alignment: "left",
        fill: false,
    },
};

export const GroupAlignedCenter = {
    args: {
        buttons: [
            { label: "Button 1", variant: "secondary", buttonElement: "a" },
            { label: "Button 2", variant: "primary", buttonElement: "button" },
        ],
        alignment: "center",
        fill: false,
    },
};

export const GroupAlignedSpaceBetween = {
    args: {
        buttons: [
            { label: "Button 1", variant: "secondary", buttonElement: "a" },
            { label: "Button 2", variant: "primary", buttonElement: "button" },
        ],
        alignment: "space-between",
        fill: false,
    },
};

// export const GroupAlignedMobileStacked = {
//     args: {
//         buttons: [
//             { label: "Button 1", variant: "secondary", buttonElement: "a" },
//             { label: "Button 2", variant: "primary", buttonElement: "button" },
//         ],
//         alignment: "mobile-stacked",
//     },
//     parameters: {
//         viewport: {
//             defaultViewport: "iphonex",
//         },
//     },
// };

// export const GroupAlignedStacked = {
//     args: {
//         buttons: [
//             { label: "Button 1", variant: "secondary", buttonElement: "a" },
//             { label: "Button 2", variant: "primary", buttonElement: "button" },
//         ],
//         alignment: "stacked",
//     },
// };

export const FillContainerGroup = {
    args: {
        buttons: [
            { label: "Clear All", variant: "secondary", buttonElement: "a" },
            { label: "Apply", variant: "primary", buttonElement: "button" },
        ],
        alignment: "fill",
    },
};

export const FillContainerGroupMobile = {
    args: {
        buttons: [
            { label: "Clear All", variant: "secondary", buttonElement: "a" },
            { label: "Apply", variant: "primary", buttonElement: "button" },
        ],
        alignment: "fill",
    },
    parameters: {
        viewport: {
            defaultViewport: "iphonex",
        },
    },
};
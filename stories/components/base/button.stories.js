// import {withDesign} from "storybook-addon-designs";
import {createAtomButton} from './button';
// badges
// import {BADGE} from '@geometricpanda/storybook-addon-badges';
// import {Placeholder} from "../AtomInput.stories";

export default {
    title: 'Components/Base/Button/Button',
    component: createAtomButton,
    tags: ['autodocs'],
    parameters: { controls: { sort: 'requiredFirst' } },
    argTypes: {
        buttonElement: {
            control: {type: 'radio'},
            options: ['a', 'button', 'span'],
            table: {
                type: {summary: 'html element'},
                defaultValue: {summary: 'a'},
            },
        },
        buttonText: {
            name: 'buttonText',
            type: {
                name: 'string',
                required: true
            },
            description: 'a text label for button',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'button text'},
            },
            control: 'text'
        },
        style: {
            control: {type: 'select'},
            options: ['plain', 'soft']
        },
        accent: {
            control: {type: 'select'},
            options: [
                'accent1',
                'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'accent7', 'accent8', 'accent9', 'accent10', 'accent11', 'accent12', 'accent13', 'accent14', 'accent15', 'accent16', 'accent17'
            ],
            description: 'accent refers to a color from the HENK palette',
            table: {
                category: 'Colors',
            }
        },
        textColor: {
            control: {type: 'select'},
            options: [
                'white', 'black', 'henk-black', 'henk-white',
                'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'accent7', 'accent8', 'accent9', 'accent10', 'accent11', 'accent12', 'accent13', 'accent14', 'accent15', 'accent16', 'accent17'
            ],
            table: {
                category: 'Colors',
            }
        },
        /*role: {
          control: { type: 'radio' },
          options: ['Normal', 'primary', 'cancel', 'destructive'],
          table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'base' },
          },
        },*/
        size: {
            control: {type: 'radio'},
            options: ['base', 'small', 'xsmall'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'base'},
            },
        },
        shape: {
            control: {type: 'radio'},
            options: ['none', 'circle', 'rect', 'rounded'],
            table: {
                type: {summary: 'shape'},
                defaultValue: {summary: 'circle'},
            },
        },
        // textTransform: {},
        state: {
            control: {type: 'radio'},
            options: ['None', 'disabled'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'None'},
            },
        },
        dataState: {
            control: {type: 'radio'},
            options: ['None', 'loading'],
            table: {
                type: {summary: 'This prop should be set by some javascript function when a ajax call is made.'},
                defaultValue: {summary: 'loading'},
            },
        },
        icon: {
            control: {type: 'select'},
            options: [
                'icon-arrow-right', 'icon-arrow-left',
            ],
        },
        onClick: {action: 'onClick'},
    },
    // decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({buttonText, ...args}) => {
    return createAtomButton({buttonText, ...args});
};

export const Base = Template.bind({});
Base.args = {
    buttonText: 'Base Button',
    buttonElement: 'a',
};
// badge
Base.parameters = {
    controls: {exclude: ['onClick']},
    // badges: [BADGE.STABLE],
    // design: {
    //     type: "figma",
    //     url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    // },
};

export const Filled = Template.bind({});
Filled.args = {
    buttonText: 'Filled Button',
    style: 'filled',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   buttonText: 'Primary Button',
//   role: 'primary',
// };

/*
Primary.parameters = {
    badges: [BADGE.NEEDS_REVISION],
    controls: { exclude: ['role'] },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1320%3A74",
    },
};*/

/*export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  buttonText: 'Disabled Button',
  variant: 'disabled',
};*/

/*Disabled.parameters = { controls: { exclude: ['variant', 'size'] } };*/

// export const StylePlain = Template.bind({});
// StylePlain.args = {
//     buttonText: 'Plain Button',
//     style: 'plain',
// };
// StylePlain.argTypes = {
//     style: {
//         control: false,
//         description: 'data-style="plain"',
//     }
// }
// StylePlain.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'accent', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const StyleSoft = Template.bind({});
// StyleSoft.args = {
//     buttonText: 'Soft Button',
//     style: 'soft',
//     accent: 'accent5'
// };
// StyleSoft.argTypes = {
//     style: {
//         control: false,
//         description: 'data-style="soft"',
//     }
// }
// StyleSoft.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const Accent = Template.bind({});
// Accent.args = {
//     buttonText: 'Accent button',
//     accent: 'accent1'
// };
// Accent.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const TransColored = Template.bind({});
// TransColored.args = {
//     buttonText: 'TransColored button',
//     accent: 'transparent',
//     textColor: 'accent17'
// };
// TransColored.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const Size = Template.bind({});
// Size.args = {
//   buttonText: 'Sized Button',
//   size: 'small',
// };
// Size.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'textColor', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const Lowercase = Template.bind({});
// Lowercase.args = {
//   buttonText: 'Lowercase Button',
//   textTransform: 'none'
// };
// Lowercase.argTypes = {
//     textTransform: {
//         control: false,
//         description: 'data-text-transform="none"'
//     }
// }
// Lowercase.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'textColor', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.STABLE],
// };

// export const Icon = Template.bind({});
// Icon.args = {
//   buttonText: 'Icon Button',
//   icon: 'icon-arrow-right'
// };
// Icon.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'textColor', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.EXPERIMENTAL],
// };
// Icon.storyName = 'Button with icon';

// export const Shaped = Template.bind({});
// Shaped.args = {
//   buttonText: '',
//   shape: 'circle',
//   icon: 'icon-arrow-right'
// };
// /*Shaped.argTypes = {
//     textTransform: {
//         control: false,
//         description: 'data-text-transform="none"'
//     }
// }*/
// Shaped.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'textColor', 'size', 'shape', 'state', 'dataState', 'onClick']},
//     badges: [BADGE.EXPERIMENTAL],
// };
// Shaped.storyName = 'Circle button with icon only';

// export const Loading = Template.bind({});
// Loading.args = {
//     accent: 'accent16',
//     style: 'soft',
//     dataState: 'loading',
//     textColor: 'white',
// };
// Loading.argTypes = {
//     buttonText: {
//         control: false
//     }
// }
// Loading.parameters = {
//     controls: {
//         exclude: ['buttonElement', 'buttonText', 'style', 'size', 'shape', 'state', 'icon', 'onClick']
//     },
//     badges: [BADGE.STABLE],
// };


// export const LoadingTrans = Template.bind({});
// LoadingTrans.args = {
//     buttonText: 'Loading...',
//     accent: 'transparent',
//     dataState: 'loading',
//     textColor: 'accent9'
// };
// LoadingTrans.parameters = {
//     controls: {exclude: ['buttonElement', 'buttonText', 'style', 'accent', 'size', 'shape', 'icon', 'state', 'onClick']},
//     badges: [BADGE.STABLE],
// };
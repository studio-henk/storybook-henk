import './button.css';
// import '../../../../henk-astro/src/static/std/assets/css/components/atoms/atom-button/atom-button-new.css';
// import './_button-loading.css';
// import camelcase from "lodash.camelcase";
// import { returnIconSVG } from "../atom-icon/_icons-function";

export const createAtomButton = ({
     buttonElement = 'a',
     type = 'button',
     role = '',
     state = '',
     style = '',
     accent = '',
     textColor = '',
     dataState = '',
     size = '',
     buttonText = 'button text',
     onClick,
     href,
     textTransform = '',
     shape = '',
     icon = ''
 }) => {
    const btn = document.createElement(buttonElement);
    if (buttonElement === 'button') {
        btn.type = type;
    }
    if (buttonElement === 'a') {
        btn.href = href ? href : 'https://studio-henk.nl/en';
    }
    btn.innerText = buttonText;
    btn.addEventListener('click', onClick);
    btn.className = ['sh-atom-button'].join(' ');
    //btn.style.backgroundColor = backgroundColor;

    if (role && role !== 'Normal') {
        btn.setAttribute('data-role', role);
    }

    if (state === 'disabled') {
        if (buttonElement === 'button') {
            btn.setAttribute('disabled', 'disabled');
        } else {
            btn.setAttribute('data-state', state);
        }
    }

    if (size && size !== 'base') {
        btn.setAttribute('data-size', size);
    }

    if (style) {
        btn.setAttribute('data-style', style);
    }

    if (accent) {
        btn.setAttribute('data-accent', accent);
    }

    if (textColor) {
        btn.setAttribute('data-text-color', textColor);
    }

    if (dataState) {
        btn.setAttribute('data-state', dataState);
    }

    if (textTransform) {
        btn.setAttribute('data-text-transform', textTransform);
    }

    if (shape) {
        btn.setAttribute('data-shape', shape);
    }

    // if (icon) {
    //     btn.setAttribute('data-icon', icon);
    //     const iconName = camelcase(icon);
    //     btn.insertAdjacentHTML('beforeend', returnIconSVG(iconName));
    // }

    return btn;
};

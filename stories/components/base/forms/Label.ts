import './label.css';

export interface CreateLabelProps {
    text: string;
    htmlFor?: string;
}

export const createLabel = ({
    text = 'label text',
    htmlFor
}: CreateLabelProps): HTMLLabelElement => {
    // if (!text) {
    //     throw new Error('The "text" parameter is required.');
    // }
    
    const label = document.createElement('label');
    label.className = 'henk-label';

    if (htmlFor) {
        label.htmlFor = htmlFor; // set htmlFor attribute if provided
    }

    label.innerText = text;

    return label;
};

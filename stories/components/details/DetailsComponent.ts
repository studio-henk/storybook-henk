// import './details-component.css';

export interface DetailsProps {
    summary: string;
    content: string;
    variant?: 'default' | 'plusmin';
}

export const createDetailsComponent = ({
    summary = 'Summary',
    content = '<p>Content</p>',
    variant = 'default',
}: DetailsProps): HTMLDetailsElement => {
    const details = document.createElement('details');
    details.className = 'henk-details';

    if (variant) {
        details.className = `henk-details henk-details--${variant}`;
    }

    const summaryElement = document.createElement('summary');
    summaryElement.className = 'henk-details__summary';
    summaryElement.textContent = summary;

    const contentElement = document.createElement('div');
    contentElement.className = 'henk-details__content';
    contentElement.innerHTML = content;

    details.appendChild(summaryElement);
    details.appendChild(contentElement);

    return details;
};
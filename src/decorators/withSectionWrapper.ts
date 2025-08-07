
import type { Decorator } from '@storybook/html';

export const withSectionWrapper: Decorator = (Story) => {
    const section = document.createElement('section');
    section.className = 'shopify-section';

    const storyHtml = Story();
    const fragment =
        typeof storyHtml === 'string'
            ? document.createRange().createContextualFragment(storyHtml)
            : storyHtml;

    section.appendChild(fragment);
    return section;
};
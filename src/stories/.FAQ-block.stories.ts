import { createHeadingElement, HeadingProps } from '../components/base/Headings';
import { createDetailsComponent, DetailsProps } from '../components/base/details/DetailsComponent';
import { MultipleDetailsComponents } from '../components/base/details/DetailsComponent.stories';

export default {
    title: 'Sections/FAQ-Block',
    parameters: {
        layout: 'fullscreen',
    },
};


// Define the story for the FAQ-Block
export const FAQBlock = () => {
    const faqTitle = createHeadingElement({    
        tag: 'h2',
        text: 'Questions?',
    });

    const faqContent = createDetailsComponent({
        summary: 'What is the purpose of this component?',
        content: '<p>This component is used to display a list of frequently asked questions.</p>',
        variant: 'plusmin',
    });
    
    const faqContainer = document.createElement('div');
    faqContainer.className = "faq-container";
    
    faqContainer.appendChild(faqTitle);
    // faqContainer.appendChild(faqContent);
    faqContainer.appendChild(MultipleDetailsComponents());

    return faqContainer;
}

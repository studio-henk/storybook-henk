import { createDetailsComponent, DetailsProps } from './DetailsComponent';

// Define the Storybook story
export default {
    title: 'Components/base/DetailsComponent',
    component: createDetailsComponent,
    argTypes: {
        summary: { control: 'text' },
        content: { control: 'text' },
        variant: { control: { type: 'select', options: ['default', 'plusmin'] } }, // Add variant control
    },
    render: ({ summary, content, variant }) => {
        const details = createDetailsComponent({ summary, content, variant });
        return details;
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The ```<details>``` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the ```<summary>``` element.',
            },
        },
    },
};

export const Default = {

};

export const WithContent = {
    args: {
        summary: 'Summary',
        content: `<p>Op onze onderhoudspagina vind je uitgebreide informatie over het gebruik en onderhoud van onze meubels. Zo adviseren wij het gebruik van onderzetters en schoonmaken met licht vochtig doekje (eventueel mild sopje, wel nadrogen). Hout van iedere kwaliteit werkt, en reageert op (lucht-)vocht(-igheid), warmte(-wisselingen) en licht; voorkom schommelingen hierin of blootstelling hieraan dus. Ook afwerkingen bieden slechts gedeeltelijke bescherming tegen vlekken en krassen. Scheuren of verkleuren, gevolgen van dergelijke blootstelling of schommelingen, alsook krassen, slijtagesporen, kringen of vlekken vallen daarom niet onder de garantie, zij zijn immers het gevolg van gebruik door de klant. Raadpleeg ook onze algemene voorwaarden. Je vindt op onze onderhoudspagina onder meer informatie over:</p><ul>
	<li>gebruik van je meubel</li>
	<li>stappenplan voor grondig onderhoud bij diepe krassen/vlekken</li>
	<li>services</li>
</ul>`,
    },
};

export const PlusMinVariant = {
    args: {
        variant: 'plusmin'
    }
}

export const PlusMinVariantWithContent = {
    args: {
        variant: 'plusmin',
        summary: 'Summary',
        content: `<p>Op onze <a href="#">onderhoudspagina</a> vind je uitgebreide informatie over het gebruik en onderhoud van onze meubels. Zo adviseren wij het gebruik van onderzetters en schoonmaken met licht vochtig doekje (eventueel mild sopje, wel nadrogen). Hout van iedere kwaliteit werkt, en reageert op (lucht-)vocht(-igheid), warmte(-wisselingen) en licht; voorkom schommelingen hierin of blootstelling hieraan dus. Ook afwerkingen bieden slechts gedeeltelijke bescherming tegen vlekken en krassen. Scheuren of verkleuren, gevolgen van dergelijke blootstelling of schommelingen, alsook krassen, slijtagesporen, kringen of vlekken vallen daarom niet onder de garantie, zij zijn immers het gevolg van gebruik door de klant. Raadpleeg ook onze algemene voorwaarden. Je vindt op onze onderhoudspagina onder meer informatie over:</p><ul>
	<li>gebruik van je meubel</li>
	<li>stappenplan voor grondig onderhoud bij diepe krassen/vlekken</li>
	<li>services</li>
</ul>`,
    },
};

export const MultipleDetailsComponents = () => {
    // Create details components
    const details1 = createDetailsComponent({
        summary: 'What is the purpose of this component?',
        content: '<p>This component is used to display a list of frequently asked questions.</p>',
        variant: 'plusmin',
    });

    const details2 = createDetailsComponent({
        summary: 'How many samples can I order?',
        content: '<p>You are free to assemble your own samples or choose from our curated sample packs, which include six material samples each. You can help us reduce waste by ordering only the samples you need.</p>',
        variant: 'plusmin',
    });

    const details3 = createDetailsComponent({
        summary: 'When can I expect my samples?',
        content: '<p>You should expect your samples within 7 days. Please contact us if you have not received your samples within one week.</p>',
        variant: 'plusmin',
    });

    const details4 = createDetailsComponent({
        summary: 'Why do you want me to return the samples?',
        content: '<p>By returning your samples, you can help us ensure that nothing goes to waste. We repurpose samples by using them in the stores if they are still in good condition.</p>',
        variant: 'plusmin',
    });

    const details5 = createDetailsComponent({
        summary: 'How can I return my samples?',
        content: '<p>You can return your sample pack to any of our stores or mail it to us for free via Antwoordnummer 98189, 1000 VA Amsterdam.</p>',
        variant: 'plusmin',
    });

    const details6 = createDetailsComponent({
        summary: 'Will I be reimbursed for the samples?',        
        content: '<p>When you return the samples to one of our stores, we will reimburse the cost as a discount with your order. Unfortunately, we\'re not able to offer reimbursement when you return your samples to us via mail.</p>',
        variant: 'plusmin',
    });


    // Create a container element
    const container = document.createElement('div');
    container.className = 'henk-details-group';

    container.appendChild(details1);
    container.appendChild(details2);
    container.appendChild(details3);
    container.appendChild(details4);
    container.appendChild(details5);
    container.appendChild(details6);

    // Return the container element
    return container;
};

// Define individual stories (optional)
MultipleDetailsComponents.storyName = 'Multiple Details Components';
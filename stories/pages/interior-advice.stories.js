// HomePage.stories.js
import { createUspsBar } from '../components/usp-bar/usp-bar';
import {HeroVideoStory} from '../components/HeroVideo.stories.js';
// import { Default as HeadingGroupDefault } from '../components/base/HeadingGroup.stories.js';
import { createHeadingGroup } from '../components/base/HeadingGroup.js';

export default {
  title: 'Pages/Interior Advice', // Define the title of your story
  parameters: {
    layout: 'fullscreen',
  },
};


// Define the story for the HomePage
export const InteriorAdvice = () => {
  
  const uspBar = createUspsBar({    
    showIcon: true,
  });

  const hGroup1 = createHeadingGroup({    
    level: '2',
    heading: 'Gratis productadvies',
  });

  const hGroup2 = createHeadingGroup({    
    level: '2',
    heading: 'Gratis interieuradvies',
  });
  
  // Convert DOM element to string
  const hGroup1Html = hGroup1.outerHTML;
  const hGroup2Html = hGroup2.outerHTML;

  


  // create grid container for advice columns
  // const gridContainer = document.createElement('div');
  const gridSection = `<div class="sh-org-block --no-padding">
    <div class="sh-l-grid sh-l-grid--2">
        <div class="sh-l-grid__item">
            <picture class="sh-atom__picture">
                <source
                    media="(max-width: 767px)"
                    sizes="(max-width: 767px) 100vw, 767px"
                    srcset="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col1.jpg 756w"
                >
                <img
                    sizes="(max-width: 3024px) 100vw, 1334px"
                    srcset="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col1.jpg 1334w"
                    src="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col1.jpg"
                    alt="rozengracht store"
                    style="border-radius: 8px;"
                >
            </picture>
            <div class="content__container">
              ${hGroup1Html}
              <!-- <hgroup class="henk-hgroup">
                <h2>Gratis productadvies</h2>  
                <p>subtitle</p>                
              </hgroup> -->
                <p class="service__intro">Op zoek naar een nieuwe
                    tafel, bank of ander <a href="https://studio-henk.nl">HENK</a> meubel? Tijdens een
                    gratis en vrijblijvend productadvies bekijken
                    we welk meubel en samenstelling het best past
                    bij jouw persoonlijke stijl en voorkeuren. Met
                    een kop koffie of thee en iets lekkers stel je
                    samen met onze interieur expert jouw ideale
                    meubel samen.</p>
                <p class="service__subheading"><strong>Wat kun je
                        verwachten</strong></p>
                <ul>
                    <li>Twijfel je tussen modellen? Samen
                        ontdekken we welk design het beste bij jou
                        past.</li>
                    <li>Op basis van jouw wensen bepalen we de
                        perfecte maat en samenstelling voor jouw
                        meubel.</li>
                    <li>Je kunt uitgebreid de verschillende
                        materiaalstalen bekijken en voelen.</li>
                    <li>Onze expert geeft materiaaladvies, en kan
                        meedenken over bijvoorbeeld onderhouds- of
                        kindvriendelijke keuzes.</li>
                    <li>Je ontvangt praktische en handige
                        onderhoudstips.</li>
                    <li>Keus gemaakt? Dan loop je de deur uit met
                        jouw order in een HENK tote bag.</li>
                </ul>
            </div>
            <a
                class="henk-button henk-button--default"
                onclick="shOpenModal(event)"
                href="/modal-advice?lang=nl&amp;service=0"
            >Boek gratis productadvies</a>
        </div>
        <div class="sh-l-grid__item">
            <picture class="sh-atom__picture">
                <source
                    media="(max-width: 767px)"
                    sizes="(max-width: 767px) 100vw, 767px"
                    srcset="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col2.jpg 756w"
                >
                <img
                    sizes="(max-width: 3024px) 100vw, 1334px"
                    srcset="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col2.jpg 1334w"
                    src="https://assets.studio-henk.nl/assets/Images/Interior-Advice/col2.jpg"
                    alt="rozengracht store"
                    style="border-radius: 8px;"
                >
            </picture>
            <div class="content__container">
              ${hGroup2Html}  
              <!-- <hgroup>
                <p class="sh-molecule-section-header__subtitle">subtitle</p>
                <h2 class="sh-molecule-section-header__title">Gratis interieuradvies</h2>
              </hgroup> -->
                <p class="service__intro">Nieuwe woning, of nieuw
                    interieur waarvoor je meerdere nieuwe meubels
                    zoekt? In het interieuradvies met één van onze
                    experts nemen we de tijd om verschillende
                    meubels te bespreken, en kleuren en materialen
                    te combineren. Met een koffie of thee en wat
                    lekkers maken we een plan voor jouw nieuwe
                    Studio HENK meubels.</p>
                <p class="service__subheading"><strong>Wat kun je
                        verwachten</strong></p>
                <ul>
                    <li>Aan de hand van jouw wensen en eventueel
                        vooraf aangeleverde moodboard bespreken we
                        verschillende meubels.</li>
                    <li>We hebben de tijd om een 2D plattegrond te
                        maken waarop we laten zien hoe onze
                        meubels in de ruimte passen.</li>
                    <li>Je kunt uitgebreid de verschillende
                        materiaalstalen bekijken en voelen.</li>
                    <li>We brainstormen over maten en
                        samenstellingen voor je meubels.</li>
                    <li>Onze expert geeft materiaaladvies, en kan
                        combinaties maken met eventueel zelf
                        meegenomen stalen vanuit huis.</li>
                    <li>Keus gemaakt? Dan loop je de deur uit met
                        jouw order in een HENK tote bag.</li>
                </ul>
            </div>
            <a
              class="henk-button henk-button--default"
                onclick="shOpenModal(event)"
                href="/modal-advice?lang=nl&amp;service=1"
            >Boek gratis interieuradvies</a>
        </div>
    </div>
</div>`;

  const pageContainer = document.createElement('div');
  pageContainer.id = "sh-rozengracht";

  // pageContainer.appendChild(uspBar);
  pageContainer.insertAdjacentHTML("beforeend", gridSection);

  // create heroVideo
  // const heroVideoContainer = document.createElement('div');
  // heroVideoContainer.innerHTML = HeroVideoStory();

  // Append HeroVideoStory to the container
  // pageContainer.appendChild(heroVideoContainer);

  return pageContainer;
};


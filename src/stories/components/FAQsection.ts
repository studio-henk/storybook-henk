import {
  createDetailsComponent,
  DetailsProps,
} from "@components/DetailsComponent";

export const createFAQSection = ({
  title = "Frequently Asked Questions",
  detailsItems = [] as DetailsProps[],
}): HTMLElement => {
  const section = document.createElement("section");
  section.className = "henk-faq-section henk-section";

  // Add inner wrapper
  const sectionInner = document.createElement("div");
  sectionInner.className = "henk-section__inner";
  section.appendChild(sectionInner);

  // Add a heading for the section
  const h2 = document.createElement("h2");
  h2.className = "henk-faq-section__title";
  h2.innerText = title;
  sectionInner.appendChild(h2);

  // Create a container for the details
  const container = document.createElement("div");
  container.className = "henk-details-group";

  // Append each details component
  detailsItems.forEach((item) => {
    const detailsEl = createDetailsComponent(item);
    container.appendChild(detailsEl);
  });

  sectionInner.appendChild(container);
  return section;
};

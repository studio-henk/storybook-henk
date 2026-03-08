import IconDirections from "@assets/henk-navigate.svg?raw";

export type StoreCardProps = {
  name: string;
  address: string;
  imageUrl: string;
  imageAlt?: string;
  href: string; // link to store detail page
  directionsUrl: string; // Google Maps link
};

export function createStoreCard({
  name,
  address,
  imageUrl,
  imageAlt = "",
  href,
  directionsUrl,
}: StoreCardProps): HTMLElement {
  const card = document.createElement("div");
  card.className = "henk-card henk-card--store";

  const link = document.createElement("a");
  link.className = "henk-card__image-link";
  link.href = href;

  // --- Image container ---
  // const imgContainer = document.createElement("div");
  // imgContainer.className = "henk-card__image-container";

  const picture = document.createElement("picture");
  picture.className = "henk-card__picture henk-card__image-container";

  const img = document.createElement("img");
  img.className = "henk-card__img";
  img.src = imageUrl;
  img.alt = imageAlt;
  img.width = 920;
  img.height = 764;

  picture.appendChild(img);
  // imgContainer.appendChild(picture);
  link.appendChild(picture);

  // --- Content ---
  const content = document.createElement("div");
  content.className = "henk-card__content henk-card__content--vertical";

  const title = document.createElement("h2");
  title.className = "henk-card__title";
  title.textContent = name;
  content.appendChild(title);

  // Directions link with SVG
  const directions = document.createElement("a");
  directions.className = "henk-card__link henk-card__link--directions";
  directions.href = directionsUrl;
  directions.title = `Get Directions to this store`;
  directions.target = "_blank";

  // Use innerHTML for the SVG and address
  directions.innerHTML = `
    ${address}
    <i class="henk-icon">
    ${IconDirections}
    </i>
  `;
  content.appendChild(directions);

  // Discover button
  const button = document.createElement("a");
  button.className = "henk-button henk-button--secondary henk-card__button";
  button.href = href;
  button.textContent = `Discover ${name}`;
  content.appendChild(button);

  // --- Assemble card ---
  card.appendChild(link);
  card.appendChild(content);

  return card;
}

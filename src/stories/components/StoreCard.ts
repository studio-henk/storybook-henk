export type StoreCardProps = {
  name: string;
  address: string;
  imageUrl: string;
  imageAlt?: string;
  href: string; // link to store detail page
  directionsUrl?: string; // Google Maps link
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
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
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

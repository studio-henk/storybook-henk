/**
 * A custom element representing a product card.
 *
 * @extends HTMLElement
 */
class ProductCard extends HTMLElement {
  constructor() {
    super();

    // if (!this.productLinks) {
    //   this.productLinks = [];
    // }

    // Access the value of the fabric-label-suffix attribute directly in the constructor
    const fabricLabelSuffix = this.getAttribute("fabric-label-suffix");
    this.fabricLabelSuffix = fabricLabelSuffix || "+meer";

    // Create a shadow root
    this.shadow = this.attachShadow({ mode: "open" });

    // Define a template for the component
    this.template = document.createElement("template");
    this.template.innerHTML = `
        <style>
        /* @import "/assets/button.css"; */
        /* @import "/assets/button-group.css"; */

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .ProductCard {
            background-color: var(--color-background-tertiary, whitesmoke);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            position: relative;
            /* max-width: 267px; */
            aspect-ratio: 2 / 3;
            border: 1px solid var(--color-border-muted);
        }

        .ProductCard img {
            max-width: 100%;
        }

        .ProductCard--animated {
             opacity: 0;
             animation: 1s linear 0.3s forwards fadeIn;
         }

        .ProductCard__link {
            text-decoration: none;
          display: flex;
        }

        .ProductCard__link:focus,
        .ProductCard__link:hover {
            color: currentColor;
        }

        .ProductCard__image-container {
            flex: 0 1 auto;
            overflow: hidden;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .ProductCard__img {
            width: auto;
            height: auto;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            object-position: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            transition: transform 0.3s ease;
            transform: scale(1.5);
        }

        .ProductCard__link:hover .ProductCard__img {
            transform: scale(1.75);
        }

        .ProductCard__tags {
            position: absolute;
            top: 1em;
            right: 1em;
            z-index: 9;
        }

        .ProductCard__tag {
            /* align-items: center; */
            /* display: inline-flex; */
            /* border-radius: 40px; */
            /* gap: .36363636em; */
            /* justify-content: flex-start; */
            /* line-height: 24px; */
            /* padding: .25em .83333333em; */
            /* text-align: center; */
            /* vertical-align: middle; */
        }

        .ProductCard__content * {
            margin: 0;
        }

        .ProductCard__content {
            padding: 0px;
            display: flex;
            flex-direction: column;
            gap: 0px;
            width: min(100% - 2rem);
            margin-inline: auto;
            padding-block: 0.5rem;
        }

        /* .ProductCard__content > ul { */
        /*     padding: 0; */
        /*     margin-left: 24px; */
        /* } */

        .ProductCard__ProductName {
          font-weight: 500;
        }

        .ProductCard__description {
          font-size: 13px;
          line-height: 16px;
        }

        .truncate {
          --_line-clamp: 2;
          display: -webkit-box;
          -webkit-line-clamp: var(--_line-clamp, var(--line-clamp));
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ProductCard__usps-list {
          font-size: 13px;
          line-height: 16px;
          margin-block: 1lh;
          padding: 0;
          margin-left: 14px;
        }

        .ProductCard__Price {
            text-align: right;
            /* font-size: 20px; */
        }

        .ProductCard__config {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .ProductCard__config-options {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          font-size: 13px;
          line-height: 16px;
          margin-block-start: 8px;
        }

        .ProductCard__swatch {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            border-radius: 50px;
            font-size: 0;
        }

        .ProductCard__swatch img {
            border-radius: 50px;
        }

        .ProductCard__swatch {
            border: 2px solid transparent;
        }

        .ProductCard__swatch--selected {
            border: 2px solid black;
        }

        .ProductCard__swatch:hover {
            border: 2px solid black;
        }

        .ProductCard__swatch-container {
            position: relative;
        }

        .ProductCard__swatch-container--small {
            display: flex;
            gap: 4px;
            flex-wrap: nowrap;
        }

        .ProductCard__swatch-container--large {
            display: flex;
            gap:8px;
        }

        :host([product-swatch-size="large"]) .ProductCard__config-options {
            flex-direction: column;
        }

        :host([product-swatch-size="large"]) .ProductCard__config-options .ProductCard__label {
            width: 100%;
        }

        :host([product-swatch-size="large"]) .ProductCard__config-options .ProductCard__swatch-container {
            display: flex;
            gap: 8px;
        }

        .items-stacked .ProductCard__swatch {
            position: absolute;
            --spacing-swatch: 24;
        }

        .items-stacked .ProductCard__swatch:not(:first-child) {
            margin-left: calc(var(--spacing-swatch) * 1px);
        }

        .items-stacked .ProductCard__swatch.color-orange {
            margin-left: calc(2 * var(--spacing-swatch) * 1px);
        }

        .items-stacked .ProductCard__swatch.color-brown {
            margin-left: calc(3 * var(--spacing-swatch) * 1px);
        }

        .items-stacked .ProductCard__swatch.color-blue {
            margin-left: calc(4 * var(--spacing-swatch) * 1px);
        }

        img.ProductCard__swatch {
            mix-blend-mode: darken;
        }

        .ProductCard__swatch-container--small {
            height: 24px;
            line-height: 12px;
        }

        .ProductCard__swatch-container--small .ProductCard__swatch {
            width: 20px;
            height: 20px;
            cursor: default;
            --spacing-swatch: 12;
        }

        .ProductCard .henk-button-group {
          margin-block-start: 0.3333333lh;
          margin-block-end: 0;
        }

        @media only screen and (min-width: 1024px) {
            .ProductCard__config-options {
                flex-direction: row;
                align-items: center;
            }
        }
        </style>
        <div class="ProductCard">
            <div class="ProductCard__image-container">
                <a href="${this.productLinks[0]}" class="ProductCard__link">
                    <img
                    src="${this.productImages[0]}"
                    width="1240"
                    height="1240"
                    class="ProductCard__img"
                    />
                </a>
            </div>
            <div class="ProductCard__tags">${this.renderTags()}</div>
            <div class="ProductCard__content">
                <p class="ProductCard__ProductName">${this.productName}</p>
                ${
                  this.productDescription
                    ? `<p class="ProductCard__description truncate">${this.productDescription}</p>`
                    : ""
                }
                ${this.productUsps ? `${this.renderUsps()}` : ""}

<!-- <div class"henk-product-card__options">${this.productOptions}</div> -->

${
  this.fabricNames && this.fabricNames.length > 1
    ? `<div class="ProductCard__config-options">
        <p class="ProductCard__label">${this.fabricLabel}</p>
        <div class="ProductCard__swatch-container${
          this.productSwatchSize === "small"
            ? " ProductCard__swatch-container--small"
            : ""
        }">
        ${this.renderSwatches()}
        </div>
        <span class="ProductCard__label">${this.fabricLabelSuffix}</span>
      </div>`
    : ""
}
                <div class="henk-button-group" part="henk-button-group align-end">
                    <a
                    href="${this.productLinks[0]}"
                    class="henk-link-button henk-link-button--small henk-link-button--primary ProductCard__Price"
                    >${this.productPrices[0]}
                    </a>
                </div>
            </div>
        </div>
        `;

    // Clone the template content and append it to the shadow root
    this.shadow.appendChild(this.template.content.cloneNode(true));

    // Then fetch & inject shared button styles
    const stylePaths = [
      "/assets/_henk-link-button.css",
      "/assets/_henk-button-group.css",
      "/assets/_henk-tag.css",
    ];

    (async () => {
      const style = document.createElement("style");
      style.textContent = (
        await Promise.all(
          stylePaths.map((path) => fetch(path).then((r) => r.text())),
        )
      ).join("\n");

      this.shadow.appendChild(style);
    })();

    // Check for the presence of the fade-in attribute
    const fadeInAttribute = this.getAttribute("fade-in");
    this.fadeIn =
      fadeInAttribute !== null && fadeInAttribute.toLowerCase() === "true";

    // Apply fade-in effect if necessary
    if (this.fadeIn) {
      // Query for all instances of ProductCard
      const allProductCards = document.querySelectorAll("product-card");

      // Calculate animation delay based on the order of appearance
      const index = Array.from(allProductCards).indexOf(this);
      const animationDelay = index * 0.3;

      // Apply animation styles directly to the product-card element
      this.style.opacity = "0";
      this.style.animation = `fadeIn 0.5s linear ${animationDelay}s forwards`;
    }
  }

  connectedCallback() {
    // Add event listeners for swatch hover
    // TODO: this assumes that the swatches are always present?
    this.shadow.querySelectorAll(".ProductCard__swatch").forEach((swatch) => {
      swatch.addEventListener("mouseover", () => {
        this.handleSwatchInteraction(swatch);
      });
      swatch.addEventListener("focus", () =>
        // this.handleSwatchInteraction(swatch)
        this.handleSwatchFocus(swatch),
      );
      swatch.addEventListener("click", (event) => event.preventDefault());
    });
  }

  handleSwatchInteraction(swatch) {
    this.removeAllSelectedSwatches();
    swatch.classList.add("ProductCard__swatch--selected");
    this.updateMainImage(swatch.getAttribute("data-image"));
    this.updateMainImageHref(swatch.getAttribute("data-link"));
    this.updateButtonHref(swatch.getAttribute("data-link"));
    this.updatePrice(swatch.getAttribute("data-prices"));
  }

  handleSwatchFocus(swatch) {
    // Ensure swatch interaction for keyboard focus
    this.handleSwatchInteraction(swatch);

    swatch.addEventListener("keydown", (event) => {
      // Check if the Enter key was pressed (key code 13)
      console.log(event.keyCode);

      if (event.keyCode === 13) {
        console.log("enter pressed");
        window.location.href = swatch.getAttribute("href");
      }
    });
  }

  // Define getters and setters for props as attributes
  get productName() {
    return this.getAttribute("product-name") || "No product name provided";
  }

  set productName(value) {
    this.setAttribute("product-name", value);
  }

  get productDescription() {
    return this.getAttribute("product-description") || "";
  }

  set productDescription(value) {
    this.setAttribute("product-description", value);
  }

  get productOptions() {
    return this.getAttribute("product-options") || "No options provided";
  }

  set productOptions(value) {
    this.setAttribute("product-options", value);
  }

  /**
   * Gets or sets the product images.
   *
   * @type {string[]}
   */
  get productImages() {
    const attributeValue = this.getAttribute("product-images");
    return attributeValue ? JSON.parse(attributeValue.replace(/'/g, '"')) : [];
  }

  // set productImages(value) {
  //     // Convert the value to JSON string and replace double quotes with single quotes
  //     const jsonString = JSON.stringify(value).replace(/"/g, "'");
  //     this.setAttribute("product-images", jsonString);
  // }

  get productUsps() {
    const attributeValue = this.getAttribute("product-usps");
    return attributeValue && attributeValue !== "[]"
      ? JSON.parse(attributeValue.replace(/'/g, '"'))
      : null;
  }

  set productUsps(value) {
    // Convert the value to JSON string and replace double quotes with single quotes
    const jsonString = JSON.stringify(value).replace(/"/g, "'");
    this.setAttribute("product-usps", jsonString);
  }

  get productLinks() {
    const attributeValue = this.getAttribute("product-links");
    return attributeValue ? JSON.parse(attributeValue.replace(/'/g, '"')) : [];
    // return attributeValue ? JSON.parse(attributeValue) : [];
  }

  set productLinks(value) {
    console.log(value);
    // Convert the value to JSON string and replace double quotes with single quotes
    const jsonString = JSON.stringify(value).replace(/"/g, "'");
    this.setAttribute("product-links", jsonString);
    // this.setAttribute("product-links", []);
  }

  get productPrices() {
    // return JSON.parse(this.getAttribute("product-prices")) || [];
    const attributeValue = this.getAttribute("product-prices");
    return attributeValue ? JSON.parse(attributeValue.replace(/'/g, '"')) : [];
  }

  set productPrices(value) {
    this.setAttribute(
      "product-prices",
      JSON.stringify(value).replace(/"/g, "'"),
    );
  }

  get productSwatchSize() {
    return this.getAttribute("product-swatch-size") || "";
  }

  set productSwatchSize(value) {
    this.setAttribute("product-swatch-size", value);
  }

  get fabricLabel() {
    return this.getAttribute("fabric-label") || "";
  }

  set fabricLabel(value) {
    this.setAttribute("fabric-label", value);
  }

  get fabricImages() {
    // return JSON.parse(this.getAttribute("fabric-images")) || [];
    const attributeValue = this.getAttribute("fabric-images");
    return attributeValue ? JSON.parse(attributeValue.replace(/'/g, '"')) : [];
  }

  set fabricImages(value) {
    this.setAttribute(
      "fabric-images",
      JSON.stringify(value).replace(/"/g, "'"),
    );
  }

  /**
   * @type {string[]} Array of fabric names
   */
  get fabricNames() {
    // return JSON.parse(this.getAttribute("fabric-names")) || [];
    const attributeValue = this.getAttribute("fabric-names");
    return attributeValue ? JSON.parse(attributeValue.replace(/'/g, '"')) : [];
  }

  set fabricNames(value) {
    this.setAttribute("fabric-names", JSON.stringify(value).replace(/"/g, "'"));
  }

  get productTags() {
    const attributeValue = this.getAttribute("product-tags");
    return attributeValue && attributeValue !== "[]"
      ? JSON.parse(attributeValue.replace(/'/g, '"'))
      : null;
  }

  renderSwatches() {
    let swatchesHTML = this.fabricImages
      .map(
        (image, index) => `
            <a href="${this.productLinks[index]}" class="ProductCard__swatch${
              index === 0 ? " ProductCard__swatch--selected" : ""
            }"
            title="${this.fabricNames[index]}"
            data-image="${this.productImages[index]}"
            data-prices="${this.productPrices[index]}"
            data-link="${this.productLinks[index]}"
            >
            <img src="${image}" alt="stof" />
            </a>
            `,
      )
      .join("");

    return swatchesHTML;
  }

  renderUsps() {
    let uspsHTML = `
        <ul class="ProductCard__usps-list">
        ${this.productUsps
          .map(
            (item, index) => `
                <li>${this.productUsps[index]}</li>
                `,
          )
          .join("")}
            </ul>
            `;

    return uspsHTML;
  }

  renderTags() {
    let tagsHTML = "";
    if (this.productTags) {
      tagsHTML = this.productTags
        .map(
          (item, index) => `
                    <span class="ProductCard__tag henk-tag henk-tag--small">${this.productTags[index]}</span>
                    `,
        )
        .join("");
    }
    return tagsHTML;
  }

  // Method to update main image
  updateMainImage(imagePath) {
    const mainImage = this.shadow.querySelector(".ProductCard__img");
    if (mainImage) {
      mainImage.src = `${imagePath}`;
    }
  }

  // Method to update main image href
  updateMainImageHref(imageLink) {
    const mainImageLink = this.shadow.querySelector(".ProductCard__link");
    if (mainImageLink) {
      mainImageLink.href = `${imageLink}`;
    }
  }

  // Method to update button href
  updateButtonHref(imageLink) {
    const button = this.shadow.querySelector(".ProductCard__Price");
    if (button) {
      button.href = `${imageLink}`;
    }
  }

  // Method to update price element
  updatePrice(price) {
    const priceElement = this.shadow.querySelector(".ProductCard__Price");
    if (priceElement) {
      priceElement.textContent = price;
    }
  }

  removeAllSelectedSwatches() {
    this.shadow
      .querySelectorAll(".ProductCard__swatch--selected")
      .forEach((selectedSwatch) => {
        selectedSwatch.classList.remove("ProductCard__swatch--selected");
      });
  }
}

// Define the custom element
customElements.define("product-card", ProductCard);

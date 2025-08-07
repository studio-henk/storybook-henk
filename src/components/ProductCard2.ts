
class ProductCard2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const productId = this.getAttribute("product-id") || "";
        const productName = this.getAttribute("product-name") || "";
        const productDescription = this.getAttribute("product-description") || "";

        this.shadowRoot!.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
          font-family: sans-serif;
        }
        .name {
          font-weight: bold;
          font-size: 1.2rem;
        }
        .description {
          font-size: 0.95rem;
          color: #555;
        }
      </style>
      <div class="card" id="${productId}">
        <div class="name">${productName}</div>
        <div class="description">${productDescription}</div>
      </div>
    `;
    }
}

customElements.define("product-card2", ProductCard2);
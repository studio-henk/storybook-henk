class r extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("product-id") || "", e = this.getAttribute("product-name") || "", d = this.getAttribute("product-description") || "";
    this.shadowRoot.innerHTML = `
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
      <div class="card" id="${t}">
        <div class="name">${e}</div>
        <div class="description">${d}</div>
      </div>
    `;
  }
}
customElements.define("product-card2", r);

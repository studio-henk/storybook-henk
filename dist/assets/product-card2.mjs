var e = Object.defineProperty;
var i = (r, t, d) => t in r ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: d }) : r[t] = d;
var o = (r, t, d) => i(r, typeof t != "symbol" ? t + "" : t, d);
class c extends HTMLElement {
  constructor() {
    super();
    o(this, "props", null);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const d = {
      productId: this.getAttribute("product-id") || "",
      productName: this.getAttribute("product-name") || "",
      productDescription: this.getAttribute("product-description") || ""
    }, s = ProductCardProps.safeParse(d);
    if (!s.success) {
      console.error("Invalid product-card attributes:", s.error.format()), this.shadowRoot.innerHTML = "<p>Invalid product card data</p>";
      return;
    }
    this.props = s.data, this.shadowRoot.innerHTML = `
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
      <div class="card" id="${this.props.productId}">
        <div class="name">${this.props.productName}</div>
        <div class="description">${this.props.productDescription || ""}</div>
      </div>
    `;
  }
}
customElements.define("product-card2", c);

import { mockShopifyCart } from "@utils/mockShopifyCart";
import { createButton } from "./Button";

import IconTrash from "@assets/icons/icon-trash.svg?raw";

export const createCartContent = (cart) => {
  const section = document.createElement("section");
  section.className = "henk-cart-section";

  const shopifyForm = document.createElement("form");
  shopifyForm.className = "henk-cart-section__form";
  shopifyForm.action = "/cart";
  shopifyForm.method = "post";

  const formGrid = document.createElement("div");
  formGrid.className = "henk-cart-section__grid";

  const cartColumnOne = document.createElement("div");
  cartColumnOne.className = "henk-cart-section__grid-item";

  // UL container
  const ul = document.createElement("ul");
  ul.className = "henk-cart-section__list";

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "henk-cart-section__list-item";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.product_title;
    img.className = "henk-cart-section__item-image";
    li.appendChild(img);

    // Info container
    const infoDiv = document.createElement("div");
    infoDiv.className = "henk-cart-section__item-info";

    const title = document.createElement("p");
    title.className = "henk-cart-section__item-title";
    title.textContent = item.product_title;
    infoDiv.appendChild(title);

    // Quantity
    const qtyWrapper = document.createElement("div");
    qtyWrapper.className = "henk-cart-section__item-controls";

    const itemControls = `
                    <henk-quantity-stepper name="updates[]" value="${item.quantity}"></henk-quantity-stepper>
                    <input
                      class="henk-cart-section__item-quantity"
                      data-js-replace
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      name="updates[]"
                      value="${item.quantity}"
                    >
                    <input
                      type="submit"
                      value="Update"
                      class="henk-button henk-cart-section__item-update-button"
                      data-js-replacex
                    >
`;

    // const qtyLabel = document.createElement("label");
    // qtyLabel.textContent = "Quantity:";
    // qtyLabel.setAttribute("for", `updates-${item.id}`);
    // qtyWrapper.appendChild(qtyLabel);

    // const qtyInput = document.createElement("input");
    // qtyInput.id = "updates-" + String(item.id);
    // qtyInput.type = "number";
    // qtyInput.name = `updates[]`;
    // qtyInput.value = String(item.quantity);
    // qtyInput.min = "1";
    // qtyInput.step = "1";
    // qtyWrapper.appendChild(qtyInput);

    // Add update button (for non-JS fallback)
    // const updateButton = document.createElement("input");
    // updateButton.type = "submit";
    // updateButton.value = "Update";
    // qtyWrapper.appendChild(updateButton);
    qtyWrapper.innerHTML = itemControls;

    infoDiv.appendChild(qtyWrapper);

    const removeButton = createButton({
      element: "a",
      href: `/cart/change?id=${item.key}&quantity=0`,
      label: "Remove", // used for aria if iconOnly = true
      title: `Remove ${item.product_title}`,
      variant: "tertiary",
      iconSvg: IconTrash,
      iconOnly: true, // 👈 this tells createButton to render icon only
      ariaLabel: `Remove ${item.product_title} from cart`,
      attrs: {
        role: "button",
        class: "henk-cart-section__item-remove-button", // merged with .henk-button by the component
      },
    });

    qtyWrapper.appendChild(removeButton);

    // Price
    // const price = document.createElement("div");
    // price.className = "cart-item__price";
    // price.textContent = `€${(item.price / 100).toFixed(2)}`;
    // infoDiv.appendChild(price);

    // line price
    const lineprice = document.createElement("p");
    lineprice.className = "";
    lineprice.textContent = `€${(item.line_price / 100).toFixed(0)}`;
    infoDiv.appendChild(lineprice);

    li.appendChild(infoDiv);

    ul.appendChild(li);
  });

  cartColumnOne.appendChild(ul);
  formGrid.appendChild(cartColumnOne);
  shopifyForm.appendChild(formGrid);
  section.appendChild(shopifyForm);

  const cartColumnTwo = document.createElement("div");
  cartColumnTwo.className = "henk-cart-section__grid-item";

  const summaryWrapper = `<div class="henk-cart-section__summary-wrapper">
            <table class="cart-totals henk-table henk-table--no-border">
              <caption class="visually-hidden">
                Your cart totals
              </caption>
              <tbody>
                <tr>
                  <th scope="row">Totaal incl BTW</th>
                  <td class="text-align-right">€1.836</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Nu te betalen</th>
                  <td class="text-align-right">
                    <strong>€1.836</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="henk-button-group henk-button-group--right">
              <input type="submit" name="checkout" value="Checkout" class="henk-button henk-button--primary">
            </div>
          </div>
`;

  cartColumnTwo.innerHTML = summaryWrapper;
  formGrid.appendChild(cartColumnTwo);

  return section;
};

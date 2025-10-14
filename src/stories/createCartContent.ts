import { mockShopifyCart } from "@utils/mockShopifyCart";

export const createCartContent = (cart) => {
  const section = document.createElement("section");
  section.className = "henk-cart-list";

  const cartColumnOne = document.createElement("div");
  cartColumnOne.className = "cart-list__column";

  // form <form action="/cart" method="post">
  const shopifyForm = document.createElement("form");
  shopifyForm.action = "/cart";
  shopifyForm.method = "post";

  // UL container
  const ul = document.createElement("ul");
  ul.className = "cart-list henk-cart-list__list --no-bullets";

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item cart-list__list-item henk-cart-list__list-item";
    // li.innerText = "item image";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.product_title;
    img.className =
      "cart-item__image cart-list__list-item-image henk-cart-list__item-image";
    li.appendChild(img);

    // Info container
    const infoDiv = document.createElement("div");
    infoDiv.className = "cart-item__info henk-cart-list__item-content";

    const title = document.createElement("p");
    title.className = "cart-item__title henk-cart-list__title";
    title.textContent = item.product_title;
    infoDiv.appendChild(title);

    // Quantity
    const qtyWrapper = document.createElement("div");
    qtyWrapper.className = "cart-item__qty";

    const qtyLabel = document.createElement("label");
    qtyLabel.textContent = "Quantity:";
    qtyLabel.setAttribute("for", `updates-${item.id}`);
    qtyWrapper.appendChild(qtyLabel);

    const qtyInput = document.createElement("input");
    qtyInput.id = "updates-" + String(item.id);
    qtyInput.type = "number";
    qtyInput.name = `updates[]`;
    qtyInput.value = String(item.quantity);
    qtyInput.min = "1";
    qtyInput.step = "1";
    qtyWrapper.appendChild(qtyInput);

    // Add update button (for non-JS fallback)
    const updateButton = document.createElement("input");
    updateButton.type = "submit";
    updateButton.value = "Update";
    qtyWrapper.appendChild(updateButton);

    infoDiv.appendChild(qtyWrapper);

    // Remove link
    const removeLink = document.createElement("a");
    removeLink.href = `/cart/change?id=${item.key}&quantity=0`;
    removeLink.title = "Remove";
    removeLink.innerText = "Remove";

    // append after the qtyWrapper
    infoDiv.appendChild(removeLink);

    // Price
    // const price = document.createElement("div");
    // price.className = "cart-item__price";
    // price.textContent = `€${(item.price / 100).toFixed(2)}`;
    // infoDiv.appendChild(price);

    // line price
    const lineprice = document.createElement("p");
    lineprice.className = "cart-item__lineprice";
    lineprice.textContent = `€${(item.line_price / 100).toFixed(0)}`;
    infoDiv.appendChild(lineprice);

    // controls, quantity etc
    // henk-cart-list__controls

    li.appendChild(infoDiv);

    ul.appendChild(li);
  });

  shopifyForm.appendChild(ul);
  cartColumnOne.appendChild(shopifyForm);

  const cartColumnTwo = document.createElement("div");
  cartColumnTwo.className = "cart-list__column cart-list__summary";

  // const table = document.createElement("table");

  // section.appendChild(table);
  section.appendChild(cartColumnOne);
  section.appendChild(cartColumnTwo);

  // Total
  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.textContent = `Total: €${(cart.total_price / 100).toFixed(2)}`;
  // section.appendChild(totalDiv);

  return section;
};

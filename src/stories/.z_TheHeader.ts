// Use Liquid-based logo
import snippetLogo from "@src/snippets/henk-logo.liquid?raw";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import type { LogoProps } from "@components/Logo";

const renderLogo = (props: any) => {
  const rendered = engine.parseAndRenderSync(snippetLogo, {
    variant: props?.variant || "primary",
    href: props?.href || "https://studio-henk.nl",
    label: props?.label || "Studio HENK",
  });
  const wrapper = document.createElement("div");
  wrapper.innerHTML = rendered;
  // Pick the actual anchor element; snippet may include a <style> tag before the anchor
  const anchor = wrapper.querySelector(
    "a.henk-logo",
  ) as HTMLAnchorElement | null;
  return (
    anchor ||
    (wrapper.querySelector("a") as HTMLAnchorElement | null) ||
    (wrapper.lastElementChild as HTMLAnchorElement | null)
  );
};
import IconSearch from "@assets/feather-search.svg?raw";
import IconBag from "@assets/henk-bag.svg?raw";
import { Icon } from "@components/Icon";
// import "@scripts/henk-desktop-menu";
// import "@scripts/henk-mobile-menu";

export interface HeaderProps {
  logoProps?: LogoProps;
  title?: string;
  cartCount?: number;
  cartIconName?: string;
  align?: string;
  inBetween?: boolean;
  isHomepage?: boolean;
}

export function createHeader({
  logoProps,
  title = "Site Title",
  cartCount = 0,
  cartIconName = "henk-bag",
  align,
  inBetween = false,
  isHomepage = false,
}: HeaderProps = {}): HTMLElement {
  const header = document.createElement("header");
  header.className = "henk-header";
  header.dataset.jsMobileMenu = "";
  header.dataset.jsCloseLabel = "Close";

  if (align) {
    header.className += ` henk-header--${align}`;
  }

  if (inBetween) {
    header.className += ` henk-header--in-between`;
  }
  const headerInner = document.createElement("div");
  headerInner.className = "henk-header__inner";

  const hamburgerButton = document.createElement("button");
  hamburgerButton.innerText = "menu";
  hamburgerButton.className = "henk-button henk-button--ghost";
  hamburgerButton.dataset.jsMobileMenu = "";
  // hamburgerButton.innerHTML = IconHamburger;

  // headerInner.appendChild(hamburgerButton);

  // add menu list - hardcoded
  const headerMenu = document.createElement("ul");
  headerMenu.className = "henk-header__menu";

  // add links level 1
  const level1Links = `
<li class="henk-header__menu-item henk-header__dropdown main-level">

<details name="main-nav">
<summary >Shop</summary>
  <div class="dropdown-container">

    <div class="dropdown-container__inner">
    <ul class="dropdown">
      <li class="sub-level left-col">
        <a href="#" class="column__heading">Highlights</a>
        <ul class="dropdown__highlights">
          <li><a class="dh__link" href="#">New in</a></li>
          <li><a class="dh__link" href="#">Second Chance</a></li>
          <li><a class="dh__link" href="#">Affordable Choices</a></li>
          <li><a class="dh__link" href="#">Fast Delivery</a></li>
          <li><a class="dh__link" href="#">Outdoor Collection</a></li>
        </ul>
      </li>
      <li class="sub-level right-col">
      <!--
          Loop through main level sub links
      -->
      <!--
          Create a column for links with sub-levels
      -->
      <div class="column">
        <a class="column__heading" href="/collections/tables">Tafels</a>
          <ul>
            <li>
                <a
                class="column__link"
                href="/collections/tables">
                    Eettafels
                </a>
            </li>
            <li>
                <a
                class="column__link"
                href="/collections/tables">
                    Salontafels
                </a>
            </li>
            <li>
                <a
                class="column__link"
                href="/collections/tables/Office">
                    Bureaus
                </a>
            </li>
            <li>
                <a
                class="column__link"
                href="/collections/tables/Bistro">
                    Bistrotafels
                </a>
            </li>
        </ul>
    </div>
    <!--
        Create a column for links with sub-levels
    -->
    <div class="column">
        <a class="column__heading" href="/collections/dining-chairs-1">Zitmeubels</a>
        <ul>

                <li>
                    <a
                    class="column__link"
                    href="/collections/dining-chairs-1">
                        Eetkamerstoelen
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="#">
                        Zitbanken
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="#">
                        Fauteuils
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="#">
                        Barkrukken
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="/collections/dining-benches">
                        Eetkamerbanken
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="/collections/dining-chairs">
                        Poefs
                    </a>
                </li>

        </ul>
    </div>
      <!--
          Create a column for links with sub-levels
      -->
      <div class="column">
          <a class="column__heading" href="/collections">Opbergen</a>
          <ul>

                  <li>
                      <a
                      class="column__link"
                      href="/collections">
                          Wandplanken
                      </a>
                  </li>

                  <li>
                      <a
                      class="column__link"
                      href="/collections/tables">
                          Dressoirs
                      </a>
                  </li>

                  <li>
                      <a
                      class="column__link"
                      href="/collections">
                          TV-meubels
                      </a>
                  </li>

                  <li>
                      <a
                      class="column__link"
                      href="/">
                          Vitrinekasten
                      </a>
                  </li>

                  <li>
                      <a
                      class="column__link"
                      href="#">
                          Boekenkasten
                      </a>
                  </li>

          </ul>
      </div>
    <!--
        Create a column for links with sub-levels
    -->
    <div class="column">
        <a class="column__heading" href="/collections">Accessoires</a>
        <ul>

                <li>
                    <a
                    class="column__link"
                    href="/">
                        Verlichting
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="/pages/test-page">
                        Vazen
                    </a>
                </li>

                <li>
                    <a
                    class="column__link"
                    href="/pages/test-page">
                        HENK merchandise
                    </a>
                </li>

        </ul>
    </div>
    <!--
        If there are links without sub-levels, group them in one div
    -->
          </li>
      </ul>
</div>
  </div>
</details>
</li>

<li class="henk-header__menu-item henk-header__dropdown main-level">
<details name="main-nav">
<summary>Services</summary>
  <div class="dropdown-container">
    <div class="dropdown-container__inner">

    <ul class="dropdown">
      <li class="sub-level left-col">
        <span class="column__heading">Highlights</span>
        <ul class="dropdown__highlights">
          <li><a class="dh__link" href="#">New in</a></li>
        </ul>
      </li>
      <li class="sub-level right-col">
        <div class="column">
            <a class="column__heading" href="/collections/tables">Service</a>
            <ul>
              <li>
                  <a
                    class="column__link"
                  href="/collections/tables">
                      Contact
                  </a>
              </li>
              <li>
                  <a
                  class="column__link"
                  href="/collections/tables">
                      FAQ
                  </a>
              </li>
              <li>
                  <a
                  class="column__link"
                  href="/collections/tables/Office">
                      Interieuradvies
                  </a>
              </li>
              <li>
                  <a
                  class="column__link"
                  href="/collections/tables/Bistro">
                      Reparaties en retouren
                  </a>
              </li>
              <li>
                  <a
                  class="column__link"
                  href="/collections/tables/Bistro">
                      Materialen en onderhoud
                  </a>
              </li>
          </ul>
        </div>
    </div>
  </div>
</details>
</li>

<li class="henk-header__menu-item henk-header__dropdown main-level">
<details name="main-nav">
<summary>Explore</summary>
  <div class="dropdown-container">

    <div class="dropdown-container__inner">
      <ul class="dropdown">
        <li class="sub-level left-col">
          <span class="column__heading">Our Stores</span>
          <ul class="dropdown__highlights">
            <li><a class="dh__link" href="#">Amsterdam</a></li>
            <li><a class="dh__link" href="#">Antwerpen</a></li>
            <li><a class="dh__link" href="#">Utrecht</a></li>
            <li><a class="dh__link" href="#">Rotterdam</a></li>
            <li><a class="dh__link" href="#">Haarlem</a></li>
          </ul>
        </li>
        <li class="sub-level right-col">

          <div class="column">
            <a href="#" class="column__heading">HENK</a>
            <ul>
              <li>
                  <a
                  class="column__link"
                  href="#">HENK's verhaal</a>
              </li>
              <li>
                  <a
                  class="column__link"
                  href="#">HENK at home</a>
              </li>
              <li>
                  <a class="column__link" href="#">Werken bij HENK</a>
              </li>
            </ul>
          </div>

        </li>
      </ul>

    </div>
  </div>
</details>
</li>
`;

  headerMenu.insertAdjacentHTML("beforeend", level1Links);

  const cartBubbleHtml =
    cartCount > 0
      ? `
          ${cartCount < 100 ? `<sup class="henk-notification-badge">${cartCount}</sup>` : ""}
          <span class="visually-hidden">${cartCount} items in cart</span>
        `
      : "";

  // util nav
  const headerUtils = `
<div class="henk-header__utils" data-js-utils>

  <div class="henk-localise">
<details class="henk-localise__details">
          <summary class="henk-localise__summary">
            English
          </summary>
          <div class="henk-localise__content">
              <form method="post" action="/en/localization" id="localization_form" accept-charset="UTF-8" class="shopify-localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="return_to" value="/en/cart?_fd=0&amp;pb=0"><input type="hidden" name="return_to" value="/en/cart">
              <ul class="henk-list henk-list--no-bullets">


                    <li>
                      <button type="submit" name="locale_code" value="nl" class="henk-button henk-button--ghost" title="Switch to Nederlands">
                        Nederlands
                      </button>
                    </li>

                    <li>
                      <button type="submit" name="locale_code" value="de" class="henk-button henk-button--ghost" title="Switch to Deutsch">
                        Deutsch
                      </button>
                    </li>


              </ul></form></div>
        </details>
</div>
    <a class="henk-button henk-button--small henk-button--ghost henk-header__utils-item header__utils-link--search" href="search" aria-label="Search">
      <i class="henk-icon icon--only">
        ${IconSearch}
      </i>
    </a>
    <a class="henk-button henk-button--ghost henk-button--smallx henk-header__utils-item henk-header__utils-item--cart" href="?path=/story/pages-cart--not-empty&globals=viewport:responsive" aria-label="Cart">
      <i class="henk-icon icon--only" data-icon="cart">
        ${IconBag}
      </i>
${cartBubbleHtml}
    </a>
</div>
`;

  // add to inner div
  headerInner.appendChild(headerMenu);

  if (logoProps) {
    const logo = renderLogo(logoProps);
    logo.classList.add("henk-header__logo");
    // headerInner.appendChild(logo);

    if (isHomepage) {
      const h1 = document.createElement("h1");
      h1.className = "henk-header__logo-heading";

      const hiddenText = document.createElement("span");
      hiddenText.className = "visually-hidden";
      hiddenText.innerText = "Studio HENK";

      logo.prepend(hiddenText);

      h1.appendChild(logo);
      headerInner.appendChild(h1);
    } else {
      headerInner.appendChild(logo);
    }
  } else {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    headerInner.appendChild(h1);
  }
  headerInner.insertAdjacentHTML("beforeend", headerUtils);

  // Replace placeholder with actual Icon element created by your Icon factory
  const cartPlaceholder =
    headerInner.querySelector<HTMLElement>('[data-icon="cart"]');
  if (cartPlaceholder) {
    const cartIconEl = Icon({
      name: cartIconName ?? "henk-bag", // story can override via cartIconName
      size: "large",
      className: "icon--only",
    });
    cartPlaceholder.replaceWith(cartIconEl);
  }

  header.appendChild(headerInner);

  return header;
}

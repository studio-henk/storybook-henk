import type { LogoProps } from "./Logo";
import { createLogo } from "./Logo";
import IconSearch from "../assets/icons/icon-search.svg?raw";
import IconBag from "../assets/icons/icon-bag.svg?raw";
import IconChevronDown from "@assets/icons/icon-chevron-down.svg?raw";
import IconClose from "@assets/icons/icon-close.svg?raw";
import { initTheHeaderMenu } from "../scripts/TheHeaderMenu";

export interface HeaderProps {
  logoProps?: LogoProps;
  title?: string;
  cartCount?: number;
}

export function createHeader({
  logoProps,
  title = "Site Title",
  cartCount = 0,
}: HeaderProps = {}): HTMLElement {
  const header = document.createElement("header");
  header.className = "henk-header";

  const headerInner = document.createElement("div");
  headerInner.className = "henk-header__inner";

  if (logoProps) {
    const logo = createLogo(logoProps);
    headerInner.appendChild(logo);
  } else {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    headerInner.appendChild(h1);
  }

  // add menu list - hardcoded
  const headerMenu = document.createElement("ul");
  headerMenu.className = "henk-header__menu";

  // add links level 1
  const level1Links = `
<li class="henk-header__menu-item henk-header__dropdown main-level">
  <a data-js-behavior="openSub" href="shop" class="henk-header__menu-link henk-button henk-button--ghost">Shop
    <i class="henk-icon">
${IconChevronDown}
    </i>
  </a>

  <div class="dropdown-container">

    <div class="dropdown-container__inner">
<button type="button" 
class="henk-button henk-button--ghost henk-button--small close-menu"
      aria-label="Button"
      data-js-behavior="closeMenu"
>
  <i class="henk-icon">
${IconClose}
  </i>
  CLOSE
</button>
    <ul class="dropdown">
      <li class="sub-level left-col">
        <ul>
          <li><a href="#">New in</a></li>
          <li><a href="#">Second Chance</a></li>
          <li><a href="#">Affordable Choices</a></li>
          <li><a href="#">Fast Delivery</a></li>
          <li><a href="#">Outdoor Collection</a></li>
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
                <a href="/collections/tables">
                    Eettafels
                </a>
            </li>
            <li>
                <a href="/collections/tables">
                    Salontafels
                </a>
            </li>
            <li>
                <a href="/collections/tables/Office">
                    Bureaus
                </a>
            </li>
            <li>
                <a href="/collections/tables/Bistro">
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
                    <a href="/collections/dining-chairs-1">
                        Eetkamerstoelen
                    </a>
                </li>
            
                <li>
                    <a href="#">
                        Zitbanken
                    </a>
                </li>
            
                <li>
                    <a href="#">
                        Fauteuils
                    </a>
                </li>
            
                <li>
                    <a href="#">
                        Barkrukken
                    </a>
                </li>
            
                <li>
                    <a href="/collections/dining-benches">
                        Eetkamerbanken
                    </a>
                </li>
            
                <li>
                    <a href="#">
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
                      <a href="/collections">
                          Wandplanken
                      </a>
                  </li>
              
                  <li>
                      <a href="/collections/tables">
                          Dressoirs
                      </a>
                  </li>
              
                  <li>
                      <a href="/collections">
                          TV-meubels
                      </a>
                  </li>
              
                  <li>
                      <a href="/">
                          Vitrinekasten
                      </a>
                  </li>
              
                  <li>
                      <a href="#">
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
                    <a href="/">
                        Verlichting
                    </a>
                </li>
            
                <li>
                    <a href="/pages/test-page">
                        Vazen
                    </a>
                </li>
            
                <li>
                    <a href="/">
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
</li>

<li class="henk-menu__item henk-header__dropdown main-level">
  <a data-js-behavior="openSub" href="ser" class="henk-header__menu-link henk-button henk-button--ghost">Service
      <i class="henk-icon">
${IconChevronDown}
      </i>
  </a>

  <div class="dropdown-container">
    <div class="dropdown-container__inner">
Service

<button type="button" 
class="henk-button henk-button--ghost henk-button--small close-menu"
      aria-label="Button"
      data-js-behavior="closeMenu"
>
  <i class="henk-icon">
${IconClose}
  </i>
  CLOSE
</button>
    </div>
  </div>
</li>

<li class="henk-menu__item henk-header__dropdown main-level">
  <a data-js-behavior="openSub" href="HENK" class="henk-header__menu-link henk-button--ghost henk-button">HENK
    <i class="henk-icon">
${IconChevronDown}
    </i>
  </a>

  <div class="dropdown-container">

    <div class="dropdown-container__inner">
  HENK

<button type="button" 
class="henk-button henk-button--ghost henk-button--small close-menu"
      aria-label="Button"
      data-js-behavior="closeMenu"
>
  <i class="henk-icon">
${IconClose}
  </i>
  CLOSE
</button>
      </div>
  </div>
</li>
`;

  headerMenu.insertAdjacentHTML("beforeend", level1Links);

  const cartBubbleHtml =
    cartCount > 0
      ? `
        <div class="cart-count-bubble cart__badge">
          ${
            cartCount < 100
              ? `<span aria-hidden="true">${cartCount}</span>`
              : ""
          }
          <span class="visually-hidden">${cartCount} items in cart</span>
        </div>`
      : "";

  // util nav
  const headerUtils = `
<div class="henk-header__utils">
    <a class="henk-button henk-button--small henk-button--ghost henk-header__utils-link header__utils-link--search" href="search" aria-label="Search">
      <i class="henk-icon icon--only">
        ${IconSearch}
      </i>
    </a>
    <a class="henk-button henk-button--ghost henk-button--small header__utils-link header__utils-link--cart" href="/" aria-label="Cart">
      <i class="henk-icon icon--small icon--only">
        ${IconBag}
      </i>
${cartBubbleHtml}
    </a>
</div>
`;

  // add to inner div
  headerInner.appendChild(headerMenu);
  headerInner.insertAdjacentHTML("beforeend", headerUtils);
  header.appendChild(headerInner);

  // Init menu JS immediately so Storybook works
  initTheHeaderMenu(header);

  return header;
}
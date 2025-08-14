import type { LogoProps } from "./Logo";
import { createLogo } from "./Logo";
import IconSearch from "../assets/icons/icon-search.svg?raw";
import IconBag from "../assets/icons/icon-bag.svg?raw";
import { initTheHeaderMenu } from "../scripts/TheHeaderMenu";

export interface HeaderProps {
  logoProps?: LogoProps;
  title?: string;
}

export function createHeader({
  logoProps,
  title = "Site Title",
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
  <a data-js-behavior="openSub" href="shop" class="henk-header__menu-link">Shop
    <i class="henk-icon icon--small">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.7285 16.6546L11.9313 18L22 7.34546L20.7629 6L11.9313 15.3455L3.23711 6.14545L2 7.41818L7.05154 12.7273L10.7285 16.6546Z" fill="currentcolor"></path>
      </svg>
    </i>
  </a>

  <div class="dropdown-container">

    <div class="dropdown-container__inner">
<button type="button" 
class="henk-button henk-button--ghost henk-button--small close-menu"
      aria-label="Button"
      data-js-behavior="closeMenu"
>
  <i class="henk-icon icon--small">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 6L18 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
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
  <a data-js-behavior="openSub" href="ser" class="henk-header__menu-link">Service
      <i class="henk-icon icon--small">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7285 16.6546L11.9313 18L22 7.34546L20.7629 6L11.9313 15.3455L3.23711 6.14545L2 7.41818L7.05154 12.7273L10.7285 16.6546Z" fill="currentcolor"></path>
        </svg>
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
  <i class="henk-icon icon--small">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 6L18 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </i>
  CLOSE
</button>
    </div>
  </div>
</li>

<li class="henk-menu__item henk-header__dropdown main-level">
  <a data-js-behavior="openSub" href="HENK" class="henk-header__menu-link">HENK
    <i class="henk-icon icon--small">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.7285 16.6546L11.9313 18L22 7.34546L20.7629 6L11.9313 15.3455L3.23711 6.14545L2 7.41818L7.05154 12.7273L10.7285 16.6546Z" fill="currentcolor"></path>
      </svg>
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
  <i class="henk-icon icon--small">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 6L18 18"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </i>
  CLOSE
</button>
      </div>
  </div>
</li>
`;

  headerMenu.insertAdjacentHTML('beforeend', level1Links);

  // util nav
  const headerUtils = `
<div class="henk-header__utils">
    <a class="henk-header__utils-link header__utils-link--search" href="search" aria-label="Search">
      <i class="henk-icon icon--large">
        ${IconSearch}
      </i>
    </a>
    <a class="header__utils-link header__utils-link--cart" href="/" aria-label="Cart">
      <i class="henk-icon icon--large">
        ${IconBag}
      </i>
    </a>
</div>
`;


  // add to inner div 
  headerInner.appendChild(headerMenu);
  headerInner.insertAdjacentHTML('beforeend', headerUtils);
  header.appendChild(headerInner);

  // Init menu JS immediately so Storybook works
  initTheHeaderMenu(header);

  return header;
}
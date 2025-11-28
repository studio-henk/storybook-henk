import menuIcon from "@assets/icons/feather-menu.svg?raw";
import closeIcon from "@assets/icons/feather-x.svg?raw";

/**
 * ------------------------------------------------------------
 * Module: Mobile Menu
 * File:   henk-mobile-menu.ts
 * Output: henk-mobile-menu.min.js
 *
 * Version: v2 (2025-10-03)
 * Status:  ACTIVE
 *
 * Description:
 * - Handles mobile navigation overlay with hamburger & close buttons
 * - Includes focus trap, ESC key handling, and MatchMedia for viewport control
 *
 * Notes / Changelog:
 * - v2 (2025-10-03): Simplified toggle, added cleanup, rewritten in TS
 * - v1 (2025-09-01): Initial version
 *
 * Strategy:
 * - Always keep this file as the latest version
 * - Older versions stored in as henk-mobile-menu_vX.ts
 *
 * Author: nils hendriks | Studio HENK
 * ------------------------------------------------------------
 */
// export const mobileMenu = {
const mobileMenu = {
  name: "mobile-menu",
  headerAttr: "[data-js-mobile-menu]",
  openButtonAttr: "[data-js-mobile-menu-open]",
  closeButtonAttr: "[data-js-mobile-menu-close]",

  get header(): HTMLElement | null {
    return document.querySelector<HTMLElement>(this.headerAttr);
  },

  get headerInner(): HTMLElement | null {
    return document.querySelector<HTMLElement>(
      "header.henk-header > .henk-header__inner",
    );
  },

  get hamburgerButtonSelector(): HTMLButtonElement | null {
    return document.querySelector<HTMLButtonElement>(this.openButtonAttr);
  },

  get closeButtonSelector(): HTMLButtonElement | null {
    return document.querySelector<HTMLButtonElement>(this.closeButtonAttr);
  },

  removeTrap: null as (() => void) | null,

  // ESC key handling: register while mobile menu is open, remove on close/cleanup
  escListener: null as ((e: KeyboardEvent) => void) | null,

  init() {
    console.log("Mobile menu init");
    // set state to closed
    const header = document.querySelector<HTMLElement>("header.henk-header");
    if (!header) return null;
    header.dataset.state = "closed";
    this.addHamburgerButton();
    this.addCloseButton();
  },
  // create and add hamburger button to header
  addHamburgerButton() {
    const hamburgerButton = document.createElement("button");
    hamburgerButton.type = "button";
    hamburgerButton.className =
      "henk-button henk-button--ghost henk-header__button--open-menu";
    hamburgerButton.setAttribute("aria-label", "Open menu");
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.dataset["jsMobileMenuOpen"] = "";
    hamburgerButton.innerHTML = `
<i class="henk-icon icon--only">
${menuIcon}
</i>
<span class="visually-hidden">Menu</span>
    `;
    if (!this.headerInner) return;
    this.headerInner.insertAdjacentElement("afterbegin", hamburgerButton);
    hamburgerButton.addEventListener("click", mobileMenu.toggleMenu);
  },
  // create and add close button to header
  addCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className =
      "henk-button henk-button--ghost henk-button--small henk-header__button--close-menu";
    closeButton.setAttribute("aria-label", "Close menu");
    closeButton.dataset["jsMobileMenuClose"] = "";

    closeButton.innerHTML = `
            <i class="henk-icon">
                    ${closeIcon}
                  </i>
            CLOSE
          `;

    closeButton.style.display = "none";
    if (!this.headerInner) return;
    this.headerInner.insertAdjacentElement("afterbegin", closeButton);
    closeButton.addEventListener("click", mobileMenu.toggleMenu);
  },
  trapMenuTabbing(): (() => void) | null {
    const header = this.header;
    if (!header) return null;

    const menuDetails = header.querySelector<HTMLElement>(
      "details[name='main-nav']",
    );
    if (!menuDetails) return null;

    const firstFocusable = this.closeButtonSelector;
    const cartSelector =
      "[data-js-cart], .henk-cart, [aria-label='Cart'], a[href*='cart']";
    const cartButton = header.querySelector<HTMLElement>(cartSelector);
    const lastFocusable = cartButton || firstFocusable;

    if (!firstFocusable || !lastFocusable) return null;

    const keyListener = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      } else if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    };

    header.addEventListener("keydown", keyListener);

    return () => {
      header.removeEventListener("keydown", keyListener);
    };
  },
  addEscListener() {
    if (this.escListener) return; // already active

    this.escListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        this.toggleMenu();
      }
    };
    document.documentElement.addEventListener("keydown", this.escListener);
  },

  removeEscListener() {
    if (!this.escListener) return;

    document.documentElement.removeEventListener("keydown", this.escListener);
    this.escListener = null;
  },
  preventClosingOpenDetailsOnMobile() {
    // prevent click on summary to close the whole menu

    if (!mobileMenu.header) return;

    if (mobileMenu.header.dataset.state === "open") {
      // get open details element
      // const openDetails = mobileMenu.header.querySelector("details[open]");
      // console.log(openDetails);
      // if (openDetails) {
      //   openDetails.addEventListener("click", (e) => {
      //     console.log("Clicked on open details");
      //     e.preventDefault();
      //   });
      // }
      const mainDetails =
        mobileMenu.header.querySelectorAll<HTMLDetailsElement>(
          'details[name="main-nav"]',
        );

      mainDetails.forEach((details) => {
        const summary = details.querySelector("summary");
        if (!summary) return;

        summary.addEventListener("click", (e) => {
          // Only on mobile
          if (window.innerWidth <= 767 && details.open) {
            e.preventDefault(); // prevent closing if already open
          }
        });
      });
    }
  },
  toggleMenu() {
    // console.log("Toggle menu" + mobileMenu.header?.dataset.state);

    if (!mobileMenu.header) return;
    if (mobileMenu.header.dataset.state === "open") {
      mobileMenu.header.dataset.state = "closed";
      mobileMenu.hamburgerButtonSelector!.setAttribute(
        "aria-expanded",
        "false",
      );
      mobileMenu.closeButtonSelector!.style.display = "none";

      // remove ESC listener when closing
      mobileMenu.removeEscListener();

      // Release focus trap when menu closes
      mobileMenu.removeTrap?.();
      mobileMenu.removeTrap = null;

      mobileMenu.closeAllSubs();
    } else {
      if (!mobileMenu.header) return;
      if (!mobileMenu.hamburgerButtonSelector) return;
      if (!mobileMenu.closeButtonSelector) return;
      // console.log("Open menu");
      mobileMenu.header.dataset.state = "open";
      mobileMenu.hamburgerButtonSelector.setAttribute("aria-expanded", "true");
      mobileMenu.closeButtonSelector.style.display = "flex";
      mobileMenu.closeButtonSelector.focus();

      // add ESC listener while menu is open
      mobileMenu.addEscListener();

      // Enable focus trap when menu opens
      mobileMenu.removeTrap = mobileMenu.trapMenuTabbing();

      // Open the first details element
      const firstDetails = mobileMenu.header.querySelector<HTMLDetailsElement>(
        "details[name='main-nav']",
      );
      if (firstDetails) {
        firstDetails.open = true;
      }

      // prevent closing on summary click
      mobileMenu.preventClosingOpenDetailsOnMobile();
    }
  },
  closeAllSubs() {
    if (!mobileMenu.header) return;
    const openDetails = mobileMenu.header.querySelectorAll<HTMLDetailsElement>(
      "details[name='main-nav'][open]",
    );
    openDetails.forEach((details) => {
      details.open = false;
    });
  },
  destroy() {
    // Reset menu state
    if (this.header) {
      this.header.dataset.state = "closed";
    }

    // Remove focus trap & ESC
    this.removeTrap?.();
    this.removeTrap = null;
    this.removeEscListener();

    // Remove buttons if they exist
    this.hamburgerButtonSelector?.removeEventListener("click", this.toggleMenu);
    this.hamburgerButtonSelector?.remove();
    this.closeButtonSelector?.removeEventListener("click", this.toggleMenu);
    this.closeButtonSelector?.remove();

    // Close all open submenus
    this.closeAllSubs();

    console.log("Mobile menu destroyed");
  },
  /**
   * Sets up DOMContentLoaded + matchMedia handling for mobile menu.
   * Call this from your main script when you want the menu active.
   */
  setupMatchMedia() {
    const mql = window.matchMedia("(max-width: 767px)");
    let initialized = false;

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && !initialized) {
        this.init();
        initialized = true;
      } else if (!e.matches && initialized) {
        this.destroy();
        initialized = false;
      }
    };

    // run once immediately
    handleChange(mql);

    // listen for changes
    mql.addEventListener("change", handleChange);
  },
};
document.addEventListener("DOMContentLoaded", () => {
  mobileMenu.setupMatchMedia();
});

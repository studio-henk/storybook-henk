// TODO: Convert to TS, add types where possible, convert ! to ? and add null
// checks
(() => {
  const mobileMenu = {
    name: "mobile-menu",
    selector: "header.henk-header",

    get header(): HTMLElement | null {
      return document.querySelector<HTMLElement>(this.selector);
    },

    get headerInner(): HTMLElement | null {
      return document.querySelector<HTMLElement>(
        "header.henk-header > .henk-header__inner",
      );
    },

    get hamburgerButtonSelector(): HTMLButtonElement | null {
      return document.querySelector<HTMLButtonElement>("[data-js-mobile-menu]");
    },

    get closeButtonSelector(): HTMLButtonElement | null {
      return (
        this.header?.querySelector<HTMLButtonElement>(".close-menu") ?? null
      );
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
      hamburgerButton.className = "henk-button henk-button--ghost open-menu";
      hamburgerButton.setAttribute("aria-label", "Open menu");
      hamburgerButton.setAttribute("aria-expanded", "false");
      hamburgerButton.dataset["jsMobileMenu"] = "";
      hamburgerButton.innerHTML = `
<i class="henk-icon icon--only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1"
  >
    <line x1="0" y1="0.5" x2="24" y2="0.5" />
    <line x1="0" y1="12" x2="24" y2="12" />
    <line x1="0" y1="23.5" x2="24" y2="23.5" />
  </svg>
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
        "henk-button henk-button--ghost henk-button--small close-menu";
      closeButton.setAttribute("aria-label", "Close menu");
      closeButton.innerHTML = `
      <i class="henk-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 0.5L0.5 23.5M0.5 0.5L23.5 23.5"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
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
        mobileMenu.hamburgerButtonSelector.setAttribute(
          "aria-expanded",
          "true",
        );
        mobileMenu.closeButtonSelector.style.display = "flex";
        mobileMenu.closeButtonSelector.focus();

        // add ESC listener while menu is open
        mobileMenu.addEscListener();

        // Enable focus trap when menu opens
        mobileMenu.removeTrap = mobileMenu.trapMenuTabbing();

        // Open the first details element
        const firstDetails =
          mobileMenu.header.querySelector<HTMLDetailsElement>(
            "details[name='main-nav']",
          );
        if (firstDetails) {
          firstDetails.open = true;
        }
      }
    },
    closeAllSubs() {
      if (!mobileMenu.header) return;
      const openDetails =
        mobileMenu.header.querySelectorAll<HTMLDetailsElement>(
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
      this.hamburgerButtonSelector?.removeEventListener(
        "click",
        this.toggleMenu,
      );
      this.hamburgerButtonSelector?.remove();
      this.closeButtonSelector?.removeEventListener("click", this.toggleMenu);
      this.closeButtonSelector?.remove();

      // Close all open submenus
      this.closeAllSubs();

      console.log("Mobile menu destroyed");
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    const mql = window.matchMedia("(max-width: 767px)");
    let initialized = false;

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && !initialized) {
        mobileMenu.init();
        initialized = true;
      } else if (!e.matches && initialized) {
        mobileMenu.destroy();
        initialized = false;
      }
    };

    // run once immediately for the current viewport
    handleChange(mql);

    // then listen for changes
    mql.addEventListener("change", handleChange);
  });
})();

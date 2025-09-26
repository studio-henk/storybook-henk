(() => {
  const initMobileMenu = (): (() => void) | null => {
    const htmlElement = document.documentElement;
    const header = document.querySelector<HTMLElement>("header.henk-header");
    const toggleButton = document.querySelector<HTMLButtonElement>(
      "[data-js-mobile-menu]",
    );

    if (!header || !toggleButton) return null;
    header.dataset.state = "closed";
    toggleButton.setAttribute("aria-expanded", "false");

    // Create close button
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
    toggleButton.insertAdjacentElement("afterend", closeButton);

    // Submenu logic
    // const submenuLinks = Array.from(
    //   header.querySelectorAll<HTMLAnchorElement>(
    //     '[data-js-behavior="openSub"]',
    //   ),
    // );
    // const submenuHandlers: ((e: Event) => void)[] = [];

    // const openSub = (link: HTMLAnchorElement) => {
    //   const parent = link.closest(".main-level");
    //   if (!parent) return;
    //
    //   // Close other subs
    //   submenuLinks.forEach((l) => {
    //     if (l !== link) {
    //       l.classList.remove("open");
    //       l.closest(".main-level")?.classList.remove("open");
    //     }
    //   });
    //
    //   // Open this one
    //   parent.classList.add("open");
    //   link.classList.add("open");
    // };

    // const closeAllSubs = () => {
    //   submenuLinks.forEach((l) => {
    //     l.classList.remove("open");
    //     l.closest(".main-level")?.classList.remove("open");
    //   });
    // };

    const toggleMenu = () => {
      if (header.dataset.state === "open") {
        header.dataset.state = "closed";
        toggleButton.setAttribute("aria-expanded", "false");
        closeButton.style.display = "none";
        // htmlElement.style.overflow = "";
        // closeAllSubs();
      } else {
        header.dataset.state = "open";
        toggleButton.setAttribute("aria-expanded", "true");
        closeButton.style.display = "flex";
        // htmlElement.style.overflow = "hidden";

        // Open the first details element
        const firstDetails = header.querySelector<HTMLDetailsElement>(
          "details[name='main-nav']",
        );
        if (firstDetails) {
          // firstDetails.open = true;
        }
      }
    };

    toggleButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    // Attach submenu handlers and store references for cleanup
    // submenuLinks.forEach((link) => {
    //   const handler = (e: Event) => {
    //     e.preventDefault();
    //     openSub(link);
    //   };
    //   link.addEventListener("click", handler);
    //   submenuHandlers.push(handler);
    // });

    // Cleanup
    return () => {
      toggleButton.removeEventListener("click", toggleMenu);
      closeButton.removeEventListener("click", toggleMenu);
      closeButton.remove();

      htmlElement.style.overflow = "";
      header.dataset.state = "closed";
      closeAllSubs();

      // Remove all submenu event listeners
      submenuLinks.forEach((link, i) => {
        link.removeEventListener("click", submenuHandlers[i]);
      });
    };
  };

  document.addEventListener("DOMContentLoaded", () => {
    const mql = window.matchMedia("(max-width: 767px)");
    let cleanup: (() => void) | null = null;

    const handleChange = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        if (!cleanup) cleanup = initMobileMenu();
      } else {
        if (cleanup) {
          cleanup();
          cleanup = null;
        }
      }
    };

    handleChange(mql);
    mql.addEventListener("change", handleChange);
  });
})();

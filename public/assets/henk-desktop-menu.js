"use strict";
(() => {
    const initHeaderMenu = () => {
        const htmlElement = document.documentElement;
        const header = document.querySelector(".henk-header");
        if (!header)
            return null;
        const selectors = {
            mainLevel: ".main-level",
            utils: "[data-js-utils]",
            html: htmlElement,
        };
        let escListener = null;
        const utils = header.querySelector(selectors.utils);
        // Create a single close button next to utils
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
        closeButton.style.display = "none"; // hidden by default
        // Insert after utils
        utils === null || utils === void 0 ? void 0 : utils.insertAdjacentElement("afterend", closeButton);
        let removeTrap = null;
        function trapMenuTabbing() {
            const menuDetails = header === null || header === void 0 ? void 0 : header.querySelector("details[name='main-nav']");
            if (!menuDetails)
                return null;
            const firstFocusable = menuDetails.querySelector("summary"); // first menu item
            const lastFocusable = closeButton;
            if (!firstFocusable || !lastFocusable)
                return null;
            const keyListener = (e) => {
                if (e.key !== "Tab")
                    return;
                if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
                else if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            };
            header === null || header === void 0 ? void 0 : header.addEventListener("keydown", keyListener);
            return () => {
                header === null || header === void 0 ? void 0 : header.removeEventListener("keydown", keyListener);
            };
        }
        function toggleUtils(hidden) {
            if (!utils)
                return;
            utils.style.display = hidden ? "none" : "flex";
        }
        function toggleHeaderState(isOpen) {
            if (!header)
                return;
            header.classList.toggle("henk-header--is-open", isOpen);
            closeButton.style.display = isOpen ? "flex" : "none";
            closeButton.style.zIndex = isOpen ? "9" : "1";
            utils && (utils.style.display = isOpen ? "none" : "flex");
        }
        let observer = null;
        // observe <details> open attribute
        const detailsElements = header === null || header === void 0 ? void 0 : header.querySelectorAll("details[name='main-nav']");
        if (detailsElements) {
            observer = new MutationObserver(() => {
                const anyOpen = Array.from(detailsElements).some((d) => d.hasAttribute("open"));
                toggleHeaderState(anyOpen);
                // add or remove ESC listener dynamically
                if (anyOpen) {
                    addEscListener();
                    removeTrap = trapMenuTabbing(); // <-- trap focus when menu opens
                }
                else {
                    removeEscListener();
                    removeTrap === null || removeTrap === void 0 ? void 0 : removeTrap(); // <-- release trap when menu closes
                }
            });
            detailsElements.forEach((d) => observer.observe(d, { attributes: true, attributeFilter: ["open"] }));
        }
        function closeMenu() {
            header === null || header === void 0 ? void 0 : header.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
            toggleHeaderState(false);
        }
        function addEscListener() {
            escListener = (event) => {
                if (event.key === "Escape") {
                    closeMenu();
                }
            };
            selectors.html.addEventListener("keydown", escListener);
        }
        function removeEscListener() {
            if (escListener) {
                selectors.html.removeEventListener("keydown", escListener);
                escListener = null;
            }
        }
        function init() {
            console.log("Init desktop menu");
            if (!header)
                return;
            // Listen to the close button
            closeButton.addEventListener("click", () => closeMenu());
        }
        function closeAllDetails() {
            if (!header)
                return;
            header
                .querySelectorAll("details[name='main-nav'][open]")
                .forEach((d) => (d.open = false));
        }
        init();
        // return cleanup function
        return () => {
            closeAllDetails();
            // Remove close button
            closeButton.remove();
            // Reset overflow + state classes
            header.classList.remove("henk-header--is-open");
            toggleUtils(false);
            // Remove event listeners
            removeEscListener();
            // Disconnect mutation observer
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
            observer = null;
        };
    };
    document.addEventListener("DOMContentLoaded", () => {
        const mql = window.matchMedia("(min-width: 768px)");
        let cleanup = null;
        const handleChange = (e) => {
            if (e.matches && !cleanup) {
                cleanup = initHeaderMenu(); // or mobileMenu.init() returning cleanup
            }
            else if (!e.matches && cleanup) {
                cleanup();
                cleanup = null;
                console.log("Desktop menu destroyed");
            }
        };
        handleChange(mql);
        mql.addEventListener("change", handleChange);
    });
})();

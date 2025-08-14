// the menu
export function initTheHeaderMenu(root: HTMLElement | Document = document): void {
  const selectors = {
    mainLevel: ".main-level",
    openClass: "open",
    openingClass: "opening",
    closingClass: "closing",
    html: document.documentElement,
    body: document.body,
    openButton: '[data-js-behavior="openSub"]',
    closeButton: '[data-js-behavior="closeMenu"]',
  };

  let escListener: ((event: KeyboardEvent) => void) | null = null;

  function openSub(element: Element, event?: Event) {
    if (!element) return;
    if (event) event.preventDefault();

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (!element.classList.contains(selectors.openClass)) {
      element.classList.add(selectors.openingClass);

      const alreadyOpen = root.querySelector(`.${selectors.openClass}`);
      if (alreadyOpen && alreadyOpen !== element) {
        closeSub(alreadyOpen);
      }

      setTimeout(() => {
        element.classList.remove(selectors.openingClass);
        element.classList.add(selectors.openClass);
        selectors.html.style.overflow = "hidden";
        // selectors.html.style.paddingRight = `${scrollbarWidth}px`;
        addEscListener();
      }, 20);
    } else {
      closeSub(element);
      selectors.html.style.overflow = "";
    }
  }

  function closeSub(element: Element) {
    if (!element || !element.classList.contains(selectors.openClass)) return;

    element.classList.add(selectors.closingClass);

    setTimeout(() => {
      element.classList.remove(selectors.openClass);
      element.classList.remove(selectors.closingClass);
      removeEscListener();
    }, 500);
  }

  function closeMenu(element: Element) {
    if (!element) return;

    const menu = element.closest(selectors.mainLevel);
    const openSubMenu = menu?.querySelector(`.${selectors.openClass}`);
    if (openSubMenu) {
      openSubMenu.classList.add(selectors.closingClass);

      setTimeout(() => {
        openSubMenu.classList.remove(selectors.openClass);
        openSubMenu.classList.remove(selectors.closingClass);
        selectors.html.style.overflow = "";
        removeEscListener();
      }, 500);
    }
  }

  function addEscListener() {
    const onEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(document.activeElement as Element);
      }
    };
    selectors.html.addEventListener("keydown", onEscKeyDown);
    escListener = onEscKeyDown;
  }

  function removeEscListener() {
    if (escListener) {
      selectors.html.removeEventListener("keydown", escListener);
      escListener = null;
    }
  }

  // converts it to a real array, which is iterable.
  function init() {
    for (const button of root.querySelectorAll(selectors.openButton)) {
      button.addEventListener("click", (event) => {
        openSub(event.currentTarget as Element, event);
        // console.log("clicked");
      });
    }

    for (const button of root.querySelectorAll(selectors.closeButton)) {
      button.addEventListener("click", (event) => {
        closeMenu(event.currentTarget as Element);
      });
    }
  }
  init();
}
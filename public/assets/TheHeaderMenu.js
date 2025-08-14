// the menu
export function initTheHeaderMenu(root = document) {
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
    let escListener = null;
    function openSub(element, event) {
        if (!element)
            return;
        if (event)
            event.preventDefault();
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
        }
        else {
            closeSub(element);
            selectors.html.style.overflow = "";
        }
    }
    function closeSub(element) {
        if (!element || !element.classList.contains(selectors.openClass))
            return;
        element.classList.add(selectors.closingClass);
        setTimeout(() => {
            element.classList.remove(selectors.openClass);
            element.classList.remove(selectors.closingClass);
            removeEscListener();
        }, 500);
    }
    function closeMenu(element) {
        if (!element)
            return;
        const menu = element.closest(selectors.mainLevel);
        const openSubMenu = menu === null || menu === void 0 ? void 0 : menu.querySelector(`.${selectors.openClass}`);
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
        const onEscKeyDown = (event) => {
            if (event.key === "Escape") {
                closeMenu(document.activeElement);
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
                openSub(event.currentTarget, event);
                // console.log("clicked");
            });
        }
        for (const button of root.querySelectorAll(selectors.closeButton)) {
            button.addEventListener("click", (event) => {
                closeMenu(event.currentTarget);
            });
        }
    }
    init();
}

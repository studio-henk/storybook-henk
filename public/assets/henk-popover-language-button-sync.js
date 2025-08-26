"use strict";
// interface ToggleEvent extends Event {
//   newState: "open" | "closed";
//   oldState: "open" | "closed";
// }
document.addEventListener("DOMContentLoaded", () => {
    // console.log("dom ready");
    const localiseDiv = document.querySelector(".henk-localise");
    if (!localiseDiv) {
        console.warn("No .henk-localise container found");
        return;
    }
    const button = localiseDiv.querySelector("[data-js-expand]");
    const popover = localiseDiv.querySelector("[data-js-popover]");
    if (button && popover) {
        popover.addEventListener("toggle", (event) => {
            const isOpen = event.newState === "open";
            // console.log(`Popover has been ${isOpen ? "shown" : "hidden"}`);
            button.setAttribute("aria-expanded", String(isOpen));
            button.setAttribute("data-state", isOpen ? "open" : "closed");
        });
    }
    else {
        console.warn("Required elements not found");
    }
});

"use strict";
// Select all elements with data-js-behavior containing "toggle"
const toggleElements = document.querySelectorAll("[data-js-behavior~='toggle']");
toggleElements.forEach((el) => {
    el.addEventListener("click", () => {
        // Toggle the 'open' attribute
        el.toggleAttribute("open");
    });
});

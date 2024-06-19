// usps-bar.js

import './usp-bar.css';
import { Checkmark } from '../base/Icon.stories';
import { CheckmarkMedium } from '../base/Icon.stories';
import { CheckmarkSmall } from '../base/Icon.stories';

export const createUspsBar = ({ 
  texts = ["Made to order in Europe", "Customisable design", "Assembled on delivery"], 
  showIcon = false, 
  variant = 'Default' }
) => {
  if (!texts || texts.length === 0) {
    // return null; // Return null if texts array is empty or undefined
  }

  const uspBar = document.createElement("div");
  uspBar.id = "usp-bar";
  uspBar.className = `usp-bar usp-bar--bg-${variant.toLowerCase()}`;

  const uspList = document.createElement("ul");
  uspList.className = "usp-bar__list";

  texts.forEach((text) => {
    const uspListItem = document.createElement("li");
    uspListItem.className = "usp-bar__list-item";

    if (showIcon) {
      // const iconHTML = Checkmark(); // Get the HTML string from Checkmark()
      const iconHTML = CheckmarkSmall(); // Get the HTML string from CheckmarkSmall()
      const tempContainer = document.createElement('div'); // Create a temporary container
      tempContainer.innerHTML = iconHTML; // Set the innerHTML to the Checkmark() result

      // Append each child of the temp container to uspListItem
      while (tempContainer.firstChild) {
        uspListItem.appendChild(tempContainer.firstChild);
      }
    }

    uspListItem.innerHTML += text;
    // uspListItem.innerHTML = text;

    uspList.appendChild(uspListItem);
  });

  uspBar.appendChild(uspList);

  return uspBar;
};

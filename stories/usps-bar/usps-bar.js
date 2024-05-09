// usps-bar.js

import './usps-bar.css';
import { Checkmark } from '../components/base/Icon.stories';

export const createUspsBar = ({ texts, showIcon = false, variant = 'Default' }) => {
    if (!texts || texts.length === 0) {
      return null; // Return null if texts array is empty or undefined
    }
  
    const uspBar = document.createElement("div");
    uspBar.id = "usp-bar";
    uspBar.className = `usp-bar usp-bar--${variant.toLowerCase()}`;
  
    const uspList = document.createElement("ul");
    uspList.className = "usp-bar__list";
  
    texts.forEach((text) => {
      const uspListItem = document.createElement("li");
      uspListItem.className = "usp-bar__list-item";
  
      if (showIcon) {
        const icon = document.createElement("i");
        icon.className = "icon-checkmark sh-atom-icon__svg";
        icon.innerHTML = Checkmark();
        uspListItem.appendChild(icon);
      }
  
      uspListItem.innerHTML += text;
      // uspListItem.innerHTML = text;
  
      uspList.appendChild(uspListItem);
    });
  
    uspBar.appendChild(uspList);
  
    return uspBar;
  };
  
// message-bar.js

import './message-bar.css';

export const createMsgBar = ({ text = "Bezoek een verkooppunt bij jou in de buurt", showTimer = false }) => {
    if (!text) {
      // return null; // Return null if texts array is empty or undefined
    }
  
    const msgBar = document.createElement("div");
    msgBar.id = "message-bar";
    msgBar.className = "message-bar";
    // msgBar.className = `message-bar usp-bar--${variant.toLowerCase()}`;
  
    msgBar.innerHTML = text;
  
    // msgBar.appendChild(uspList);
  
    return msgBar;
  };
  
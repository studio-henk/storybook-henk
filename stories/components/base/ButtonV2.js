// import './button-v2.css';

export const createButton = ({
  buttonElement = 'a',
  href,
  variant = 'default',
  label,
  onClick,
}) => {  
  const btn = document.createElement(buttonElement);
    if (buttonElement === 'button') {
        btn.type = 'button';
    }
    if (buttonElement === 'a') {
        btn.href = href ? href : 'https://studio-henk.nl/en';
    }
  btn.innerText = label;  
  btn.className = ['henk-button', `henk-button--${variant}`].join(' ');

  // if onClick is defined, add an event listener
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  return btn;
};

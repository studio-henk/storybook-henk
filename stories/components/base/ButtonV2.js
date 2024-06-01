// import './button-v2.css';

export const createButton = ({
  buttonElement = 'a',
  href,
  style = '',
  size = 'medium',
  label,
  onClick,
}) => {
  // const btn = document.createElement('button');
  const btn = document.createElement(buttonElement);
    if (buttonElement === 'button') {
        btn.type = 'button';
    }
    if (buttonElement === 'a') {
        btn.href = href ? href : 'https://studio-henk.nl/en';
    }
    // if (buttonElement === 'span') {
    //   btn.href = href ? href : 'https://studio-henk.nl/en';
    // }  
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'henk-button--primary' : 'henk-button--secondary';
  // btn.className = ['henk-button', `henk-button--${size}`, `henk-button--${style}`].join(' ');
  btn.className = ['henk-button', `henk-button--${style}`].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return btn;
};

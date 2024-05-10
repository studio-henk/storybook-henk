import './button-v2.css';

export const createButton = ({
  style = '',
  size = 'medium',
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'henk-button--primary' : 'henk-button--secondary';
  // btn.className = ['henk-button', `henk-button--${size}`, `henk-button--${style}`].join(' ');
  btn.className = ['henk-button', `henk-button--${style}`].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return btn;
};

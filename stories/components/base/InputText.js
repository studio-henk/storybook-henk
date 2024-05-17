import './input-text.css';

export const createInput = ({
  style = '',
  size = 'medium',
  label,
  onClick,
  required = false,
}) => {
  // const label = document.createElement('label');
  // label.innerText = label;

  const input = document.createElement('input');
  
  input.type = 'text';
  input.required = required;
  input.placeholder = 'Enter something';
  // input.innerText = label;
  // input.addEventListener('click', onClick);

  // input.className = ['henk-input', `henk-input--${style}`].join(' ');
  input.className = 'henk-input';

  return input;
};

// import './button-v2.css';
import './button.css';

export const createButton = ({
  buttonElement = 'button',
  href,
  variant = 'default',
  label,
  title,
  iconSvg = '',
  iconPosition = 'left',
  iconSize = 'medium',
  iconOnly = false,
  onClick,
  isLoading = false,
  disabled = false,
  target
}) => {  
  const btn = document.createElement(buttonElement);
    if (isLoading) {
      btn.setAttribute('data-state', 'loading');
    }

    if (buttonElement === 'button') {
        btn.type = 'button';
        if (disabled) {
            btn.disabled = true;
        }
    }

    if (buttonElement === 'a') {
        btn.href = href ? href : 'https://studio-henk.nl/en';
        if (target) {
            btn.target = target;
        }
        if (disabled) {
            btn.setAttribute('aria-disabled', 'true');
        }
    }
    
    if (buttonElement === 'span') {
        btn.role = 'presentation';
    }

  const sizeClass = `icon--${iconSize}`;
  const iconHtml = iconSvg ? `<i class="henk-icon ${sizeClass}">${iconSvg}</i>` : '';

  // Construct the inner HTML based on the presence of a label and the icon position
  if (label && !iconOnly) {
    if (iconPosition === 'left') {
      btn.innerHTML = `${iconHtml} ${label}`;
    } else {
      btn.innerHTML = `${label} ${iconHtml}`;
    }
  } else {
    btn.innerHTML = iconHtml; // Icon only button
    if (!buttonElement === 'span') {
      btn.ariaLabel = label;
    }    
  }
  
  const classNames = ['henk-button', `henk-button--${variant}`];
  if (iconOnly) {
    classNames.push('henk-button--icon-only');
  }
  btn.className = classNames.join(' ');

  // Add title attribute to button if title is defined
  if (title) {
    btn.title = title;
  }

  // if onClick is defined, add an event listener
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  return btn;
};

// tag.ts
import './tag.css'; // Ensure to create a CSS file for styling

interface TagProps {
  label: string; // Required label for the tag
  iconSvg?: string; // Optional SVG icon
  iconPosition?: 'left' | 'right'; // Position of the icon
  variant?: 'highlight'; // Optional variant
}

export const createTag = ({
  label,
  iconSvg = '',
  iconPosition = 'left',
  variant,
}: TagProps) => {
  const tag = document.createElement('span');
  
  // Set class names for the tag
  const classNames = ['henk-tag'];
  if (variant) {
    classNames.push(`henk-tag--${variant}`);
  }
  
  tag.className = classNames.join(' ');

  // Create icon HTML if iconSvg is provided
  const iconHtml = iconSvg ? `<i class="henk-icon icon--large">${iconSvg}</i> ` : '';

  // Add inner HTML based on icon position
  if (iconPosition === 'left') {
    tag.innerHTML = `${iconHtml}${label}`;
  } else {
    tag.innerHTML = `${label}${iconHtml}`;
  }

  return tag;
};

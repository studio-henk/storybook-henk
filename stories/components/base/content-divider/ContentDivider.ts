import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import './content-divider.css';

export interface CreateDividerProps {
    variant?: 'default' | 'primary';
    margin?: string;
    padding?: string;
}

export const createContentDivider = ({
  variant = 'default',
  margin = '0',
  padding = '0',
}: CreateDividerProps): HTMLDivElement => {
  const contentDivider = document.createElement('div');
  const contentDividerRule = document.createElement('hr');
  contentDivider.appendChild(contentDividerRule);
  
  // contentDivider.className = 'henk-content-divider'; 
  contentDivider.className = `henk-content-divider henk-content-divider--${variant}`; 
  
  if (margin) {
    contentDivider.style.margin = margin;
  }

  if (padding) {
    contentDivider.style.padding = padding;
  }

  return contentDivider;
};



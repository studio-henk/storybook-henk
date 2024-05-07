// import './page.css';
import { createHeader } from '../Header';

export const createPage = () => {
  const article = document.createElement('article');
  let user = null;
  let header = null;

  const rerenderHeader = () => {
    const wrapper = document.getElementsByTagName('article')[0];
    wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
  };

  const onLogin = () => {
    user = { name: 'Jane Doe' };
    rerenderHeader();
  };

  const onLogout = () => {
    user = null;
    rerenderHeader();
  };

  const onCreateAccount = () => {
    user = { name: 'Jane Doe' };
    rerenderHeader();
  };

  const createHeaderElement = () => {
    return createHeader({ onLogin, onLogout, onCreateAccount, user });
  };

  header = createHeaderElement();
  article.appendChild(header);

  const section = `
  <section class="henk-page">
    <h2>Configurator placeholder</h2>
    
    
  </section>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

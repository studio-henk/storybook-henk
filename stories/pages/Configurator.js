// import './page.css';
import { createHeader } from "../Header";

export const createPage = () => {
  const article = document.createElement("article");
  let user = null;
  let header = null;
  
  const rerenderHeader = () => {
    const wrapper = document.getElementsByTagName("article")[0];
    wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
  };
  
  const onLogin = () => {
    user = { name: "Jane Doe" };
    rerenderHeader();
  };
  
  const onLogout = () => {
    user = null;
    rerenderHeader();
  };
  
  const onCreateAccount = () => {
    user = { name: "Jane Doe" };
    rerenderHeader();
  };
  
  const createHeaderElement = () => {
    return createHeader({ onLogin, onLogout, onCreateAccount, user });
  };
  
  header = createHeaderElement();
  // article.appendChild(header);
  
  const section = `<section class="henk-page">
  <h2>Configurator placeholder</h2>
  <div class="configurator__view">
    <div
      id="3d_div"
      class="configurator__view--image"
      data-bstoggle="modal"
      data-bstarget="#config_image"
      style="display: none;"
    >
      <div class="resp-container"></div>
    </div>
    <div
      id="2d_div"
      class="configurator__view--image"
      data-bstoggle="modal"
      data-bstarget="#config_image"
    >
      <img
        id="configurator__image"
        src="https://www.studio-henk.nl/dining-table-configurator-image/T-RC-0008-STD-SX-B"
        alt="Configurator"
        class="img-responsive"
        width="2000"
        height="2000"
        loading="eager"
        title="De afmetingen van het tafelblad worden niet gereflecteerd in de configurator"
      >
    </div>
  </div>
</section>`;
  
  article.insertAdjacentHTML("beforeend", section);
  
  return article;
};

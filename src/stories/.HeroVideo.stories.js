// Import dependencies as needed

export default {
  title: 'Components/HeroVideo', // Define the title of your story
  parameters: {
    // Define parameters for your storybook story if needed
  },
};

// Create a template for your HeroVideo component
export const HeroVideoStory = () => `
  <section id="hero-brick_0">
    <div class="hero-video-brick">
      <a class="hero-video-brick__anchor-link" href="/en/the-form-of-things">
        <video muted="" loop="" playsinline="" autoplay="">
          <source src="https://assets.studio-henk.nl/assets/Images/slant-campaign/Brand.mp4" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="hero-video-brick__overlay">
          <div class="hero-video-brick__content">
            <header class="hero-video-brick__header">
              <p class="hero-video-brick__header-subtitle">New: Slant Sofa</p>
              <h1 class="hero-video-brick__header-title">The form of things</h1>
            </header>
            <main class="hero-video-brick__body">
              <p class="hero-video-brick__body-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid autem consequuntur enim et fuga harum id incidunt, iusto laboriosam minima officiis, provident sequi sint sunt veritatis vero vitae?<br><br>helllo</p>
            </main>
            <footer class="hero-video-brick__footer">
              <span 
                class="henk-button henk-button--default">discover
              </span>
            </footer>
          </div>
        </div>
      </a>
    </div>
  </section>
`;

// Optionally add more stories as needed

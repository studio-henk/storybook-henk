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
    <div class="hero-video-brick" style="color: var(--color-henk-white, #fff);">
      <a class="hero-video-brick__anchor-link" href="/en/the-form-of-things" style="color: var(--color-henk-white, #fff);">
        <video muted="" loop="" playsinline="" autoplay="">
          <source src="https://assets.studio-henk.nl/assets/Images/slant-campaign/Brand.mp4" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="hero-video-brick__overlay" style="background-color: hsla(0, 0%, 12%, 30%);">
          <div class="hero-video-brick__content">
            <header class="hero-video-brick__header">
              <p class="hero-video-brick__header-subtitle">New: Slant Sofa</p>
              <h1 class="hero-video-brick__header-title">The form of things</h1>
            </header>
            <main class="hero-video-brick__body">
              <p class="hero-video-brick__body-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid autem consequuntur enim et fuga harum id incidunt, iusto laboriosam minima officiis, provident sequi sint sunt veritatis vero vitae?<br><br>helllo</p>
            </main>
            <footer class="hero-video-brick__footer">
              <span class="sh-atom-button" data-style="filled" data-icon-arrow-right="true">discover
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="icon-arrow-right-animated">
                    <path id="line" fill-rule="evenodd" clip-rule="evenodd" d="M12.9918 12.4H2V11.6H12.9918V12.4Z" fill="currentcolor"></path>
                    <path id="head" fill-rule="evenodd" clip-rule="evenodd" d="M12.8836 12L8.8687 8.2939L9.41132 7.70605L14.0631 12L9.41132 16.2939L8.8687 15.7061L12.8836 12Z" fill="currentcolor"></path>
                  </g>
                  <style>
                    #icon-arrow-right-animated #line,
                    #icon-arrow-right-animated #head {
                      transition: transform .2s ease;
                    }

                    svg:hover #icon-arrow-right-animated #line,
                    .sh-atom-button:hover #icon-arrow-right-animated #line {
                      transform: scaleX(1.7);
                    }

                    svg:hover #icon-arrow-right-animated #head,
                    .sh-atom-button:hover #icon-arrow-right-animated #head {
                      transform: translateX(10px);
                    }
                  </style>
                </svg>
              </span>
            </footer>
          </div>
        </div>
      </a>
    </div>
  </section>
`;

// Optionally add more stories as needed

import type { Meta, StoryObj } from "@storybook/html";

function htmlToNode(html: string): HTMLElement {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
}

const meta = {
  title: "Components/Composites/OptionsBar",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const OptionsBar: Story = {
  render: () => {
    const optionsBarHtml = `
      <div class="henk-grid-options-bar">
        <div class="henk-grid-options-bar__filters">
          <form>
            <details id="filters-widget">
              <summary>
                Filters
                <span class="filters-widget__active-num">(3 applied)</span>
              </summary>
              <div class="henk-details-group">

                <details class="henk-details henk-details--plusmin" name="filter">
                  <summary class="henk-details__summary">Prijs</summary>
                  <div class="henk-details__content">
                    <div>
                      <input type="number" placeholder="Min" min="0" size="4">
                      <input type="number" placeholder="Max" min="0" size="4">
                    </div>
                  </div>
                </details>

                <details class="henk-details henk-details--plusmin" name="filter">
                  <summary class="henk-details__summary">Beschikbaarheid</summary>
                  <div class="henk-details__content">
                    <ul class="henk-list henk-list--no-bullets">
                      <li><label><input type="checkbox">Op voorraad (2)</label></li>
                      <li><label><input type="checkbox" disabled>Niet op voorraad</label></li>
                    </ul>
                  </div>
                </details>

                <details class="henk-details henk-details--plusmin" name="filter">
                  <summary class="henk-details__summary">Color</summary>
                  <div class="henk-details__content">
                    <ul class="henk-list henk-list--no-bullets">
                      <li><label><span class="swatch" style="background-color:#EAD8AB;"></span>Beige (2)</label></li>
                      <li><label><span class="swatch" style="background-color:#39281e;"></span>Chocoladebruin (1)</label></li>
                      <li><label><span class="swatch" style="background-color:#EAD8AB;"></span>Haverbeige (2)</label></li>
                      <li><label><span class="swatch" style="background-color:#646d41;"></span>Olijfgroen (1)</label></li>
                    </ul>
                  </div>
                </details>

                <div class="henk-button-group">
                  <button type="submit" class="henk-button henk-button--small">Apply</button>
                </div>
              </div>
            </details>
          </form>
        </div>

        <div class="henk-grid-options-bar__sort">
          <form class="henk-collection-sort-form">
            <div class="henk-labeled-select henk-labeled-select--dir-vertical henk-labeled-select--floating">
              <div class="select-wrapper">
                <select class="henk-select" id="SortBy" name="SortBy" aria-label="Sort by">
                  <option value="manual">Uitgelicht</option>
                  <option value="best-selling" selected>Best verkopende</option>
                  <option value="title-ascending">A-Z</option>
                  <option value="title-descending">Z-A</option>
                  <option value="price-ascending">Prijs: laag naar hoog</option>
                  <option value="price-descending">Prijs: hoog naar laag</option>
                </select>
                <label class="henk-label" for="SortBy"><span class="henk-label-text">Sort by</span></label>
              </div>
            </div>
            <button type="submit" class="henk-button" data-js-hide>Sort</button>
          </form>
        </div>
      </div>
    `;

    return htmlToNode(optionsBarHtml);
  },
};

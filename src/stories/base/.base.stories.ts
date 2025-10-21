import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Base/Base HTML Elements",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Text: Story = {
  name: "Text & Headings",
  render: () => `
    <section xstyle="padding:2rem;">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Paragraph text. <em>Emphasized</em>, <strong>Strong</strong>, <code>Code</code>,
        <mark>Highlighted</mark>, <small>Small text</small>,
        <time datetime="2025-09-05">Time element</time>.
      </p>
      <blockquote>A blockquote with <cite>a citation</cite>.</blockquote>
      <pre><code>Preformatted code block</code></pre>
    </section>
  `,
};

export const Lists: Story = {
  render: () => `
    <section xstyle="padding:2rem;">
      <h2>Lists</h2>
      <ul>
        <li>Unordered list item</li>
        <li>Another item</li>
      </ul>
      <ol>
        <li>First</li>
        <li>Second</li>
      </ol>
      <dl>
        <dt>Term</dt>
        <dd>Description</dd>
      </dl>
      <dl>
        <dt>Term</dt>
        <dd>Description</dd>
        <dt>Term</dt>
        <dd>Description</dd>
      </dl>
    </section>
  `,
};

export const Media: Story = {
  render: () => `
    <section style="padding:2rem;">
      <h2>Media</h2>
      <figure>
        <img src="https://picsum.photos/200/150" alt="Placeholder image" />
        <figcaption>Figure caption</figcaption>
      </figure>
      <video controls width="320">
        <source src="" type="video/mp4" />
        Your browser doesn’t support video.
      </video>
      <audio controls>
        <source src="" type="audio/mpeg" />
        Your browser doesn’t support audio.
      </audio>
    </section>
  `,
};

export const Forms: Story = {
  render: () => `
    <section style="padding:2rem;">
      <h2>Forms</h2>
      <form>
        <label>
          Text: <input type="text" placeholder="text input" />
        </label><br />
        <label>
          Select:
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label><br />
        <label>
          Textarea:<br />
          <textarea rows="2"></textarea>
        </label><br />
        <button type="submit">Submit</button>
      </form>
    </section>
  `,
};

export const Table: Story = {
  render: () => `
    <section style="padding:2rem;">
      <h2>Table</h2>
      <table border="1">
        <caption>Table caption</caption>
        <thead>
          <tr><th>Header 1</th><th>Header 2</th></tr>
        </thead>
        <tbody>
          <tr><td>Cell 1</td><td>Cell 2</td></tr>
        </tbody>
        <tfoot>
          <tr><td>Footer</td><td>Footer</td></tr>
        </tfoot>
      </table>
<hr>
<h2>Table 2</h2>
<table class="cart-totals henk-table henk-table--no-border">
              <caption class="visually-hidden">
                Your cart totals
              </caption>
              <tbody>
                <tr>
                  <th scope="row">Totaal incl BTW</th>
                  <td class="text-align-right">€1.836</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Nu te betalen</th>
                  <td class="text-align-right">
                    <strong>€1.836</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
    </section>
  `,
};

export const Interactive: Story = {
  render: () => `
    <section style="padding:2rem;">
      <h2>Interactive & Misc</h2>
      <details>
        <summary>Toggle me</summary>
        Hidden content
      </details>
      <dialog open>This is a dialog.</dialog>
      <div>A generic <span>inline wrapper</span> inside a div.</div>
    </section>
  `,
};

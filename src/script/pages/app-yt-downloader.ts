import { LitElement, css, html, customElement } from 'lit-element';

@customElement('app-yt-downloader')
export class AppYTDownloader extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1 class="heading">YouTube Downloader</h1>
        <input class="URL-input" placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q">
        <button class="convert-button">Convert</button>
      </div>
    `;
  }
}
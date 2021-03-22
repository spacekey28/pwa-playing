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
        <h2>Youtube Downloader Page</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qdgc5yitWHg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  }
}
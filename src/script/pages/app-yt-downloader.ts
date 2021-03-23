import { LitElement, css, html, customElement } from 'lit-element';

@customElement('app-yt-downloader')
export class AppYTDownloader extends LitElement {

  static get styles() {
    return css`
      .heading {
        font-family: Arial;
        margin-top:40vh;
      }
      .YTD-input, .convert-button {
          font-size:1.3em;
          padding:5px 10px;
      }
      .YTD-input {
          border-radius:4px 0px 0px 4px;
          width:30em;
          text-align: left;
          border:2px solid #EEEEEE;
          background: #EEEEEE;
          outline:none;
      }
      .YTD-input:focus {
          border:2px solid #0485ff;
      }
      .convert-button {
          border-radius:0px 4px 4px 0px;
          border:2px solid #0485ff;
          background: #0485ff;
          color:white;
      }
    `;
  }

  static get properties() {
    return {
      videoUrl: { type: String },
    };
  }

  constructor() {
    super();

    this.videoUrl = "Youtube Video Url";
  }
  
  videoUrl!: string;

  render() {
    return html`
      <div>
        <h1 class="heading">YouTube Downloader</h1>
        <input .value="${this.videoUrl}" id="YTD-input" class="YTD-input"  placeholder="Video URL">
        <button @click="${this.clickHandler}" class="convert-button">Convert</button>
      </div>
    `;
  }

  clickHandler() {
    console.log(this.inputEl.value);
    console.log("URL:", this.inputEl.value);
  }

  private get inputEl(): HTMLInputElement {
    return this.shadowRoot!.getElementById('YTD-input')! as HTMLInputElement;
  }
}
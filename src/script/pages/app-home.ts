import { LitElement, css, html, customElement, property } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';


@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties in lit-element
  // check out this link https://lit-element.polymer-project.org/guide/properties#declare-with-decorators
  @property() message: string = "Starting new app!";

  static get styles() {
    return css`
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      .gridWrapper {
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;
      }

      .gridImages {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, minmax(500px, auto));
        grid-gap: 20px;
      }

      .gridImages img {
        object-fit: cover;
        width: 100%;
        height: 500px;
      }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    console.log('This is your home page');

  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      })
    }
  }

  render() {
    return html`
      <div>

        <div id="welcomeBlock">

          <img src="assets/icons/icon_512.png" alt="app icon">
          <h2>${this.message}</h2>

          ${'share' in navigator ? html`<button @click="${this.share}">Share this Starter!</button>` : null}
        </div>

        <div class="gridWrapper">
          <div class="gridImages">
            <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 1">
            <img src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 2">
            <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 3">
            <img loading="lazy" src="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 4">
            <img loading="lazy" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 5">
            <img loading="lazy" src="https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 6">
            <img loading="lazy" src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 7">
            <img loading="lazy" src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 8">
            <img loading="lazy" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cooking 9">
          </div>
        </div>
        
        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}
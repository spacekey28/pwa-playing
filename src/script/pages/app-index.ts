import { LitElement, css, html, customElement } from 'lit-element';

import './app-home';

import { Router } from '@vaadin/router';

import '../components/header';
import '../components/footer';

@customElement('app-index')
export class AppIndex extends LitElement {

  static get styles() {
    return css`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }
    
      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }
    
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
    
        to {
          opacity: 0;
        }
      }
    
      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }
    
        to {
          opacity: 1;
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

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
    // temporarily cast to any because of a Type bug with the router
      ({
        path: "",
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: "/meals",
            component: "app-meals",
            action: async () => {
              await import('./app-meals.js');
            },
          },
          {
            path: "/yt-downloader",
            component: "app-yt-downloader",
            action: async () => {
              await import('./app-yt-downloader.js');
            },
          }
        ]
      } as any)
    ]);
  }

  render() {
    return html`
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
        </main>

        <app-footer></app-footer>
      </div>
    `;
  }
}
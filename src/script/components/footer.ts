import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-footer')
export class AppFooter extends LitElement {

  static get styles() {
    return css`
      footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
        background: #333;
        color: white;
        height: 4em;
      }

      footer h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 18px;
        line-height: 36px;
        font-weight: normal;
        width: 100%;
      }

      footer a {
        color: white;
        font-size: 12px;
        text-decoration: none;
      }
      footer a:hover {
        text-decoration: underline;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <footer>
        <div>
          <h3>Meals &COPY;2021</h3>
        </div>
        

        <a href="https://www.themealdb.com">Meals Database</a>
      </footer>
    `;
  }
}
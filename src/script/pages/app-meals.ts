import { LitElement, css, html, customElement } from 'lit-element';
const fetch = require('node-fetch');

@customElement('app-meals')
export class AppMeals extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  static randomMeals() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(json => console.log(json));
  }

  render() {
    return html`
      <div>
        <h2>Meals Page</h2>
      </div>
    `;
  }
}
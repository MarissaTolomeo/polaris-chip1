import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.number = 0;
    this.min = 10;
    this.max = 25;

  }

  static get styles() {
    return css`

:host([number="16"]).button-wrapper{
        color: green;
      }

  .counter-wrapper {
          background-color: pink;
          width: 60px;
          padding: 16px;
          margin: 40px;
  }
    `;
    }

increase(){
  if (this.number < 25) {
  this.number+=1;
  }
}

decrease(){
  if (this.number > 10) {
  this.number-=1;
  }
}

  render() {
    return html`
      <h1>Counter App</h1>
        <div class='counter-wrapper'>
          <div class="number">${this.number}</div>
          <div class="button-wrapper">
            <button id='button1' @click= "${this.decrease}" ?disabled="${this.min === this.number}" >-</button>
            <button id='button2' @click= "${this.increase}" ?disabled="${this.max === this.number}">+</button>
          </div>
        </div>
    `;
  }



  static get properties() {
    return { 
        number: {type: Number, reflect: true},
      };
    }
  }

globalThis.customElements.define(CounterApp.tag, CounterApp);


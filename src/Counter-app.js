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

  }

  static get styles() {
    return css`

:host([number="16"]).button-wrapper{
        color: green;
      }

  .counter-wrapper {
          background-color: pink;
          border-radius: 6px;
          padding: 16px;
          margin: 32px 16px;
  }
    `}



  render() {
    return html`
      <h1>Counter App</h1>
        <div id='counter-wrapper'>
          <div class="number">${this.number}</div>
          <div class="button-wrapper">
            <button id='button1'>-</button>
            <button id='button2'>+</button>
          </div>
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


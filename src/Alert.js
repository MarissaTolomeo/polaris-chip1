import { LitElement, html, css } from 'lit';



export class Alert extends LitElement {

  static get tag() {
    return 'Alert';
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`



    `;
    }



render() {



    return html`
      <h1>Counter App</h1>
        <div class='counter-wrapper'> 
        <confetti-container  id="confetti"><h2 class="number" style="color:${color}">${this.number}</h2></confetti-container>
          <div class="button-wrapper">
            <button id='button1' @click= "${this.decrease}" ?disabled="${this.min === this.number}" >-</button>
            <button id='button2' @click= "${this.increase}" ?disabled="${this.max === this.number}">+</button>
          </div>
        </div>
    `;
  }



  static get properties() {
    return { 
        
      };
    }
  }

globalThis.customElements.define(Alert.tag, Alert);


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
    this.color = "black";
  }

  static get styles() {
    return css`


  .counter-wrapper {
          background-color: pink;
          width: 100px;
          padding: 16px;
          margin: 40px;
          font-size: 25px;
          text-align: center;
  }

button {
  font-size: 20px;
  font-family: georgia;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 4px 4px 4px 4px;
}

  button:hover{
        background-color: gray;
        border-radius: 10%;
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


updated(changedProperties) {
  if (changedProperties.has('number') && (this.number === 21)) {
    return this.makeItRain();// do your testing of the value and make it rain by calling makeItRain
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over again
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}

render() {

  var color = "black";
  if (this.number === this.min) {
    color = "red";
  }
  if (this.number === this.max) {
    color = "red";
  }
  if (this.number === 18) {
    color = "gray";
  }
  if (this.number === 21) {
    color = "gray";
  }

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
        number: {type: Number, reflect: true},
      };
    }
  }

globalThis.customElements.define(CounterApp.tag, CounterApp);


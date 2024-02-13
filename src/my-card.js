import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Title';
    this.header = "Header";
    this.img = "img";
    this.text = "text";
    this.btnText = " ";
    this.btnLink = "link";

  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }


      .container.change-color {
        background-color: green;
      }

      div {
          max-width: 400px;
          min-height: 600px;
          background-color: navy;
          color: white;
          font-size: 20px;
          font-family: georgia;
          text-align: center;
          border: solid 3px white;
          border-radius: 6px;
          padding: 16px;
          margin: 32px 16px;
      }
#cardlist {
  display: flex;
}



img {
  width: 90%;
  padding: 8px 8px 16px 16px;
  margin: 8px 8px 16px 8px;
}

h1 {
  display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin: 0;
margin-bottom: 6px;
}

h2 {
  margin: 12px 0;

}

button {
  max-width: 400px;
  max-height: 600px;
  background-color: blue;
  color: white;
  font-size: 20px;
  font-family: georgia;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  padding: 16px 16px 16px 16px;
  margin: 4px 4px 4px 4px;
  margin-left: 120px;
}
      button:hover{
        background-color: green
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="container">
      <h1>${this.title}</h1>
     <!-- <img src=${this.img}> -->
     <meme-maker alt="Cat stalking a small toy" image-url=${this.img} top-text="I bring you" bottom-text="the Happy Valley">
</meme-maker>
      <h2>${this.text}</h2>
      <a href=${this.btnLink} target="_blank"><button>${this.btnText}</button></a>
    </div>
    `;
  }

  

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      text: { type: String },
      btnText: { type: String },
      btnLink: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);




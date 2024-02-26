import { LitElement, html, css } from 'lit';



export class Alert extends LitElement {

  static get tag() {
    return 'Alert';
  }

  constructor() {
    super();
    this.severity = "";
    this.message = "message";
    this.sticky = false;
  }


  static get styles() {
    return css`

.sticky{
        position: sticky;
        top: 0;
        z-index: 100;
        opacity: 1.0;
    }
    
.alert-wrapper {
    background-color: pink;
    font-size: 18 px;
    display: block;
    padding: 16px;
    margin: 16px;
  }
  `;
}


render() {
    var color = "white";
  
    if(this.severity === "Notice") {
        color = "blue";
    }
    if(this.severity === "Warning") {
        color = "yellow";
    }
    if(this.severity === "ALERT") {
        color = "red";
    }


    if(this.severity === "Notice") {
        (this.message) = "Construction beginning next week in State College.";
    }
    if(this.severity === "Warning") {
        (this.message) = "Heavy traffic today, drive with caution.";
    }
    if(this.severity === "ALERT") {
        (this.message) = "School is cancelled today due to weather.";
    }
    
    return html`
        <div class='alert-wrapper'> 
        <h2 class="message" style="color:${color}">${this.message}</h2>
          <div class="button-wrapper">
            <button id='button'></button>
          </div>
        </div>
    `;
  }
    


  static get properties() {
    return { 
        issueLevel: { type: String },
      message: { type: String },
      sticky: { type: Boolean },
      };
    }
}

globalThis.customElements.define(Alert.tag, Alert);


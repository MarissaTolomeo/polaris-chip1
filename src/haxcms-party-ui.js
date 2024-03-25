import { LitElement, html, css } from 'lit';



export class Alert extends LitElement {

  static properties = {
    items: { type: Array },
  }

  static get tag() {
    return 'UI-tag';
  }

  constructor() {
    super();
        this.icon = "";
        this.darkMode = false;
  }


  static get styles() {
    return css`

:host {
            display: flex;
            margin: 4px;
            padding: 4px;
        }

        :host([darkMode]) .Invite {
            background-color: black;
            color: white;
            border: 3px solid white;
        }

        .Icon {
            height: 30px;
            width: 30px;
            margin: 8px;
            padding: 8px;
            
        }
        .Invite {
            background-color: white;
            text-align: center;
            height: 100px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
            

        }

        .Invite:focus,
        .Invite:hover {
            background-color: gray;
        }
        .remove {
            background-color: red;
            text-align: center;
            height: 50px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
  

        }
        .remove:focus,
        .remove:hover {
            background-color: gray;
        }

        .Save {
            background-color: green;
            text-align: center;
            height: 50px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
        }
        .Save:focus,
        .Save:hover {
            background-color: gray;
        }

        .List {
            display: inline-flex;
            margin: 4px;
            padding: 4px;
            background-color: white;
            height: 500px;
            width: 500px;
            overflow: auto;

        }
    

  `;
}


render() {
   
    
    return html`
        <div>
                <button class="Save">Save Party</button>
                <button class="Invite"><img class=Icon src="${this.icon}" alt="Add Friend">Invite Friend</button>
            </div>

            <div class="List">
                <div>
                    <rpg-character hat="random" seed="haxtheweb"></rpg-character>
                    <p style="text-aign: left; "> </p>
                </div>
                <button class="remove">Remove Member</button>
            
            </div>
            
            <p style="font-family: comic sans ms;"> </p>
            
    `;
  }
    


  static get properties() {
    return { 
      icon: { type: String },
      darkMode: { type: Boolean, reflect: true, attribute: "dark-mode"},

      };
    }
}

globalThis.customElements.define(UI.tag, UI);
import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { RpgCharacter } from '@lrnwebcomponents/rpg-character/rpg-character.js';



export class haxcms extends DDD {
    static get tag() {
        return 'haxcms-party-ui';
      }
 
      static properties = {
    items: { type: Array },
  }
  constructor() {
    super();
    this.delete = false;
    this.changed = false;
    this.saved = false;
    this.party = localStorage.getItem("party") != null ? localStorage.getItem("party").split(",") : ["mlt5620", "test1234"];
    this.selectedUser = "";  
  }

  static get styles() {
    return [ super.styles,css`

:host {
        display: flex;
            font-family: "Press Start 2P", system-ui;
        }
        .List {
                background-color: var(--ddd-theme-default-Blue);
                min-width: 100vh;
                height: 620px;
                padding: var(--ddd-spacing-4);
                color: white;
                overflow-y: scroll;
        }
    
        .title{
                font-family: system-ui;
                text-align: center;
                color: white;

            }

            .username {
                font-family: system-ui;
                margin: var(--ddd-spacing-8);
                padding: var(--ddd-spacing-8);
                
            }
            .userSlot {
                display: flex;
                margin-left: var(--ddd-spacing-4);
                
            }

            .buttonWrapper {
                display: flex;
                margin-left: 0px;
                
            }
            .rules {
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                width: 92%;
                background-color: var(--ddd-theme-default-Navy);

            }

            .rulesText {
                font-family: system-ui;
                font-size: 12px;
                margin: 0px;
                padding: 0px;

            }
            .partyDisplay {
                text-align: left;
            }




        .Invite {
            font-family: system-ui;
                font-size: var(--ddd-font-size-3xs);
                font-weight: 500;
                color: blue;
                min-width: 190px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                border: var(--ddd-border-sm);
                border-color: var(--ddd-theme-default-Navy);
                background-color: var(--ddd-theme-default-roarMaxlight);
                position: sticky;
                left: 55%;

        }
        .Invite:focus,
        .Invite:hover {
            background-color: var(--ddd-theme-default-Navy);
                color: var(--ddd-theme-default-roarMaxlight);
                transform: scale(1.1);
                transition: 0.3s ease-in-out;
        }


        .remove {
            font-family: system-ui;
            font-size: var(--ddd-font-size-3xs);
            font-weight: 500;
            color: blue;
            min-width: 150px;
            margin: var(--ddd-spacing-3);
            padding: var(--ddd-spacing-6);
            border: var(--ddd-border-sm);
            border-color: var(--ddd-theme-default-Navy);
            background-color: var(--ddd-theme-default-roarMaxlight);
            position: sticky;
            left: 90%;
        }
        .remove:focus,
        .remove:hover {
            background-color: var(--ddd-theme-default-Navy);
            color: var(--ddd-theme-default-roarMaxlight);
            transform: scale(1.1);
            transition: 0.3s ease-in-out;
        }


        .Save {
            font-family: system-ui;
                font-size: var(--ddd-font-size-3xs);
                font-weight: 500;
                color: blue;
                min-width: 190px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                border: var(--ddd-border-sm);
                border-color: var(--ddd-theme-default-Navy);
                background-color: var(--ddd-theme-default-roarMaxlight);
                position: sticky;
                left: 90%;
        }
        .Save:focus,
        .Save:hover {
            background-color: var(--ddd-theme-default-Navy);
            color: var(--ddd-theme-default-roarMaxlight);
            transform: scale(1.1);
            transition: 0.3s ease-in-out;
        }
        #search-input {
                font-family: system-ui;
                min-width: 43%;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                background-color: var(--ddd-theme-default-slateMaxLight);
            }

  `];
}


addItem() {
    const entry = this.shadowRoot.getElementById("search-input");
    const username = entry.value.trim();

    if (username !== "") { 
        if (this.party.length < 5) { 
            if (/^[a-z0-9]{1,10}$/.test(username)) { 
                if (!this.party.includes(username)) { 
                    this.party = [...this.party, username];
                    this.toggleChanged();
                    console.log(this.party);

                } else {
                    alert("Username is already in the party.");
                }
            } else {
                alert("Check Username rules.");
            }
        } else {
            alert("The party has the maximum number of members.");
        }
    } else {
        alert("Text imput is empty.");
    }
}
toggleChanged() {
    this.changed = !this.changed;
}

remove(e){
    const id = e.target.id;
    this.selectedUser = id;
    this.delete = true;
    const position = this.party.indexOf(this.selectedUser); 
    let deleteRequest = "Are you sure you want to remove the member:" + this.selectedUser + "?"; 

    if(confirm(deleteRequest) == true){ 
        this.party.splice(position, 1);
        this.selectedUser = '';
        this.deleteUserPending = false;
        console.log(localStorage.getItem("party").split(","));
        this.toggleChanged();
        this.requestUpdate();
    } else {
        alert("User removal canceled."); 
        console.log(localStorage.getItem("party").split(","));
        this.userToDelete = '';
        this.selectedUser = false;
        this.requestUpdate();
    }
    this.delete = false; 
}

save() {
    if (this.changed) { 
        alert("Party saved!");
        const partyArray = this.party.toString();
        localStorage.setItem("party", partyArray);
        console.log(localStorage.getItem("party").split(","));
        this.saved = true;
        this.makeItRain();
        this.toggleChanged();
    } else {
        alert("No changes were made to the party or the party is empty.");
        this.toggleChanged();
    }
}

displayItem(item) {  
    if (this.saved) { 
        return html`<div class="userSlot"><rpg-character walking seed=${item}></rpg-character><p class="username">${item}</p><button class="remove" id="${item}" @click="${this.remove}">Remove Member</button></div>`;
    } else {
        return html`<div class="userSlot"><rpg-character seed=${item}></rpg-character><p class="username">${item}</p><button class="remove" id="${item}" @click="${this.remove}">Remove Member</button></div>`;
    }
}

makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
            setTimeout(() => {
            this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
}


render() {
   
    
    return html`
       <confetti-container id="confetti">
  <div class="partyList">
      <h2 class="title">Create Party</h2>
      <p class="ruleText" style="font-family: comic sans ms; text-align: center;"></p>
      <div class="rules">
              <p class="ruleText">Input Rules:</p>
              <p class="ruleText">- Maximum of 10 characters.</p>
              <p class="ruleText">- Only lowercase letters and numbers.</p>
              <p class="ruleText">- No special characters.</p>
              <p class="ruleText">- The party can only have a maximum of 5 members.</p>
              <p class="ruleText">- No duplicate members.</p>
              <p></p>
              <details><summary class="ruleText" style="color: white;">Current Array:</summary><div><p class="ruleText" style="color: white;">${this.party}</p></div></details>
      </div>
      
      <div class="buttonWrapper">
          <input id="search-input" type="text" placeholder="Add a party member."/>
          <button id="Invite" @click="${this.addItem}">Invite Friend</button>
          <button id="Save" @click="${this.saveData}">Save Party</button>
          
          <script>
              var input = document.getElementById("search-input");
              input.addEventListener("keypress", function(e) {
              if (e.key === "enter") {
                  document.getElementById("Invite").click();
              }
          });
          </script>

      </div>

      <div class="partyDisplay">
          ${this.party.map((item) => this.displayItem(item))}           
      </div>
  
  </div>
  </confetti-container>               
    `;
  }
    

  static get properties() {
    return { 
        ...super.properties,
        delete: { type: Boolean, reflect: true },
        changed: { type: Boolean, reflect: true },
        saved: { type: Boolean, relect: true },
        party: { type: Array, reflect: true },
        selectedUser: { type: String, reflect: true },  
      };
    }
}

globalThis.customElements.define(haxcms.tag,haxcms);
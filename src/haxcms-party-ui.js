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
    this.party = localStorage.getItem("party") != null ? localStorage.getItem("party").split(",") : ["evp5350", "test1234"];
    this.selectedUser = "";
        
  }


  static get styles() {
    return [ super.styles,css`

:host {
        display: flex;
            font-family: "Press Start 2P", system-ui;
        }
        .List {
                background-color: var(--ddd-theme-default-beaverBlue);
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
                background-color: var(--ddd-theme-default-nittanyNavy);

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
                border-color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-roarMaxlight);
                position: sticky;
                left: 55%;

        }
        .Invite:focus,
        .Invite:hover {
            background-color: var(--ddd-theme-default-nittanyNavy);
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
            border-color: var(--ddd-theme-default-nittanyNavy);
            background-color: var(--ddd-theme-default-roarMaxlight);
            position: sticky;
            left: 90%;
        }
        .remove:focus,
        .remove:hover {
            background-color: var(--ddd-theme-default-nittanyNavy);
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
                border-color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-roarMaxlight);
                position: sticky;
                left: 90%;
        }
        .Save:focus,
        .Save:hover {
            background-color: var(--ddd-theme-default-nittanyNavy);
            color: var(--ddd-theme-default-roarMaxlight);
            transform: scale(1.1);
            transition: 0.3s ease-in-out;
        }

    
        
    

  `];
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

globalThis.customElements.define(haxcms.tag,haxcms);
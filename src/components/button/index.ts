import { state } from "../../state";

class Boton extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  nombre: string = "";
  constructor() {
    super();
    state.suscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre || "";
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.textContent = `
      .button{
        height: 45px;
        color:red;
      }
          `;

    this.shadow.innerHTML = `    
        <button class="button">Enviar</button>
      `;

    this.shadow.appendChild(style);
  }
}

customElements.define("my-button", Boton);

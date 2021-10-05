import { state } from "../../state";

class Footer extends HTMLElement {
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
    //console.log(this.shadow)
    const style = document.createElement("style");
    style.textContent = `
          .footer {
            background-color: #FFA0EA;
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          `;

    this.shadow.innerHTML = `
    <div class="footer">
      <h3>SOY EL FOOTER</h3>
      <h3>Mi nombre es: ${this.nombre}</h3>
    </div>
      `;
    this.shadow.appendChild(style);
  }
}

customElements.define("my-footer", Footer);

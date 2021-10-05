class Header extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
      .header{
          background-color: #FF8282;
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
    `;

    this.shadow.innerHTML = `
    <div class="header"><h3>Soy el HEADER</h3></div>
    `;
    this.shadow.appendChild(style);
  }
}
customElements.define("my-header", Header);

customElements.define(
  "custom-text",
  class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const variant = this.getAttribute("variant") || "body";

      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
        .title{
            font-size: 45px;
            font-weight: bold;
        }

        .body{
            font-size: 22px;
        }
          `;
      //div.className = variant;
      div.textContent = this.textContent;
      div.classList.add(variant);
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
);

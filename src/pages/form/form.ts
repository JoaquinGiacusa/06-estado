import { state } from "../../state";

export function initFormPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <my-header></my-header>
  <custom-text variant="title">Hola ${state.getState().nombre}</custom-text>
  <my-footer></my-footer>
    `;
  console.log(div);

  return div;
}

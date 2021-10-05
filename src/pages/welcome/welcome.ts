export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <my-header></my-header>
  <my-form class="formulario" label="Nombre"></my-form>
  <my-footer></my-footer>
  `;

  const formulario = div.querySelector(".formulario");
  formulario.shadowRoot
    .querySelector(".form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      params.goTo("/form");
    });
  console.log(div);

  return div;
}

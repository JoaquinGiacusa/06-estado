import { state } from "./state";
export function nameComponent(container: Element) {
  const lastState = state.getState();

  function render(nombre) {
    const h1 = document.createElement("h1");
    h1.style.border = "solid 3px";
    h1.textContent = nombre;
    h1.addEventListener("click", () => {
      state.setState({
        ...lastState,
        nombre: "El mas capito",
      });
    });
    container.firstChild?.remove();
    container.appendChild(h1);
  }
  state.suscribe(() => {
    const newState = state.getState();
    //console.log(newState);
    render(newState.nombre);
  });

  render(lastState.nombre);
}

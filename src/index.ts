import { state } from "./state";
import "./components/text";
import "./components/footer";
import "./components/formEl";
import "./components/button";
import "./components/header";
import { initRouter } from "./router";

//state.setState({ nombre: "Joaquin", apellido: "Giacusa" });

(function () {
  const root = document.querySelector(".root");
  initRouter(root);
})();

//console.log("asd");

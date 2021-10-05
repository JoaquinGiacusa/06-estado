import { initWelcomePage } from "./pages/welcome/welcome";
import { initFormPage } from "./pages/form/form";

const routes = [
  {
    path: /\// || /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/form/,
    component: initFormPage,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  handleRoute(location.pathname);

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

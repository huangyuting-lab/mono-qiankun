// @ts-nocheck
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let router = null;
let instance = null;

renderWithQiankun({
  bootstrap() { },
  mount(props) {
    render(props);
  },
  unmount() {
    instance.unmount();
    instance._container.innerHTML = "";
    instance = null;
    router = null;
  },
});

function render(props = {}) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory("/"),
    routes
  });

  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
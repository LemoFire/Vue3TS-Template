import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";

import { IS_DEVELOPMENT } from "./utils";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import eruda from "eruda";
import { version as vueVersion } from "vue/package.json";
import { OPEN_CONSOLE } from "./config/Base";

const initConsole = (): void => {
  eruda.init();
};

IS_DEVELOPMENT
  ? (() => {
      initConsole();
      console.log("Vue版本：", vueVersion);
    })()
  : (() => {
      OPEN_CONSOLE
        ? (() => {
            initConsole();
          })()
        : false;
    })();

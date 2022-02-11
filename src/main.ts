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
IS_DEVELOPMENT ? eruda.init() : false;

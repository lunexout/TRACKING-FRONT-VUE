import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import store from './../store/index.js'
import mitt from 'mitt';
const emitter = mitt();
// App.config.globalProperties.emitter = emitter;

library.add(faChevronLeft, faChevronRight);
const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(emitter).use(store).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";
import store from './../store/index.js'
import mitt from 'mitt';
const emitter = mitt();
// App.config.globalProperties.emitter = emitter;

library.add(faChevronLeft, faChevronRight);
const app = createApp(App)
app.config.globalProperties.emitter = emitter;

import {createI18n} from 'vue-i18n'

import {geo,turk} from './languages/lang.js'
const messages = { geo, turk }
 
const i18n = createI18n({ locale: 'geo', fallbackLocale: 'turk', messages, })
app.use(emitter).use(i18n).use(store).mount("#app");

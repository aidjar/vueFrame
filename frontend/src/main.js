/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';
import store from './store.js';


// Composables
import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'
const pinia = createPinia();
const vuetify = createVuetify();
const app = createApp(App);
app.use(pinia);
app.use(vuetify);

app.mount('#app')

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';


// Composables
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import { createRouter } from 'vue-router';
import {createWebHashHistory} from 'vue-router';

import routes from '@/routers';

// Plugins
const pinia = createPinia();
const vuetify = createVuetify();
const router = createRouter({
    history: createWebHashHistory(),
    routes,});
const app = createApp(App);


app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount('#app')

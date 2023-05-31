import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import routes from '@/routes';
import './main.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes
}))
.mount('#app')

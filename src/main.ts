import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./router/routes.ts";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes
});
app.use(router);
app.use(PrimeVue);
app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';
import i18n from "./i18n";

createApp(App).use(router).use(i18n).mount('#app')
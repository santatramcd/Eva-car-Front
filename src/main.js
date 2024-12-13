import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app')
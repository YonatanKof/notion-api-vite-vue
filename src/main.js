import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
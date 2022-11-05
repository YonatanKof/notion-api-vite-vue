import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Symbol from '../Pages/Symbol.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/:symbol', name: 'Symbol', component: Symbol },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
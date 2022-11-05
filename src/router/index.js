import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Symbol from '../pages/Symbol.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/:id', name: 'Symbol', component: Symbol },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
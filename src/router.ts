import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from './pages/home.vue'

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'UIKit',
        path: '/uikit',
        component: () => import('./pages/ui.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
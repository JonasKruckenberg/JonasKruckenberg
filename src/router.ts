import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './pages/home.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

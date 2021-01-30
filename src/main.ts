// import { ViteSSG } from 'vite-ssg'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import './assets/master.scss'
import 'vite-plugin-vuedoc/style.css'


createApp(App).use(createRouter({ routes, history: createWebHistory() })).mount('#app')
// export const createApp = ViteSSG(App, {
//     routes
// }
// )

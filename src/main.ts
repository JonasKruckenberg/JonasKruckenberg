import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from 'vite-plugin-pages/client';
import './assets/master.scss'

export const createApp = ViteSSG(App, {
    routes
})

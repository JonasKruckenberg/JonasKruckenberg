import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Blog from './components/blog.vue'
import routes from 'vite-plugin-pages/client';
import './assets/styles/master.scss'

export const createApp = ViteSSG(App, {
    routes,
}, ({ app }) => {
    app.component('blog', Blog)
})

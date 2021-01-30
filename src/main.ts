import { ViteSSG } from 'vite-ssg'
// import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes'
import './assets/master.scss'
import 'vite-plugin-vuedoc/style.css'


// createApp(App).mount('#app')
export const createApp = ViteSSG(App, {
    routes
}
)

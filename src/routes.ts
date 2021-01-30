import { RouterOptions } from 'vue-router'
import Home from './views/home.vue'
// import MdComp from './views/test.md'


export const routes: RouterOptions['routes'] = [
    { path: '/', component: Home },
    //{ path: '/test', component: MdComp },
]
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
    { path: '/', component: import('./pages/PageHome.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
            {
                path: '',
                component: () => import('./pages/PageHome.vue'),
            }
        ],
    },
    {
        path: '/about-us',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
            {
                path: '',
                component: () => import('./pages/PageAboutUs.vue'),
            }
        ],
    },
    {
        path: '/imprint',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
            {
                path: '',
                component: () => import('./pages/PageImprint.vue'),
            }
        ],
    },
    {
        path: '/privacy-policy',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
            {
                path: '',
                component: () => import('./pages/PagePrivacyPolicy.vue'),
            }
        ],
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
            {
                path: '',
                component: () => import('./pages/PageNotFound.vue'),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
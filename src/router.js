import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/formThanks",
        name: "formThanks",
        component: () =>
            import ("@/pages/FormThanks.vue"),
    },
    {
        path: "/phoneThanks",
        name: "phoneThanks",
        component: () =>
            import ("@/pages/PhoneThanks.vue"),
    },
    {
        name: "404",
        path: "/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        name: "404",
        path: "/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        path: "/:catchAll(.*)", // 此处需特别注意至于最底部
        redirect: "/404",
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
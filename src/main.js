import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style/tailwind.css"
import "./assets/style/custom-aos.scss"
import router from "./router.js"

import info from "@/info"

import VueMobileDetection from "vue-mobile-detection"

import VueSplide from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css/core"

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import VueLazyload from "vue-lazyload"

import "aos/dist/aos.css"

import VueSmoothScroll from "vue3-smooth-scroll"

import Vue3TouchEvents from "vue3-touch-events";


const toastOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
}


import { createGtm } from '@gtm-support/vue-gtm';

createApp(App)
    .use(Toast, toastOptions)
    .use(VueMobileDetection)
    .use(VueSmoothScroll)
    .use(VueSplide)
    .use(router)
    .use(Vue3TouchEvents)
    .use(VueLazyload, {
        preLoad: 2,
        lazyComponent: true,
        attempt: 1,
    }).use(
        createGtm({
          id: info.gtmCode, 
          defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
          compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
          enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
          debug: true, // Whether or not display console logs debugs (optional)
          loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
          vueRouter: router, // Pass the router instance to automatically sync with router (optional)
          trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  }),
      )
    .mount("#app")
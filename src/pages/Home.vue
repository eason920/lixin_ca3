<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif]">
    <S1/>
    <S2/>
    <S3/>
    <Map/>
    <S9 />
    <S10 />
    <S12 />
    <S13 />
    <S11 />
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

body {
  background: #f8f8f8;
  background-size: auto;
}

@keyframes an1 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.home {
  background: #666;
  
// background-image: url("@/section/public/bg2.png");
&::before{content: "";position: fixed;top: 0;left: 0;width: 100%;right: 0;bottom: 0;
background: #000;
background-image: url("@/section/s1/bg.jpg");
background-size: cover;
background-position: center;
}
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.txt {
  position: relative;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.85;
  width: 100%;
}

@media screen and (max-width: 767px) {}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import Map from "@/section/map.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import S12 from "@/section/s12.vue"
import S13 from "@/section/s13.vue"
import S11 from "@/section/s11.vue"
//
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true);
const gtmNoScript = ref('');

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1500
    });
  };

});
</script>

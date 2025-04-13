<template>
  <ul v-if="!isMobile" class="nav">
  <!--
    <li @click="fnListActive(0, info.navList[0])">
      <img src="../section/public/1.svg" />
    </li>
    -->
    <li @click="fnListActive(1, info.navList[1])">
      <img src="../section/public/2.svg" />
    </li>
    <li @click="fnListActive(2, info.navList[2])">
      <img src="../section/public/3.svg" />
    </li>
    <li @click="fnListActive(3, info.navList[3])">
      <img src="../section/public/4.svg" />
    </li>
  </ul>

  <!-- Modal -->
  <Model :open="modalOpen" :type="modalType" @init="fnInit" />
</template>


<style lang="sass">
@import "@/assets/style/function.scss"
$p:.7vw
.nav
  position: fixed
  right: 0
  bottom: 5vw
  background:
    image: repeating-linear-gradient(to right, #FF5406 0%, rgba(254, 119, 2, 0.30) 100%)
  z-index: 9999
  padding: $p
  width:3.8vw
  border-radius: $p * 2.2 0 0 $p * 2.2
  li
    cursor: pointer
    margin-bottom: $p
    &:nth-child(4)
      margin: 0
    img
      width: 100%

</style>

<script setup>
import { inject, computed, getCurrentInstance, ref } from 'vue';
import info from "@/info";
import Model from "@/layout/modal.vue"


const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const modalOpen = ref(false);
const modalType = ref('');

const smoothScroll = inject('smoothScroll')
const scrollTo = (el, offset) => {
  const targetElement = document.querySelector(el);
  if (targetElement) {
    const numericOffset = parseInt(offset) ? parseInt(offset) : 0;
    const elementRect = targetElement.getBoundingClientRect();
    const topPosition = window.pageYOffset + elementRect.top + numericOffset;

    smoothScroll({
      scrollTo: topPosition
    });
  }
}

const fnListActive = (i, item) => {
  switch (i + 1) {
    case 1:
      modalOpen.value = true; 
      modalType.value = 'gmap';
      break;
    case 2:
      modalOpen.value = true; 
      modalType.value = 'phone';
      break;
    case 3:
      window.open(info.fbLink)
      break;
    case 4:
      scrollTo(item.target);
      break;
  }
}

const fnInit = () => {
  modalOpen.value = false;
  modalType.value = null
}
</script>
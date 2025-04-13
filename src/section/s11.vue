<template>
  <article class="s11">
    <img src="./s11/en.png" class="en">
    <img v-if="!isMobile" src="./s11/title_pc.png" class="title" data-aos="fade-up">
    <img v-else src="./s11/title_mb.png" class="title" data-aos="fade-up">
    <div class="box">
      <div class="content ani_left">
        <img src="./s11/1.png" />
        <img src="./s11/1.png" />
      </div>
    </div>
    <div class="box">
      <div class="content ani_right">
        <img src="./s11/2.png" />
        <img src="./s11/2.png" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

</script>

<style lang='scss' scoped>
@import "@/assets/style/public.sass";
.s11 {
  position: relative;
  z-index: 99;
  padding: 0 0 8vw;
  height: 55.7vw;
  background-image: url(./s11/bg.png);
  background-size: contain;
  background-position: center top;
}
.en {
  width: 50vw;
  margin: 2vw 25vw 9vw;
}
.title {
  width: 80vw;
  margin: 0 10vw 9vw;
}
.box {
  overflow: hidden;
  width: 100vw;
  padding: 2vw 0;
  background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1),rgba(255,255,255,0));
  & + .box {
    margin-top: 3vw;
  }
}
.content {
  width: 200vw;
  img {
    width: 100vw;
  }
}
@keyframes ani_l {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes ani_r {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
.ani_left {
  animation: ani_l 10s linear infinite forwards;
}
.ani_right {
  animation: ani_r 10s linear infinite forwards;
}
@media screen and (max-width: $bp) {
  .s11 {
    padding: 0 0 20vw;
    height: 150vw;
    background-size: cover;
  }
  .en {
    width: 80vw;
    margin: 3vw 10vw 27vw;
  }
  .title {
    width: 60vw;
    margin: 0 20vw 25vw;
  }
  .box {
    padding: 5vw 0;
    height: 17vw;
    & + .box {
      margin-top: 7vw;
    }
  }

  .content {
    width: 400vw;
    img {
      width: 200vw;
    }
  }
}
</style>

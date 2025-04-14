<template>
  <article class="s11">
    <img src="./s11/en.png" class="en">
    <img v-if="!isMobile" src="./s11/title_pc.png" class="title" data-aos="fade-up">
    <img v-else src="./s11/title_mb.png" class="title" data-aos="fade-up">
    <div class="box"><input type="checkbox" name="pics1" id="pics1">
      <label for="pics1" class="content ani_left" >
        <img src="./s11/1.png" />
        <img src="./s11/1.png" />
      </label>
    </div>
    <div class="box"><input type="checkbox" name="pics2" id="pics2">
      <label for="pics2" class="content ani_right">
        <img src="./s11/2.png" />
        <img src="./s11/2.png" />
      </label>
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
  background-image: url(./s11/bg.webp);
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
  input {
    display: none;
  }
 /* input:checked + .content:hover {
    animation-play-state: paused;
  }*/
}
.content {display: block;
  width: 200vw;
  &:hover {
    animation-play-state: paused;
  }
  img {
    width: 100vw;
  }
}
@keyframes ani {
  100% {
    transform: translateX(-50%);
  }
}
.ani_left {
  animation: ani 20s linear infinite;
}
.ani_right {
  animation: ani 20s linear infinite reverse;
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

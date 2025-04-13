<template>
  <article ref="dom" class="s1 overflow-hidden" id="s1">
    <div class="ani_gray"></div>

    <img
      src="./s1/title1.png"
      class="title1"
      data-aos="fade"
      data-aos-delay="400"
      data-aos-duration="2000"
    />
    <img
      src="./s1/title2.png"
      class="title2"
      data-aos="fade"
      data-aos-delay="700"
      data-aos-duration="2000"
    />

    <div class="box" data-aos="fade" data-aos-delay="0">
      <img src="./s1/img.png" data-aos="zoom-in" data-aos-delay="1500" />
    </div>
    <img
      src="./s1/en.png"
      class="en"
      data-aos="zoom-in"
      data-aos-delay="1500"
    />

    <img src="./s1/logo.png" class="logo" data-aos="zoom-in" data-aos-delay="1500" />
    <img src="./s1/slogo.png" class="slogo" data-aos="zoom-in" data-aos-delay="1500" />
    <!--  <div class="bbb"></div>  -->
  </article>
</template>

<script setup>
import {
  defineEmits,
  onMounted,
  ref,
} from "vue";

const dom = ref(null);

const emit = defineEmits({
  el_height: null,
});

onMounted(() => {
  // console.log(dom.value.offsetHeight);
  // console.log(dom_title.value.offsetHeight );
  // console.log(dom_hr.value.offsetHeight);
  // console.log(dom_logo.value.offsetHeight);
  // console.log(dom_logo.value.offsetTop);
  setTimeout(() => {
    emit("sec_height", dom.value.offsetHeight);
  }, 1000);
});
</script>

<style lang="scss" scoped>
@import "./pub/myvar.sass";
@import "@/assets/style/public.sass";
.s1 {
  height: 100vh;
  min-height: 46.875vw;
  max-height: 56.25vw;
  position: relative;
  background: linear-gradient(90deg, #fc4c02 0%, #ff7d00 100%);
}

.box {
  position: absolute;
  width: calc(100vw * 810 / 1920);
  height: calc(100vw * 365 / 1920);
  top: calc(50% + (100vw * (250 - (1080 * 0.5)) / 1920));
  left: 0;
  background: #fff;
  text-align: right;
  transform: translateX(-50%);
  img {
    height: 100%;
    transform-origin: 100% 100%;
  }
}

.en {
  position: absolute;
  width: size(210);
  top: size(400);
  left: size(130);
}

.title1 {
  position: absolute;
  width: calc(100vw * 687 / 1920);
  top: calc(50% + (100vw * (250 - (1080 * 0.5)) / 1920));
  right: calc(100vw * 205 / 1920);
  z-index: 15;
}

.title2 {
  position: absolute;
  width: calc(100vw * 760 / 1920);
  top: calc(50% + (100vw * (450 - (1080 * 0.5)) / 1920));
  right: calc(100vw * 160 / 1920);
  z-index: 15;
}

.logo {
  position: absolute;
  width: calc(100vw * 525 / 1920);
  bottom: calc(20% + (100vw * (130 - (1080 * 0.2)) / 1920));
  right: 0;
  left: 0;
  margin: auto;
  z-index: 15;
}

.slogo {
  position: absolute;
  width: calc(100vw * 525 / 1920);
  bottom: calc(20% + (100vw * (60 - (1080 * 0.2)) / 1920));
  right: 0;
  left: 0;
  margin: auto;
  z-index: 15;
}

.ani_gray {
  background: url("./s1/bg_gray.png") repeat;
  background-size: auto;
  opacity: 0.5;
  user-select: none;
  pointer-events: none;
  position: fixed;
  // position: absolute;
  width: 100%;
  height: 100%;
  z-index: 12;
  top: 0;
  left: 0;
}

@media screen and (max-width: $bp) {
  .s1 {
    height: 100vh;
    min-height: sizem(667);
    max-height: sizem(812);
  }

  .box {
    width: sizem(275);
    height: sizem(105);
    top: sizem(290);
    right: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    img {
      height: 130%;
    }
  }

  .en {
    width: sizem(75);
    top: sizem(335);
    left: sizem(140);
  }

  .title1 {
    width: sizem(260);
    top: sizem(98);
    right: 0;
    left: 0;
    margin: auto;
  }

  .title2 {
    width: sizem(280);
    top: sizem(172);
    right: 0;
    left: 0;
    margin: auto;
    transform: translateX(-30%);
  }

  .logo {
    width: sizem(260);
    bottom: calc(69px + 18vh);
  }

  .slogo {
    width: sizem(260);
    bottom: calc(69px + 14vh);
  }
}
</style>

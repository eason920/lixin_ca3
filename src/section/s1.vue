<template>
  <article ref="dom" class="s1 overflow-hidden" id="s1">
    <!--  <img src="./s1/02.jpg" class="t0"> -->
    <!-- <div class="ani_gray"></div>  --->
    <div class="box" data-aos="fade" data-aos-delay="0">
      <img src="./s1/img.webp" data-aos="zoom-in" data-aos-delay="1500" />
    </div>

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

    <!--
    <img
      src="./s1/en.png"
      class="en"
      data-aos="zoom-in"
      data-aos-delay="1500"
    />
    -->

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
  min-height: calc(100vw * 900 / 1920);
  max-height: calc(100vw * 1080 / 1920);
  position: relative;
 // background: linear-gradient(90deg, #fc4c02 0%, #ff7d00 100%);
}
.t0{
  position: absolute;
  top:  calc(50% - #{sizem(302)});opacity: .3;
  left: 0;
  width: 100%;}
.box {
  position: absolute;
  width: calc(100vw * 770 / 1920);
  height: calc(100vw * 506 / 1920);
  top: calc(50% + (100vw * (165 - (1080 * 0.5)) / 1920));
  left: 0;
 // background: #fff;
  text-align: right;
  transform: translateX(-50%);
  img {
    height: 100%;
    transform-origin: 50% 50%;
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
  width: calc(100vw * 740 / 1920);
  top: calc(50% + (100vw * (165 - (1080 * 0.5)) / 1920));
  right: calc(100vw * 260 / 1920);
  z-index: 15;
}

.title2 {
  position: absolute;
  width: calc(100vw * 730 / 1920);
  top: calc(50% + (100vw * (382 - (1080 * 0.5)) / 1920));
  right: calc(100vw * 270 / 1920);
  z-index: 15;
}

.logo {
  position: absolute;
  width: calc(100vw * 525 / 1920);
  bottom: calc(30% + (100vw * (155 - (1080 * 0.3)) / 1920));
  right: 0;
  left: 0;
  margin: auto;
  z-index: 15;
}

.slogo {
  position: absolute;
  width: calc(100vw * 525 / 1920);
  bottom: calc(30% + (100vw * (97 - (1080 * 0.3)) / 1920));
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
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
  }

  .box {
    width: sizem(210);
    height:auto;
    top: sizem(30);
    top:calc(50% + #{sizem(30-604*.5)});
    right: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }

  .en {
    width: sizem(75);
    top: sizem(335);
    left: sizem(80);
  }

  .title1 {
    width: sizem(260);
    top: sizem(280);
    top:calc(50% + #{sizem(280-604*.5)});
    right: 0;
    left: 0;
    margin: auto;
  }

  .title2 {
    width: sizem(270);
    top: sizem(355);
    top:calc(50% + #{sizem(355-604*.5)});
    right: 0;
    left: 0;
    margin: auto;
    transform: translateX(-30%);
  }

  .logo {
    width: sizem(260);
    bottom: sizem(40);
    bottom:calc(10% + #{sizem(40-604*.1)});
  }

  .slogo {
    width: sizem(260);
    bottom: sizem(15);
    bottom:calc(10% + #{sizem(15-604*.1)});
  }
}
</style>

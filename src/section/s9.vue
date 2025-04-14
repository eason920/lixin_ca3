<template>
  <article class="s9">
    <swiper
      :modules="[Navigation, Autoplay]"
      navigation
      loop
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="box">
          <PicCaption class="view" :src="aIimg[0]" :caption="caption" />
          <img src="./s9/title1.png" class="title" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <PicCaption class="view" :src="aIimg[1]" :caption="caption" />
          <img src="./s9/title2.png" class="title" />
        </div>
      </swiper-slide>
    </swiper>
  </article>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from "vue";
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
//
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
//
import PicCaption from "./pub/PicCaption.vue";

const aIimg = ref(
    [
        new URL("./s9/1.jpg", import.meta.url).href,
        new URL("./s9/2.jpg", import.meta.url).href,
      ]
)
/*
const aIimg = ref(
  isMobile.value
    ? [
        new URL("../section/s9/1mb.png", import.meta.url).href,
        new URL("../section/s9/2mb.png", import.meta.url).href,
      ]
    : [
        new URL("../section/s9/1.png", import.meta.url).href,
        new URL("../section/s9/2.png", import.meta.url).href,
      ]
);*/

const caption = ref({
  txt: "外觀3D示意圖",
  color: "#fff",
  right: "calc(50% - 49.5vw + .5em)",
  bottom: "10px",
});
</script>

<style lang="scss" scoped>
@import "./pub/myvar.sass";
.s9 {
  position: relative;
  z-index: 12;
}

.box {
  position: relative;
  .title {
    position: absolute;
    top: size(90);
    width: size(775);
    @extend %centerX;
  }
}
.swiper {
    width: 100%;
    overflow: hidden;
    height: size(1080);
}
  

@media screen and (max-width: $bp_mb) {
  .box .title {
    top: sizem(20);
    width: sizem(300);
  }
  .swiper {width: 140%;left: -20%;position: relative;
    height: sizem(348);
  }
}
</style>

<style lang="scss">
@import "@/assets/style/public.sass";
.s9 {

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 100%;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    .box,
    .view{height: 100%;}
    .view{
      img{height: 100%;object-fit: cover;}
      span{left: 50%;}
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    &:after {
      display: none;
    }
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .swiper-button-prev {
    left: calc(50% - 50vw);
    background-image: url(./s9/arrow_left.png);
  }

  .swiper-button-next {
    right: calc(50% - 50vw);
    background-image: url(./s9/arrow_right.png);
  }

}
</style>

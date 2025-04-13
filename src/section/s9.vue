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
  isMobile.value
    ? [
        new URL("../section/s9/1mb.png", import.meta.url).href,
        new URL("../section/s9/2mb.png", import.meta.url).href,
      ]
    : [
        new URL("../section/s9/1.png", import.meta.url).href,
        new URL("../section/s9/2.png", import.meta.url).href,
      ]
);

const caption = ref({
  txt: "外觀3D示意圖",
  color: "#fff",
  right: "10px",
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

@media screen and (max-width: $bp_mb) {
  .box .title {
    top: sizem(20);
    width: sizem(300);
  }
}
</style>

<style lang="scss">
@import "@/assets/style/public.sass";
.s9 {
  .swiper {
    width: 100%;
    height: 55.6vw;
    overflow: hidden;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-image: url(./s9/arrow_left.png);
  }

  .swiper-button-next {
    background-image: url(./s9/arrow_right.png);
  }

  @media screen and (max-width: $bp) {
    .swiper {
      height: 93vw;
    }
  }
}
</style>

<template>
  <article class="s2">
    <div class="tbox">
      <img data-aos="fade-up" src="./s2/en.png" class="en">
      <HR data-aos="fade-up" class="hr" :props-color="'255,255,255'" />
      <img data-aos="fade-up" src="./s2/txt.webp" class="txt">
    </div>

    <div class="pbox">
      <div data-aos="fade-up" data-aos-delay="300">回信符碼<br>與市場對話</div>
      <div data-aos="fade-up" data-aos-delay="600">創新/重新<br>永續經營意象</div>
      <div data-aos="fade-up" data-aos-delay="900">｢家｣的意涵<br>具有國際感</div>
      <div data-aos="fade-up" data-aos-delay="1200">合作夥伴<br>創造名義</div>
      <!-- <img data-aos="fade-up" src="@/section/s2/1.webp" />
      <img data-aos="fade-up" data-aos-delay="300" src="@/section/s2/2.webp" />
      <img data-aos="fade-up" data-aos-delay="600" src="@/section/s2/3.webp" />
      <img data-aos="fade-up" data-aos-delay="900" src="@/section/s2/4.webp" /> -->
    </div>

    <img data-aos="fade-up" data-aos-delay="1200" class="logo" src="./s2/logo.png" />
  </article>
</template>

<script setup>
import { computed, getCurrentInstance, ref } from "vue";

// cpn
import HR from './public/hr.vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.isMobile());
</script>

<style lang="scss" scoped>
@import "./pub/myvar.sass";
@import "@/assets/style/public.sass";
.s2 {
  background: {
    repeat: no-repeat;
    position: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 12;
}

.tbox {
  img, .hr {
    width: 100%;
  }
}

.pbox {
  display: flex;
  font-size: size(32);
  justify-content:center;
  gap: 2em;
div{
  width: 7.4em;
  height: auto;
  border-radius: 50%;
  font-weight: 700;
  display: flex;justify-content:center;align-items:center;text-align: center;
  background-image: linear-gradient(330deg, #FC4C02 , #ff9900);
color: #FFF;aspect-ratio: 1/1; /* 可依需要調整 */
}

}
@media screen and (min-width: $bp_pc) {
  .s2 {
    height: size(1069);
    background: {
      image: url("@/section/s2/bg_pc.webp");
      size: contain;
    }
    padding-top: size(138);
  }

  .tbox {
    width: size(770);
    .en {
      margin-bottom: size(38);
    }
    margin-bottom: size(94)
  }
  $w: size(1155);
/*
  .pbox {
    width: $w;
    img {
      $v: 3vw;
      width: calc((100% - $v * 3) / 4);
      & + img {
        margin-left: $v;
      }
    }
    margin-bottom: size(40);
  }
*/
  .logo {
    width: $w;
  }
}
@media screen and (max-width: $bp_mb) {
  .s2 {
    height: sizem(667); //原圖 1334/2
    background: {
      image: url("@/section/s2/bg_mb.webp");
      size: cover;
    }
    padding-top: sizem(95);
  }

  .tbox {
    width: sizem(274);
    img, .hr {
      width: 100%;
    }
    .en {
      margin-bottom: sizem(14);
    }
    margin-bottom: sizem(30);
  }

  .pbox {
    $v: 6vw;
    flex-wrap: wrap;
    width: sizem(350);
    font-size: sizem(14);
    margin-bottom: sizem(43);
    /*
    img {
      width: calc(50% - $v);
      margin-bottom: $v;
      &:nth-odd {
        margin-right: $v;
      }
      &:nth-child(3), &:nth-child(4) {
        margin-bottom: 0;
      }
    }
      */
  }

  .logo {
    width: sizem(346);
  }
}
</style>

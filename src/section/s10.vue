<template>
  <article class="s10">
    <!-- <swiper :modules="[Navigation, Autoplay]" navigation loop  class="mySwiper"> -->
    <swiper
      :modules="[Navigation, Autoplay]"
      navigation
      loop
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      class="mySwiper"
    >
    <swiper-slide>
        <div class="box">
          <div class="mbox">
            <img src="./s10/view3.png" class="view" />
            <div class="tbox">
              <img src="./s10/title3.png" class="title" />
              <p>
                讓星級服務，成為日常標配。台南晶英雲端管家，提供住戶飯店延伸服務，從花藝提案、私廚到家、美饌料理採購，到星級社區課程，讓每位住戶都能輕鬆享受高品質生活。
              </p>
            </div>
          </div>
          <img v-if="!isMobile" class="hr" src="./public//line.png" />
          <div class="pbox is_v3">
            <img src="./s10/pics3.png" />
            <!--  -->
            <span class="pc_u is_u1">台南晶英酒店</span>
            <span class="pc_u is_u2">台南晶英酒店大廳</span>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <div class="mbox">
            <img src="./s10/view2.png" class="view" />
            <div class="tbox">
              <img src="./s10/title2.png" class="title" />
              <p>
                從台南第一豪宅，到台南指標豪墅，得利出手皆是地標。精準掌握空間層次衍生的心理狀態，讓回家的動線，每一步皆充滿放鬆卻專屬的儀式感。
              </p>
            </div>
          </div>
          <img v-if="!isMobile" class="hr" src="./public//line.png" />
          <div class="pbox is_v2">
            <img src="./s10/pics2.png" />
            <span class="pc_a is_a1">公設實景拍攝圖</span>
            <span class="pc_a is_a2">公設實景拍攝圖</span>
            <span class="pc_a is_a3">公設實景拍攝圖</span>
            <!--  -->
            <span class="pc_u is_u1">古根漢．桂田 </span>
            <span class="pc_u is_u2">耘非凡</span>
            <span class="pc_u is_u3">遠奏曲</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <div class="mbox">
            <img src="./s10/view1.png" class="view" />
            <div class="tbox">
              <img src="./s10/title1.png" class="title" />
              <p>
                建築是與時間的對話，無論公共建設或私人宅邸，擅長在設計融合自然與當代，秉持「空間即生命延伸」理念，力求每個細節都能為使用者帶來實用的感動。
              </p>
            </div>
          </div>
          <img v-if="!isMobile" class="hr" src="./public//line.png" />
          <div class="pbox is_v1">
            <img src="./s10/pics1.png" />
            <span class="pc_a is_a1">外觀3D示意圖</span>
            <span class="pc_a is_a2">外觀3D示意圖</span>
            <span class="pc_a is_a3">外觀3D示意圖</span>
            <span class="pc_a is_a4">外觀3D示意圖</span>
            <!--  -->
            <span class="pc_u is_u1">新北林口 － 小・學堂</span>
            <span class="pc_u is_u2">桃園觀音 － 鼎騰案</span>
            <span class="pc_u is_u3">新北新莊 － 元邦鴻福案</span>
            <span class="pc_u is_u4">祥泓板橋大同都更案</span>
          </div>
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
</script>

<style lang="scss" scoped>
@import "@/assets/style/public.sass";
.s10 {
  position: relative;
  z-index: 99;
}

.box {
  width: 50vw;
  margin: 0 auto;
}

.mbox {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vw;
  .view {
    width: 45%;
    margin: 0;
  }
  .tbox {
    width: 45%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
    p {
      padding-top: 2.5vw;
      border-top: solid 1px #000;
      text-align: left;
      font-size: 1vw;
    }
  }
}

.hr {
  width: 100% !important;
}

.pbox {
  position: relative;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    font-size: 10px;
    color: #fff;
    text-shadow: 0 0 5px #000;
    &.pc_a {
      font-size: 7px;
    }
  }
}

.is_v1 {
  .pc_a {
    top: 0.3vw;
    &.is_a1 {
      left: 0.3vw;
    }
    &.is_a2 {
      left: 12vw;
    }
    &.is_a3 {
      left: 23.5vw;
    }
    &.is_a4 {
      left: 34.5vw;
    }
  }

  .pc_u {
    bottom: 0.3vw;
    &.is_u1 {
      left: 0.3vw;
    }
    &.is_u2 {
      left: 12vw;
    }
    &.is_u3 {
      left: 23.5vw;
    }
    &.is_u4 {
      left: 34.5vw;
    }
  }
}

.is_v2 {
  .pc_a {
    bottom: 0.3vw;
    &.is_a1 {
      left: 12vw;
    }
    &.is_a2 {
      left: 28.9vw;
    }
    &.is_a3 {
      right: 0.5vw;
    }
  }

  .pc_u {
    bottom: 0.3vw;
    &.is_u1 {
      left: 0.5vw;
    }
    &.is_u2 {
      left: 17.5vw;
    }
    &.is_u3 {
      left: 34.2vw;
    }
  }
}

.is_v3 {
  .pc_u {
    bottom: 0.3vw;
    &.is_u1 {
      left: 20vw;
    }
    &.is_u2 {
      right: 1vw;
    }
  }
}

@media screen and (max-width: $bp) {
  .s10 {
    padding-bottom: 12vw;
  }

  .box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .mbox {
    width: 50%;
    margin: 15vw auto 0;
    flex-direction: column;
    .view {
      width: 100%;
      margin-bottom: 7vw;
    }
    .tbox {
      width: 100%;
      p {
        font-size: 3vw;
      }
    }
  }

  .pbox {
    position: absolute;
    bottom: 0;
    width: 100%;
    span {
      font-size: 8px;
      &.pc_a {
        font-size: 8px;
      }
    }
  }

  .is_v1 {
    .pc_a {
      top: 1.5vw;
      &.is_a1 {
        left: 1.5vw;
      }
      &.is_a2 {
        left: 24vw;
      }
      &.is_a3 {
        left: 47vw;
      }
      &.is_a4 {
        left: 69.5vw;
      }
    }

    .pc_u {
      bottom: 1.5vw;
      &.is_u1 {
        left: 1.5vw;
      }
      &.is_u2 {
        left: 24vw;
      }
      &.is_u3 {
        left: 47vw;
      }
      &.is_u4 {
        left: 69.5vw;
      }
    }
  }

  .is_v2 {
    .pc_a {
      top: 1.5vw;
      &.is_a1 {
        left: 17vw;
      }
      &.is_a2 {
        left: 51vw;
      }
      &.is_a3 {
        right: 1.5vw;
      }
    }

    .pc_u {
      bottom: 1.5vw;
      &.is_u1 {
        left: 1.5vw;
      }
      &.is_u2 {
        left: 36vw;
      }
      &.is_u3 {
        left: 69vw;
      }
    }
  }

  .is_v3 {
    .pc_u {
      bottom: 1.5vw;
      &.is_u1 {
        left: 37vw;
      }
      &.is_u2 {
        right: 2vw;
      }
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/style/public.sass";
.s10 {
  .swiper {
    width: 100%;
    height: 60vw;
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

  // .swiper-slide img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }

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
    background-image: url(./s10/arrow_left.png);
  }

  .swiper-button-next {
    background-image: url(./s10/arrow_right.png);
  }

  @media screen and (max-width: $bp) {
    .swiper {
      height: 160vw;
    }
  }
}
</style>

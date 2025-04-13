<template>
  <article ref="dom" class="map">
    <Fullview />
    <div class="memo">空拍美化圖</div>

    <div data-aos="fade-up" ref="dom_title" class="title_box pointer-events-none">
      都更開發遍地開花
      <br />
      南科5分鐘新善化 市心升級如重劃
    </div>

    <div
      ref="dom_hr"
      class="hr_box pointer-events-none"
      data-aos="flip-left"
      data-aos-duration="3000"
      data-aos-delay="300"
    >
      <HR class="hr" />
    </div>

    <div data-aos="fade-up" class="txt">
      從善化市場外觀再進化、多個危老都更案啟動、<br />
      到超過6,000坪基地建設開發案，加上未來捷運深綠線，<br />
      善化市區正以驚人的速度發展，商圈、交通、公共建設全面升級
    </div>

    <div class="finger absolute md:block pointer-events-none">
      <img src="@/components/fullview/finger.png" alt="" srcset="" />
    </div>
    <!-- 
  <img src="./s4/03.png" class="absolute top-0 left-0 right-0 opacity-80" />
  --></article>
</template>

<script setup>
import {
  onMounted,
  ref
} from "vue";

// cpn
import HR from "./public/hr.vue";
import Fullview from "../components/fullview1.vue";

const dom = ref(null);

const emit = defineEmits({
  el_height: null,
});

onMounted(() => {
  setTimeout(() => {
    emit("sec_height", dom.value.offsetHeight);
  }, 1000);
});
</script>

<style lang="sass" scoped>
@import ./pub/myvar.sass
@import @/assets/style/public.sass
.map
  height: 55.8vw
  position: relative
  overflow: hidden
  z-index: 12

img
  width: 100%

.memo
  position: absolute
  color: #fff
  letter-spacing: 1px
  bottom: 1vw
  right: 2vw
  font-size: .7vw

.title_box
  position: absolute
  top: size(40)
  left: 0
  right: 0
  text-align: center
  z-index: 5
  font-size: 2.5vw
  font-weight: 700
  color: #fff
  line-height: 1.3

.hr_box
  position: absolute
  width: 100%
  display: flex
  justify-content: center
  top: size(188)
  .hr
    width: 45vw

.txt 
  position: absolute
  width: 100%
  text-align: center
  top: size(214)
  font-size: 1.2vw
  color: #fff
  line-height: 1.85
  z-index: 5

$w_svgpc: 77vw
.svg_box
  position: absolute
  z-index: 5
  top: 15.4vw
  left: 0
  right: 0
  text-align: center
  img, .svg
    width: $w_svgpc
    margin: auto

.city_box
  position: absolute
  top: calc( 17.6vw + $w_svgpc * 0.233)
  width: 100%
  text-align: center
  img
    width: 34vw

@media screen and (max-width: $bp_mb)
  .map
    height: 175vw

  .viewbox
    margin: 0vw 0 0
    height: 175vw

  .title_box
    top: 12vw
    font-size: 5vw
    line-height: 1.3
    br
     display: block

  .hr_box
    top: 28vw
    .hr
      width: 70vw

  .txt
    top: sizem(120)
    font-size: 3vw

  .svg_box
    top: 36vw
    img, .svg
      width: 70%

  .city_box
    top: 110vw
    img
      width: 70vw

  .finger
    width: 95%
    top: 110vw
    left: 0
    right: 0
    margin: auto
</style>

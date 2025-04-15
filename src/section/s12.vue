<template>
  <article class="s12">
    <div class="box">
      <div data-aos="fade-up" class="title">29坪 超規格2+1房</div>
      <HR data-aos="fade-up" class="hr" :props-color="'255,255,255'" />
      <div data-aos="fade-up" class="txt">
        靈活空間規劃，滿足現代人多元需求。2+1房設計兼具機能與美感，<br />
        大面積採光設計，搭配高效收納機能，讓每一寸空間都發揮極致價值。
      </div>
      <div class="tip">樣品屋實景拍攝</div>
    </div>
  </article>
</template>

<script setup>
// CPN
import HR from "./public/hr.vue";
</script>

<style lang="scss" scoped>
@import "./pub/myvar.sass";
.s12 {
  background: {
    image: url("@/section/s12/pic.webp");
    repeat: no-repeat;
    position: center;
  }
  position: relative;
  z-index: 12;
}
.box {
  width: 100%;
  color: #fff;
  text-align: center;
  padding-top: size(70);
}
.title {
  font-size: size(40);
  font-weight: bold;
  letter-spacing: 0.2vw;
  line-height: 1;
  margin-bottom: size(28);
  text-shadow: 0 0 .2em #0009;
}
.hr {
  width: size(760);
  display: inline-block;
  margin-bottom: size(35);
}
.txt {
  font-size: size(22);
  text-shadow: 0 0 .2em #0009;
}
.tip {
  position: absolute;
  font-size: 11px;
  letter-spacing: 1.5px;
  right: 13px;
  bottom: 10px;
  color: #fff;
}
@media screen and (min-width: $bp_pc) {
  .s12 {
    height: size(1069);
    background: {
      size: contain;
    }
  }
}
@media screen and (max-width: $bp_mb) {
  .s12 {
    height: sizem(347);
    background-size: cover;
  }
  .box{
    padding-top: sizem(18);
  }
  .title {
    font-size: sizem(20);
    margin-bottom: sizem(3);
  }
  .hr {
    width: sizem(280);
    margin-bottom: sizem(5);
  }
  .txt {
    font-size: sizem(11);
  }
}
</style>

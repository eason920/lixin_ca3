<template>
  <article class="s3">
    <div class="tbox">
      <img data-aos="fade-up" src="./s3/logo.png" class="logo">
      <img data-aos="fade-up" src="./s3/txt.png" class="txt">
      <HR data-aos="fade-up" class="hr" />
    </div>

    <div class="pbox">
      <img data-aos="fade-up" src="@/section/s3/1.png" />
      <img data-aos="fade-up" data-aos-delay="300" src="@/section/s3/2.png" />
      <img data-aos="fade-up" data-aos-delay="600" src="@/section/s3/3.png" />
      <img data-aos="fade-up" data-aos-delay="900" src="@/section/s3/4.png" />
    </div>
  </article>
</template>

<script setup>
import HR from './public/hr.vue';
</script>

<style lang="scss" scoped>
@import "./pub/myvar.sass";
@import "@/assets/style/public.sass";
.s3 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 12;
}

.tbox {
  text-align: center;
  .hr {
    width: 100%;
    margin-bottom: 0;
  }
}

.pbox {
  display: flex;
}

@media screen and (min-width: $bp_pc) {
  .s3 {
    height: size(1080);
    padding-top: size(140);
  }

  .tbox {
    width: size(620);
    .logo {
      width: size(350);
      margin-bottom: size(60);
    }
    .txt {
      margin-bottom: size(56);
    }
    margin-bottom: size(105)
  }

  .pbox {
    width: size(1675);
    img {
      $v: 5vw;
      width: calc((100% - $v * 3) / 4);
      & + img {
        margin-left: $v;
      }
    }
    margin-bottom: size(40);
  }
}
@media screen and (max-width: $bp_mb) {
  .s3 {
    height: sizem(667);
    padding-top: sizem(90);
  }

  .tbox {
    .logo {
      width: sizem(160);
      margin-bottom: sizem(27);
    }
    .txt {
      width: sizem(226);
      margin-bottom: sizem(20);
    }
    margin-bottom: sizem(45);
  }

  .pbox {
    $v: 12vw;
    flex-wrap: wrap;
    width: sizem(286);
    img {
      width: calc(50% - $v/2);
      margin-bottom: 15vw;
      &:nth-odd {
        margin-left: $v;
      }
      &:nth-child(3), &:nth-child(4) {
        margin-bottom: 0;
      }
    }
    margin-bottom: sizem(43);
  }
}
</style>

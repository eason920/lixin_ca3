<template>
  <div>
  <div class="contact-info-img">
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--  <div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>  -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="//h65.tw/img/form/phone.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="//h65.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>FB 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()">
        <img src="//h65.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <!--  --><div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
      <div class="flex contact-item justify-center items-center address">
        <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h65.tw/img/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 Google 地圖</div>
      </div>
    </div>

  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h65.tw/img/form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="//h65.tw/img/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h65.tw/img/form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
    <!--  --><div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h65.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <Model :open="modalOpen" :type="modalType" @init="fnInit" />


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

$blue: #0014E6;

.bg-color1{background-color: #0014E6;}
.hover\:bg-color2:hover{background-color:#000ea5;}


.contact-info-img{
  @apply relative;
  height: 0;z-index: 52;
}
.contact-info {
  padding: size(55) size(0) size(55) size(0);
    width: size(1200);
    min-width: 680px;
  position: relative;
  z-index: 50;
  // background: #045147;

  .logo {position: relative;
    width: size(367);
   // height: size(172);
    // background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto 0;
    img{width: 100%;}
    .logot{position: absolute;top:31%;left: 0;right: 0;margin: auto;width: 85%;}
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    width: size(1200);
    // min-width: 680px;

    .contact-item {
      background-color: $blue;
      color: #fff;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
  //  border-radius: .5em;
      font-size: size(16);
      line-height: 1.6;//3.8
      letter-spacing: 0em;
     // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;

      &:hover {
        background-color: #000ea5;
        /*
        color: #000;
        img {
          filter: brightness(0) invert(0);
        }
        */
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(1);
        transition: all .5s;
        margin: 0;
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        flex:2.17;
        //border: solid 1px #000;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }
        div{
          text-indent:0em;
          white-space: normal;
          padding: 0 1em;
        }
      }


      &.googlemap {
        flex:1;
  //    background-color: #9B1E44;
      border-left-width: 0;
        color: #fff;

        img {
        filter: brightness(0) invert(1);
        }
        /*
        &:hover {
          color: #000;
          img {
            filter: brightness(0) invert(0);
          }
        }
          */
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter: invert(20%) sepia(74%) saturate(2094%) hue-rotate(181deg) brightness(91%) contrast(98%);
  }
}

@media screen and (max-width:768px) {
  .mo-contact-info {
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    //box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    //background:$blue;
    background: linear-gradient(180deg, #FF5406 1.83%, rgba(254, 119, 2, 0.30) 98.97%);

    .contact-item {
      height: 100%;      
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left:1px solid #fff6;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      border-left:0;}

    }
  }

  .contact-info {
    width: 84%;
    min-width:0;
    // height: sizem(400);
    // border-radius: sizem(68);
    //padding: sizem(0) sizem(0);
    padding: sizem(80) 0 sizem(80) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
    background-size: sizem(450) auto;

    .logo {
      width: sizem(257);
      margin: sizem(40) auto sizem(30) auto;
      // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      // gap: sizem(15);
      flex-direction: column;
      // width: sizem(610);
      width: 100%;

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 0 0 3vw;
        &.address {
          margin-bottom: 0
        }
        img {                       
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }
        div{
          text-indent: 2em;
        }

        &.address {
          font-size: sizem(15);
          border-radius: sizem(0) sizem(0) 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          border-radius: 0 0 sizem(0) sizem(0);
        }
      &.googlemap {
        border-top-width: 0;
      border-left-width:0;
      }
      }

      &.no-gap {
        gap: 0 !important;
      }
    }
  }
  

}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
import Model from "@/layout/modal.vue"
//
const modalOpen = ref(false);
const modalType = ref('');
const fnInit = () => {
  modalOpen.value = false;
  modalType.value = null
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>

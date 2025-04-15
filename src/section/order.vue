<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->
      <div class="title_box">
        <img class="img_title" src="./form/title.png" />
        <HR class="hr" :props-color="'255,255,255'" />
        <img class="img_subtitle" src="./form/en.png" />
        <img class="img_contact" src="./form/en2.svg" />
      </div>
      <!-- <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div> -->
      <!-- <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div> -->
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row">
            <span>
              姓名
              <span v-if="!bypass.includes('name')">*</span>
            </span>
            <input
              type="text"
              placeholder="請輸入姓名"
              class="input w-full rounded-none"
              :value="formData.name"
              @input="(event) => (formData.name = event.target.value)"
            />
          </label>

          <label class="row">
            <span>
              連絡電話
              <span v-if="!bypass.includes('phone')">*</span>
            </span>
            <input
              type="text"
              placeholder="請輸入電話"
              class="input w-full rounded-none"
              :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)"
            />
          </label>

          <!-- <label class="row" v-if="info.room_type">
            <span>
              需求房型
              <span v-if="!bypass.includes('room_type')">(必填)</span>
            </span>
            <select class="select w-full rounded-none bg-white" v-model="formData.room_type">
              <option value="" selected disabled>請選擇房型</option>
              <option v-for="room in info.room_type" :value="room" v-text="room" :key="room"></option>
            </select>
          </label> -->

          <!-- <label class="row" v-if="info.budget">
            <span>
              購屋預算
              <span v-if="!bypass.includes('budget')">(必填)</span>
            </span>
            <select class="select w-full rounded-none bg-white" v-model="formData.budget">
              <option value="" selected disabled>請選擇預算</option>
              <option v-for="budget in info.budget" :value="budget" v-text="budget" :key="budget"></option>
            </select>
          </label> -->

          <label class="row">
            <span>
              電子信箱
              <span v-if="!bypass.includes('email')">*</span>
            </span>
            <input
              type="text"
              placeholder="請輸入電子信箱"
              class="input w-full rounded-none"
              :value="formData.email"
              @input="(event) => (formData.email = event.target.value)"
            />
          </label>

          <label class="row">
            <span>
              選擇縣市
              <span v-if="!bypass.includes('city')">*</span>
            </span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <!--  -->
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select>
          </label>

          <label class="row">
            <span>
              選擇區域
              <span v-if="!bypass.includes('area')">*</span>
            </span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <!--  -->
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select>
          </label>
        </div>

        <div class="right">
          <textarea
            :value="formData.msg"
            @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none"
            placeholder="請輸入您的留言"
          ></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex_box">
        <div class="flex gap-2 items-center control policy">
          <input
            type="checkbox"
            v-model="formData.policyChecked"
            :checked="formData.policyChecked"
            class="checkbox bg-white rounded-md"
          />
          <p class="text-[#000]">
            本人知悉並同意<label
              for="policy-modal"
              class="modal-button text-[#283ccb] cursor-pointer hover:opacity-70"
              >「個資告知事項聲明」</label
            >內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha
          class="flex justify-center z-10 recaptcha"
          ref="recaptcha"
          :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify"
          @expired="onRecaptchaUnVerify"
        />

        <!-- Send -->
        <div class="send btn cursor-pointer" @click="send()">
          {{ sending ? "發送中.." : "立即預約" }}
        </div>
      </div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>

    <!-- Map -->
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="sass">
@import "@/assets/style/function.scss"

.order-section
  position: relative
  // padding-top: size(406)
  overflow: hidden
  min-height: size(500)
  z-index: 50

  .bg-image
    position: absolute
    width: 100%
    left: 0
    bottom: size(50)
    vertical-align: middle

.order
  position: relative
  z-index: 9999
  width: 100%
  padding-top: 0
  font-size: size(15)
  // background: linear-gradient(90deg, #FC4C02 0%, #FF7D00 100%)
  background:
    image: url("./form/repeat_bg.png")
    repeat: repeat-x
    position: center top
    color: #fd7f02

  .order-title
    font-size: size(40)
    font-weight: 700
    color: #FFF
    padding-top:3.5em
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))


  .order-title-img
    width: size(1008)
    margin-bottom: size(155)

  .order-subTitle
    font-size: size(17)
    color: #fff
    padding-top:.8em
    letter-spacing: .1em
    //font-weight: 500filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))

  .cus-divider
    margin: 0 auto
    width: size(300)
    height: size(2)
    margin-bottom: size(50)
    background-color: #055F76

  $gap: 15
  $w: 1200
  .form
    width: size($w - $gap)
    min-width: 800px
    //  height: 350px
    gap: size($gap)
    margin-top: size(45)
    margin-bottom: size(50)
    z-index: 50
    align-items: stretch
    font-size: calc(12px + #{size(3)})

    .left
      flex: 1
      gap: size(20)
      //   width: size(419)

    .right
      flex: 1
      height: auto
      //  width: size(419)
      textarea::placeholder
        color: #000c

    // PC 版表格的中柱
    &::after
      // content: ""
      // width: size(1)
      // height: 100%
      // background-color: #fff
      // position: absolute

    .row
      background: transparent
      border: 1px solid #000
      color: #000
      display: flex
      width: 100%
      align-items: center
      > span
        display: flex
        align-items: center
        width: 7.5em
        text-align: left
        padding-left:1em
        font-weight: bold
        > span
          color: #F00
          font-size:1em
      input,select
        background: none
        flex: 1
        font-size: inherit
        &::placeholder
          color: #000c
        &:focus
          outline: none
      option
        color: #666
      select
        background: url("//h65.tw/img/select.svg") no-repeat
        background-position: calc(100% - .5em) 100%
        background-size: auto 200%
        transition: background .3s
        &:focus
          background-position: calc(100% - .5em) 0%

  .flex_box
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    width: size($w - $gap)
    min-width: 800px
    margin: 0 auto
    height: 72px

    .policy
      width: 30%

    .recaptcha
      width: 30%
      height: 100%
      transform: translateY(0)

  $blue: #0014E6
  .send
    font-size: 20px
    letter-spacing: 0.9em
    text-indent: 0.9em
    color: #fff
    background-color: $blue
    border: 0
    border-radius: 0em
    width: 30%
    height: 100%
    line-height: 1
    z-index: 10
    font-weight: 600
    position: relative

  .control
    font-size: calc(12px + #{size(4)})
    color: #000
    position: relative

// --------------
.title_box
  display: flex
  flex-direction: column
  align-items: center

.img_title
  width: 40vw
  margin:
    top: 5vw
    bottom: 2vw

.hr
  width: 28vw
  margin-bottom: 2vw

.img_subtitle
  width: 40vw
  margin-bottom: 4vw

.img_contact
  width: 12vw
@media screen and (max-width:768px)
  .order-section
    min-height: sizem(800)
    position: relative
    // overflow: hidden
    // padding-top: sizem(200)

    .bg-image
      position: absolute
      width: 100%
      left: -#sizem(30)
      bottom: sizem(590)

  .order
    width: 100%
    padding-bottom: sizem(63)
    font-size: sizem(14)


    .order-title-img
      width: sizem(315)
      margin-bottom: sizem(22)

    .cus-divider
      margin: 0 auto
      width: sizem(117)
      height: sizem(2)
      margin-bottom: sizem(25)
      background-color: #055F76

    .order-title
      font-size: sizem(25)
      padding-top: 1em

    .order-subTitle
      font-size: sizem(13)
      padding-top: 0

    .form
      width: sizem(310)
      min-width: 0
      height: auto
      gap: sizem(15)
      margin-bottom: sizem(20)
      flex-direction: column
      margin-top: sizem(20)

      .left
        width: 100%
        gap: sizem(15)

      .right
        width: 100%
        height: sizem(100)
        .row
          height: 7em

      &::after
        display: none

    .flex_box
      flex-direction: column
      // position: relative
      // display: flex
      justify-content: space-between
      align-items: center
      // margin: 0 auto
      width: sizem(310)
      min-width: 0
      height: auto

      .policy
        width: 100%
        margin-bottom: 5vw

      .recaptcha
        width: 100%
        height: auto
        transform: none
        margin-bottom: 7vw

    .send
      font-size: sizem(21)
      width: sizem(310)
      height: sizem(72)

    .control
      font-size: sizem(14)

  // --------------
  .order-section



  .img_title
    width: 80vw
    margin:
      top: 15vw
      bottom: 5vw

  .hr
    width: 80vw
    margin-bottom: 5vw

  .img_subtitle
    width: 80vw
    margin-bottom: 16vw

  .img_contact
    width: 30vw
    margin-bottom: 5vw

  .ani_bg img
    top: 0vw
    width: 110%
    height: 400vw
    left: -5%
    transform: scale(6,5)
    animation: an_m 9.1s linear reverse infinite
</style>

<script setup>
import HR from "@/section/public/hr.vue";
//
import Policy from "@/section/form/policy.vue";
import ContactInfo from "@/section/form/contactInfo.vue";
import Map from "@/section/form/map.vue";
import HouseInfo from "@/section/form/houseInfo.vue";

import info from "@/info";

import { cityList, renderAreaList } from "@/info/address.js";
import { computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
import { VueRecaptcha } from "vue-recaptcha";

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

import { useToast } from "vue-toastification";
const toast = useToast();

const sending = ref(false);

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: "",
  project: "",
  email: "",
  use_type: "",
  ctime: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: true,
});

//非必填
const bypass = [
  "project",
  "msg",
  "email",
  "room_type",
  "budget",
  "city",
  "area",
  "ctime",
  "use_type",
];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "預算", //budget
  "建案", //project
  "信箱", //email
  "聯絡時間", //ctime
  "用途", //use_type
  "居住縣市", //city
  "居住地區", //area
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
]);

const areaList = ref([]);

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal);
    formData.area = areaList.value[0].value;
  }
);

const onRecaptchaVerify = () => {
  formData.r_verify = true;
};
const onRecaptchaUnVerify = () => {
  formData.r_verify = false;
};

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmContent = urlParams.get("utm_content");
  const utmCampaign = urlParams.get("utm_campaign");
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

  const presend = new FormData();
  let pass = true;
  let unfill = [];
  let idx = 0;

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx]);
      }
    }

    idx++;

    presend.append(key, value);
  }

  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);

  //有未填寫
  if (unfill.length > 0) {
    pass = false;
    toast.error(`「${unfill.join(", ")}」為必填或必選`);
    return;
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/;
  if (!formData.phone.match(MobileReg)) {
    pass = false;
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`);
    return;
  }

  if (pass && !sending.value) {
    sending.value = true;

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      }
      sending.value = false;
    });

    // toast.success(`表單已送出，感謝您的填寫`)
  }
};
</script>

<template>
  <!-- Modal -->
  <input type="checkbox" v-model="props.open" id="contact-modal" class="modal-toggle" />
  <div v-if="props.open" class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4" @click="$emit('init')">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="props.type == 'phone'" src="//h65.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="props.type == 'fb'" src="//h65.tw/img/form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="props.type == 'gmap'" src="//h65.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ props.type == 'phone' ? '賞屋專線' : props.type == 'fb' ? 'Facebook Messenger' :
      `${info.address2?info.address2:'導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ props.type == 'phone' ? info.phone : props.type == 'fb' ? '線上諮詢' :
      `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="props.type != 'phone'" v-bind:class="{
        'hidden': props.type == 'phone' && !$isMobile(),
        'btlead': props.type == 'fb',
        'btsearch': props.type == 'gmap',
        'btcontac': props.type == 'phone'
      }">
        {{ props.type == 'phone' ? '撥打電話' : props.type == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
        'hidden': props.type == 'phone' && !$isMobile(),
        'btlead': props.type == 'fb',
        'btsearch': props.type == 'gmap',
        'btcontac': props.type == 'phone'
      }">
        {{ props.type == 'phone' ? '撥打電話' : props.type == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
    </div>
  </div>
</template>

<script setup>
import info from "@/info"
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: null
  }
});

const emit = defineEmits({
  init: null
});

const go = () => {
  if (props.type == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
     setTimeout(() => {
       window.location.href = "phoneThanks";
     }, 1000);
  } else if (props.type == 'fb') {
    window.open(info.fbMessage);
  } else if (props.type == 'gmap') {
    window.open(info.googleLink);

  }
}
</script>
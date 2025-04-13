<template>
  <div
    :style="`background-image: repeating-linear-gradient(to right, rgba(${props.propsColor},0%), rgba(${props.propsColor},0%) 15%, rgba(${props.propsColor},100%) 40%, rgba(${props.propsColor},100%) 60%, rgba(${props.propsColor},0%) 85%, rgba(${props.propsColor},0%) 100%)`">
  </div>
</template>

<style lang="sass" scoped>
div
  height: 1px
</style>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  propsColor: {
    type: String,
    default: '52, 168, 222'
  }
})
</script>
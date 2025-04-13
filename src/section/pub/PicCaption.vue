<template>
  <div>
    <img :src="src" />
    <span
      :style="{
        color: caption.color,
        top: caption.top || 'auto',
        left: caption.left || 'auto',
        bottom: caption.bottom || 'auto',
        right: caption.right || 'auto',
      }"
    >{{ caption.txt }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  caption: Object,
});
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
img {
  width: 100%;
}
span {
  position: absolute;
  font-size: 10px;
}
</style>

<template>
  <div class="gmap relative z-20">
      <iframe :src="info.googleSrc" frameborder="0"></iframe>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.gmap {
  width: 100%;
  height: size(500);

  iframe {
      width: 100%;
      height: 100%;
  }
}

@media screen and (max-width:768px) {
  .gmap {
      height: sizem(354);
      margin-top: 0;
  }
}
</style>

<script setup>
import info from "@/info"

</script>
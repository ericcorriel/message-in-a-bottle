<template>
  <video muted autoplay loop>
    <source :src="`${path}/bucket/${filename}`" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "VideoEmbed",
  props: {
    path: { type: String, default: "/video" },
    frame: { type: Number, default: 0 },
    index: { type: Number, default: 0 },
    orientation: { type: String, default: "landscape" },
    filename: { type: String, default: "" },
  },
});
</script>

<style lang="sass" scoped>
video
  width: 100%
  object-fit: cover
  height: 50vh
</style>

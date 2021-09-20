<template>
  <video ref="player" muted loop>
    <source :src="`/video/${filename}`" type="video/mp4" class="bg-video" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "HtmlVideoEmbed",
  props: {
    filename: { type: String, default: "" },
    currentVideoTime: { type: Number, default: 0 },
    isScrolling: { type: Boolean, default: false },
  },
  setup(props, context) {
    const player = ref();

    watch(
      () => props.currentVideoTime,
      (value, oldValue) => {
        player.value.currentTime = value;
      }
    );

    return {
      player,
    };
  },
});
</script>

<style lang="sass" scoped>
//.bg-video-container
//  position: fixed
//  top: 0
//  right: 0
//  bottom: 0
//  left: 0
//  overflow: hidden
//  z-index: -100
//  width: 100vw
//  height: 100vh
//  .bg-video
//    position: absolute
//    top: 0
//    left: 0
//    width: 100%
//    height: 100%
video
  width: 100%
  object-fit: cover
  height: 50vh
</style>

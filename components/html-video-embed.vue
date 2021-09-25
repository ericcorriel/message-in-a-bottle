<template>
  <video
    ref="player"
    muted
    loop
    poster="/img/placeholder/bottle.placeholder.jpg"
  >
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
video
  width: 100%
  height: 100vh
  object-fit: cover
  opacity: .75
</style>

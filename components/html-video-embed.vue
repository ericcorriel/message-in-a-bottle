<template>
  <video
    ref="player"
    muted
    poster="/img/placeholder/message-in-a-bottle-placeholder.jpg"
    preload="metadata"
    aria-label="Silhouetted used plastic water bottle that explodes into a hundred or so shards"
  >
    <source
      :src="`/video/${APP.VIDEO_FILENAME}`"
      type="video/mp4"
      class="bg-video"
    />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
import APP from "~/data/constants/app";

export default defineComponent({
  name: "HtmlVideoEmbed",
  components: {},
  props: {
    currentVideoTime: { type: Number, default: 0 },
  },
  setup(props) {
    const player = ref();

    watch(
      () => props.currentVideoTime,
      (value) => {
        player.value.currentTime = value;
      }
    );

    return {
      player,
      APP,
    };
  },
});
</script>

<style lang="sass" scoped>
video
  width: 100%
  height: 100vh
  object-fit: cover
  opacity: 1
</style>

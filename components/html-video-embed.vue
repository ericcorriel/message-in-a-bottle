<template>
  <video
    ref="player"
    muted
    poster="/img/placeholder/message-in-a-bottle-placeholder.jpg"
    preload="metadata"
    aria-label="Silhouetted used plastic water bottle that explodes into a hundred or so shards"
  >
    <source :src="`/video/${filename}`" type="video/mp4" class="bg-video" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
// @ts-ignore
import _ from "lodash";

export default defineComponent({
  name: "HtmlVideoEmbed",
  components: {},
  props: {
    filename: { type: String, default: "" },
    currentVideoTime: { type: Number, default: 0 },
  },
  setup(props, context) {
    const player = ref();
    let playheadAt = 0;

    watch(
      () => props.currentVideoTime,
      (value, oldValue) => {
        playheadAt = value;
        updateVideoPlayhead();
      }
    );

    const updateVideoPlayhead = _.debounce(function () {
      player.value.currentTime = playheadAt;
    }, 30);

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
  opacity: 1
</style>

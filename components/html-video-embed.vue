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
import {
  defineComponent,
  watch,
  ref,
  onMounted,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "HtmlVideoEmbed",
  components: {},
  props: {
    filename: { type: String, default: "" },
    currentVideoTime: { type: Number, default: 0 },
  },
  setup(props) {
    const player = ref();

    onMounted(() => {
      player.value.currentTime = props.currentVideoTime;
    });

    watch(
      () => props.currentVideoTime,
      (value) => {
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
  opacity: 1
</style>

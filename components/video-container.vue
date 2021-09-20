<template>
  <div class="row-fixed video-container">
    <div class="col">
      <VimeoEmbed
        v-if="useVimeo"
        video-id="607838921"
        :current-video-time="currentVideoTime"
        :is-scrolling="isScrolling"
      ></VimeoEmbed>
      <HTMLVideoEmbed
        v-else
        filename="export.1920x1080.01-HD-720p.mov"
        :current-video-time="currentVideoTime"
        :is-scrolling="isScrolling"
      ></HTMLVideoEmbed>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import VimeoEmbed from "~/components/vimeo-embed.vue";
import HTMLVideoEmbed from "~/components/html-video-embed";
export default defineComponent({
  name: "VideoContainer",
  components: { VimeoEmbed, HTMLVideoEmbed },
  props: {
    activeVideos: { type: Array, default: () => [] },
    useVimeo: { type: Boolean, default: false },
    isScrolling: { type: Boolean, default: false },
    currentVideoTime: { type: Number, default: 0 },
  },
  setup() {},
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/styles"
.row-fixed.video-container
  top: 25vh
  opacity: 1
  height: 50vh
  .col
    margin: 0
    padding: 0
    width: 100%
</style>

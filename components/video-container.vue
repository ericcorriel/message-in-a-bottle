<template>
  <div class="row-fixed video-container">
    <div class="col">
      <VimeoEmbed
        v-if="useVimeo"
        :video-id="vimeoId"
        :current-video-time="currentVideoTime"
        :is-scrolling="isScrolling"
      ></VimeoEmbed>
      <HTMLVideoEmbed
        v-else
        :filename="filename"
        :current-video-time="currentVideoTime"
        :is-scrolling="isScrolling"
      ></HTMLVideoEmbed>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import VimeoEmbed from "~/components/vimeo-embed.vue";
import HTMLVideoEmbed from "~/components/html-video-embed.vue";

export default defineComponent({
  name: "VideoContainer",
  components: { VimeoEmbed, HTMLVideoEmbed },
  props: {
    activeVideos: { type: Array, default: () => [] },
    useVimeo: { type: Boolean, default: false },
    isScrolling: { type: Boolean, default: false },
    currentVideoTime: { type: Number, default: 0 },
    filename: { type: String, default: "" },
    vimeoId: { type: String, default: "" },
  },
  setup() {},
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/app"

.row-fixed.video-container
  top: 5vh
  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    top: 0
  opacity: 1
  height: 100vh
  z-index: 0

  .col
    margin: 0
    padding: 0
    width: 100%
    height: 100%
</style>

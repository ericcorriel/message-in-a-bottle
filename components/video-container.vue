<template>
  <div class="row-fixed video-container">
    <div class="col">
      <VimeoEmbed> </VimeoEmbed>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import VimeoEmbed from "~/components/vimeo-embed.vue";
export default defineComponent({
  name: "VideoContainer",
  components: { VimeoEmbed },
  props: {
    activeVideos: { type: Array, default: () => [] },
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

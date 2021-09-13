<template>
  <div class="row-fixed video-container">
    <div
      v-for="(activeVideo, index) in activeVideos"
      :key="`${activeVideos[index]}`"
      class="col"
    >
      <VideoEmbed
        :index="index"
        orientation="landscape"
        path="/video"
        :filename="activeVideo"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import VideoEmbed from "~/components/video-embed";
export default defineComponent({
  name: "VideoContainer",
  components: { VideoEmbed },
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
    margin: 10px
    padding: 0
    width: 100%
</style>

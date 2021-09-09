<template>
  <div class="container">
    <div class="row">
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
    <div class="audio-container">
      <div>
        <audio loop autoplay preload controls>
          <source
            src="/audio/046866858-tick-tock-tension-loop-3.m4a"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  onBeforeUpdate,
  onMounted,
  reactive,
  ref,
} from "@nuxtjs/composition-api";
import VideoEmbed from "~/components/video-embed";

export default Vue.extend({
  components: { VideoEmbed },
  setup() {
    const frame: Ref<UnwrapRef<number>> = ref(1);
    const videos = [
      "IMG_6826-450-years-landscape.mp4",
      "IMG_6834-450-years-landscape.mp4",
      "IMG_6844-450-years-landscape.mp4",
      "IMG_6852-450-years-landscape.mp4",
      "IMG_6827-450-years-landscape.mp4",
      "IMG_6835-450-years-landscape.mp4",
      "IMG_6845-450-years-landscape.mp4",
      "IMG_6853-450-years-landscape.mp4",
      "IMG_6828-450-years-landscape.mp4",
      "IMG_6836-450-years-landscape.mp4",
      "IMG_6846-450-years-landscape.mp4",
      "IMG_6854-450-years-landscape.mp4",
      "IMG_6829-450-years-landscape.mp4",
      "IMG_6837-450-years-landscape.mp4",
      "IMG_6847-450-years-landscape.mp4",
      "IMG_6857-450-years-landscape.mp4",
      "IMG_6830-450-years-landscape.mp4",
      "IMG_6838-450-years-landscape.mp4",
      "IMG_6848-450-years-landscape.mp4",
      "IMG_6858-450-years-landscape.mp4",
      "IMG_6832-450-years-landscape.mp4",
      "IMG_6840-450-years-landscape.mp4",
      "IMG_6849-450-years-landscape.mp4",
      "IMG_6859-450-years-landscape.mp4",
      "IMG_6833-450-years-landscape.mp4",
      "IMG_6841-450-years-landscape.mp4",
      "IMG_6850-450-years-landscape.mp4",
      "IMG_6860-450-years-landscape.mp4",
    ];

    const activeVideos = reactive([]);
    for (let i = 0; i < 3; i++) activeVideos.push(videos[i]);

    function changeFrame() {
      if (frame.value === 1) frame.value = 2;
      else frame.value = 1;
    }
    function swapSingleVideo() {
      activeVideos.unshift(videos[videos.length - 1 - frame.value]);
      activeVideos.pop();
    }
    onMounted(() => {
      setInterval(function () {
        frame.value++;
        swapSingleVideo();
      }, 1000);
    });

    return {
      frame,
      activeVideos,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"
.container
  height: 100vh
  max-width: 100%
  display: flex
  background-color: #000000
  justify-content: center
  position: relative
  .row
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: center
    align-content: center
    align-items: center
    width: 66%
    opacity: 1
    //animation: 31s ease-in fadeToBlack
    @keyframes fadeToBlack
      from
        opacity: 1
      to
        opacity: 0
    .col
      order: 0
      align-items: center
      display: flex
      justify-content: center
      flex: 0 1 auto
      width: 33%
      margin: 10px
      padding: 0
.audio-container
  position: absolute
  bottom: 0px
  z-index: -1
</style>

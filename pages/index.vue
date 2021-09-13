<template>
  <div ref="container" class="container">
    <div id="step1" ref="step1">
      <div class="row text-container top">
        <h1>
          <span>It’s </span>
          <span id="year">{{ yearAsInt }}</span>
          <span>and this water bottle is</span>
          <span id="disintegrated">
            {{ (Math.round(disintegrated * 100) / 100).toFixed(2) }}%
          </span>
          <span>disintegrated</span>
        </h1>
      </div>
      <div class="row video-container">
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
      <div class="row text-container bottom">
        <h2 id="commentary">{{ commentary }}</h2>
      </div>
    </div>
    <div id="step2" ref="step2">
      <img src="/img/20190423-plastic-pollution.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  onMounted,
  reactive,
  Ref,
  ref,
  UnwrapRef,
} from "@nuxtjs/composition-api";

import { videos } from "~/data/videos";
import { commentaries } from "~/data/commentaries";
import VideoEmbed from "~/components/video-embed";
export default Vue.extend({
  components: {
    VideoEmbed,
  },
  setup() {
    let frame: Number = 1;
    let year: Number = new Date().getFullYear();
    const scrollPosition: Number = ref(0);
    const canvas = ref(null);
    const rotation = ref(0);
    let previousScrollPosition: Number = 0;
    const currentYear = year;
    const yearsToDisintegrate = 450;
    const yearAsInt: Ref<UnwrapRef<number>> = ref(year);
    const disintegrated: Ref<UnwrapRef<number>> = ref(0.0);
    const commentary: Ref<UnwrapRef<String>> = ref("");
    commentary.value = "Scroll Down!";

    const activeVideos = reactive([]);
    for (let i = 0; i < 1; i++) activeVideos.push(videos[i]);

    function swapSingleVideo() {
      activeVideos.unshift(videos[videos.length - 1 - frame]);
      activeVideos.pop();
    }
    function updateBottle(e) {
      scrollPosition.value =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0);

      scrollPosition.value >= previousScrollPosition
        ? (year += 0.25)
        : (year -= 0.25);
      disintegrated.value = ((year - currentYear) / yearsToDisintegrate) * 100;
      yearAsInt.value = parseInt(year);
      commentary.value = commentaries[yearAsInt.value] ?? commentary.value;

      previousScrollPosition = scrollPosition.value;
    }
    onMounted(() => {
      document.addEventListener("scroll", updateBottle);
      setInterval(function () {
        frame++;
        swapSingleVideo();
      }, 10000);
    });

    return {
      yearAsInt,
      commentary,
      disintegrated,
      updateBottle,
      activeVideos,
      scrollPosition,
      canvas,
      rotation,
    };
  },

  watch: {
    disintegrated(value, oldValue) {
      if (value > 5) {
        this.$refs.container.style.height = this.scrollPosition + "px";
      }
    },
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"
html, p, h1, h2, h3, h4, h5, h6
  color: #FFFFFF

.container
  height: 20000vh
  max-width: 100%
  display: flex
  background-color: #000000
  flex-direction: column
  font-family: "Raleway"
  #step1
    height: 100%
    z-index: 1
  .row
    position: fixed
    display: flex
    width: 100vw
    height: 25vh
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    &.text-container
      p, h1, h2
        text-align: center
        font-family: "Raleway"
      #year
        font-size: 20rem
        line-height: 0
      #disintegrated
        font-size: 10rem
      #commentary
        font-size: 6rem
      &.top
        top: 0
        align-items: flex-end
      &.bottom
        top: 75vh
        align-items: start
  .video-container
    top: 25vh
    opacity: 1
    height: 50vh
    .col
      margin: 10px
      padding: 0
.audio-container
  position: absolute
  bottom: 0px
  z-index: -1

#step2
  height: 100vh
  z-index: 2
  img
    height: 100vh
</style>

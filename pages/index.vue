<template>
  <div ref="container" class="container">
    <div id="step1" ref="step1">
      <YearDisintegrated
        :disintegrated="disintegrated"
        :year-as-int="yearAsInt"
      />
      <VideoContainer :active-videos="activeVideos" />
      <Commentary :commentary="commentary" />
    </div>
    <div id="step2" ref="step2">
      <img src="/img/20190423-plastic-pollution.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  Ref,
  ref,
  UnwrapRef,
} from "@nuxtjs/composition-api";

import { videos } from "~/data/videos";
import { commentaries } from "~/data/commentaries";
import YearDisintegrated from "~/components/year-disintegrated.vue";
import VideoContainer from "~/components/video-container.vue";
import Commentary from "~/components/commentary.vue";
export default defineComponent({
  components: {
    YearDisintegrated,
    VideoContainer,
    Commentary,
  },
  setup() {
    let frame: number = 1;
    let year: number = new Date().getFullYear();
    let previousScrollPosition: number = 0;
    const scrollPosition: Ref<UnwrapRef<number>> = ref(0);
    const currentYear = year;
    const yearsToDisintegrate = 450;
    const yearAsInt: Ref<UnwrapRef<number>> = ref(year);
    const disintegrated: Ref<UnwrapRef<number>> = ref(0.0);
    const commentary: Ref<UnwrapRef<string>> = ref("Scroll Down!");
    // commentary.value = "Scroll Down!";

    const activeVideos = reactive([]);
    for (let i: number = 0; i < 1; i++) activeVideos.push(videos[i]);

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
      activeVideos,
      scrollPosition,
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
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/styles"

.container
  height: 20000vh
  max-width: 100%
  display: flex
  flex-direction: column
  padding: 0
  #step1
    height: 100%
    z-index: 1
#step2
  height: 100vh
  z-index: 2
  img
    height: 100vh
</style>

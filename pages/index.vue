<template>
  <div>
    <div ref="container" class="container">
      <div id="step1" ref="step1" class="step">
        <YearDisintegrated
          :disintegrated="disintegrated"
          :year-as-int="yearAsInt"
        />
        <VideoContainer
          :active-videos="activeVideos"
          :current-video-time="currentVideoTime"
          :is-scrolling="isScrolling"
          :use-vimeo="useVimeo"
          vimeo-id="607838921"
          filename="shatter.04-HD 720p.mov"
        />
        <Commentary :commentary="commentary" />
      </div>
    </div>
    <div id="step2" ref="step2" class="step">
      <FitText>Congratulations!</FitText>
      <FitText>You just scrolled through</FitText>
      <FitText>450 years</FitText>
    </div>
    <div id="step3" class="step">
      <FitText>That bottle made in 2021</FitText>
      <FitText>has finally disintegrated</FitText>
    </div>
    <div id="step4" class="step">
      <FitText>Oh wait–there’s just a few more…</FitText>
    </div>
    <div id="step5" class="step">
      <div class="img-container cover">
        <img src="/img/wall-o-bottles.jpg" />
      </div>
    </div>
    <div id="step5" class="step">
      <FitText>Shiiiiiit…</FitText>
    </div>
    <div id="credits" class="step">
      <h1 style="text-align: center">Credits TK</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  watch,
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
import FitText from "~/components/vendor/FitText.vue";
import VimeoEmbed from "~/components/vimeo-embed.vue";

export default defineComponent({
  components: {
    YearDisintegrated,
    VideoContainer,
    Commentary,
    FitText,
  },
  setup() {
    const frame: number = 1;
    let year: number = new Date().getFullYear();
    let previousScrollPosition: number = 0;
    const stoppingDisintegratedPercentage = 100;
    const isScrollingTracker = ref();
    const isScrolling: Ref<UnwrapRef<Boolean>> = ref(false);
    const useVimeo: Ref<UnwrapRef<Boolean>> = ref(false);

    const scrollPosition: Ref<UnwrapRef<number>> = ref(0);
    const currentYear = year;
    const yearsToDisintegrate = 450;
    const currentVideoTime: Ref<UnwrapRef<number>> = ref(0);

    const yearAsInt: Ref<UnwrapRef<number>> = ref(year);
    const disintegrated: Ref<UnwrapRef<number>> = ref(0.0);
    const commentary: Ref<UnwrapRef<string>> = ref("Scroll Down!");
    const container = ref();

    const activeVideos: string[] = reactive([]);
    for (let i: number = 0; i < 1; i++) activeVideos.push(videos[i]);

    function swapSingleVideo() {
      activeVideos.unshift(videos[videos.length - 1 - frame]);
      activeVideos.pop();
    }

    function updateBottle() {
      isScrolling.value = true;
      window.clearTimeout(isScrollingTracker.value);
      isScrollingTracker.value = setTimeout(function () {
        isScrolling.value = false;
      }, 66);

      scrollPosition.value =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0) +
        window.innerHeight;

      scrollPosition.value >= previousScrollPosition
        ? (year += 0.25)
        : (year -= 0.25);
      disintegrated.value =
        disintegrated.value < stoppingDisintegratedPercentage
          ? ((year - currentYear) / yearsToDisintegrate) * 100
          : stoppingDisintegratedPercentage;
      yearAsInt.value = Math.floor(year);

      currentVideoTime.value = (disintegrated.value * 60) / 100;

      const res = commentaries.filter(
        (commentaryType) => commentaryType.year === yearAsInt.value
      );

      commentary.value = res[0]?.comment ?? commentary.value;
      previousScrollPosition = scrollPosition.value;
    }

    onMounted(() => {
      document.addEventListener("scroll", updateBottle);
    });

    const unwatch = watch(disintegrated, (value, oldValue) => {
      if (value >= stoppingDisintegratedPercentage) {
        container.value!.style.height = scrollPosition.value + "px";
      }
    });

    return {
      yearAsInt,
      commentary,
      disintegrated,
      activeVideos,
      scrollPosition,
      container,
      currentVideoTime,
      isScrolling,
      useVimeo,
    };
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

.step

  background-color: #000000
  position: relative
  display: flex
  align-items: center
  flex-wrap: wrap
  align-content: center
  .img-container
    &.cover
      width: 100vw
      img
        object-fit: cover
        width: 100vw
  &#step1
    z-index: 1
  &#step2
    z-index: 2
  &#step3
    z-index: 3
    height: 100vh
  &#step4
    z-index: 4
    height: 100vh
  &#step5
    z-index: 5
  &#credits
    z-index: 6
</style>

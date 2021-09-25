<template>
  <div>
    <div id="container" ref="container" class="container">
      <div id="step1" ref="step1" class="step">
        <VideoContainer
          :active-videos="activeVideos"
          :current-video-time="currentVideoTime"
          :is-scrolling="isScrolling"
          :use-vimeo="useVimeo"
          vimeo-id="607838921"
          filename="shatter.07-HD-1080p.mov"
        />
        <YearDisintegrated
          :disintegrated="disintegrated"
          :year-as-int="yearAsInt"
        />
        <Commentary :commentary="commentary" />
      </div>
    </div>
    <div id="step2" ref="step2" class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Congratulations!</FitText>
        <FitText>You just scrolled through</FitText>
        <FitText>450 YEARS</FitText>
      </div>
    </div>
    <div id="step3" class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>A bottle made in 2021</FitText>
        <FitText>disintegrates in 2471</FitText>
      </div>
    </div>
    <SpacerHalfScreen></SpacerHalfScreen>
    <div id="step3" class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText style="line-height: 1.1em"
            >Though its pieces will<br />stay with us forever…</FitText
          >
        </div>

        <div class="image-container full-width">
          <img src="/img/microplastics.02.png" alt="series of plastic straws" />
        </div>
      </div>
    </div>

    <div id="step4" class="step bg-black on-top align-text-baseline">
      <div class="fittext-container">
        <FitText>Oh wait–I forgot about these!</FitText>
      </div>
    </div>
    <div id="step5" class="step bg-black on-top">
      <div class="full-width-img-container cover">
        <img src="/img/wall-o-bottles.jpg" />
      </div>
    </div>
    <div id="step6" class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Hang on, almost done…</FitText>
      </div>
    </div>
    <div id="step5" class="step bg-black on-top">
      <div class="full-width-img-container cover">
        <img src="/img/wall-o-bottles.jpg" style="transform: rotate(180deg)" />
      </div>
    </div>
    <div id="step6" class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Hey, while we’re on the subject,</FitText>
      </div>
      <div class="fittext-container">
        <FitText>did you know…</FitText>
      </div>
    </div>
    <div id="step6" class="half-step bg-black on-top"></div>
    <div id="step5" class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container"><FitText>200 YEARS</FitText></div>
        <div class="image-container">
          <img src="/img/straw.03.png" alt="series of plastic straws" />
        </div>
      </div>
    </div>
    <div id="step6" class="half-step bg-black on-top"></div>
    <div id="step5" class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container"><FitText>500 YEARS</FitText></div>
        <div class="image-container">
          <img
            src="/img/pexels-anna-shvets-5218021.png"
            alt="series of plastic straws"
          />
        </div>
      </div>
    </div>
    <div id="step6" class="half-step bg-black on-top"></div>
    <div id="step5" class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container"><FitText>1000 YEARS</FitText></div>
        <div class="image-container">
          <img src="/img/ink-cartridge.02.png" alt="series of plastic straws" />
        </div>
      </div>
    </div>
    <div id="step6" class="half-step bg-black on-top"></div>
    <div id="step5" class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText
            >&nbsp;&nbsp;&nbsp;&nbsp;NEVER&nbsp;&nbsp;&nbsp;&nbsp;</FitText
          >
        </div>
        <div class="image-container">
          <img src="/img/styrofoam.08.png" alt="series of plastic straws" />
        </div>
      </div>
    </div>
    <Credits spacer="half"></Credits>
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
  computed,
  useRoute,
} from "@nuxtjs/composition-api";

import { videos } from "~/data/videos";
import { commentaries } from "~/data/commentaries";
import YearDisintegrated from "~/components/year-disintegrated.vue";
import VideoContainer from "~/components/video-container.vue";
import Commentary from "~/components/commentary.vue";
import FitText from "~/components/vendor/FitText.vue";
import Credits from "~/components/credits.vue";
import SpacerQuarterScreen from "~/components/spacer/quarter-screen.vue";
import SpacerHalfScreen from "~/components/spacer/half-screen.vue";
import SpacerFullScreen from "~/components/spacer/full-screen.vue";

export default defineComponent({
  components: {
    YearDisintegrated,
    VideoContainer,
    Commentary,
    FitText,
    Credits,
    SpacerQuarterScreen,
    SpacerHalfScreen,
    SpacerFullScreen,
  },
  setup() {
    const route = useRoute();
    const slug = computed(() => route.value.params.slug);
    const movieMode = true;
    const movieScroll = ref(0);

    const frame: number = 1;
    let year: number = slug.value
      ? Math.floor(parseInt(slug.value))
      : new Date().getFullYear();

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
    const commentary: Ref<UnwrapRef<string>> = ref("");
    commentary.value = getCommentary(year);
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
      yearAsInt.value =
        year <= currentYear + yearsToDisintegrate
          ? Math.floor(year)
          : yearAsInt.value;

      currentVideoTime.value = (disintegrated.value * 60) / 100;
      commentary.value = getCommentary(yearAsInt.value);
      previousScrollPosition = scrollPosition.value;
    }

    function getCommentary(year: number): string {
      // default condition
      if (!year || year == new Date().getFullYear()) return "~~Scroll Down~~";
      else {
        const res = commentaries.filter(
          (commentaryType) => commentaryType.year === yearAsInt.value
        );
        return res[0]?.comment ?? commentary.value;
      }
    }

    onMounted(() => {
      if (movieMode) {
        movieScroll.value += 10;

        setInterval(function () {
          updateBottle();
        }, 100);
      }
      // when year is complete: console> setInterval(function(){window.scrollBy(0,1)},10)
      document.addEventListener("scroll", updateBottle);
    });

    watch(disintegrated, (value, oldValue) => {
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
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"

.container
  height: 20000vh
  max-width: 100%
  display: flex
  flex-direction: column
  padding: 0
  background-color: #000000
.half-step
  position: relative
  display: flex
  height: 50vh
  background-color: #000000
.step
  position: relative
  display: flex
  align-items: center
  flex-wrap: wrap
  align-content: center
  .fittext-container
    @include fittext-container
  &.bg-black
    background-color: #000
  &.on-top
    z-index: 1
  &.align-text-baseline
    display: flex
    flex-direction: row
    align-content: flex-end

  .full-width-img-container
    &.cover
      width: 100vw
      img
        object-fit: cover
        width: 100vw
  .text-over-image-container
    width: 100vw
    height: 100vh
    display: flex
    flex-wrap: nowrap
    justify-items: center
    align-items: center
    .text-container
      width: 95vw
      height: 100vh
      z-index: 1
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      justify-content: center
      align-items: center
      position: relative
      margin: 0 auto
      span
        -webkit-text-stroke: 3px black
        text-align: center
    .image-container
      position: absolute
      margin: 0 auto
      width: 100%
      height: 100%
      text-align: center
      z-index: 0
      display: flex
      img
        margin: 0 auto
      &.full-width img
        object-fit: cover
        width: 100%
        height: 100%



  &#step3
    height: 100vh
  &#step4
    height: 100vh
</style>

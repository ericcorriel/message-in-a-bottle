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
          filename="shatter.07-HD 1080p.02.mp4"
        />
        <YearDisintegrated :disintegrated="disintegrated" :year="yearAsInt" />
        <Commentary :year="yearAsInt" />
      </div>
    </div>
    <div ref="step2" class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Congratulations!</FitText>
        <FitText>You just scrolled through</FitText>
        <FitText>450 YEARS</FitText>
      </div>
    </div>
    <div class="step bg-black on-top full-height-and-width">
      <div class="fittext-container">
        <FitText>A bottle made in 2021</FitText>
        <FitText>disintegrates in 2471</FitText>
      </div>
    </div>
    <SpacerHalfScreen></SpacerHalfScreen>
    <div class="step bg-black on-top full-height-and-width">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText style="line-height: 1.1em"
            >Though its pieces will<br />stay with us forever…
          </FitText>
        </div>
        <div class="image-container full-width">
          <img
            src="/img/microplastics.02.png"
            alt="Close up of an hand with hundreds of specs of microplastics"
          />
        </div>
      </div>
    </div>

    <div class="step bg-black on-top align-text-baseline full-height-and-width">
      <div class="fittext-container">
        <FitText>Oh wait–I forgot about these!</FitText>
      </div>
    </div>
    <div class="step bg-black on-top">
      <div class="full-width-img-container cover">
        <img
          src="/img/wall-o-bottles.jpg"
          alt="Extremely long photo of bales of used plastic bottles smushed together"
        />
      </div>
    </div>
    <div class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Hang on, almost done…</FitText>
      </div>
    </div>
    <div class="step bg-black on-top">
      <div class="full-width-img-container cover">
        <img
          src="/img/wall-o-bottles.jpg"
          style="transform: rotate(180deg)"
          alt="Same exact photo as above but rotated 180 degrees so the viewer gets to re-experience the photo from a different angle"
        />
      </div>
    </div>
    <div class="step bg-black on-top">
      <div class="fittext-container">
        <FitText>Hey, while we’re on the subject,</FitText>
      </div>
      <div class="fittext-container">
        <FitText>did you know…</FitText>
      </div>
    </div>
    <SpacerHalfScreen />
    <div class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText>200 YEARS</FitText>
        </div>
        <div class="image-container">
          <img
            src="/img/straw.03.png"
            alt="Silhouetted single plastic white straw with red stripes"
          />
        </div>
      </div>
    </div>
    <SpacerHalfScreen />
    <div class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText>500 YEARS</FitText>
        </div>
        <div class="image-container">
          <img
            src="/img/pexels-anna-shvets-5218021.png"
            alt="Silhouetted pink plastic laundry detergent bottle"
          />
        </div>
      </div>
    </div>
    <SpacerHalfScreen />
    <div class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText>1000 YEARS</FitText>
        </div>
        <div class="image-container">
          <img
            src="/img/ink-cartridge.02.png"
            alt="Silhouetted hand holding an ink jet printer cartridge"
          />
        </div>
      </div>
    </div>
    <SpacerHalfScreen />
    <div class="step bg-black on-top">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText
            >&nbsp;&nbsp;&nbsp;&nbsp;NEVER&nbsp;&nbsp;&nbsp;&nbsp;
          </FitText>
        </div>
        <div class="image-container">
          <img
            src="/img/styrofoam.08.png"
            alt="Open cardboard box filled with white styrofoam packing peanuts"
          />
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
    const movieMode = false;
    const movieScroll = ref(0);

    const frame: number = 1;
    let year: number = slug.value
      ? Math.floor(parseInt(slug.value))
      : new Date().getFullYear();

    let previousScrollPosition: number = 0;
    const stoppingDisintegratedPercentage = 100;
    const yearIncrementOnScroll = 0.25;
    const isScrollingTracker = ref();
    const isScrolling: Ref<UnwrapRef<Boolean>> = ref(false);
    const useVimeo: Ref<UnwrapRef<Boolean>> = ref(false);

    const scrollPosition: Ref<UnwrapRef<number>> = ref(0);
    const currentYear = year;
    const yearsToDisintegrate = 450;
    const currentVideoTime: Ref<UnwrapRef<number>> = ref(0);

    const yearAsInt: Ref<UnwrapRef<number>> = ref(year);
    const disintegrated: Ref<UnwrapRef<number>> = ref(0.0);

    const freezeStep1ScrollValues: Ref<UnwrapRef<boolean>> = ref(false);
    const container = ref();

    const isMobile: Ref<UnwrapRef<Boolean>> = ref(false);
    const windowWidth: Ref<UnwrapRef<Number>> = ref(0);

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

      // console.log(
      //   "year: " +
      //     year +
      //     " || currentYear: " +
      //     currentYear +
      //     " || ytd: " +
      //     yearsToDisintegrate
      // );
      if (!freezeStep1ScrollValues.value) {
        if (
          year <= currentYear + yearsToDisintegrate - yearIncrementOnScroll &&
          year - currentYear + yearIncrementOnScroll >= 0
        ) {
          scrollPosition.value >= previousScrollPosition
            ? (year += yearIncrementOnScroll)
            : (year -= yearIncrementOnScroll);
        } else if (
          year === currentYear + yearsToDisintegrate &&
          scrollPosition.value < previousScrollPosition
        ) {
          year -= yearIncrementOnScroll;
        }
        // don't let year become < currentYear
        if (year - currentYear <= 0) {
          console.log("RESET");
          disintegrated.value = 0;
          year = currentYear;
        } else {
          disintegrated.value =
            ((year - currentYear) / yearsToDisintegrate) * 100;
          yearAsInt.value = Math.floor(year);
          currentVideoTime.value = (disintegrated.value * 60) / 100;
        }
      }
      previousScrollPosition = scrollPosition.value;
      // console.log("SP: " + scrollPosition.value + " • ");
    }

    onMounted(() => {
      if (movieMode) {
        movieScroll.value += 10;

        setInterval(function () {
          updateBottle();
        }, 100);
      }
      // movie mode > scroll through credits > when year is complete: console> setInterval(function(){window.scrollBy(0,1)},10)
      document.addEventListener("scroll", updateBottle);
      window.addEventListener("resize", handleResize);
      const target = document.querySelector("#container");

      // @ts-ignore
      function handleIntersection(entries) {
        // @ts-ignore
        entries.map((entry) => {
          if (entry.isIntersecting) {
            // console.log("VISIBLE");
            freezeStep1ScrollValues.value = false;
          } else {
            // console.log("INVISIBLE");
            freezeStep1ScrollValues.value = true;
          }
        });
      }

      const options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver(handleIntersection, options);
      // @ts-ignore
      observer.observe(target);

      windowWidth.value = window.innerWidth;
    });

    watch(disintegrated, (value, oldValue) => {
      if (value >= stoppingDisintegratedPercentage) {
        container.value!.style.height = scrollPosition.value + "px";
        freezeStep1ScrollValues.value = true;
      }
    });

    function handleResize() {
      windowWidth.value = window.innerWidth;
      console.log("WINDOW CHAG " + windowWidth.value);
    }

    return {
      yearAsInt,
      disintegrated,
      activeVideos,
      scrollPosition,
      container,
      currentVideoTime,
      isScrolling,
      useVimeo,
      windowWidth,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"

.container
  height: 1000000px
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

  &.full-height-and-width
    height: 100vh
    width: 100vw

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
        text-align: center
        -webkit-text-stroke: 1px black
        @include media-breakpoint-up(lg, $v1-grid-breakpoints)
          -webkit-text-stroke: 3px $bg-color

    .image-container
      position: absolute
      margin: 0 auto
      z-index: 0
      display: flex
      height: 100vh
      width: 100vw
      max-width: 100%
      max-height: 100vh
      text-align: center
      justify-content: center
      align-items: center

      img
        max-width: 100%
        max-height: 100%

      &.full-width img
        object-fit: cover
        width: 100%
        height: 100%
</style>

<template>
  <div>
    <div id="container" ref="container" class="container">
      <div id="step1" class="step">
        <VideoContainer :use-vimeo="false" />
        <YearDisintegrated />
        <Commentary :is-mobile="isMobile" />
      </div>
    </div>
    <div ref="step2" class="step bg-black on-top" tabindex="1">
      <div class="fittext-container">
        <FitText id="congratulations">Congratulations!</FitText>
        <FitText>You just scrolled through</FitText>
        <FitText>450 YEARS</FitText>
      </div>
    </div>
    <div class="step bg-black on-top full-height-and-width" tabindex="2">
      <div class="fittext-container">
        <FitText>A bottle made in {{ scrollStore.get("yearZero") }}</FitText>
        <FitText>disintegrates in {{ scrollStore.get("yearEnd") }}</FitText>
      </div>
    </div>
    <SpacerHalfScreen></SpacerHalfScreen>
    <div class="step bg-black on-top full-height-and-width" tabindex="3">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText style="line-height: 1.1em"
            >Though its pieces<br />will never biodegrade<br /><span
              class="small-fittext"
              >(even if it’s recycled)</span
            >
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
    <div class="step bg-black on-top" tabindex="4">
      <div class="fittext-container">
        <FitText>While we’re on the subject,</FitText>
      </div>
      <div class="fittext-container">
        <FitText>did you know…</FitText>
      </div>
    </div>
    <SpacerHalfScreen />
    <div class="step bg-black on-top" tabindex="5">
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
    <div class="step bg-black on-top" tabindex="6">
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
    <div class="step bg-black on-top" tabindex="7">
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
    <div class="step bg-black on-top" tabindex="8">
      <div class="text-over-image-container">
        <div class="text-container">
          <FitText
            >&nbsp;&nbsp;&nbsp;&nbsp;NEVER&nbsp;&nbsp;&nbsp;&nbsp;
          </FitText>
        </div>
        <div class="image-container">
          <img
            srcset="
              /img/styrofoam.08.vert.jpg 1024w,
              /img/styrofoam.08.jpg      1800w
            "
            sizes="(max-width: 600px) 1024w, 1800w"
            src="/img/styrofoam.08.jpg"
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
  ref,
  computed,
  useRoute,
} from "@nuxtjs/composition-api";

import { playMovie } from "~/composables/mode/movie";
import APP from "~/data/constants/app";
import scrollStore from "~/data/store/scroll";
import disintegratedStore from "~/data/store/disintegrated";
import YearDisintegrated from "~/components/year-disintegrated.vue";
import VideoContainer from "~/components/video-container.vue";
import Commentary from "~/components/commentary.vue";
import FitText from "~/components/vendor/FitText.vue";
import Credits from "~/components/credits.vue";
import SpacerHalfScreen from "~/components/spacer/half-screen.vue";
import {
  handleTab,
  tabbedTo100pctShortenHeightNow,
} from "~/composables/handle/tab";

import {
  isMobile,
  windowWidth,
  handleResize,
} from "~/composables/handle/resize";
import {
  handleContainerIntersection,
  handleCongratulationsIntersection,
  containerOptions,
  congratulationsOptions,
  scrollingUpAndCongratulationsHasLeftTheScreen,
} from "~/composables/handle/interactionObserver";

import { handleScroll } from "~/composables/handle/scroll";

export default defineComponent({
  components: {
    YearDisintegrated,
    VideoContainer,
    Commentary,
    FitText,
    Credits,
    SpacerHalfScreen,
  },
  setup() {
    // routing
    const route = useRoute();
    const slug = computed(() => route.value.params.slug);

    // set initial scrollState values
    const yearStart: number = slug.value
      ? Math.floor(parseInt(slug.value))
      : new Date().getFullYear();
    scrollStore.set("yearZero", new Date().getFullYear());
    scrollStore.set("yearAtCurrentScroll", yearStart);
    scrollStore.set("yearEnd", yearStart + APP.YEARS_TILL_DISINTEGRATION);
    scrollStore.set("previousScrollPosition", 0);
    scrollStore.set("currentScrollPosition", 0);
    scrollStore.set("debug", false);
    disintegratedStore.set("year", yearStart);

    // html refs
    const container = ref();

    onMounted(() => {
      if (APP.MOVIE_MODE) playMovie();
      document.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      window.addEventListener("keydown", handleTab);
      isMobile.value = window.innerWidth <= APP.MOBILE_WIDTH;
      windowWidth.value = window.innerWidth;
      window.setInterval(function () {
        scrollStore.set("isScrolling", false);
      }, 1000);

      scrollStore.set(
        "yearZeroScrollTop",
        (window.pageYOffset || document.documentElement.scrollTop) -
          (document.documentElement.clientTop || 0) +
          window.innerHeight
      );

      const containerObserver = new IntersectionObserver(
        handleContainerIntersection,
        containerOptions
      );
      const congratulationsObserver = new IntersectionObserver(
        handleCongratulationsIntersection,
        congratulationsOptions
      );
      containerObserver.observe(container.value);

      // annoyingly need to use query selector here bc cannot affix ref to <Fittext> component; doesn't work; and that's where the id needs to be for back-scrolling purposes when tabbing backwards
      congratulationsObserver.observe(
        // @ts-ignore
        document.querySelector("#congratulations")
      );
    });

    // once reach 100% via scroll, shorten container to currentScrollPosition to bring up Congratulations!
    watch(
      disintegratedStore.state,
      (state) => {
        if (
          scrollStore.get("isScrolling") &&
          state.percentDisintegrated >= APP.STOP_AT_PERCENTAGE
        ) {
          // console.log("shortening container via scroll");
          container.value!.style.height =
            String(scrollStore.get("currentScrollPosition")) + "px";
        }
      },
      { deep: true }
    );

    // if scrolling backwards and congrats has left the screen, reset container height to default
    watch(
      () => scrollingUpAndCongratulationsHasLeftTheScreen.value,
      (value) => {
        if (value === true) {
          // console.log("resetting container to default");
          container.value!.style.height = "500000px";
          scrollingUpAndCongratulationsHasLeftTheScreen.value = false;
        }
      }
    );
    // if tabbed to 100%, shorten container to "reasonable" amount, otherwise chrome freaks the fuck out
    watch(
      () => tabbedTo100pctShortenHeightNow.value,
      (value) => {
        if (value) {
          // console.log("shortening container from tab ");
          container.value!.style.height = "2500px";
          tabbedTo100pctShortenHeightNow.value = false;
        }
      }
    );
    return {
      container,
      isMobile,
      scrollStore,
      APP,
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
  height: 500000px
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
    width: 100%

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
        &.small-fittext
          font-size: .65em

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

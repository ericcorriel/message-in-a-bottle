<template>
  <div>
    <div id="container" ref="container" class="container">
      <div id="step1" class="step">
        <VideoContainer :use-vimeo="false" />
        <YearDisintegrated />
        <Commentary :is-mobile="isMobile" />
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
        <FitText>While we’re on the subject,</FitText>
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
  isMobile,
  windowWidth,
  handleResize,
} from "~/composables/handle/resize";
import {
  handleIntersection,
  options,
} from "~/composables/handle/interactionObserver";
import { handleTab } from "~/composables/handle/tab";
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

      const observer = new IntersectionObserver(handleIntersection, options);
      // @ts-ignore
      observer.observe(document.querySelector("#container"));
      scrollStore.set(
        "yearZeroScrollTop",
        (window.pageYOffset || document.documentElement.scrollTop) -
          (document.documentElement.clientTop || 0) +
          window.innerHeight
      );
    });

    // once reach 100% do not waste resources calculating new values
    watch(
      disintegratedStore.state,
      (state) => {
        if (state.percentDisintegrated >= APP.STOP_AT_PERCENTAGE) {
          container.value!.style.height =
            String(scrollStore.get("currentScrollPosition")) + "px";
          scrollStore.set("scrollValuesFrozen", true);
        }
      },
      { deep: true }
    );

    return {
      container,
      isMobile,
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

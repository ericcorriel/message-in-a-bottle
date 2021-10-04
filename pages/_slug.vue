<template>
  <div>
    <div id="container" ref="container" class="container">
      <div id="step1" ref="step1" class="step">
        <VideoContainer
          :current-video-time="currentVideoTime"
          :use-vimeo="false"
          :vimeo-id="APP.VIMEO_ID"
          :filename="APP.VIDEO_FILENAME"
        />
        <YearDisintegrated
          :disintegrated="percentDisintegrated"
          :year="yearAsInt"
        />
        <Commentary :year="yearAsInt" :is-mobile="isMobile" />
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
  Ref,
  ref,
  UnwrapRef,
  computed,
  useRoute,
} from "@nuxtjs/composition-api";

import {
  APP,
  scrollSpeeds,
  ScrollSpeed,
  SCROLL_DIRECTION,
  // @ts-ignore
} from "~/data/constants.ts";

// @ts-ignore
import stateMachine, { ScrollState } from "~/data/state.ts";
import YearDisintegrated from "~/components/year-disintegrated.vue";
import VideoContainer from "~/components/video-container.vue";
import Commentary from "~/components/commentary.vue";
import FitText from "~/components/vendor/FitText.vue";
import Credits from "~/components/credits.vue";
import SpacerHalfScreen from "~/components/spacer/half-screen.vue";

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
    // app stuff
    const route = useRoute();
    const slug = computed(() => route.value.params.slug);

    // scrolling stuff
    let yearAtCurrentScroll: number = slug.value
      ? Math.floor(parseInt(slug.value))
      : new Date().getFullYear();

    // set initial state values
    stateMachine.set({
      yearZero: yearAtCurrentScroll,
      yearAtCurrentScroll,
      yearEnd: yearAtCurrentScroll + APP.YEARS_TILL_DISINTEGRATION,
      previousScrollPosition: 0,
      currentScrollPosition: 0,
      percentDisintegrated: 0,
      debug: false,
    });

    // vfx stuff
    const currentVideoTime: Ref<UnwrapRef<number>> = ref(0);
    const yearAsInt: Ref<UnwrapRef<number>> = ref(yearAtCurrentScroll);
    const percentDisintegrated: Ref<UnwrapRef<number>> = ref(0.0);

    // html stuff
    const container = ref();

    // responsive stuff
    const isMobile: Ref<UnwrapRef<Boolean>> = ref(false);
    const windowWidth: Ref<UnwrapRef<Number>> = ref(0);

    function handleScroll() {
      /*
       * When scrolling down, .container should be of infinite height (1,000,000px) and scrollAmount gets incremented according to scrollSpeeds arr. It is unknown how many scrolls will be necessary to get to 100%–varies widely based on screen height, frequency of scrolls, and how the browser interprets numPixelsToScroll based on swipe
       * When scrolling up however, the num pixels needed to scroll to get to yearZero is known and need to avoid situation where we run out of road before getting back to yearZero. so numPixelsToScrollToYearZero needs to be calculated and the amountToIncrement divided up accordingly
       * So amountToIncrement has one set of values going down (determined by scrollSpeeds) but another set of values going up
       * EDGE CASES
       * Once 100% is reached, scroll values are no longer calculated
       */

      // get yearDelta based on percent disintegrated
      const res: ScrollSpeed[] = scrollSpeeds.filter(
        (x: ScrollSpeed) => x.percentDisintegrated >= percentDisintegrated.value
      );
      const yearDelta = res[0]?.speed ? res[0].speed : 0;
      const currentScrollPosition =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0) +
        window.innerHeight;

      // set currentScrollPosition and yearDelta
      stateMachine.set({
        currentScrollPosition,
        yearDelta,
        scrollDirection:
          currentScrollPosition === stateMachine.state.previousScrollPosition
            ? stateMachine.state.scrollDirection
            : currentScrollPosition > stateMachine.state.previousScrollPosition
            ? SCROLL_DIRECTION.DOWN
            : SCROLL_DIRECTION.UP,
      });

      const state: ScrollState = stateMachine.state;
      const debug: Boolean = false;

      if (!state.scrollValuesFrozen) {
        if (state.isInNormalScrollingRange) {
          // if scrolling down, add delta to current year
          debug ? console.log(1) : null;
          if (state.scrollDirection === SCROLL_DIRECTION.DOWN)
            yearAtCurrentScroll += yearDelta;
          // if scrolling up subtract .25 if not at yearZero; want to make sure descend at a quicker rate than ascend to ensure don't run out of road scrolling back down (amountLeftToScroll=0 before getting back to yearZeroScrollTop (typically 700ish pixels)
          else if (
            state.scrollDirection === SCROLL_DIRECTION.UP &&
            yearAtCurrentScroll !== state.yearZero
          ) {
            yearAtCurrentScroll -= 0.25;
          }
        }
        // not in normal scrolling range and about to go over 100%
        else if (
          state.scrollDirection === SCROLL_DIRECTION.DOWN &&
          yearAtCurrentScroll + yearDelta > state.yearEnd
        ) {
          debug ? console.log(2) : null;
          yearAtCurrentScroll = state.yearEnd;
        }
        // not in normal scrolling range – don't let year become < currentYear
        else if (
          state.scrollDirection === SCROLL_DIRECTION.UP &&
          yearAtCurrentScroll - state.yearZero <= 0
        ) {
          // disintegrated.value = 0; reset container height
          debug ? console.log(3) : null;
          yearAtCurrentScroll = state.yearZero;
          container.value!.style.height = "1000000px";
        }
        // only update year and percent if not at beginning or end
        if (
          yearAtCurrentScroll <= state.yearEnd &&
          yearAtCurrentScroll >= state.yearZero
        ) {
          debug ? console.log(4) : null;
          percentDisintegrated.value =
            ((yearAtCurrentScroll - state.yearZero) /
              APP.YEARS_TILL_DISINTEGRATION) *
            100;
          yearAsInt.value = Math.floor(yearAtCurrentScroll);
          currentVideoTime.value = (percentDisintegrated.value * 60) / 100;
        }
      }
      stateMachine.set({
        yearAtCurrentScroll,
        previousScrollPosition: state.currentScrollPosition,
      });
    }

    onMounted(() => {
      if (APP.MOVIE_MODE) {
        // movie mode > scroll through credits > when year is complete: console> setInterval(function(){window.scrollBy(0,1)},10)
        setInterval(function () {
          handleScroll();
        }, 100);
      }
      document.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      isMobile.value = window.innerWidth <= APP.MOBILE_WIDTH;

      stateMachine.set({
        yearZeroScrollTop:
          (window.pageYOffset || document.documentElement.scrollTop) -
          (document.documentElement.clientTop || 0) +
          window.innerHeight,
      });

      const target = document.querySelector("#container");

      // @ts-ignore
      function handleIntersection(entries) {
        // @ts-ignore
        entries.map((entry) => {
          if (entry.isIntersecting) {
            // console.log("VISIBLE");
            stateMachine.state.scrollValuesFrozen = false;
          } else {
            // console.log("INVISIBLE");
            stateMachine.state.scrollValuesFrozen = true;
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

    // once reach 100% do not waste resources calculating new values
    watch(percentDisintegrated, (value) => {
      if (value >= APP.STOP_AT_PERCENTAGE) {
        container.value!.style.height =
          stateMachine.state.currentScrollPosition + "px";
        stateMachine.state.scrollValuesFrozen = true;
      }
    });

    function handleResize() {
      isMobile.value = window.innerWidth <= APP.MOBILE_WIDTH;
      windowWidth.value = window.innerWidth;

      stateMachine.set({
        yearZeroScrollTop:
          (window.pageYOffset || document.documentElement.scrollTop) -
          (document.documentElement.clientTop || 0) +
          window.innerHeight,
      });
    }

    return {
      yearAsInt,
      percentDisintegrated,
      container,
      currentVideoTime,
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

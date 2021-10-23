<template>
  <div class="row-fixed text-container top">
    <h1>
      <span class="body-copy" aria-live="polite">It’s </span>
      <span id="year" class="number-text">{{ mutableYear }}</span>
      <span class="body-copy">and this bottle is </span>
      <span id="disintegrated-percent" class="number-text"
        >{{ (Math.round(mutableDisintegrated * 100) / 100).toFixed(1) }}%</span
      >
      <span id="disintegrated-word" class="body-copy">disintegrated</span>
    </h1>
  </div>
</template>

<script>
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
import { currentTabIndex } from "~/composables/handle/tab";
import { commentaries } from "~/data/commentaries";

// @ts-ignore
import scrollMachine from "~/data/scrollState.ts";
import {
  APP,
  // @ts-ignore
} from "~/data/constants.ts";
import { calculatePercentDisintegrated } from "~/composables/calculate/percentDisintegrated";
export default defineComponent({
  name: "YearDisintegrated",
  props: {
    year: { type: Number, default: new Date().getFullYear() },
    disintegrated: { type: Number, default: 0 },
  },
  setup(props) {
    const mutableYear = ref(props.year);
    const mutableDisintegrated = ref(props.disintegrated);

    watch(
      () => props.year,
      (value) => {
        mutableYear.value = value;
      }
    );

    watch(
      () => props.disintegrated,
      (value) => {
        mutableDisintegrated.value = value;
      }
    );

    watch(
      () => currentTabIndex.value,
      (value) => {
        const res = commentaries.filter(
          (commentaryType) => commentaryType.tabIndex === value
        );
        if (res[0]?.year) {
          mutableYear.value = res[0].year;
          mutableDisintegrated.value = calculatePercentDisintegrated(
            res[0].year
          );
          scrollMachine.set({
            yearAtCurrentScroll: res[0].year,
          });
        }
      }
    );
    return {
      mutableYear,
      mutableDisintegrated,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/app"
.text-container
  font-size: 10vw
  line-height: 0

  .body-copy
    -webkit-text-stroke: 1px $bg-color
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 8vw

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 8vw

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 6vw

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 4vw

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 2.9vw

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 2.5vw


  #year
    font-size: 20vw
    line-height: .75em
    letter-spacing: -3px
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 28vw

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 28vw

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 22vw

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 20vw
      letter-spacing: -5px
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 10vw
      letter-spacing: -6px
    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 11vw
      letter-spacing: -8px

  #disintegrated-percent
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    font-size: 18vw

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 16vw

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 11vw

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 10vw

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 7vw

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 6vw
  #disintegrated-word
    padding-left: 5px
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      padding-left: 11px
  &.top
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      top: 5vh
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      top: 0
    align-items: center

  .number-text
    font-family: monspaceNumbers
    display: inline-block
</style>

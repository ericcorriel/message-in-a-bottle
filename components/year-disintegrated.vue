<template>
  <div class="row-fixed text-container top">
    <h1>
      <span class="body-copy">It’s </span>
      <span id="year" class="number-text">{{ yearAsInt }}</span>
      <span class="body-copy">and this bottle is</span>
      <span id="disintegrated" class="number-text"
        >{{ (Math.round(disintegrated * 100) / 100).toFixed(2) }}%</span
      >
      <span class="body-copy">disintegrated</span>
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "YearDisintegrated",
  props: {
    yearAsInt: { type: Number, default: new Date().getFullYear() },
    disintegrated: { type: Number, default: 0 },
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
    line-height: 0
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 28vw

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 28vw

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 22vw

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 20vw

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 10vw

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 11vw

  #disintegrated
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

  &.top
    top: 4vh
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      top: 10vh
    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      top: 4vh
    align-items: center

  .number-text
    font-family: "Azeret Mono"
</style>

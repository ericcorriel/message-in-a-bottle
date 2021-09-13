<template>
  <div class="row-fixed text-container top">
    <h1>
      <span class="body-copy">It’s </span>
      <span id="year" class="number-text">{{ yearAsInt }}</span
      ><span class="body-copy">and this bottle is</span>
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
@import "/assets/styles/v1/styles"
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
.text-container
  font-size: 2.5rem
  line-height: 0
  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    font-size: 2.5rem

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    font-size: 2rem

  @include media-breakpoint-up(xxxl, $v1-grid-breakpoints)
    font-size: 2.5rem
  #year
    font-size: 20rem
    line-height: 0
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 20rem

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 20rem

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 20rem

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 20rem

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 20rem

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(xxxl, $v1-grid-breakpoints)
      font-size: 20rem

  #disintegrated
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    font-size: 10rem

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 10rem

    @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(xxxl, $v1-grid-breakpoints)
      font-size: 10rem
  &.top
    top: 0
    align-items: flex-end
  .number-text
    font-family: "Azeret Mono"
</style>

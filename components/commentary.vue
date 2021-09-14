<template>
  <div class="row-fixed text-container bottom">
    <h2 id="commentary">{{ commentary }}</h2>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Commentary",
  props: {
    commentary: { type: String, default: "" },
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/styles"
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
.row-fixed.text-container
  #commentary
    font-size: 6rem
    line-height: 1em
    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 6rem

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 4rem

    @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
      font-size: 3.5rem

    @include media-breakpoint-up(xxxl, $v1-grid-breakpoints)
      font-size: 13vw
  &.bottom
    top: 75vh
    align-items: baseline
</style>

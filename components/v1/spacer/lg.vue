<template>
  <div class="spacer-lg spacer row" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SpacerLg'
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"

.spacer-lg
  display: block
  width: 100%

  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    height: 50px

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    height: 55px

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    height: 60px

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    height: 50px

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    height: 60px

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    height: 100px

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    height: 105px

</style>

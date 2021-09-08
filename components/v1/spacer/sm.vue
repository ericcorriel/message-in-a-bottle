<template>
  <div class="spacer-sm spacer row" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SpacerSm'
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"

.spacer-sm
  display: block
  width: 100%

  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    height: 15px

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    height: 18px

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    height: 15px

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    height: 15px

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    height: 15px

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    height: 20px

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    height: 30px

</style>

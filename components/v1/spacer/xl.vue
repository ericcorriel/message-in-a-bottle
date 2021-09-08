<template>
  <div class="spacer-xl spacer row" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SpacerXl'
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"

.spacer-xl
  display: block
  width: 100%

  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    height: 65px

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    height: 70px

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    height: 85px

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    height: 100px

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    height: 120px

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    height: 140px

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    height: 160px

</style>

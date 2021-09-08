<template>
  <div class="spacer-md spacer row" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SpacerMd'
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"

.spacer-md
  display: block
  width: 100%

  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    height: 30px

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    height: 34px

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    height: 35px

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    height: 35px

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    height: 40px

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    height: 50px

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    height: 75px

</style>

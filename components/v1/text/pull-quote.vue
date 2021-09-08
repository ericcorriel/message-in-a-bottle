<template>
  <div class="pull-quote-container">
    <spacerLg />
    <blockquote class="pull-quote row">
      <slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut haec tibi, Torquate</slot>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import spacerLg from '~/components/v1/spacer/lg'

export default defineComponent({
  name: 'PullQuote',
  components: { spacerLg }
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.pull-quote-container
  display: flex
  flex-direction: column
  align-items: flex-start

  @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
    padding: 0

  @include media-breakpoint-up(xs, $v1-grid-breakpoints)
    padding: 0 18px

  @include media-breakpoint-up(sm, $v1-grid-breakpoints)
    padding: 0

  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    padding: 0 27px

  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    padding: 0 88px

  @include media-breakpoint-up(xl, $v1-grid-breakpoints)
    padding: 0 88px

  @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
    padding: 0 85px

  .pull-quote
    color: $black
    text-align: center
    position: relative
    @include verlag-bold

    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      max-width: 85%
      font-size: 26px

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      max-width: 340px
      font-size: 28px

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      max-width: 442px
      font-size: 32px

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      max-width: 672px
      font-size: 36px

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      max-width: 760px
      font-size: 40px

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      max-width: 986px
      font-size: 52px

    @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
      max-width: 1150px
      font-size: 58px

.dark .pull-quote
  color: $white

</style>

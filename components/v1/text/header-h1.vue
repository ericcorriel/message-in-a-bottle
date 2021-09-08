<template>
  <div class="headerH1-container" :class="textColor">
    <spacerXl />
    <h1 class="header-subheader-container">
      <span class="header"><slot name="header" /></span>
      <span class="subheader"><slot name="subheader" /></span>
    </h1>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import spacerXl from '~/components/v1/spacer/xl'

export default defineComponent({
  name: 'HeaderH1',
  components: { spacerXl },
  props: {
    textColor: { type: String, default: 'black' }
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.dark .headerH1-container
  border-bottom: 1px solid white
  color: $white

.headerH1-container
  @include v1-content-width
  border-bottom: 1px solid black
  color: $black

  .header-subheader-container
    display: flex
    align-items: flex-start
    text-transform: uppercase

    .header
      @include tungsten-narrow-bold

      @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
        letter-spacing: .5px
        font-size: 42px
        line-height: 17px

      @include media-breakpoint-up(xs, $v1-grid-breakpoints)
        letter-spacing: .65px
        font-size: 56px
        line-height: 27px

      @include media-breakpoint-up(sm, $v1-grid-breakpoints)
        letter-spacing: .77px
        font-size: 66px
        line-height: 34px

      @include media-breakpoint-up(md, $v1-grid-breakpoints)
        letter-spacing: .84px
        font-size: 72px
        line-height: 40px

      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        letter-spacing: 1.02px
        font-size: 88px
        line-height: 52px

      @include media-breakpoint-up(xl, $v1-grid-breakpoints)
        letter-spacing: 1.18px
        font-size: 102px
        line-height: 66px

      @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
        letter-spacing: 1.3px
        font-size: 112px
        line-height: 69px

    .subheader
      @include tungsten-narrow-extralight

      @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
        font-size: 42px
        line-height: 17px

      @include media-breakpoint-up(xs, $v1-grid-breakpoints)
        font-size: 56px
        line-height: 27px

      @include media-breakpoint-up(sm, $v1-grid-breakpoints)
        font-size: 66px
        line-height: 34px

      @include media-breakpoint-up(md, $v1-grid-breakpoints)
        font-size: 72px
        line-height: 40px

      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        font-size: 88px
        line-height: 52px

      @include media-breakpoint-up(xl, $v1-grid-breakpoints)
        font-size: 102px
        line-height: 66px

      @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
        font-size: 112px
        line-height: 69px

</style>

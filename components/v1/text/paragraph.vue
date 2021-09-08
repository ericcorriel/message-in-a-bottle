<template>
  <div class="paragraph-container">
    <spacerSm v-if="_spacer==SPACER.SM" />
    <spacerMd v-else />
    <p>
      <slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut haec tibi, Torquate</slot>
    </p>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import spacerMd from '~/components/v1/spacer/md'
import spacerSm from '~/components/v1/spacer/sm'
import { SPACER } from '~/data/v1/constants'

export default defineComponent({
  name: 'Paragraph',
  components: { spacerMd, spacerSm },
  props: {
    spacer: { type: String, default: SPACER.MD }
  },
  setup (props) {
    const _spacer = computed(() => props.spacer)

    return {
      SPACER,
      _spacer
    }
  }

})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.paragraph-container
  @include v1-content-width
  p
    color: $black
    @include verlag-book

    @include media-breakpoint-up(xxs, $v1-grid-breakpoints)
      font-size: 18px
      line-height: 26px

    @include media-breakpoint-up(xs, $v1-grid-breakpoints)
      font-size: 20px
      line-height: 30px

    @include media-breakpoint-up(sm, $v1-grid-breakpoints)
      font-size: 24px
      line-height: 32px

    @include media-breakpoint-up(md, $v1-grid-breakpoints)
      font-size: 24px
      line-height: 38px

    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: 28px
      line-height: 38px

    @include media-breakpoint-up(xl, $v1-grid-breakpoints)
      font-size: 32px
      line-height: 42px
      max-width: 1024px

    @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
      font-size: 34px
      line-height: 47px
      max-width: 1100px

.dark .paragraph-container
  p
    color: $white

</style>

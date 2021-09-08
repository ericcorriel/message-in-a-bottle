<template>
  <button class="nav-button" :class="theme">
    <nuxtLink to="/about">
      {{ name }}
    </nuxtLink>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { THEME } from '~/data/v1/constants'

export default defineComponent({
  name: 'NavButtonSubscribeContact',
  props: {
    name: { type: String, default: 'Button Name' },
    theme: { type: String, default: THEME.DARK }
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.dark .nav-button
  color: $white
.nav-button
  @include tungsten-narrow-bold
  position: relative
  text-align: center
  text-transform: uppercase
  line-height: 0
  border-width: 0px
  background-color: transparent
  color: $black
  order: 0
  flex: 0 1 auto
  align-self: auto
  &:first-child
    padding-left: 0
  &:hover
    text-decoration: underline
  &.dark
    background-color: $black
    color: $white

  height: 33px
  padding: 4px 14px 5px
  font-size: 33px

</style>

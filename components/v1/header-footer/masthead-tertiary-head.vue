<template>
  <h3 class="tertiary-text">
    <slot name="tertiaryText">
      File portraits by Eric Corriel
    </slot>
  </h3>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MastheadTertiaryHead'
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/fonts-and-colors"

.dark .tertiary-text
  color: $white

.tertiary-text
  color: $black
  @include verlag-book
  text-align: center
  margin: 7px auto
  font-size: 21px
  line-height: 36px
</style>

<template>
  <div class="rule-line" :class="className" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'RuleLine',
  props: {
    width: { type: Number, default: 100 },
    className: { type: String, default: '' }
  }
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.dark .rule-line
  background-color: $white

.rule-line
  position: relative
  display: block
  height: 2px
  border: 0
  background-color: $black
  margin: 0 auto
  padding: 0
  width: 100%
  &.subhead
    width: 85%
</style>

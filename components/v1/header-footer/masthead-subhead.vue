<template>
  <div class="masthead-subhead-container">
    <h2 class="subhead-text">
      <slot name="subhead">
        Imagine you could shrink yourself down small enough to
        swim around your hard drive and meet your files face
        to face.<br>
        What would you see?
      </slot>
    </h2>
    <ruleLine class-name="subhead" />
  </div>
</template>

<script>
import ruleLine from '@/components/v1/content-width/rule-line'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MastheadSubhead',
  components: {
    ruleLine
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/fonts-and-colors"

.dark .masthead-subhead-container
  color: $white

.masthead-subhead-container

  color: $black
  .subhead-text
    @include verlag-book
    max-width: 830px
    text-align: center
    margin: 15px auto
    font-size: 35px
    line-height: 45px
</style>

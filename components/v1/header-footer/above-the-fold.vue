<template>
  <div id="above-the-fold" :attr="_portrait.name" :class="[_portrait.category]">
    <slot name="masthead" />
    <slot name="subhead" />
    <slot name="tertiaryhead" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, onMounted, onUpdated, onBeforeMount, ref } from '@nuxtjs/composition-api'
import { FILE_TYPES_GRADIENTS } from '~/entity/v1/file-gradient'
import { Portrait } from '~/entity/v1/portrait'

export default defineComponent({
  name: 'AboveTheFold',
  props: {
    portrait: { type: Portrait, default: new Portrait({}) }
  },
  setup (props) {
    const _portrait:Portrait = props.portrait
    const gradientTo = ref('')

    onBeforeUpdate(() => {
      // do not have access to hydrated portait on hard refresh/initial load
      console.log('above-the-fold.vue: onBeforeUpdate: _portrait.name = ' + _portrait.name)
      gradientTo.value = _portrait.name
    })

    return {
      gradientTo,
      _portrait,
      props
    }
  }
})

</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"
@import "/assets/styles/v1/bootstrap/overrides"
.dark #above-the-fold
  background-color: $black
.default #above-the-fold, .light #above-the-fold
  background-color: var(--color)

@mixin aboveTheFold

</style>

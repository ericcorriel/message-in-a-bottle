<template>
  <div id="top-level" :class="uiState.getTheme.value">
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import uiState from '~/data/v1/state'

export default defineComponent({
  name: 'Default.vue',
  components: {
    uiState
  },
  setup () {
    return { uiState }
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

</style>

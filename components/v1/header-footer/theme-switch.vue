<template>
  <div class="theme-switch-container" @click="uiState.toggleTheme()">
    <div v-if="uiState.getTheme.value===THEME.DARK" class="pill-container">
      <font-awesome-icon id="sun-moon-icon" :icon="['far', 'brightness']" />
      <div class="switch" />
    </div>
    <div v-else class="pill-container">
      <font-awesome-icon id="sun-moon-icon" :icon="['far', 'moon']" />
      <div class="switch" />
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from '@nuxtjs/composition-api'
import { THEME } from '@/data/v1/constants'
import uiState from '~/data/v1/state.js'

export default defineComponent({
  name: 'ThemeSwitch',
  components: {
    FontAwesomeIcon,
    uiState,
    THEME
  },
  setup () {
    return { uiState, THEME }
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"
.theme-switch-container
  padding: 3px 1px 1px
  width: 65px
  position: relative
  text-align: right

  .pill-container
    background-color: $white
    border-radius: 14px
    padding: 3px
    border: 1px solid $black
    display: flex
    flex-direction: row
    align-items: center

    .switch
      width: 22px
      height: 22px
      background-color: $body-dark-gray
      border-radius: 50%

    #sun-moon-icon
      color: $black
      text-align: center
      margin-right: 10px
      font-size: 21px

</style>

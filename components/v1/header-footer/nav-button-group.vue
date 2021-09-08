<template>
  <nav class="nav-button-group-container">
    <div class="group-left">
      <navButton name="About" theme="theme" />
      <navButton name="FAQ" theme="theme" />
      <navButton name="Subscribe/Contact" theme="theme" />
      <navButton name="Commission" theme="theme" />
      <themeSwitch class="group-right" />
    </div>
    <ruleLine />
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import navButton from '~/components/v1/header-footer/nav-button'
import ruleLine from '~/components/v1/content-width/rule-line'
import themeSwitch from '~/components/v1/header-footer/theme-switch'
import uiState from '~/data/v1/state'

export default defineComponent({
  name: 'NavButtonGroup',
  components: {
    navButton,
    ruleLine,
    themeSwitch,
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

.nav-button-group-container
  @include v1-content-width
  .group-left
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: stretch
    align-items: flex-start

  .group-right
    display: flex
    order: 0
    flex: 1 1 auto
    align-self: auto
    text-align: right
    justify-content: flex-end
</style>

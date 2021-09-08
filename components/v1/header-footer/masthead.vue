<template>
  <header class="container">
    <enterTheMachine />
    <navButtonGroup />
  </header>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import enterTheMachine from '@/components/v1/header-footer/enter-the-machine'
import navButtonGroup from '@/components/v1/header-footer/nav-button-group'

export default defineComponent({
  name: 'Masthead',
  components: {
    enterTheMachine,
    navButtonGroup
  }
})
</script>

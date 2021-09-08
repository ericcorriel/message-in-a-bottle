<template>
  <div id="enter-the-machine">
    <spacerMd />
    <h1>
      <NuxtLink to="/v1">
        Enter The Machine
      </NuxtLink>
    </h1>
    <ruleLine />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ruleLine from '@/components/v1/content-width/rule-line'
import spacerMd from '@/components/v1/spacer/md'

export default defineComponent({
  name: 'Masthead',
  components: {
    spacerMd,
    ruleLine
  }
})
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"

.dark #enter-the-machine h1, .dark #enter-the-machine h1 a
  color: $white

#enter-the-machine
  h1
    @include tungsten-narrow-bold
    margin: 0
    padding: 0
    color: $black
    font-size: 203.75px
    text-transform: uppercase
    line-height: 150px
    letter-spacing: -2px
    width: 100%

    a
      color: $black
      text-decoration: none
</style>

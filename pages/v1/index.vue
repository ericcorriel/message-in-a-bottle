<template>
  <div class="container-fluid g-0">
    <aboveTheFold :portrait="portrait" :data="data">
      <template #masthead>
        <masthead />
      </template>
      <template #subhead>
        <mastheadSubhead />
      </template>
      <template #tertiaryhead>
        <mastheadTertiaryHead />
      </template>
    </aboveTheFold>

    <headerH1 text-color="black">
      <template #header>
        Portrait.name
      </template>
      <template #subheader>
        {{ portrait.name }}
      </template>
    </headerH1>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, reactive, onBeforeUpdate, useRoute, onBeforeMount, onUpdated, onMounted } from '@nuxtjs/composition-api'
import headerH1 from '@/components/v1/text/header-h1.vue'
import mastheadSubhead from '@/components/v1/header-footer/masthead-subhead.vue'
import mastheadTertiaryHead from '@/components/v1/header-footer/masthead-tertiary-head.vue'
import masthead from '@/components/v1/header-footer/masthead.vue'
import { SPACER, THEME } from '@/data/v1/constants'
import paragraph from '@/components/v1/text/paragraph.vue'
import aboveTheFold from '@/components/v1/header-footer/above-the-fold.vue'
import { Portrait } from '@/entity/v1/portrait'
import { fetchV1, fetchV1Cached } from '~/api/v1/fetch-v1'

export default defineComponent({
  components: {
    paragraph,
    headerH1,
    masthead,
    mastheadSubhead,
    mastheadTertiaryHead,
    aboveTheFold
  },
  setup () {
    const { title } = useMeta({ title: 'ETM v1' })

    const portrait: Portrait = reactive(new Portrait({}))
    // const { response, error, data, loading } = fetchV1Cached('01.jpg-file-portrait.json', '/v1/portrait/01.jpg-file-portrait.json')
    const { response, error, data, fetch, loading } = fetchV1('/v1/portrait/01.jpg-file-portrait.json')

    onBeforeUpdate(() => {
      portrait.hydrate(data.value)
      // console.log('index.vue - onBeforeUpdate: portrait.name = ' + portrait.name)
      // console.log(data)
    })

    return {
      title,
      portrait,
      data // need to return data for it to be reactive and accessible in onBeforeUpdate
    }
  },
  head: {}

})

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>

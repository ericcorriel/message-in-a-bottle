<template>
  <div class="container">
    <p>COUNT: {{ count }} | {{ doubleCount }}</p>
    <button @click="incrementCount">
      Add
    </button>
    <div>Slug: {{ slug }}</div>
    <NuxtLink to="/v1/01.jpg-file-portrait">
      01.jpg
    </NuxtLink>
    <NuxtLink to="/v1/02.jpg-file-portrait">
      02.jpg
    </NuxtLink>
    <div v-if="$fetchState.pending">
      LOADING
    </div>
    <div v-else-if="$fetchState.error">
      <p>{{ $fetchState.error.message }}</p>
      <p>{{ $fetchState.error.config }}</p>
    </div>
    <div v-else>
      {{ portraitData }}
    </div>
    <paragraph>
      Hitting profile - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Sed ad haec, nisi molestum est, habeo quae velim. Quare ad ea primum, si videtur; Uterque enim summo bono fruitur, id est voluptate. Recte, inquit, intellegis. Verba tu fingas et ea dicas, quae non sentias?
    </paragraph>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, computed, ref, useRoute, useFetch, onBeforeMount, watch } from '@nuxtjs/composition-api'
import axios from 'axios'
import paragraph from '~/components/v1/text/paragraph.vue'

export default defineComponent({
  components: {
    paragraph
  },
  setup () {
    const route = useRoute()
    const slug = computed(() => route.value.params.slug)
    const portraitData = ref({})

    const { fetch, fetchState } = useFetch(async () => {
      console.log('fetching!')
      portraitData.value = await axios.get('/v1/portrait/' + slug.value + '.json')
    })

    // Manually trigger a refetch
    fetch()

    // Access fetch error, pending and timestamp
    fetchState
    console.log(portraitData)

    // You could also provide an initial value.
    const { title } = useMeta({ title: 'My page' })
    const count = ref(1)

    // read-only
    const doubleCount = computed(() => count.value * 2)

    function incrementCount () {
      count.value++
    }
    return {
      count,
      doubleCount,
      incrementCount,
      slug,
      portraitData
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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

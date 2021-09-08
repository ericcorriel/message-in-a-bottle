<template>
  <div class="container">
    <p>COUNT: {{ count }} | {{ doubleCount }}</p>
    <button @click="incrementCount">
      Add
    </button>
    <paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Sed ad haec, nisi molestum est, habeo quae velim. Quare ad ea primum, si videtur; Uterque enim summo bono fruitur, id est voluptate. Recte, inquit, intellegis. Verba tu fingas et ea dicas, quae non sentias?
    </paragraph>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, computed, ref } from '@nuxtjs/composition-api'
import paragraph from '~/components/v1/text/paragraph.vue'
export default defineComponent({
  components: {
    paragraph
  },
  props: {

  },
  setup (props, context) {
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
      incrementCount
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

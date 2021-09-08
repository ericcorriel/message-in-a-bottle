import axios from 'axios'
import { ref, reactive, computed } from '@nuxtjs/composition-api'

// https://www.youtube.com/watch?v=-BYZAO99UVA @ 4'
export const fetchV1 = (url:string, config = { skip: false }) => {
  const data = ref()
  const response = ref()
  const error = ref()
  const loading = ref()

  const fetch = async () => {
    loading.value = true
    try {
      const result = await axios.request({
        url,
        ...config
      })
      response.value = result
      data.value = result.data
    } catch (ex) {
      error.value = ex
    } finally {
      loading.value = false
    }
  }
  !config.skip && fetch()
  return { response, error, data, fetch, loading }
}

export const fetchV1Cached = (key:string, url:string, config:Object = {}) => {
  const cacheMap = reactive(new Map())
  const info = fetchV1(url, { skip: true, ...config })
  const update = () => cacheMap.set(key, info.response.value)
  const clear = () => cacheMap.set(key, undefined)

  const fetch = async () => {
    try {
      await info.fetch()
      update()
    } catch {
      clear()
    }
  }
  const response = computed(() => cacheMap.get(key))
  const data = computed(() => response.value?.data)

  if (response.value == null) { fetch() }

  return { ...info, fetch, response, clear }
}

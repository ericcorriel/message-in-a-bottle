import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Commentary: () => import('../../components/commentary.vue' /* webpackChunkName: "components/commentary" */).then(c => wrapFunctional(c.default || c)),
  VideoContainer: () => import('../../components/video-container.vue' /* webpackChunkName: "components/video-container" */).then(c => wrapFunctional(c.default || c)),
  VideoEmbed: () => import('../../components/video-embed.vue' /* webpackChunkName: "components/video-embed" */).then(c => wrapFunctional(c.default || c)),
  YearDisintegrated: () => import('../../components/year-disintegrated.vue' /* webpackChunkName: "components/year-disintegrated" */).then(c => wrapFunctional(c.default || c)),
  VendorFitText: () => import('../../components/vendor/FitText.vue' /* webpackChunkName: "components/vendor-fit-text" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

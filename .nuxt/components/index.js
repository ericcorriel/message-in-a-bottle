import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Commentary } from '../../components/commentary.vue'
export { default as VideoContainer } from '../../components/video-container.vue'
export { default as VideoEmbed } from '../../components/video-embed.vue'
export { default as YearDisintegrated } from '../../components/year-disintegrated.vue'
export { default as VendorFitText } from '../../components/vendor/FitText.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCommentary = import('../../components/commentary.vue' /* webpackChunkName: "components/commentary" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoContainer = import('../../components/video-container.vue' /* webpackChunkName: "components/video-container" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoEmbed = import('../../components/video-embed.vue' /* webpackChunkName: "components/video-embed" */).then(c => wrapFunctional(c.default || c))
export const LazyYearDisintegrated = import('../../components/year-disintegrated.vue' /* webpackChunkName: "components/year-disintegrated" */).then(c => wrapFunctional(c.default || c))
export const LazyVendorFitText = import('../../components/vendor/FitText.vue' /* webpackChunkName: "components/vendor-fit-text" */).then(c => wrapFunctional(c.default || c))

import { reactive, computed } from '@nuxtjs/composition-api'
import { THEME } from '~/data/v1/constants'

const state = reactive({
  theme: {
    get () {
      return this.value()
    },
    set (theme) {
      this.value = theme
    }
  },
  themeSetByUser: {
    get () {
      return this.value()
    },
    set (hasBeenSetByUser) {
      this.value = hasBeenSetByUser
    }
  }
})

const isDarkMode = computed(function () {
  return (state.theme === THEME.DARK)
})

const isLightMode = computed(function () {
  return (state.theme === THEME.LIGHT)
})

const isThemeSetByUser = computed(function () {
  return state.themeSetByUser
})

const toggleTheme = () => {
  if (state.theme === THEME.DARK) { state.theme = THEME.LIGHT } else if (state.theme === THEME.LIGHT) { state.theme = THEME.DARK } else { throw new Error('Unaccounted for theme') }
}

const getTheme = computed(() => state.theme)

function setTheme (newTheme) {
  state.theme = newTheme
}

function setDefaultThemeForPage (theme) {
  if (isThemeSetByUser.value === false) { setTheme(theme) }
}

setTheme(THEME.DEFAULT)
state.themeSetByUser = false

const uiState = {
//  isDarkMode,
//  isLightMode,
  toggleTheme,
  getTheme,
  setTheme,
  isThemeSetByUser,
  setDefaultThemeForPage
}

export default uiState

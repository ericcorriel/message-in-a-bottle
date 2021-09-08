<template>
  <div class="container">
    <masthead />
    <mastheadSubhead />
    <mastheadTertiaryHead />
    <headerH1 text-color="black">
      <template #header>
        01
      </template>
      <template #subheader>
        Introduction
      </template>
    </headerH1>

    <paragraph :spacer="SPACER.SM">
      <template><font-awesome-icon :icon="['far', 'moon']" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem, inquit, Epicurus ignorat? Quod non subducta utilitatis ratione effici solet, sed ipsum a se oritur et sua sponte nascitur. Sed quid attinet de rebus tam apertis plura requirere? Prodest, inquit, mihi eo esse animo. Duo Reges: constructio interrete. Sed tamen omne, quod de re bona dilucide dicitur, mihi praeclare dici videtur. Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</template>
    </paragraph>
    <pullQuote>
      <span>Causa autem fuit huc veniendi ut <em>quosdam hinc libros</em> promerem duo Reges: constructio interrete.</span>
    </pullQuote>
    <paragraph>
      <template>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem, inquit, Epicurus ignorat? Quod non subducta utilitatis ratione effici solet, sed ipsum a se oritur et sua sponte nascitur. Sed quid attinet de rebus tam apertis plura requirere? Prodest, inquit, mihi eo esse animo. Duo Reges: constructio interrete. Sed tamen omne, quod de re bona dilucide dicitur, mihi praeclare dici videtur. Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</template>
    </paragraph>
    <headerH1 text-color="black">
      <template #header>
        02
      </template>
      <template #subheader>
        In the beginning…
      </template>
    </headerH1>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, ref } from '@nuxtjs/composition-api'
import pullQuote from '@/components/v1/text/pull-quote'
import headerH1 from '@/components/v1/text/header-h1'
import paragraph from '@/components/v1/text/paragraph'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import mastheadSubhead from '@/components/v1/header-footer/masthead-subhead'
import mastheadTertiaryHead from '@/components/v1/header-footer/masthead-tertiary-head'
import masthead from '@/components/v1/header-footer/masthead'
import { SPACER, THEME } from '@/data/v1/constants'

import uiState from '@/data/v1/state'

export default defineComponent({
  components: {
    pullQuote,
    headerH1,
    paragraph,
    masthead,
    mastheadSubhead,
    mastheadTertiaryHead,
    uiState,
    FontAwesomeIcon
  },
  setup () {
    uiState.setDefaultThemeForPage(THEME.LIGHT)
    const count = ref(0)
    function add () {
      this.count++
    }
    return { count, add, uiState, SPACER }
  }
})
</script>

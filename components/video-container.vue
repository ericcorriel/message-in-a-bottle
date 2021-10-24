<template>
  <div class="row-fixed video-container">
    <div class="col">
      <VimeoEmbed
        v-if="useVimeo"
        :current-video-time="mutableCurrentVideoTime"
        :is-scrolling="isScrolling"
      ></VimeoEmbed>
      <HTMLVideoEmbed
        v-else
        :current-video-time="mutableCurrentVideoTime"
      ></HTMLVideoEmbed>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  watch,
  ref,
  onMounted,
} from "@nuxtjs/composition-api";
import VimeoEmbed from "~/components/vimeo-embed.vue";
import HTMLVideoEmbed from "~/components/html-video-embed.vue";
import { currentTabIndex } from "~/composables/handle/tab";
import { calculateCurrentVideoTime } from "~/composables/calculate/currentVideoTime";
import { commentaries } from "~/data/commentaries";
import { calculatePercentDisintegrated } from "~/composables/calculate/percentDisintegrated";
import disintegratedStore from "~/data/state/disintegrated";

export default defineComponent({
  name: "VideoContainer",
  components: { VimeoEmbed, HTMLVideoEmbed },
  props: {
    useVimeo: { type: Boolean, default: false },
  },
  setup() {
    // need mutableCurrentVideoTime bc it can be mutated in two ways: scroll, tab
    const mutableCurrentVideoTime = ref(disintegratedStore.get("videoTime"));

    // this watch is called when percentDisintegrated is mutated onScroll
    watch(
      () => disintegratedStore.state,
      (state) => {
        mutableCurrentVideoTime.value = state.videoTime;
      },
      { deep: true }
    );

    // on tab, find current commentary by tabIndex, get year, calculate percentDisintegrated, calculate currentVideoTime…
    watch(
      () => currentTabIndex.value,
      (value) => {
        const res = commentaries.filter(
          (commentaryType) => commentaryType.tabIndex === value
        );
        if (res[0]?.year) {
          const year = res[0].year;
          const disintegrated = calculatePercentDisintegrated(year);
          mutableCurrentVideoTime.value =
            calculateCurrentVideoTime(disintegrated);
        }
      }
    );

    return {
      mutableCurrentVideoTime,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/app"

.row-fixed.video-container
  top: 5vh
  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    top: 0
  opacity: 1
  height: 100vh
  z-index: 0

  .col
    margin: 0
    padding: 0
    width: 100%
    height: 100%
</style>

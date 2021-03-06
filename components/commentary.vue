<template>
  <div class="row-fixed text-container bottom" aria-live="polite">
    <FitText v-html="commentary"></FitText>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  UnwrapRef,
  watch,
} from "@nuxtjs/composition-api";
import FitText from "~/components/vendor/FitText.vue";
import {
  commentaries,
  setCommentariesTabIndexes,
} from "~/data/constants/commentaries";
import disintegratedStore from "~/data/store/disintegrated";
import { currentTabIndex } from "~/composables/handle/tab";
export default defineComponent({
  name: "Commentary",
  components: {
    FitText,
  },
  props: {
    isMobile: { type: Boolean, default: false },
  },
  setup(props) {
    setCommentariesTabIndexes();
    const commentary: Ref<UnwrapRef<string>> = ref("");

    onMounted(() => {
      commentary.value = getCommentaryByYear(disintegratedStore.get("year"));
    });

    function getCommentaryByYear(year: number): string {
      // default condition
      if (!year || year === new Date().getFullYear()) return "~~Scroll Down~~";
      else {
        const res = commentaries.filter(
          (commentaryType) => commentaryType.year === year
        );

        if (res[0]?.year) {
          // update currentTabIndex every time a new commentary is scrolled to
          currentTabIndex.value = res[0].tabIndex;
          return props.isMobile ? res[0].commentSm : res[0].comment;
        } else return commentary.value;
      }
    }

    function getCommentaryByTabIndex(tabIndex: number): string {
      const res = commentaries.filter(
        (commentaryType) => commentaryType.tabIndex === tabIndex
      );
      if (res[0]?.comment) {
        // update currentTabIndex every time a new commentary is scrolled to
        currentTabIndex.value = res[0].tabIndex;
        return props.isMobile ? res[0].commentSm : res[0].comment;
      } else return commentary.value;
    }

    watch(
      () => disintegratedStore.state,
      (state) => {
        commentary.value = getCommentaryByYear(state.year);
      },
      { deep: true }
    );

    watch(
      () => props.isMobile,
      (value, oldValue) => {
        if (value !== oldValue)
          commentary.value = getCommentaryByYear(
            disintegratedStore.get("year")
          );
      }
    );

    watch(
      () => currentTabIndex.value,
      (value) => {
        commentary.value = getCommentaryByTabIndex(value);
      }
    );

    return {
      commentary,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"
.row-fixed.text-container.bottom
  height: auto
  top: 70vh
  padding-bottom: 3vh
  position: fixed
  width: 100%
  margin-left: auto
  margin-right: auto
  text-align: center
  -webkit-text-stroke: 1px $bg-color
  bottom: 0
  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    top: auto
  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    -webkit-text-stroke: 3px $bg-color

  span
    line-height: 1.1em

</style>

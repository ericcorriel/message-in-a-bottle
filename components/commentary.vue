<template>
  <div class="row-fixed text-container bottom" aria-live="polite">
    <FitText v-html="commentary"></FitText>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  UnwrapRef,
  watch,
} from "@nuxtjs/composition-api";
import FitText from "~/components/vendor/FitText.vue";
import { commentaries } from "~/data/commentaries";

export default defineComponent({
  name: "Commentary",
  components: {
    FitText,
  },
  props: {
    year: { type: Number, default: new Date().getFullYear() },
    isMobile: { type: Boolean, default: false },
  },
  setup(props, context) {
    const commentary: Ref<UnwrapRef<string>> = ref("");
    commentary.value = getCommentary(props.year);

    function getCommentary(year: number): string {
      // default condition
      if (!year || year === new Date().getFullYear()) return "~~Scroll Down~~";
      else {
        const res = commentaries.filter(
          (commentaryType) => commentaryType.year === year
        );
        if (res[0]?.comment)
          return props.isMobile ? res[0].commentSm : res[0].comment;
        else return commentary.value;
      }
    }

    watch(
      () => props.year,
      (value, oldValue) => {
        commentary.value = getCommentary(value);
      }
    );

    watch(
      () => props.isMobile,
      (value, oldValue) => {
        if (value !== oldValue) commentary.value = getCommentary(props.year);
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
  width: 100vw
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

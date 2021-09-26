<template>
  <div class="row-fixed text-container bottom">
    <FitText v-html="commentary"></FitText>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import FitText from "~/components/vendor/FitText.vue";

export default defineComponent({
  name: "Commentary",
  components: {
    FitText,
  },
  props: {
    commentary: { type: String, default: "" },
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
  top: 75vh
  @include media-breakpoint-up(md, $v1-grid-breakpoints)
    bottom: 0
  padding-bottom: 3vh
  position: fixed
  width: 100vw
  text-align: center
  -webkit-text-stroke: 1px $bg-color
  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    -webkit-text-stroke: 3px $bg-color

  span
    line-height: 1.1em

    .monospace

      color: red
</style>

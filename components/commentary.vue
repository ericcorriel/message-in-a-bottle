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
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"
.row-fixed.text-container.bottom
  height: auto
  bottom: 0
  padding-bottom: 3vh
  position: fixed
  width: 100vw
  -webkit-text-stroke: 3px $bg-color
  text-align: center
  span
    line-height: 1.1em
    .monospace

      color: red
</style>

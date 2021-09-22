<template>
  <div class="row-fixed text-container bottom">
    <FitText>{{ commentary }}</FitText>
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
@import "/assets/styles/v1/styles"
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
.row-fixed.text-container.bottom
  top: 75vh
  bottom: 0
  position: fixed
  width: 100vw
</style>

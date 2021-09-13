<template>
  <div class="row-fixed text-container bottom">
    <h2 id="commentary">{{ commentary }}</h2>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Commentary",
  props: {
    commentary: { type: String, default: "Scroll Down!!!" },
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/styles"
.row-fixed.text-container
  #commentary
    font-size: 6rem
  &.bottom
    top: 75vh
    align-items: start
</style>

<template>
  <div class="row-fixed text-container top">
    <h1>
      <span>It’s </span>
      <span id="year" class="number-text">{{ yearAsInt }}</span
      ><span>and this water bottle is</span>
      <span id="disintegrated" class="number-text"
        >{{ (Math.round(disintegrated * 100) / 100).toFixed(2) }}%</span
      >
      <span>disintegrated</span>
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "YearDisintegrated",
  props: {
    yearAsInt: { type: Number, default: new Date().getFullYear() },
    disintegrated: { type: Number, default: 0 },
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/styles"

.text-container
  #year
    font-size: 20rem
    line-height: 0
  #disintegrated
    font-size: 10rem
  &.top
    top: 0
    align-items: flex-end
  .number-text
    font-family: "Azeret Mono"
</style>

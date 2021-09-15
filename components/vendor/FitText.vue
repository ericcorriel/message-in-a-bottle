<template>
  <span class="fit"><slot></slot></span>
</template>

<script>
// 21.09.13 - https://codesandbox.io/s/vwjlp5pj5?file=/src/App.vue:260-304
import fitty from "fitty";

export default {
  name: "FitText",
  props: {
    options: {
      type: Object,
      required: false,
      default() {
        return {
          minSize: 16,
          maxSize: 512,
          multiLine: true,
        };
      },
    },
  },
  data() {
    return {
      $_fitty: undefined,
    };
  },
  destroyed() {
    this.$_fitty.unsubscribe();
  },
  mounted() {
    this.$_fitty = fitty(this.$el, this.options);
  },
};
</script>

<style scoped>
.fit {
  display: inline-block;
  white-space: nowrap;
}
</style>

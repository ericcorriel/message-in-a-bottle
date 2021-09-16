<template>
  <span class="fit"><slot></slot></span>
</template>

<script>
import fitty from "~/node_modules/fitty/dist/fitty.module";

export default {
  name: "FitText",
  components: {
    fitty,
  },
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

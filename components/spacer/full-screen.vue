<template>
  <div class="spacer-full-screen"></div>
</template>

<script lang="ts">
export default {
  name: "SpacerFullScreen",
};
</script>

<style lang="sass">
@import "/assets/styles/v1/base"

.spacer-full-screen
  position: relative
  display: flex
  height: 100vh
  background-color: $bg-color
</style>

<template>
  <div class="spacer-half-screen"></div>
</template>

<script lang="ts">
export default {
  name: "SpacerHalfScreen",
};
</script>

<style lang="sass">
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"

.spacer-half-screen
  position: relative
  display: flex
  height: 33vh
  background-color: $bg-color
  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    height: 50vh
</style>

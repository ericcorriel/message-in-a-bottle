<template>
  <div class="container">
    <div class="row">
      <div v-for="i in 12" class="col">
        <VideoEmbed
          frame="1"
          :index="i"
          orientation="landscape"
          path="/video"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VideoEmbed from "~/components/video-embed";

export default Vue.extend({
  components: { VideoEmbed },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/fonts-and-colors"
.container
  height: 100vh
  max-width: 100%
  display: flex
  background-color: #000000
  .row
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      align-content: center
      align-items: center
      .col
        order: 0
        align-items: center
        display: flex
        justify-content: center
        flex: 0 1 auto
        width: 25%
        margin: 0
        padding: 0
</style>

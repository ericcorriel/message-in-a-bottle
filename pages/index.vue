<template>
  <div class="container">
    <div class="row">
      <div v-for="i in 12" :key="`${frame}-${i}`" class="col">
        <VideoEmbed
          :frame="frame"
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
import { onBeforeUpdate, onMounted, ref } from "@nuxtjs/composition-api";
import VideoEmbed from "~/components/video-embed";

export default Vue.extend({
  components: { VideoEmbed },
  setup() {
    const frame: Ref<UnwrapRef<number>> = ref(1);
    function changeFrame() {
      if (frame.value === 1) frame.value = 2;
      else frame.value = 1;
    }

    onMounted(() => {
      setInterval(function () {
        changeFrame();
      }, 1000);
    });

    return {
      frame,
      changeFrame,
    };
  },
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

<template>
  <client-only>
    <vueVimeoPlayer
      ref="player"
      :video-id="videoId"
      :options="{ muted: 1, background: 0 }"
      :autoplay="false"
      :controls="false"
      :loop="true"
    />
  </client-only>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  ref,
  toRef,
  watch,
  Ref,
  UnwrapRef,
} from "@nuxtjs/composition-api";
import vueVimeoPlayer from "~/forks/vue-vimeo-player";

export default defineComponent({
  name: "VimeoEmbed",
  components: {
    vueVimeoPlayer,
  },
  props: {
    videoId: { type: String, default: "0" },
    currentVideoTime: { type: Number, default: 0 },
  },
  setup(props, context) {
    const player = ref();
    const isScrollingPoll = ref();
    const isScrolling: Ref<UnwrapRef<Boolean>> = ref(false);

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    function handleScroll() {
      isScrolling.value = true;
      window.clearTimeout(isScrollingPoll.value);
      isScrollingPoll.value = setTimeout(function () {
        isScrolling.value = false;
      }, 66);
    }

    watch(
      () => props.currentVideoTime,
      (value, oldValue) => {
        player.value!.setCurrentTime(value);
        player.value!.play();
        setTimeout(function () {
          player.value!.pause();
        }, 1000);
      }
    );
    watch(
      () => isScrolling,
      (value, oldValue) => {
        if (value.value === false) {
          player.value!.pause();
        }
      }
    );

    return {
      player,
      isScrolling,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/app"
.row-fixed.video-container
  top: 25vh
  opacity: 1
  height: 50vh

  .col
    margin: 0
    padding: 0
    width: 100%
</style>

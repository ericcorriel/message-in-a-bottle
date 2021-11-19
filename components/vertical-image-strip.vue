<template>
  <div class="vertical-image-strip-container">
    <div id="vertical-strip-1">
      <img
        srcset="
          /img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.vert.jpg 1024w,
          /img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.jpg      1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.jpg"
        alt="A 1.25 inch sticker on a Poland Spring bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.''"
      />
    </div>
    <div>
      <img
        srcset="
          /img/fight-back/v1/450-years-sticker-on-tide-bottle.vert.jpg 1024w,
          /img/fight-back/v1/450-years-sticker-on-tide-bottle.jpg      1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v1/450-years-sticker-on-tide-bottle.jpg"
        alt="A 1.25 inch sticker on a Tide bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </div>
    <div>
      <img
        srcset="
          /img/fight-back/v1/450-years-sticker-on-windex-bottle.vert.jpg 1024w,
          /img/fight-back/v1/450-years-sticker-on-windex-bottle.jpg      1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v1/450-years-sticker-on-windex-bottle.jpg"
        alt="A 1.25 inch sticker on a Windex bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </div>
    <div>
      <img
        srcset="
          /img/fight-back/v1/450-years-sticker-sheet.vert.png 1024w,
          /img/fight-back/v1/450-years-sticker-sheet.png      1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v1/450-years-sticker-sheet.png"
        alt="A mockup of a roughly 30 1.25 inch stickers on a single sheet that say: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "VerticalImageStrip",
  setup() {
    onMounted(() => {
      const h = document.querySelector("#vertical-strip-1").clientHeight;
      document.querySelector(".vertical-image-strip-container").style.height =
        h + "px";
      console.log("h: " + h);
    });
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/mixins"

.vertical-image-strip-container
  @include credits-baseline-font-sizes
  @include credits-headers
  width: 100%
  position: relative
  display: block
  max-height: 1125px
  height: 1125px
  overflow-y: scroll
  margin: 0 auto
  div
    position: sticky
    position: -webkit-sticky
    top: 0
    margin: 0 auto
    text-align: center
    img
      max-height: 100vh
      max-width: 100%
  p
    @include credits-p
</style>

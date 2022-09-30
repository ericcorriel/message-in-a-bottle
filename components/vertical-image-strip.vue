<template>
  <div ref="verticalFilmStripContainer" class="vertical-image-strip-container">
    <figure>
      <img
        srcset="
          /img/fight-back/v3/450-years-sticker-on-poland-spring-bottle-portrait.jpg 1024w,
          /img/fight-back/v3/450-years-sticker-on-poland-spring-bottle.jpg          1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v3/450-years-sticker-on-poland-spring-bottle.jpg"
        alt="A 1.25 inch sticker on a Poland Spring bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.''"
      />
    </figure>
    <figure>
      <img
        srcset="
          /img/fight-back/v3/450-years-sticker-on-tide-bottle-portrait.jpg 1024w,
          /img/fight-back/v3/450-years-sticker-on-tide-bottle.jpg          1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v3/450-years-sticker-on-tide-bottle.jpg"
        alt="A 1.25 inch sticker on a Tide bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </figure>
    <figure>
      <img
        srcset="
          /img/fight-back/v3/450-years-sticker-on-windex-bottle-portrait.jpg 1024w,
          /img/fight-back/v3/450-years-sticker-on-windex-bottle.jpg          1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v3/450-years-sticker-on-windex-bottle.jpg"
        alt="A 1.25 inch sticker on a Windex bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </figure>
    <figure>
      <img
        srcset="
          /img/fight-back/v3/450-YRS-sticker-sheet-portrait.jpg 1024w,
          /img/fight-back/v3/450-YRS-sticker-sheet.jpg          1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/fight-back/v1/450-years-sticker-sheet.png"
        alt="A mockup of a roughly 30 1.25 inch stickers on a single sheet that say: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
      />
    </figure>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "VerticalImageStrip",
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
  margin: 0 auto
  figure
    position: sticky
    position: -webkit-sticky
    top: 0
    margin: 0 auto
    text-align: center
    img
      max-height: 100vh
      width: 100%
  p
    @include credits-p
</style>

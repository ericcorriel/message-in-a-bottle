<template>
  <aside>
    <form
      id="subForm"
      class="js-cm-form"
      action="https://www.createsend.com/t/subscribeerror?description="
      method="post"
      data-id="5B5E7037DA78A748374AD499497E309EA47CF9D237FF55BD44AEE68271ED68FC542A9038B39DC90FCB5AE04234EBFE4E499E10156D4EEEE4D80100FE26C04F8E"
    >
      <div class="row">
        <label>Email </label
        ><input
          id="fieldEmail"
          autocomplete="Email"
          aria-label="Email"
          class="js-cm-email-input qa-input-email"
          maxlength="200"
          name="cm-byujllh-byujllh"
          required=""
          type="email"
        />
      </div>
      <div class="row">
        <label role="none">&nbsp;</label
        ><button type="submit">Subscribe</button>
      </div>
    </form>

    <script
      type="text/javascript"
      src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
    ></script>
    <SpacerFullScreen />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import SpacerFullScreen from "~/components/spacer/full-screen.vue";
export default defineComponent({
  name: "NewsletterSignup",
  components: {
    SpacerFullScreen,
  },
});
</script>

<style lang="sass" scoped>
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"
aside
  background-color: $bg-color
  color: $text-color
  position: relative
  z-index: 1
  margin: 0 auto
  max-width: 90%
  @include media-breakpoint-up(lg, $v1-grid-breakpoints)
    max-width: 60vw
  @include credits-baseline-font-sizes
  @include credits-headers
  h3, h4, h5, h6
    margin: 0 auto

  p
    @include credits-p
    text-align: center
  .row
    @include credits-p
    margin: 15px auto 15px auto
    display: flex
    flex-direction: row
    justify-content: start
    align-items: flex-start

    label
      text-align: left
      display: inline-block
      max-width: 85px
      padding-left: 0
      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        max-width: 85px
    input, button
      color: #000000
      max-width: 60vw
      font-size: .75em
      text-align: left
      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        max-width: 30vw
      @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
        max-width: 20vw
</style>

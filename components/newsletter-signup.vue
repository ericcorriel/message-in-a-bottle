<template>
  <footer>
    <h4>Eric Corriel Studios Newsletter Sign-up</h4>
    <p>(A few emails per year)</p>
    <form
      id="subForm"
      class="js-cm-form"
      action="https://www.createsend.com/t/subscribeerror?description="
      method="post"
      data-id="5B5E7037DA78A748374AD499497E309EA47CF9D237FF55BD44AEE68271ED68FC542A9038B39DC90FCB5AE04234EBFE4E499E10156D4EEEE4D80100FE26C04F8E"
    >
      <div class="row">
        <label>Name </label>
        <input
          id="fieldName"
          aria-label="Name"
          maxlength="200"
          name="cm-name"
        />
      </div>
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
  </footer>
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
footer
  background-color: $bg-color
  color: $text-color
  position: relative
  z-index: 1
  padding: 20px 0
  @include credits-baseline-font-sizes
  @include credits-headers
  h3, h4, h5, h6
    margin: 0 auto

  p
    @include credits-p
    text-align: center
  .row
    @include credits-p
    margin: 15px auto 15px -10px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      max-width: 90%
    label
      text-align: right
      padding-right: 10px
      display: inline-block
      max-width: 60px
      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        max-width: 100px
    input, button
      color: #000000
      max-width: 50vw
      font-size: 1em
</style>

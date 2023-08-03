<template>
  <aside>
      <!-- Begin Mailchimp Signup Form -->
      <form action="https://ericcorrielstudios.us12.list-manage.com/subscribe/post?u=f8f5e5a11719b6f46aa92693e&amp;id=9122ff5687&amp;f_id=00f1afe0f0" method="post" target="_blank" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate">
              <div class="row">
                  <label for="mce-EMAIL">Email</label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f8f5e5a11719b6f46aa92693e_9122ff5687" tabindex="-1" value=""></div>
                  <button type="submit">Subscribe</button>

                  <div hidden="true" style="display: none" class="mc-field-group input-group">
                      <strong>Interests </strong>
                      <ul><li>
                          <input checked type="checkbox" value="1" name="group[54002][1]" id="mce-group[54002]-54002-0">
                          <label for="mce-group[54002]-54002-0">Eric Corriel Studios News &amp; Updates</label>
                      </li>
                          <li>
                              <input checked type="checkbox" value="2" name="group[54002][2]" id="mce-group[54002]-54002-1">
                              <label for="mce-group[54002]-54002-1">450YRS (single-use plastic project) News &amp; Updates</label>
                          </li>
                          <li>
                              <input type="checkbox" value="4" name="group[54002][4]" id="mce-group[54002]-54002-2">
                              <label for="mce-group[54002]-54002-2">tiny trump News &amp; Updates</label>
                          </li>
                          <li>
                              <input checked type="checkbox" value="8" name="group[54002][8]" id="mce-group[54002]-54002-3">
                              <label for="mce-group[54002]-54002-3">Five-part email series introducing past, present, and future art projects</label>
                          </li>
                      </ul>
                      <span id="mce-group[54002]-HELPERTEXT" class="helper_text"></span>

                  </div>
                  <!-- tags: General Audience, from=messageinabottle.film, interest=450yrs-->
                  <div hidden="true"><input type="hidden" name="tags" value="10408970,10412098,10411082"></div>
                  <div hidden id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
              </div>
        </form>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "NewsletterSignup",
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
    margin: 15px auto
    display: flex
    flex-direction: row
    justify-content: center
    align-items: flex-start

    label
      text-align: left
      display: inline-block
      max-width: 55px
      padding-left: 0
      @include media-breakpoint-up(md, $v1-grid-breakpoints)
        max-width: 85px
    input, button
      color: #000000
      max-width: 30vw
      font-size: .75em
      text-align: left
      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        max-width: 30vw
      @include media-breakpoint-up(xxl, $v1-grid-breakpoints)
        max-width: 20vw
    button
      width: auto
      padding: 2px 5px
      margin-left: 10px
      border-radius: 0
      border: 1px solid $text-color
      color: $text-color
      background-color: $bg-color
</style>

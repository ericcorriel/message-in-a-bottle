<template>
  <div class="credits-container">
    <SpacerQuarterScreen v-if="spacer == 'quarter'"></SpacerQuarterScreen>
    <SpacerHalfScreen v-if="spacer == 'half'"></SpacerHalfScreen>
    <div class="credit-row up-1">
      <h4>I hear you! But what can I actually do?</h4>

      <h5 class="align-left caps">Fight Back!</h5>
      <p>
        I’ll be releasing 100% biodegradable and compostable “450 years”
        stickers in early 2022 to give people a socially visible way to tell
        companies we need better options.
      </p>
      <VerticalImageStrip />
      <p class="center">
        <strong>Make your voice heard!</strong><br />Sign-up to get notified
      </p>
      <NewsletterSignup />
      <SpacerQuarterScreen />
      <h4>Other things you can do</h4>
      <h5 class="align-left">Small</h5>
      <ul class="list-sources">
        <li class="indent">
          Follow
          <a
            tabindex="9"
            href="https://www.instagram.com/4ocean/"
            target="_blank"
            >4ocean</a
          >
          and
          <a href="https://www.instagram.com/theoceancleanup/" target="_blank"
            >The Ocean Cleanup</a
          >
        </li>
      </ul>

      <h5 class="align-left">Medium</h5>

      <ul class="list-sources">
        <li class="indent">
          Donate to
          <a href="https://www.plasticsoupfoundation.org/" target="_blank"
            >Plastic Soup Kitchen</a
          >
        </li>
      </ul>

      <h5 class="align-left">Large</h5>

      <ul class="list-sources">
        <li class="indent">
          Volunteer with
          <a href="https://www.surfrider.org/volunteer" target="_blank"
            >Surfrider</a
          >
        </li>
        <li class="indent">
          Support the
          <a
            href="https://govtrackinsider.com/reduce-act-would-tax-single-use-plastics-at-20-cents-per-pound-7eb523395da7"
            target="_blank"
            >REDUCE Act</a
          >
          in Congress
        </li>
      </ul>
    </div>
    <SpacerHalfScreen></SpacerHalfScreen>
    <div class="credit-row up-1">
      <h3 id="credits">Credits</h3>
    </div>

    <div class="credit-row up-1">
      <h4 id="concept-design-development">Concept/Design/Development</h4>
      <h5 class="person-credit">
        <a href="https://ericcorriel.com" target="_blank">Eric Corriel</a>
      </h5>
      <p>
        Eric is a public installation artist living in New York City where he
        teaches art and activism at the
        <a href="https://sva.edu" target="_blank">School of Visual Arts</a>.
      </p>
      <p>
        Follow him on
        <a href="https://instagram.com/ericcorriel">Instagram</a> •
        <a href="https://twitter.com/ericcorriel">Twitter</a> •
        <a href="https://facebook.com/ericcorrielartist">Facebook</a> or sign up
        for his newsletter.
      </p>
    </div>
    <NewsletterSignup />
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row up-1">
      <h4>Human Impacts Institute Environmental Fellow and Collaborator</h4>
      <h5 class="person-credit">Lisa Bloodgood</h5>
      <p class="center">
        Director of Advocacy &amp; Education,
        <a href="http://newtowncreekalliance.org" target="_blank"
          >Newtown Creek Alliance</a
        >
      </p>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <figure class="full-width">
      <img
        srcset="
          /img/message-in-a-bottle-projected-on-manhattan-bridge.vert.jpg 1024w,
          /img/message-in-a-bottle-projected-on-manhattan-bridge.jpg      1800w
        "
        sizes="(max-width: 600px) 1024w, 1800w"
        src="/img/message-in-a-bottle-projected-on-manhattan-bridge.jpg"
        alt="Video of the project projected on the Manhattan Bridge at night. Video contents: 'It is the year 2215, Water Wars sprout up everywhere"
      />
      <figcaption>
        <em>Message In A Bottle</em> was projected on the Manhattan Bridge as
        part of the
        <a href="https://www.humanimpactsinstitute.org/cca2021" target="_blank"
          >2021 Creative Climate Awards</a
        >. It won second place.
      </figcaption>
    </figure>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row">
      <h4>
        Awesome institutions without which this would have never been done
      </h4>
      <div class="up-2">
        <div class="cell">
          <div class="image-container">
            <a href="https://www.humanimpactsinstitute.org/" target="_blank"
              ><img
                src="/img/logos/human-impacts-institute.on-black.png"
                alt="Human Impacts Institute logo"
            /></a>
          </div>
          <p>
            I have worked with
            <a href="https://www.humanimpactsinstitute.org/" target="_blank"
              >Human Impacts Institute</a
            >
            since 2018 and this project is a product of their
            <a
              href="https://www.humanimpactsinstitute.org/fellowships"
              target="_blank"
              >Artist Impact Fellowship</a
            >, which I was fortunate to be a part of in 2021. In short, HII
            believes the arts play a critical role in advancing society towards
            a more just, equal, and beautiful future and have been working
            towards those goals since 2011.
          </p>
        </div>

        <div class="cell">
          <div class="image-container">
            <a href="http://www.newtowncreekalliance.org/" target="_blank"
              ><img
                src="/img/logos/newtown-creek-alliance.png"
                alt="Newtown Creek Alliance logo"
            /></a>
          </div>
          <p>
            In 2021, I teamed up Lisa Bloodgood at
            <a href="http://www.newtowncreekalliance.org/" target="_blank"
              >Newtown Creek Alliance</a
            >
            as part of Human Impact Institute’s Artist Impact Fellowship.
            Located in Greenpoint, Brooklyn; NCA is engaged in restoring and
            revitalizing neighborhoods surrounding
            <a
              href="https://en.wikipedia.org/wiki/Newtown_Creek"
              target="_blank"
              >Newtown Creek</a
            >. They also have a
            <a href="http://www.kingslandwildflowers.com/" target="_blank"
              >beautiful rooftop garden</a
            >, which I highly recommend visiting.
          </p>
        </div>
      </div>
    </div>

    <div class="credit-row">
      <div class="up-2">
        <div class="cell">
          <div class="image-container">
            <a href="https://www1.nyc.gov/assets/dsny/site/home" target="_blank"
              ><img
                src="/img/logos/nyc-dos.png"
                alt="NYC Department of Sanitation logo"
            /></a>
          </div>
          <p>
            <a href="https://www1.nyc.gov/assets/dsny/site/home" target="_blank"
              >NYC Department of Sanitation</a
            >
            was very gracious in offering me a ride-along during one of their
            garbage and recycling pickups in Greenpoint, Brooklyn–the first time
            I ever had to be at a 5:30AM meeting!
          </p>
        </div>

        <div class="cell">
          <div class="image-container">
            <a href="https://www.wm.com/" target="_blank"
              ><img
                src="/img/logos/WM_PMS_Logo.png"
                alt="Waste Management logo"
            /></a>
          </div>
          <p>
            I am thankful to
            <a href="https://www.wm.com/" target="_blank">Waste Management</a>
            for organizing a visit to their
            <a
              href="https://en.wikipedia.org/wiki/Materials_recovery_facility"
              target="_blank"
              >Materials Recovery Facility (MRF)</a
            >
            in Philadelphia, PA. The amount of sorting and recycling they do on
            a daily basis is astounding.
          </p>
        </div>
      </div>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row">
      <h4>Thank you for making your photos free for me to use and adapt</h4>
      <div class="up-2">
        <div class="cell">
          <div class="image-container">
            <a
              href="https://www.pexels.com/photo/plastic-bottle-of-detergent-in-studio-5218021/"
              target="_blank"
              ><img
                src="/img/thanks/pexels-anna-shvets-5218021.jpg"
                alt="pink laundry bottle on pink background"
            /></a>
          </div>
          <p>
            <a
              href="https://www.pexels.com/photo/plastic-bottle-of-detergent-in-studio-5218021/"
              target="_blank"
              >Anne Shvets</a
            >
            on <a href="https://pexels.com" target="_blank">Pexels</a>
          </p>
        </div>

        <div class="cell">
          <div class="image-container">
            <a
              href="https://flickr.com/photos/cartridgesave/49501486667/in/photolist-2iqh4o4-vcgZR-2iqdk2Y-sTc6W-a3fYvk-jxxrhs-bn7ERc-FVh35y-hfAWK-4ikHe2-7PpNYb-27fsZcS-f5wRJ1-7P11nG-bsNVnm-4ikGAe-9ewq2n-4ikGTe-6eCPfY-27Gsqnz-2kgKYGT-5AXJFY-inzSF-5YX3vJ-25u9SHN-9BPbSr-7cnKXb-xpP15-cAecj-9jAqDL-9jQdhd-4ivLCc-niMCZj-2iqdjWN-9d9Brh-25u9SKG-6qGhF5-9rn82k-9AZoH5-fAP6z3-2iqfVuz-bbvegc-3MePC3-Va4XYG-mKNzbH-6ZrkQa-26MTQqU-oFEsuc-aBmecD-2i2WBbJ"
              target="_blank"
              ><img
                src="/img/thanks/49501486667_cce7e3e6c9_o.jpg"
                alt="close up of a white hand holding an ink jet cartridge"
            /></a>
          </div>
          <p>
            <a
              href="https://flickr.com/photos/cartridgesave/49501486667/in/photolist-2iqh4o4-vcgZR-2iqdk2Y-sTc6W-a3fYvk-jxxrhs-bn7ERc-FVh35y-hfAWK-4ikHe2-7PpNYb-27fsZcS-f5wRJ1-7P11nG-bsNVnm-4ikGAe-9ewq2n-4ikGTe-6eCPfY-27Gsqnz-2kgKYGT-5AXJFY-inzSF-5YX3vJ-25u9SHN-9BPbSr-7cnKXb-xpP15-cAecj-9jAqDL-9jQdhd-4ivLCc-niMCZj-2iqdjWN-9d9Brh-25u9SKG-6qGhF5-9rn82k-9AZoH5-fAP6z3-2iqfVuz-bbvegc-3MePC3-Va4XYG-mKNzbH-6ZrkQa-26MTQqU-oFEsuc-aBmecD-2i2WBbJ"
              target="_blank"
              >CartridgeSave Images</a
            >
            on <a href="https://flickr.com" target="_blank">Flickr</a>
          </p>
        </div>
      </div>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row">
      <h4>
        Open-source software without which this website would have taken ten
        million times longer to make
      </h4>

      <ul class="center">
        <li><a href="https://vuejs.org" target="_blank">Vue.js</a></li>
        <li><a href="https://nuxtjs.org" target="_blank">Nuxt.js</a></li>
        <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
        <li><a href="https://eslint.org/" target="_blank">ESLint</a></li>
        <li><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
        <li>
          <a href="https://github.com/rikschennink/fitty" target="_blank"
            >Fitty</a
          >
        </li>
        <li>
          <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>
        </li>
        <li>
          <a
            href="https://www.1001fonts.com/monofonto-font.html"
            _target="_blank"
            >Monofonto</a
          >, by Raymond Larabie
        </li>
        <li><a href="https://google.com/fonts">Google Fonts</a></li>
        <li>
          <a href="https://www.typescriptlang.org/" target="_blank"
            >Typescript</a
          >
        </li>
        <li>(okay, maybe this one☝️ didn’t speed things up;)</li>
      </ul>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row">
      <h4>Sources</h4>

      <ul class="list-sources">
        <li>
          National Oceanic and Atmospheric Administration:
          <a
            href="https://www.noaa.gov/education/resource-collections/climate/climate-change-impact"
            target="_blank"
            >Climate Change Impacts</a
          >
        </li>
        <li>
          World Wildlife Foundation:
          <a
            href="https://www.wwf.org.au/news/blogs/the-lifecycle-of-plastics"
            target="_blank"
            >The Lifecycle of Plastics</a
          >
        </li>
        <li>
          Columbia University:
          <a
            href="https://news.climate.columbia.edu/2019/12/27/climate-change-impacts-everyone/"
            target="_blank"
            >State of the Planet</a
          >
        </li>
        <li>
          Colgate University Sustainability Office:
          <a
            href="http://blogs.colgate.edu/sustainability/2011/11/10/styrofoam-why-it-is-harmful-alternatives"
            target="_blank"
            >Styrofoam: Why It Is Harmful, And Alternatives</a
          >
        </li>
        <li>
          Time Magazine:
          <a
            href="https://time.com/5824295/climate-change-future-possibilities/"
            target="_blank"
            >What the World Will Look Like in 2050 If We Don’t Cut Carbon
            Emissions in Half</a
          >
        </li>
        <li>
          Stacker:
          <a
            href="https://stacker.com/stories/2682/how-long-it-takes-50-common-items-decompose"
            target="_blank"
            >How Long It Takes 50 Common Items To Decompose</a
          >
        </li>
        <li>
          The Awl:
          <a
            href="https://www.theawl.com/2012/08/a-timeline-of-future-events/"
            target="_blank"
            >A Timeline Of Future Events</a
          >
        </li>
        <li>
          Information is Beautiful:
          <a
            href="https://www.informationisbeautiful.net/visualizations/timeline-of-the-far-future/"
            target="_blank"
            >Timeline of the Far Future</a
          >
        </li>
        <li>
          Vox:
          <a href="https://www.youtube.com/watch?v=fsjvwQclGLo" target="_blank"
            >Why 99% of ocean plastic pollution is “missing”</a
          >
        </li>
      </ul>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row">
      <h4>Further Reading</h4>

      <ul class="list-sources">
        <li>
          If you live in a city, you might find NYC’s
          <a href="https://www.zerowastedesign.org/" target="_blank"
            >Guidelines for Zero Waste Design</a
          >
          worth checking out
        </li>
        <li>
          If you’re into Crypto, I’d highly recommend
          <a
            href="https://forum.makerdao.com/t/the-case-for-clean-money/10684"
            target="_blank"
            >The Case for Clean Money</a
          >
        </li>
      </ul>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row no-margin-bottom sig center">
      <p>No plastic bottles were purchased in the making of this film</p>
    </div>
    <SpacerQuarterScreen></SpacerQuarterScreen>
    <div class="credit-row no-margin-bottom sig center">
      <div>
        <a href="https://ericcorriel.com" target="_blank"
          ><img src="/img/sig.png" alt="Eric Corriel's signature"
        /></a>
      </div>
      <p>
        <small
          >© 2021
          <a href="https://ericcorriel.com" target="_blank"
            >Eric Corriel Studios</a
          ></small
        >
      </p>
    </div>
    <NewsletterSignup />
    <SpacerFullScreen></SpacerFullScreen>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import SpacerQuarterScreen from "~/components/spacer/quarter-screen.vue";
import SpacerHalfScreen from "~/components/spacer/half-screen.vue";
import SpacerFullScreen from "~/components/spacer/full-screen.vue";
import NewsletterSignup from "~/components/newsletter-signup.vue";
import VerticalImageStrip from "~/components/vertical-image-strip.vue";

export default defineComponent({
  name: "Credits",
  components: {
    SpacerQuarterScreen,
    SpacerHalfScreen,
    SpacerFullScreen,
    NewsletterSignup,
    VerticalImageStrip,
  },
  props: {
    spacer: { type: String, default: "half" },
  },
});
</script>

<style lang="sass">
@import "/assets/styles/v1/bootstrap/grid"
@import "/assets/styles/v1/bootstrap/breakpoints"
@import "/assets/styles/v1/base"
@import "/assets/styles/v1/mixins"
@import "/assets/styles/v1/app"

.credits-container
  background-color: $bg-color
  position: relative
  padding: 0 10px
  width: 100vw
  @include credits-baseline-font-sizes
  @include credits-headers

  #credits
    font-size: 2em

  #concept-design-development
    font-size: .7em

  .person-credit
    font-size: .65em
  p
    @include credits-p
    &.indent
      padding-left: 20px
      margin: 0 auto
  li.indent
    margin-left: 45px
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      margin-left: 60px
  h5.align-left
    @include credits-p
    font-size: .65em
    text-align: left
    font-weight: 500
    margin: 1em auto 0
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      font-size: .5em
  ul, dl
    @include credits-p
    padding: 0
    list-style-type: none
    &.list-sources
      list-style-type: disc
  .center
    text-align: center

  .sig
    padding-bottom: 40px

    p
      margin-top: 0

    img
      max-width: 300px
      margin: 0 auto

  figure.full-width
    width: 100%
    img
      width: 100%
      height: auto
    figcaption
      @include credits-p
  .up-2
    display: flex
    flex-direction: column
    @include media-breakpoint-up(lg, $v1-grid-breakpoints)
      flex-direction: row
    flex-wrap: nowrap
    align-items: flex-start
    justify-content: space-around
    margin: 40px 10px 20px

    .cell
      display: flex
      flex-direction: column
      flex-wrap: wrap
      padding: 20px 0px
      width: 100%
      @include media-breakpoint-up(lg, $v1-grid-breakpoints)
        width: 40vw
        padding: 20px

      .image-container
        text-align: center

        img
          max-height: 162px
          border-radius: 8px
          max-width: 100%

  .no-margin-bottom
    margin-bottom: 0
</style>

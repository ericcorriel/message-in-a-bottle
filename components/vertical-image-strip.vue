<template>
  <div ref="verticalFilmStripContainer" class="vertical-image-strip-container">
    <div class="inner-container">
      <figure>
        <img
          srcset="
            /img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.vert.jpg 1024w,
            /img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.jpg      1800w
          "
          sizes="(max-width: 600px) 1024w, 1800w"
          src="/img/fight-back/v1/450-years-sticker-on-poland-spring-bottle.jpg"
          alt="A 1.25 inch sticker on a Poland Spring bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.''"
        />
      </figure>
      <figure>
        <img
          srcset="
            /img/fight-back/v1/450-years-sticker-on-tide-bottle.vert.jpg 1024w,
            /img/fight-back/v1/450-years-sticker-on-tide-bottle.jpg      1800w
          "
          sizes="(max-width: 600px) 1024w, 1800w"
          src="/img/fight-back/v1/450-years-sticker-on-tide-bottle.jpg"
          alt="A 1.25 inch sticker on a Tide bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
        />
      </figure>
      <figure>
        <img
          srcset="
            /img/fight-back/v1/450-years-sticker-on-windex-bottle.vert.jpg 1024w,
            /img/fight-back/v1/450-years-sticker-on-windex-bottle.jpg      1800w
          "
          sizes="(max-width: 600px) 1024w, 1800w"
          src="/img/fight-back/v1/450-years-sticker-on-windex-bottle.jpg"
          alt="A 1.25 inch sticker on a Windex bottle that says: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
        />
      </figure>
      <figure>
        <img
          srcset="
            /img/fight-back/v1/450-years-sticker-sheet.vert.png 1024w,
            /img/fight-back/v1/450-years-sticker-sheet.v3.png   1800w
          "
          sizes="(max-width: 600px) 1024w, 1800w"
          src="/img/fight-back/v1/450-years-sticker-sheet.png"
          alt="A mockup of a roughly 30 1.25 inch stickers on a single sheet that say: 'This plastic will exist for at least 450 years. Tag this company on social media and tell them we need better options.'"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import scrollMachine from "~/data/store/scroll";
import { SCROLL_DIRECTION } from "~/data/constants/app";

export default defineComponent({
  name: "VerticalImageStrip",
  setup() {
    const verticalFilmStripContainer = ref();
    let imageHeight = 0;
    const amountScrolledWhileScrollDisabled = 0;
    let maxAmountFilmstripCanScroll = 0;
    const numImagesInFilmstrip = 4;
    let scrollDirection = "";
    let hasBeenScrolled = false;

    onMounted(() => {
      // since all images are in an overflow scroll container it's not possible to set parent (container) height based on an individual child's height; need to do it via js
      function setVerticalFilmStripHeight() {
        imageHeight = document.querySelector(
          ".vertical-image-strip-container>.inner-container>figure"
        ).clientHeight;
        verticalFilmStripContainer.value.style.height = imageHeight + "px";
        maxAmountFilmstripCanScroll = imageHeight * (numImagesInFilmstrip - 1);
      }
      setVerticalFilmStripHeight();
      window.addEventListener("resize", setVerticalFilmStripHeight);

      const verticalFilmstripContainerFullyVisibleOptions = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
      };
      const verticalFilmstripContainerFullyVisibleObserver =
        new IntersectionObserver(
          handleVerticalFilmstripContainerFullyVisible,
          verticalFilmstripContainerFullyVisibleOptions
        );

      const verticalFilmstripContainerFullyInvisibleOptions = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.0,
      };
      const verticalFilmstripContainerFullyInvisibleObserver =
        new IntersectionObserver(
          handleVerticalFilmstripContainerFullyInvisible,
          verticalFilmstripContainerFullyInvisibleOptions
        );

      function enableScroll() {
        window.onscroll = function () {};
      }

      function disableScroll() {
        // Get the current page scroll position
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft;
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
          scrollDirection = scrollMachine.get("scrollDirection");
          console.log("SC: " + verticalFilmStripContainer.value.scrollTop);

          console.log(scrollDirection);

          // amountScrolledWhileScrollDisabled += 10;
          if (scrollDirection === SCROLL_DIRECTION.DOWN) {
            verticalFilmStripContainer.value.scrollTop += 10;
            hasBeenScrolled = true;
            console.log("SC: " + verticalFilmStripContainer.value.scrollTop);
          } else verticalFilmStripContainer.value.scrollTop -= 10;
          if (
            (scrollDirection === SCROLL_DIRECTION.DOWN &&
              verticalFilmStripContainer.value.scrollTop >=
                maxAmountFilmstripCanScroll) ||
            (scrollDirection === SCROLL_DIRECTION.UP &&
              verticalFilmStripContainer.value.scrollTop <= 0)
          ) {
            enableScroll();
          } else {
            window.scrollTo(scrollLeft, scrollTop);
          }
        };
      }

      function handleVerticalFilmstripContainerFullyVisible(entries) {
        entries.map((entry) => {
          console.log(scrollMachine.get("scrollDirection"));
          console.log(
            "max: " +
              maxAmountFilmstripCanScroll +
              " || " +
              verticalFilmStripContainer.value.scrollTop +
              " || " +
              document.querySelector(".vertical-image-strip-container")
                .scrollTop
          );
          if (
            entry.isIntersecting &&
            verticalFilmStripContainer.value.scrollTop <
              maxAmountFilmstripCanScroll
          ) {
            disableScroll();
            console.log("Vert Filmstrip Container visible, scroll disabled");
          } else if (
            verticalFilmStripContainer.value.scrollTop >=
            maxAmountFilmstripCanScroll
          ) {
            enableScroll();
          }
        });
      }

      function handleVerticalFilmstripContainerFullyInvisible(entries) {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            // enableScroll();
            // verticalFilmStripContainer.value.style.overflowY = "hidden";
            // verticalFilmStripContainer.value.style.position = "relative";
            // verticalFilmStripContainer.value.style.top = "0px";
            console.log("Vert Filmstrip Container invisible");
          }
        });
      }

      // verticalFilmstripContainerFullyVisibleObserver.observe(
      //   verticalFilmStripContainer.value
      // );
      // verticalFilmstripContainerFullyInvisibleObserver.observe(
      //   verticalFilmStripContainer.value
      // );
    });
    return {
      verticalFilmStripContainer,
    };
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
  .inner-container
    position: relative
    figure
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

import { ref, Ref, UnwrapRef } from "@nuxtjs/composition-api";
import { SCROLL_DIRECTION, ScrollSpeed, scrollSpeeds } from "~/data/constants";
import scrollMachine from "~/data/state/scroll";
import { calculatePercentDisintegrated } from "~/composables/calculate/percentDisintegrated";
import { calculateCurrentVideoTime } from "~/composables/calculate/currentVideoTime";
import disintegratedStore from "~/data/state/disintegrated";

function handleScroll() {
  /*
   * When scrolling down, .container should be of infinite height (1,000,000px) and scrollAmount gets incremented according to scrollSpeeds arr. It is unknown how many scrolls will be necessary to get to 100%–varies widely based on screen height, frequency of scrolls, and how the browser interprets numPixelsToScroll based on swipe
   * When scrolling up however, the num pixels needed to scroll to get to yearZero is known and need to avoid situation where we run out of road before getting back to yearZero. so numPixelsToScrollToYearZero needs to be calculated and the amountToIncrement divided up accordingly
   * So amountToIncrement has one set of values going down (determined by scrollSpeeds) but another set of values going up
   * EDGE CASES
   * Once 100% is reached, scroll values are no longer calculated
   */
  // for components
  // const currentVideoTime: Ref<UnwrapRef<number>> = ref(0);
  // const yearAsInt: Ref<UnwrapRef<number>> = ref(
  //   Number(scrollMachine.get("yearAtCurrentScroll"))
  // );

  // html refs
  const container = ref();

  // get yearDelta based on percent disintegrated
  const res: ScrollSpeed[] = scrollSpeeds.filter(
    (x: ScrollSpeed) =>
      x.percentDisintegrated >= disintegratedStore.get("percentDisintegrated")
  );
  const yearDelta = res[0]?.speed ? res[0].speed : 0;
  const currentScrollPosition =
    (window.pageYOffset || document.documentElement.scrollTop) -
    (document.documentElement.clientTop || 0) +
    window.innerHeight;

  // set currentScrollPosition and yearDelta
  scrollMachine.set("currentScrollPosition", currentScrollPosition);
  scrollMachine.set("yearDelta", yearDelta);
  scrollMachine.set(
    "scrollDirection",
    currentScrollPosition === scrollMachine.state.previousScrollPosition
      ? scrollMachine.state.scrollDirection
      : currentScrollPosition > scrollMachine.state.previousScrollPosition
      ? SCROLL_DIRECTION.DOWN
      : SCROLL_DIRECTION.UP
  );
  const debug: Boolean = false;

  if (!scrollMachine.get("scrollValuesFrozen")) {
    if (scrollMachine.get("isInNormalScrollingRange")) {
      // if scrolling down, add delta to current year
      debug ? console.log(1) : null;
      if (scrollMachine.get("scrollDirection") === SCROLL_DIRECTION.DOWN) {
        scrollMachine.set(
          "yearAtCurrentScroll",
          Number(scrollMachine.get("yearAtCurrentScroll")) + yearDelta
        );
        // if scrolling up subtract .25 if not at yearZero; want to make sure descend at a quicker rate than ascend to ensure don't run out of road scrolling back down (amountLeftToScroll=0 before getting back to yearZeroScrollTop (typically 700ish pixels)
      } else if (
        scrollMachine.get("scrollDirection") === SCROLL_DIRECTION.UP &&
        scrollMachine.get("yearAtCurrentScroll") !==
          scrollMachine.get("yearZero")
      ) {
        scrollMachine.set(
          "yearAtCurrentScroll",
          Number(scrollMachine.get("yearAtCurrentScroll")) - 0.66
        );
      }
    }
    // not in normal scrolling range and about to go over 100%
    else if (
      scrollMachine.get("scrollDirection") === SCROLL_DIRECTION.DOWN &&
      Number(scrollMachine.get("yearAtCurrentScroll")) + yearDelta >
        scrollMachine.get("yearEnd")
    ) {
      debug ? console.log(2) : null;
      // yearAtCurrentScroll = scrollState.yearEnd;
      scrollMachine.set("yearAtCurrentScroll", scrollMachine.get("yearEnd"));
    }
    // not in normal scrolling range – don't let year become < currentYear
    else if (
      scrollMachine.get("scrollDirection") === SCROLL_DIRECTION.UP &&
      Number(scrollMachine.get("yearAtCurrentScroll")) -
        Number(scrollMachine.get("yearZero")) <=
        0
    ) {
      // disintegrated.value = 0; reset container height
      debug ? console.log(3) : null;
      // yearAtCurrentScroll = scrollState.yearZero;
      scrollMachine.set("yearAtCurrentScroll", scrollMachine.get("yearZero"));
      // container.value!.style.height = "1000000px";
    }
    // only update year and percent if not at beginning or end
    if (
      scrollMachine.get("yearAtCurrentScroll") <=
        scrollMachine.get("yearEnd") &&
      scrollMachine.get("yearAtCurrentScroll") >= scrollMachine.get("yearZero")
    ) {
      debug ? console.log(4) : null;
      disintegratedStore.set(
        "year",
        Number(Number(scrollMachine.get("yearAtCurrentScroll")).toFixed(0))
      );
      // percentDisintegrated.value = calculatePercentDisintegrated(
      //   scrollMachine.get("yearAtCurrentScroll")
      // );

      // yearAsInt.value = Math.floor(
      //   Number(scrollMachine.get("yearAtCurrentScroll"))
      // );
      // currentVideoTime.value = calculateCurrentVideoTime(
      //   percentDisintegrated.value
      // );
    }
  }
  scrollMachine.set(
    "previousScrollPosition",
    scrollMachine.get("currentScrollPosition")
  );
}

export { handleScroll };

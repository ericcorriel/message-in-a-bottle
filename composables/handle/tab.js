import { ref } from "@nuxtjs/composition-api";
import scrollStore from "~/data/store/scroll";
import { SCROLL_DIRECTION } from "~/data/constants/app";
import { scrollingUpAndCongratulations100pctVisible } from "~/composables/handle/interactionObserver";
const currentTabIndex = ref(0); // keeps tabs on tab
const tabsForPartI = ref(0); // counts how many tabs in part I
const tabbedTo100pctShortenHeightNow = ref(false); // this should probably be an event…

// shift+tab is a bit complicated…
function handleTab(e) {
  if (e.shiftKey && e.keyCode === 9) {
    // set scroll direction as proxy for "tab direction," used in handle/interactionObserver:handleCongratulationsIntersection > scrollingUpAndCongratulations100ptcVisible
    // console.log("shift+tab");
    scrollStore.set("scrollDirection", SCROLL_DIRECTION.UP);
    // normal use case: shift tab and not at the beginning; we are in phase I so be sure to preventDefault
    if (currentTabIndex.value < tabsForPartI.value) {
      // if not at the beginning, decrement currentTabIndex
      if (currentTabIndex.value > 0) currentTabIndex.value--;
      // console.log("currentTabIndex: " + currentTabIndex.value);
      e.preventDefault();
    } else if (
      // only one use case lands in here: shift-tabbing and Congratulations covers 100% of screen - as determined in handle/interactionObserver: handleCongratulationsIntersection
      currentTabIndex.value === tabsForPartI.value &&
      scrollingUpAndCongratulations100pctVisible.value === true
    ) {
      // decrement currentTabIndex to fall back into normal use case on next shift+tab
      currentTabIndex.value--;
      // need to dismiss Congratulations screen; scroll window by 1.5x height to be sure to dismiss and get back to part I. side-effect: does "overscroll" into part I a bit but it's the only way to ensure Congratulations is dismissed across all breakpoints
      // console.log("window.scroll");
      window.scrollBy(0, -window.innerHeight * 1.5);
      window.document.getElementById("container").focus();
      scrollingUpAndCongratulations100pctVisible.value = false;
      e.preventDefault();
    }
  }
  // regular tab
  else if (e.keyCode === 9) {
    scrollStore.set("scrollDirection", SCROLL_DIRECTION.DOWN);
    // tabbed to 100%, need to shorten container height before next tab otherwise container shorten height and tab fire simultaneously which results in chaos in chrome
    if (currentTabIndex.value === tabsForPartI.value - 1) {
      tabbedTo100pctShortenHeightNow.value = true;
      // console.log("forward tab: reached 100%; " + "currentTabIndex: " + currentTabIndex.value);
      currentTabIndex.value++;
      e.preventDefault();
    } else if (currentTabIndex.value < tabsForPartI.value) {
      // console.log("forward tab: currentTabIndex: " + currentTabIndex.value);
      currentTabIndex.value++;
      e.preventDefault();
    }
  }
}

export {
  handleTab,
  currentTabIndex,
  tabsForPartI,
  tabbedTo100pctShortenHeightNow,
};

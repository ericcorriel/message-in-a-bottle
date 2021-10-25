import { ref } from "@nuxtjs/composition-api";
import scrollStore from "~/data/store/scroll";
import { SCROLL_DIRECTION } from "~/data/constants/app";
import { scrollingUpAndCongratulations100pctVisible } from "~/composables/handle/interactionObserver";
const currentTabIndex = ref(0); // keeps tabs on tab
const tabsForPartI = ref(0); // counts how many tabs in part I

// this is a bit complicated…
function handleTab(e) {
  // shift+tab
  if (e.shiftKey && e.keyCode === 9) {
    // set scroll direction as proxy for "tab direction," used in handle/interactionObserver:handleCongratulationsIntersection > scrollingUpAndCongratulations100ptcVisible
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
      currentTabIndex.value = tabsForPartI.value - 1;
      // need to dismiss Congratulations screen; scroll window by 1.5x height to be sure to dismiss and get back to part I. side-effect: does "overscroll" into part I a bit but it's the only way to ensure Congratulations is dismissed across all breakpoints
      window.scrollBy(0, -window.innerHeight * 1.5);
    }
  }
  // regular tab
  else if (e.keyCode === 9) {
    scrollStore.set("scrollDirection", SCROLL_DIRECTION.DOWN);
    if (currentTabIndex.value < tabsForPartI.value) {
      // console.log("currentTabIndex: " + currentTabIndex.value);
      currentTabIndex.value++;
      e.preventDefault();
    }
  }
}

export { handleTab, currentTabIndex, tabsForPartI };

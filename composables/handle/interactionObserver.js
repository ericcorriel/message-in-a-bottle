import { ref } from "@nuxtjs/composition-api";
import scrollStore from "~/data/store/scroll";
import { currentTabIndex, tabsForPartI } from "~/composables/handle/tab";
import { SCROLL_DIRECTION } from "~/data/constants/app";
const scrollingUpAndCongratulations100pctVisible = ref(false);
const scrollingUpAndCongratulationsHasLeftTheScreen = ref(false);
// @ts-ignore
function handleContainerIntersection(entries) {
  // want to freeze values when container is no longer visible

  // @ts-ignore
  entries.map((entry) => {
    // if container is fully obscured by Congratulations (part II), freeze scroll values
    if (!entry.isIntersecting) {
      scrollStore.set("scrollValuesFrozen", true);
      // console.log("Container invisible" + currentTabIndex.value + " || " + tabsForPartI.value);
    }
  });
}
// want to freeze values as soon as congratulations appears
// want to unfreeze values when #congratulations is visible and scroll/tab_direction.up
function handleCongratulationsIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      // as soon as Congratulations appears and user is scrolling down that means 100% has been reached; freeze scroll values
      // console.log("Congratulations visible; scrolling down" + currentTabIndex.value + " || " + tabsForPartI.value);
      if (scrollStore.get("scrollDirection") === SCROLL_DIRECTION.DOWN) {
        scrollStore.set("scrollValuesFrozen", true);
      }
      // this use case only entered into if user is tabbing up;  set flag for handle/tab
      else if (
        scrollStore.get("scrollDirection") === SCROLL_DIRECTION.UP &&
        currentTabIndex.value === tabsForPartI.value
      ) {
        scrollingUpAndCongratulations100pctVisible.value = true;
      }
    }
    // if scrolling up and congratulations is NOT visible (has left the screen); unfreeze scroll values and reset container height
    else if (scrollStore.get("scrollDirection") === SCROLL_DIRECTION.UP) {
      // console.log("congratulations invisible, scrolling up");
      scrollStore.set("scrollValuesFrozen", false);
      scrollingUpAndCongratulationsHasLeftTheScreen.value = true;
    }
  });
}

const containerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};
const congratulationsOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

export {
  handleContainerIntersection,
  handleCongratulationsIntersection,
  containerOptions,
  congratulationsOptions,
  scrollingUpAndCongratulations100pctVisible,
  scrollingUpAndCongratulationsHasLeftTheScreen,
};

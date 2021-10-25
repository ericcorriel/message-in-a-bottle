import { ref } from "@nuxtjs/composition-api";
import scrollStore from "~/data/store/scroll";
import { currentTabIndex, tabsForPartI } from "~/composables/handle/tab";
const isPartIVisible = ref(true);
// @ts-ignore
function handleIntersection(entries) {
  // @ts-ignore
  entries.map((entry) => {
    if (entry.isIntersecting) {
      scrollStore.set("scrollValuesFrozen", false);
      // console.log("VISIBLE" + currentTabIndex.value + " || " + tabsForPartI.value);
      if (currentTabIndex.value === tabsForPartI.value) {
        currentTabIndex.value = tabsForPartI.value - 1;
        isPartIVisible.value = true;
      }
    } else {
      // console.log("INVISIBLE" + currentTabIndex.value + " || " + tabsForPartI.value);
      scrollStore.set("scrollValuesFrozen", true);
      isPartIVisible.value = false;
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

export { handleIntersection, options, isPartIVisible };

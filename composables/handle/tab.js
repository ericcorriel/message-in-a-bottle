import { ref } from "@nuxtjs/composition-api";
const currentTabIndex = ref(0);
const tabsForPartI = ref(0);

function handleTab(e) {
  if (
    e.shiftKey &&
    e.keyCode === 9 &&
    currentTabIndex.value < tabsForPartI.value
  ) {
    if (currentTabIndex.value > 0) currentTabIndex.value--;
    // console.log("currentTabIndex: " + currentTabIndex.value);
    e.preventDefault();
  } else if (e.keyCode === 9 && currentTabIndex.value < tabsForPartI.value) {
    currentTabIndex.value++;
    // console.log("currentTabIndex: " + currentTabIndex.value);
    e.preventDefault();
  }
}

export { handleTab, currentTabIndex, tabsForPartI };

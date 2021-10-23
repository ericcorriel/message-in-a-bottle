import { ref } from "@nuxtjs/composition-api";
const currentTabIndex = ref(1);

function handleTab(e) {
  if (e.shiftKey && e.keyCode == 9) {
    console.log("shift tab");
    currentTabIndex.value--;
    e.preventDefault();
  } else if (e.keyCode == 9) {
    console.log("tab");
    currentTabIndex.value++;
    e.preventDefault();
  }
}

export { handleTab, currentTabIndex };

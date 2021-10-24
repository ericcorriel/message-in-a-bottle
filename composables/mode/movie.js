import { handleScroll } from "~/composables/handle/scroll";

function playMovie() {
  // movie mode > scroll through credits > when year is complete: console> setInterval(function(){window.scrollBy(0,5)},10)
  setInterval(function () {
    handleScroll();
  }, 100);
}

export { playMovie };

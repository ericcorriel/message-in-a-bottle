import { ref } from "@nuxtjs/composition-api";
import { APP } from "~/data/constants";
import stateMachine from "~/data/store/scroll";

const isMobile = ref(false);
const windowWidth = ref(0);

function handleResize() {
  isMobile.value = window.innerWidth <= APP.MOBILE_WIDTH;
  windowWidth.value = window.innerWidth;

  stateMachine.set({
    yearZeroScrollTop:
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0) +
      window.innerHeight,
  });
}

export { handleResize, isMobile, windowWidth };

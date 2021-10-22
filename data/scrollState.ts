import { reactive, computed } from "@nuxtjs/composition-api";
import { SCROLL_DIRECTION } from "~/data/constants";

export interface ScrollState {
  yearZero: number;
  yearAtCurrentScroll: number;
  yearZeroScrollTop: number;
  yearEnd: number;
  previousScrollPosition: number;
  currentScrollPosition: number;
  debug: boolean;
  scrollDirection: string;
  yearDelta: number;
  atYearZero: boolean;
  amountLeftToScroll: number;
  scrollValuesFrozen: boolean;
  scrollAmountToEndIsLessThanYearDelta: boolean;
  isInNormalScrollingRange: boolean;
}

const scrollState: ScrollState = reactive({
  scrollValuesFrozen: false,
  yearZero: 0,
  yearAtCurrentScroll: 0,
  yearZeroScrollTop: 0,
  yearEnd: 0,
  previousScrollPosition: 0,
  currentScrollPosition: 0,
  debug: false,
  scrollDirection: SCROLL_DIRECTION.DOWN,
  yearDelta: 0,
  atYearZero: computed(
    () => scrollState.yearZero === scrollState.yearAtCurrentScroll
  ),
  amountLeftToScroll: computed({
    get() {
      return scrollState.currentScrollPosition - scrollState.yearZeroScrollTop;
    },
    set() {},
  }),
  scrollAmountToEndIsLessThanYearDelta: computed({
    get() {
      return (
        scrollState.yearAtCurrentScroll > scrollState.yearZero &&
        scrollState.scrollDirection === SCROLL_DIRECTION.DOWN &&
        scrollState.yearEnd -
          scrollState.yearDelta -
          scrollState.yearAtCurrentScroll <
          scrollState.yearDelta
      );
    },
    set() {},
  }),
  isInNormalScrollingRange: computed({
    get() {
      return (
        scrollState.yearAtCurrentScroll <= scrollState.yearEnd &&
        scrollState.yearAtCurrentScroll - scrollState.yearZero >= 0
      );
    },
    set() {},
  }),
});

function set(p: ScrollState): void {
  scrollState.yearZero = p.yearZero ?? scrollState.yearZero;
  scrollState.yearEnd = p.yearEnd ?? scrollState.yearEnd;
  scrollState.yearAtCurrentScroll =
    p.yearAtCurrentScroll ?? scrollState.yearAtCurrentScroll;
  scrollState.yearZeroScrollTop =
    p.yearZeroScrollTop ?? scrollState.yearZeroScrollTop;
  scrollState.yearEnd = p.yearEnd ?? scrollState.yearEnd;
  scrollState.previousScrollPosition =
    p.previousScrollPosition ?? scrollState.previousScrollPosition;
  scrollState.currentScrollPosition =
    p.currentScrollPosition ?? scrollState.currentScrollPosition;
  scrollState.debug = p.debug ?? scrollState.debug;
  scrollState.scrollDirection =
    p.scrollDirection ?? scrollState.scrollDirection;
  scrollState.yearDelta = p.yearDelta ?? scrollState.yearDelta;
  if (scrollState.debug) {
    console.log(JSON.stringify(scrollState, null, 2));
  }
}

function get(key: String): String | Boolean | Number {
  switch (key) {
    case "scrollDirection":
      return scrollState.scrollDirection;
  }
  return true;
}

const scrollMachine = {
  state: scrollState,
  set,
};
export default scrollMachine;

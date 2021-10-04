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
  notAtYearZero: boolean;
  amountLeftToScroll: number;
  scrollValuesFrozen: boolean;
  scrollAmountToEndIsLessThanYearDelta: boolean;
  isInNormalScrollingRange: boolean;
}

const state: ScrollState = reactive({
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
  atYearZero: computed(() => state.yearZero === state.yearAtCurrentScroll),
  amountLeftToScroll: computed({
    get() {
      return state.currentScrollPosition - state.yearZeroScrollTop;
    },
    set() {},
  }),
  scrollAmountToEndIsLessThanYearDelta: computed({
    get() {
      return (
        state.yearAtCurrentScroll > state.yearZero &&
        state.scrollDirection === SCROLL_DIRECTION.DOWN &&
        state.yearEnd - state.yearDelta - state.yearAtCurrentScroll <
          state.yearDelta
      );
    },
    set() {},
  }),
  isInNormalScrollingRange: computed({
    get() {
      return (
        state.yearAtCurrentScroll <= state.yearEnd &&
        state.yearAtCurrentScroll - state.yearZero >= 0
      );
    },
    set() {},
  }),
});

function set(p: ScrollState): void {
  state.yearZero = p.yearZero ?? state.yearZero;
  state.yearEnd = p.yearEnd ?? state.yearEnd;
  state.yearAtCurrentScroll =
    p.yearAtCurrentScroll ?? state.yearAtCurrentScroll;
  state.yearZeroScrollTop = p.yearZeroScrollTop ?? state.yearZeroScrollTop;
  state.yearEnd = p.yearEnd ?? state.yearEnd;
  state.previousScrollPosition =
    p.previousScrollPosition ?? state.previousScrollPosition;
  state.currentScrollPosition =
    p.currentScrollPosition ?? state.currentScrollPosition;
  state.debug = p.debug ?? state.debug;
  state.scrollDirection = p.scrollDirection ?? state.scrollDirection;
  state.yearDelta = p.yearDelta ?? state.yearDelta;
  if (state.debug) {
    console.log(JSON.stringify(state, null, 2));
  }
}

function get(key: String): String | Boolean | Number {
  switch (key) {
    case "scrollDirection":
      return state.scrollDirection;
  }
  return true;
}

const stateMachine = {
  state,
  set,
};
export default stateMachine;

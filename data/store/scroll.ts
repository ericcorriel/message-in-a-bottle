import { reactive, computed } from "@nuxtjs/composition-api";
import { SCROLL_DIRECTION } from "~/data/constants/app";

export interface ScrollInterface {
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

const state: ScrollInterface = reactive({
  scrollValuesFrozen: false,
  yearZero: 2021,
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

function set(
  key: keyof ScrollInterface,
  value: string | number | boolean
): void {
  try {
    // cannot figure out a generic setter without making things overly complex with Templates (https://stackoverflow.com/questions/62752245/how-do-you-define-a-generic-getter-method-in-typescript-with-multiple-overloads)
    // also tried overloading: https://www.tutorialsteacher.com/typescript/function-overloading
    // @ts-ignore
    state[key] = value;
  } catch (e) {
    console.log("ScrollInterface.set: type error");
  }
}

function get(key: keyof ScrollInterface): number | string | boolean {
  /*
   * actual return type of this function is a union of number, string, boolean – not string or number or boolean
   * this will lead to errors like :Argument of type 'string | number | boolean' is not assignable to parameter of type 'number'.
   * when trying to do type-specific operations like math on numbers
   * in those cases, need to wrap the value return here in Number(), for example:
   * scrollMachine.set(
          "yearAtCurrentScroll",
          Number(scrollMachine.get("yearAtCurrentScroll")) - 0.66
        );
  * that will not work unless yearAtCurrentScroll is typecast as Number where as
  * scrollMachine.get("yearAtCurrentScroll") !== scrollMachine.get("yearZero")
  * works just fine without typecasting
   */
  return state[key];
}

const scrollMachine = {
  state,
  set,
  get,
};
export default scrollMachine;

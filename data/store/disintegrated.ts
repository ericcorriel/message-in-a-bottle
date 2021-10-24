import { reactive, computed } from "@nuxtjs/composition-api";
import scrollStore from "~/data/store/scroll";
import { APP } from "~/data/constants/app";

export interface DisintegratedInterface {
  percentDisintegrated: number;
  videoTime: number;
  year: number;
}

const state: DisintegratedInterface = reactive({
  year: 0,
  videoTime: computed(() =>
    parseFloat(
      ((disintegratedStore.get("percentDisintegrated") * 60) / 100).toFixed(1)
    )
  ),
  percentDisintegrated: computed(
    () =>
      ((Number(disintegratedStore.get("year")) -
        Number(scrollStore.get("yearZero"))) /
        APP.YEARS_TILL_DISINTEGRATION) *
      100
  ),
});

function set(key: keyof DisintegratedInterface, value: number): void {
  state[key] = value;
}

function get(key: keyof DisintegratedInterface): number {
  return state[key];
}

const disintegratedStore = {
  set,
  get,
  state, // need to export the store bc can only watch reactive objects (in _slug.vue) and disintegratedStore is not reactive
};
export default disintegratedStore;

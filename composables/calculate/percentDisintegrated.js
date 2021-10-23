import scrollMachine from "~/data/scrollState";
import { APP } from "~/data/constants";

function calculatePercentDisintegrated(yearAtCurrentScroll) {
  return (
    ((yearAtCurrentScroll - scrollMachine.state.yearZero) /
      APP.YEARS_TILL_DISINTEGRATION) *
    100
  );
}

export { calculatePercentDisintegrated };

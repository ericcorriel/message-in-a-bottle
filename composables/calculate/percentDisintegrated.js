import scrollMachine from "~/data/store/scroll";
import { APP } from "~/data/constants/app";

function calculatePercentDisintegrated(yearAtCurrentScroll) {
  return (
    ((yearAtCurrentScroll - scrollMachine.state.yearZero) /
      APP.YEARS_TILL_DISINTEGRATION) *
    100
  );
}

export { calculatePercentDisintegrated };

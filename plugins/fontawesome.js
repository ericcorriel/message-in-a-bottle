import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon, faBrightness } from "@fortawesome/pro-regular-svg-icons";

// https://github.com/FortAwesome/vue-fontawesome/issues/14
config.autoAddCss = true;
library.add(faMoon);
library.add(faBrightness);

export default {
  FontAwesomeIcon,
};

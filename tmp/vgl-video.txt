/* eslint-env browser */
import VglSlotable from "~/node_modules/vue-gl/src/core/private/vgl-slotable";
import { change, inst, src } from "~/node_modules/vue-gl/src/constants";

/**
 * The image wrapper component to be used as the resource of other components.
 */
export default {
  extends: VglSlotable,
  props: {
    /** The path to an image. */
    [src]: { type: String, default: "" },
  },
  computed: {
    [inst]() {
      const video = document.createElement("video");
      video.addEventListener(
        "load",
        () => {
          this.$_vglSlot.$emit(change);
        },
        false
      );
      video.autoplay = true;
      this.generateMipmaps = false;
      return video;
    },
  },
  watch: {
    [src]: {
      handler(s) {
        this.inst.src = s;
      },
      immediate: true,
    },
  },
  render() {},
};

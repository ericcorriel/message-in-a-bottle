<template>
  <div class="canvas-container">
    <client-only>
      <vgl-renderer>
        <template #scene>
          <vgl-scene>
            <vgl-obj-loader
              :src="model[name]"
              :position-y="name === 'cottage' ? 250 : 0"
              :position-z="name === 'seahorse' ? 300 : 5"
              :rotation-x="name === 'cottage' ? -1.5 : 0"
              :rotation-y="name === 'cottage' ? 1 : 0"
            />
            <vgl-ambient-light :intensity="0.5" />
            <vgl-directional-light
              :position-x="1"
              :position-y="1"
              :position-z="1"
              :intensity="0.5"
            />
          </vgl-scene>
        </template>
        <template #camera>
          <vgl-perspective-camera
            position="spherical"
            :position-radius="290"
            rotation="lookAt"
          />
        </template>
      </vgl-renderer>
      <aside>
        <select v-model="name">
          <option value="seahorse">Seahorse</option>
          <option value="cottage">Cottage</option>
        </select>
      </aside>
    </client-only>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import {
  VglRenderer,
  VglScene,
  VglAmbientLight,
  VglDirectionalLight,
  VglPerspectiveCamera,
} from "vue-gl";
import VglObjLoader from "vue-gl/dist/examples/loaders/vgl-obj-loader";
import seahorse from "~/data/seahorse.obj";
import cottage from "~/data/cottage.obj";
import bottle from "~/data/obj/bottle.obj";

export default defineComponent({
  components: {
    VglRenderer,
    VglScene,
    VglAmbientLight,
    VglDirectionalLight,
    VglPerspectiveCamera,
    VglObjLoader,
  },
  setup() {
    const model = { seahorse, cottage };
    const name = ref("seahorse");

    return {
      bottle,
      model,
      name,
    };
  },
});
</script>

<style lang="sass" scoped>
.canvas-container
  width: 100vw
  height: 100vh
  canvas
    width: 100vw
    height: 100vh
</style>

<template>
  <div class="canvas-container">
    <client-only>
      <vgl-renderer>
        <template #scene>
          <vgl-scene>
            <vgl-obj-loader
              :src="bottle"
              :position-y="posY"
              :position-z="0"
              :rotation-x="180"
              :rotation-y="0"
              :rotation-z="0"
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
            :position-radius="270"
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
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import {
  VglRenderer,
  VglScene,
  VglAmbientLight,
  VglDirectionalLight,
  VglPerspectiveCamera,
} from "vue-gl";
import VglObjLoader from "vue-gl/dist/examples/loaders/vgl-obj-loader";
import * as THREE from "three";
import seahorse from "~/data/obj/seahorse.obj";
import cottage from "~/data/obj/cottage.obj";
import bottle from "~/data/obj/bottle-test.obj";
export default defineComponent({
  components: {
    VglRenderer,
    VglScene,
    VglAmbientLight,
    VglDirectionalLight,
    VglPerspectiveCamera,
    VglObjLoader,
    THREE,
  },
  setup() {
    const model = { seahorse, cottage };
    const name = ref("seahorse");
    const posY = ref(250);

    function getRandomAxis() {
      return new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
    }
    const sign = function (n) {
      return n === 0 ? 1 : n / Math.abs(n);
    };

    function getCentroid(geometry) {
      const ar = geometry.attributes.position.array;
      const len = ar.length;
      let x = 0;
      let y = 0;
      let z = 0;
      for (let i = 0; i < len; i = i + 3) {
        x += ar[i];
        y += ar[i + 1];
        z += ar[i + 2];
      }
      return { x: (3 * x) / len, y: (3 * y) / len, z: (3 * z) / len };
    }

    onMounted(() => {
      document.addEventListener("mousemove", updateBottle);
    });

    function updateBottle() {
      posY.value += 1;
    }

    return {
      model,
      name,
      cottage,
      seahorse,
      bottle,
      posY,
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

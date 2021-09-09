<template>
  <video width="100%" muted autoplay loop>
    <source :src="`${path}/bucket/${filename}`" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { Portrait } from "~/entity/v1/portrait";

export default defineComponent({
  name: "VideoEmbed",
  props: {
    path: { type: String, default: "/video" },
    frame: { type: Number, default: 0 },
    index: { type: Number, default: 0 },
    orientation: { type: String, default: "landscape" },
    filename: { type: String, default: "" },
  },
});
</script>

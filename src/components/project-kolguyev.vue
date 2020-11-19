<template>
  <Project
    placeholder="/nightsky-480w.jpg"
    image-set="/nightsky-480w.jpg 480w, /nightsky-768w.jpg 768w, /nightsky-1080w.jpg 1080w, /nightsky-1700w.jpg 1700w, /nightsky-3500w.jpg 3500w"
    image-sizes="(max-width: 600px) 480px, 768px, 1080px, 1700px, (min-width: 1900px) 3700px"
  >
    <template v-slot:header>
      <h2>Kolguyev</h2>
      <p>Some text</p>
    </template>
    <template v-slot:details> </template>
  </Project>
</template>

<script lang="ts">
  import { defineComponent, defineAsyncComponent } from "vue";

  export default defineComponent({
    name: "Project-Kolguyev",
    components: {
      Project: defineAsyncComponent(() => import("./project.vue")),
    },
  });
</script>

<style lang="scss" scoped>
  .project {
    min-height: 20em;
    color: white;
  }
  .details {
    color: green;
  }
</style>

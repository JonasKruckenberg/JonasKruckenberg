<template>
  <Project
    image="/nightsky3x.jpg"
    image-set="/nightsky-480w.jpg 480w, /nightsky-768w.jpg 768w, /nightsky-1080w.jpg 1080w"
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
    // background-image: image-set(
    //   url("../assets/nightsky1x.jpg") 1x,
    //   url("../assets/nightsky2x.jpg") 2x,
    //   url("../assets/nightsky3x.jpg") 3x,
    //   url("../assets/nightsky4x.jpg") 4x
    // );
    // background-image: -webkit-image-set(
    //   url("../assets/nightsky1x.jpg") 1x,
    //   url("../assets/nightsky2x.jpg") 2x,
    //   url("../assets/nightsky3x.jpg") 3x,
    //   url("../assets/nightsky4x.jpg") 4x
    // );
    // background-position-y: 30%;
    min-height: 20em;
    color: white;
  }
  .details {
    color: green;
  }
</style>

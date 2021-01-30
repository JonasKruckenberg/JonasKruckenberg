<template>
  <!-- <Project
    placeholder="/nightsky-480w.jpg"
    image-set="/nightsky-480w.jpg 480w, /nightsky-768w.jpg 768w, /nightsky-1080w.jpg 1080w, /nightsky-1700w.jpg 1700w, /nightsky-3500w.jpg 3500w"
    image-sizes="(max-width: 600px) 480px, 768px, 1080px, 1700px, (min-width: 1900px) 3700px"
  > -->
  <Project>
    <template v-slot:picture>
      <picture>
        <source
          srcset="
            ../assets/nightsky-3500w.jpg?width=768&avif   768w,
            ../assets/nightsky-3500w.jpg?width=1080&avif 1080w,
            ../assets/nightsky-3500w.jpg?width=1700&avif 1700w,
            ../assets/nightsky-3500w.jpg?avif            3500w
          "
          type="image/avif"
        />
        <source
          srcset="
            ../assets/nightsky-3500w.jpg?width=768&webp   768w,
            ../assets/nightsky-3500w.jpg?width=1080&webp 1080w,
            ../assets/nightsky-3500w.jpg?width=1700&webp 1700w,
            ../assets/nightsky-3500w.jpg?webp            3500w
          "
          type="image/webp"
        />
        <source
          srcset="
            ../assets/nightsky-3500w.jpg?width=768   &#160;768w,
            ../assets/nightsky-3500w.jpg?width=1080 &#160;1080w,
            ../assets/nightsky-3500w.jpg?width=1700 &#160;1700w,
            ../assets/nightsky-3500w.jpg            &#160;3500w
          "
          type="image/webp"
        />
        <img src="../assets/nightsky-3500w.jpg?width=480" alt="" />
      </picture>
    </template>
    <template v-slot:header>
      <h2>Kolguyev</h2>
      <p>Some text</p>
    </template>
    <template v-slot:details> </template>
  </Project>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import Template from "./template.vue";

export default defineComponent({
  name: "Project-Kolguyev",
  components: {
    Project: defineAsyncComponent(() => import("./project.vue")),
    Template,
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

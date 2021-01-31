<template>
  <Project>
    <template v-slot:picture>
      <picture>
        <source
          srcset="
            ../assets/nightsky.jpg?width=768&avif   &#160;768w,
            ../assets/nightsky.jpg?width=1080&avif &#160;1080w,
            ../assets/nightsky.jpg?width=1700&avif &#160;1700w,
            ../assets/nightsky.jpg?avif            &#160;3500w
          "
          type="image/avif"
        />
        <source
          srcset="
            ../assets/nightsky.jpg?width=768&webp   &#160;768w,
            ../assets/nightsky.jpg?width=1080&webp &#160;1080w,
            ../assets/nightsky.jpg?width=1700&webp &#160;1700w,
            ../assets/nightsky.jpg?webp            &#160;3500w
          "
          type="image/webp"
        />
        <source
          srcset="
            ../assets/nightsky.jpg?width=768   &#160;768w,
            ../assets/nightsky.jpg?width=1080 &#160;1080w,
            ../assets/nightsky.jpg?width=1700 &#160;1700w,
            ../assets/nightsky.jpg            &#160;3500w
          "
          type="image/webp"
        />
        <img src="../assets/nightsky.jpg?width=480" alt="" />
      </picture>
    </template>
    <template v-slot:header>
      <h2>Kolguyev</h2>
      <p>Some text</p>
    </template>
    <template v-slot:details> </template>
  </Project>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const Project = defineAsyncComponent(() => import("./project.vue"));
</script>

<style lang="scss" scoped>
.project {
  min-height: 20em;
  color: white;
}
picture {
  * {
    border-radius: 13px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.details {
  color: green;
}
</style>

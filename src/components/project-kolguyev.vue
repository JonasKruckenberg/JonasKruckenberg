<template>
  <Project>
    <template v-slot:picture>
      <picture>
        <source
          type="image/avif"
          media="(min-width: 1300px)"
          srcset="../assets/img/nightsky.jpg?avif&width=2400"
        />
        <source
          type="image/avif"
          media="(min-width: 1012px)"
          srcset="../assets/img/nightsky.jpg?avif&width=1412"
        />
        <source
          type="image/avif"
          media="(min-width: 768px)"
          srcset="../assets/img/nightsky.jpg?avif&width=1368"
        />
        <source
          type="image/avif"
          media="(min-width: 540px)"
          srcset="../assets/img/nightsky.jpg?avif&width=1140"
        />

        <source
          type="image/webp"
          media="(min-width: 1300px)"
          srcset="../assets/img/nightsky.jpg?webp&width=2400"
        />
        <source
          type="image/webp"
          media="(min-width: 1012px)"
          srcset="../assets/img/nightsky.jpg?webp&width=1412"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="../assets/img/nightsky.jpg?webp&width=1368"
        />
        <source
          type="image/webp"
          media="(min-width: 540px)"
          srcset="../assets/img/nightsky.jpg?webp&width=1140"
        />
        <img src="../assets/img/nightsky.jpg?width=480" alt="" />
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

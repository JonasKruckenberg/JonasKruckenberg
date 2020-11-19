<template>
  <Project>
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
  background-image: url("../assets/nightsky.jpg");
  background-position-y: 30%;
  min-height: 20em;
  color: white;
}
.details {
  color: green;
}
</style>
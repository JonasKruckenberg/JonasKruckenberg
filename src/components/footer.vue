<template>
  <div class="grid">
    <Card>
      <span>Sitemap</span>
      <span>nav</span>
    </Card>
    <Card>
      <span>Copyright © {{ new Date().getFullYear() }} Jonas Kruckenberg</span>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const Card = defineAsyncComponent(() => import("./card.vue"));
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.grid {
  display: grid;
  margin: 12px auto;

  grid-column-gap: 8px;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: minmax(7em, max-content);
  grid-auto-rows: 0;
  .card {
    background-color: $black;
    color: $white;
  }
}
</style>
<template>
  <Card style="grid-area: brand"></Card>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/card.vue")),
  },
};
</script>

<style lang="ts" scoped>
.card {
  background: url("../assets/profile.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: span 2;
  grid-row: span 2;
}
@media (max-width: 640px) {
  .card {
    display: none;
  }
}
</style>

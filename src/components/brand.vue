<template>
  <Card style="grid-area: brand"></Card>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Brand",
  components: {
    Card: defineAsyncComponent(() => import("./card.vue")),
  },
});
</script>

<style lang="scss" scoped>
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
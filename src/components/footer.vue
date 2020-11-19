<template>
  <div class="grid" id="footer">
    <Card>
      <span>Sitemap</span>
      <span>nav</span>
    </Card>
    <Card>
      <span>Copyright © {{ new Date().getFullYear() }} Jonas Kruckenberg</span>
    </Card>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Card: defineAsyncComponent(() => import("./card.vue")),
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
#footer {
  display: grid;
  margin: 12px auto;

  grid-column-gap: 8px;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: minmax(7em, max-content);
  .card {
    background-color: $black;
    color: $white;
  }
}
</style>

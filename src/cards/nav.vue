<template>
  <Card>
    <nav>
      <ol>
        <li>
          <a href="#photography">Photography</a>
        </li>
        <li>
          <a href="#opensource">Open Source work</a>
        </li>
      </ol>
    </nav>
  </Card>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/card.vue")),
  },
};
</script>

<style lang="ts" scoped></style>

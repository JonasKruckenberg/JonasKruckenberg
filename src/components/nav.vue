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

<script lang="ts">
import { ref, defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  components: {
    Card: defineAsyncComponent(() => import("./card.vue")),
  },
});
</script>

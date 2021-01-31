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

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const Card = defineAsyncComponent(() => import("./card.vue"));
</script>

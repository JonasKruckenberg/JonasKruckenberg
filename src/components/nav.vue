<template>
  <Card>
    <nav></nav>
  </Card>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const Card = defineAsyncComponent(() => import("./card.vue"));
</script>

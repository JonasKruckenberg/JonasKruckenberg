<template>
  <Card><h1>normal</h1></Card>
  <Card class="horizontal small">
    <h1>horizontal small</h1>
  </Card>
  <Card class="horizontal medium">
    <h1>horizontal medium</h1>
  </Card>
  <Card class="horizontal large">
    <h1>horizontal large</h1>
  </Card>
  <Card class="vertical small">
    <h1>vertical small</h1>
  </Card>
  <Card class="vertical medium">
    <h1>vertical medium</h1>
  </Card>
  <Card class="vertical large">
    <h1>vertical large</h1>
  </Card>
  <Card class="fullheight">
    <h1>fullheight</h1>
  </Card>
  <Card class="hero">
    <h1>hero</h1>
  </Card>
  <Card class="fullwidth">
    <h1>fullwidth</h1>
  </Card>
</template>

<script lang="ts">
  import Card from "../components/card.vue";

  export default {
    components: {
      Card,
    },
  };
</script>

<style lang="scss" scoped></style>

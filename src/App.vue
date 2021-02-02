<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Portfolio | Jonas Kruckenberg",
  meta: [
    {
      name: `description`,
      content: `Im a datascience student and web3 contributor. Welcome to my portfolio!`,
    },
    {
      name: "theme-color",
      content: "#e63946",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      hef: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/apple-touch-icon-180x180.png",
    },
  ],
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
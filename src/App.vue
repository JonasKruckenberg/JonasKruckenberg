<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Portfolio | Jonas Kruckenberg",
  meta: [
    {
      name: "description",
      property: "og:description",
      content:
        "Im a datascience student and web3 contributor. Welcome to my portfolio!",
    },
    {
      name: "theme-color",
      content: "#e63946",
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "profile:first_name",
      content: "Jonas",
    },
    {
      property: "profile:last_name",
      content: "Kruckenberg",
    },
    {
      property: "profile:username",
      content: "jkruckenberg",
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
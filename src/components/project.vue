<template>
  <Card class="project" :class="{ fullscreen }" @click="maximize()" ref="root">
    <img alt="" :src="image" :srcset="imageSet" :sizes="imageSizes" />
    <span></span>
    <!-- <span class="header">
      <slot name="header" />
    </span>
    <span class="details">
      <slot name="details" />
    </span> -->
  </Card>
</template>

<script lang="ts">
  import {
    ref,
    defineComponent,
    defineAsyncComponent,
    App,
    Component,
    watchEffect,
  } from "vue";
  // @ts-ignore
  import anime from "animejs/lib/anime.es.js";

  export default defineComponent({
    name: "Project",
    components: {
      Card: defineAsyncComponent(() => import("./card.vue")),
    },
    props: {
      image: String,
      imageSet: String,
      imageSizes: String,
    },
    setup({ image, imageSet, imageSizes }) {
      const root = ref(null);
      const fullscreen = ref(false);

      function resize(): Promise<void> {
        // @ts-ignore
        const bounds = ref(root.value.$el.getBoundingClientRect());

        return anime({
          // @ts-ignore
          targets: root.value.$el,
          translateX: -bounds.value.left,
          translateY: -bounds.value.top,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          duration: 250,
          easing: "easeInQuad",
        }).finished;
      }

      function maximize() {
        if (fullscreen.value) return;

        window.onresize = () => {
          // @ts-ignore
          root.value.$el.style.width = window.innerWidth + "px";
          // @ts-ignore
          root.value.$el.style.height = window.innerHeight + "px";
        };

        resize().then(() => {
          fullscreen.value = true;
          anime({
            // @ts-ignore
            targets: root.value.$el,
            translateZ: 0,
            duration: 0,
          });
        });
      }

      return {
        root,
        maximize,
        fullscreen,
        image,
        imageSet,
        imageSizes,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";

  .card {
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 1.2em;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 20%;
    grid-auto-rows: max-content;
    grid-gap: 32px;

    .details {
      padding: 32px 5vw;
      display: none;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0 !important;
    }
  }

  @media screen and (min-width: $breakpoint-s) {
    .card {
      grid-column: span 2;
      grid-template-rows: 60% minmax(20%, max-content);
    }
  }

  @media screen and (min-width: $breakpoint-l) {
    .card {
      grid-row: span 2;
      grid-template-rows: 75% minmax(20%, max-content);
    }
  }

  .fullscreen {
    position: fixed;
    transform: translateX(0) translateY(0) !important;
    top: 0;
    left: 0;
    padding: 0;
    overflow: auto;
    * {
      padding: 32px;
    }

    .header {
      font-size: 1.3em;
    }

    .details {
      display: unset;
      color: black;
      background-color: white;
    }
  }
</style>

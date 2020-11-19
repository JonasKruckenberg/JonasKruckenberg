<template>
  <Card class="project" :class="{ fullscreen }" @click="maximize()" ref="root">
    <span></span>
    <span class="header">
      <slot name="header" />
    </span>
    <span class="details">
      <slot name="details" />
    </span>
  </Card>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    Card: defineAsyncComponent(() => import("./card.vue")),
  },
  setup() {
    const root = ref(null);
    const fullscreen = ref(false);

    function maximize() {
      if (fullscreen.value) return;
      const bounds = root.value.$el.getBoundingClientRect();

      anime({
        targets: root.value.$el,
        translateX: -bounds.left,
        translateY: -bounds.top,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        duration: 250,
        easing: "easeInQuad",
      }).finished.then(() => {
        console.log("done");
        fullscreen.value = true;
      });
    }

    return {
      root,
      maximize,
      fullscreen,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.card {
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
}

@media screen and (min-width: $breakpoint-m) {
  .card {
    grid-column: span 2;
    grid-template-rows: 70% minmax(20%, max-content);
  }
}

@media screen and (min-width: $breakpoint-l) {
  .card {
    grid-row: span 2;
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

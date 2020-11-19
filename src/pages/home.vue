<template>
  <div class="grid">
    <Brand style="grid-area: brand" />
    <Card style="grid-area: featured; order: 1">featured</Card>
    <Navigation style="grid-area: nav; order: 1" />
    <Card style="grid-area: welcome; order: 1">
      <h1>
        Hi 👋 <br />
        I'm Jonas!
      </h1>
      <p>
        I'm a data science student, web 3.0 contributor and global citizen.
        <br />I like Photography, Music and Storytelling.
      </p>
      <p>I also write about stuff that I find interesting.</p>
    </Card>
    <Project-Kolguyev />
    <!-- <Card>
      <h1 class="h0">foo bar</h1>
      <h1>foo bar</h1>
      <h2>foo bar</h2>
      <h3>foo bar</h3>
      <h4>foo bar</h4>
      <h5>foo bar</h5>
      <h6>foo bar</h6>
      <h6 class="h7">foo bar</h6>
    </Card> -->
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import { ref, defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Card: defineAsyncComponent(() => import("../components/card.vue")),
    Brand: defineAsyncComponent(() => import("../components/brand.vue")),
    Navigation: defineAsyncComponent(() => import("../components/nav.vue")),
    Project: defineAsyncComponent(() => import("../components/project.vue")),
    ProjectKolguyev: defineAsyncComponent(
      () => import("../components/project-kolguyev.vue")
    ),
    Footer: defineAsyncComponent(() => import("../components/footer.vue")),
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.grid {
  grid-template-areas:
    "welcome"
    "nav"
    "featured";
}

@media screen and (min-width: $breakpoint-s) and (max-width: $breakpoint-l) {
  .grid {
    grid-template-areas:
      "featured featured nav"
      "brand welcome welcome";
  }
}

@media screen and (min-width: $breakpoint-l) {
  .grid {
    grid-template-areas:
      "brand featured featured nav"
      ". . welcome nav";
  }
}
</style>
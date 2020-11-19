<template>
  <div class="grid" id="start">
    <Brand style="grid-area: brand" />
    <Card style="grid-area: featured">featured</Card>
    <Navigation style="grid-area: nav" />
    <Card style="grid-area: welcome">
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
    <Kolguyev />
    <Card>
      <h1 class="h0">foo bar</h1>
      <h1>foo bar</h1>
      <h2>foo bar</h2>
      <h3>foo bar</h3>
      <h4>foo bar</h4>
      <h5>foo bar</h5>
      <h6>foo bar</h6>
      <h6 class="h7">foo bar</h6>
    </Card>
  </div>
  <Footer></Footer>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Card from "../components/card.vue";
import Brand from "../cards/brand.vue";

export default {
  components: {
    Card,
    Brand,
    Project: defineAsyncComponent(() => import("../components/project.vue")),
    Footer: defineAsyncComponent(() => import("../components/footer.vue")),
    Navigation: defineAsyncComponent(() => import("../cards/nav.vue")),
    Kolguyev: defineAsyncComponent(() => import("../cards/kolguyev.vue")),
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
#start {
  grid-template-areas:
    "welcome"
    "nav"
    "featured";
}

@media screen and (min-width: $breakpoint-m) and (max-width: $breakpoint-l) {
  #start {
    grid-template-areas:
      "featured featured nav"
      "brand welcome welcome";
  }
}

@media screen and (min-width: $breakpoint-l) {
  #start {
    grid-template-areas:
      "brand featured featured nav"
      ". . welcome nav";
  }
}
</style>

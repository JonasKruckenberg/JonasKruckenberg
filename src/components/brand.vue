<template>
  <picture id="brand">
    <source srcset="../assets/profile.jpg?avif" type="image/avif" />
    <source srcset="../assets/profile.jpg?webp" type="image/webp" />
    <img src="../assets/profile.jpg" alt="" />
  </picture>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
#brand {
  display: none;
  grid-column: span 2;
  grid-row: span 2;
  padding: 0;
  border-radius: 13px;
  box-shadow: 0 1.7px 6.1px rgba(#091419, 0.02),
    0 5.6px 20.3px rgba(#091419, 0.03), 0 25px 91px rgba(#091419, 0.05);
  * {
    border-radius: 13px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (min-width: $breakpoint-s) {
  #brand {
    display: unset;
  }
}
</style>

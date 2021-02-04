<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.card {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2em;
  border-radius: 13px;
  background-color: white;
  box-shadow: 0 1.7px 6.1px rgba(#091419, 0.02),
    0 5.6px 20.3px rgba(#091419, 0.03), 0 25px 91px rgba(#091419, 0.05);
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import "../assets/variables.scss";
@import "../assets/code-theme-dark.scss";

.markdown-body {
  display: block;
  margin: 32px;
  padding: 2em;

  table {
    border-collapse: collapse;

    th,
    td {
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: $black;
      color: $white;
    }
    th:first-child {
      border-radius: $rounding 0 0 $rounding;
    }
    th:last-child {
      border-radius: 0 $rounding $rounding 0;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  ul,
  ol {
    ::marker {
      font-weight: $font-weight-bold;
    }
  }

  blockquote {
    padding: 20px;
    border-left: 7px solid $red;
    margin-left: 0;
    margin-right: 0;
  }

  img {
    max-width: 33%;
  }
}
</style>
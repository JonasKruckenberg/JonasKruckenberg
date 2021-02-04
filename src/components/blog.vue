<template>
  <div class="blog">
    <header style="grid-area: header">
      <picture>
        <source
          type="image/avif"
          media="(min-width: 1300px)"
          srcset="../assets/img/palmtree.jpg?avif&width=2200"
        />
        <source
          type="image/avif"
          media="(min-width: 1012px)"
          srcset="../assets/img/palmtree.jpg?avif&width=1212"
        />
        <source
          type="image/avif"
          media="(min-width: 768px)"
          srcset="../assets/img/palmtree.jpg?avif&width=968"
        />
        <source
          type="image/avif"
          media="(min-width: 540px)"
          srcset="../assets/img/palmtree.jpg?avif&width=740"
        />

        <source
          type="image/webp"
          media="(min-width: 1300px)"
          srcset="../assets/img/palmtree.jpg?webp&width=2200"
        />
        <source
          type="image/webp"
          media="(min-width: 1012px)"
          srcset="../assets/img/palmtree.jpg?webp&width=1212"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="../assets/img/palmtree.jpg?webp&width=968"
        />
        <source
          type="image/webp"
          media="(min-width: 540px)"
          srcset="../assets/img/palmtree.jpg?webp&width=740"
        />
        <img src="../assets/img/palmtree.jpg" alt="" />
      </picture>
      <h1 class="display"></h1>
    </header>
    <main style="grid-area: content">
      <slot></slot>
    </main>
    <aside style="grid-area: sidebar">sidebar yo</aside>
    <Footer style="grid-area: footer"></Footer>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import Footer from "./footer.vue";

const props = defineProps({
  frontmatter: Object,
});

function useWidths(
  image: string,
  formatOrSize: string | number,
  ...sizes: number[]
) {
  const hasFormat = typeof formatOrSize === "string";
  const out = ref("");

  sizes.forEach(async (size) => {
    if (hasFormat) {
      const { default: url } = await import(
        `../assets/img/${image}.jpg?format=${formatOrSize}&width=${size}`
      );
      out.value += `${url} ${size}w ,`;
    } else {
      const { default: url } = await import(
        `../assets/img/${image}.jpg?width=${size}`
      );
      out.value += `${url} ${size}w ,`;
    }
  });

  return out;
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/code-theme-dark.scss";
.blog {
  display: grid;
  grid-template-columns: 1fr minmax(70vw, max-content) 1fr;
  grid-template-rows: 75vh 1fr minmax(4em, max-content);
  grid-template-areas:
    "header header header"
    ". content sidebar"
    "footer footer footer";
}

header {
  img {
    width: 100vw;
    max-height: 100%;
    object-fit: cover;
  }
}

.markdown-body {
  display: block;
  margin: clamp(16px, 5%, 2em);
  max-width: 1000px;

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
      font-weight: $font-weight-bold;
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
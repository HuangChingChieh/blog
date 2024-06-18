<template>
  <AsideContainer title="精選文章">
    <div :class="$style.grid" class="mt-4 pt-3">
      <ArticleCardCompact
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </AsideContainer>
</template>

<script setup>
const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-rows: repeat(3, calc((100% - var(--bs-gutter-x) * 2) / 3));
  grid-template-columns: 1fr;
  gap: var(--bs-gutter-x);
  height: 300px;
}
</style>

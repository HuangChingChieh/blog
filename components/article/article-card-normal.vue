<template>
  <NuxtLink
    v-if="article"
    class="d-flex flex-column flex-lg-row text-decoration-none p-3 p-lg-4 rounded shadow-sm bg-foreground"
    :to="getArticleLink(article)"
  >
    <InterfaceImg
      :class="$style.img"
      :img="article.img"
      class="me-lg-3 rounded"
      :img-class="[`rounded`, $style.img]"
    />

    <div class="d-flex flex-column flex-grow-1">
      <ArticleCardTitle class="mt-2 pt-1 pt-lg-0 mt-lg-0 mb-2 mb-lg-3">
        {{ article.title }}
      </ArticleCardTitle>

      <ArticleCardDescription
        :description="article.description"
        class="mb-0"
      />

      <div class="d-flex flex-row flex-grow-1 align-items-end mt-2 mt-lg-0">
        <ArticleDate
          :document="article"
          class="flex-grow-1"
        />
        <ArticleReadingtime :minutes="article.readingTime.minutes" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    default: null,
  },

})
</script>

<style
  lang="scss"
  module
>
@import '../../assets/css/article-card.module.scss';

.img {
  aspect-ratio: 16/9;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    aspect-ratio: 21/9;
  }

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    aspect-ratio: 4/3;
    height: calc($card-title-height + $card-text-height + 3rem);
  }

  @media (min-width: map-get($grid-breakpoints, 'xl')) {
    aspect-ratio: 16/9;
    height: calc($card-title-height + $card-text-height + 5rem);
  }
}
</style>
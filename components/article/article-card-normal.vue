<template>
  <ArticleCardWrapper
    class="flex flex-col lg:flex-row bg-background dark:bg-background-dark"
    :class="container ? `p-4 lg:p-6` : ``"
    :article="article"
    :container="container"
  >
    <InterfaceImg
      :class="$style.img"
      :img="article.img"
      class="lg:me-4 rounded"
      :img-class="[`rounded`, $style.img]"
    />

    <div class="flex flex-col grow">
      <ArticleCardTitle class="mt-2 pt-1 lg:pt-0 lg:mt-0 mb-2 lg:mb-lg-4">
        {{ article.title }}
      </ArticleCardTitle>

      <ArticleCardDescription
        :description="article.description"
        class="mb-0 line-clamp-3"
      />

      <div class="flex flex-row grow items-end justify-end mt-2 lg:mt-0">
        <ArticleReadingtime
          :minutes="article.readingTime.minutes"
          class="me-6"
        />
        <ArticleDate :document="article" />
      </div>
    </div>
  </ArticleCardWrapper>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    default: null,
  },
  container: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" module>
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

<template>
  <ArticleCardWrapper
    class="flex flex-col bg-background dark:bg-background-dark"
    :article="article"
  >
    <ArticleBanner
      v-if="article.img"
      :img="article.img"
      :break-points="imgBreakPoints"
      class="rounded-t"
    />

    <div class="px-4 py-4">
      <ArticleCardTitle>
        {{ article.title }}
      </ArticleCardTitle>

      <ArticleCardDescription :description="article.description" class="mt-2" />

      <div class="flex flex-row justify-end items-center mt-3">
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
    default: () => ({}),
  },
  preloadImg: {
    type: Boolean,
    default: false,
  },
  imgBreakPoints: {
    type: Object,
    default: () => ({
      sm: 640,
      md: 224,
      lg: 310,
      xl: 400,
      '2xl': 480,
    }),
  },
})
</script>

<template>
  <ArticleCardWrapper
    class="flex flex-col md:flex-row bg-background dark:bg-background-dark"
    :class="container ? `p-4 md:p-6` : ``"
    :article="article"
    :container="container"
  >
    <InterfaceImg
      :img="article.img"
      class="md:me-4 rounded aspect-video block"
      img-class="rounded"
    />

    <div class="flex flex-col grow">
      <ArticleCardTitle class="mt-2 pt-1 md:pt-0 md:mt-0 mb-2 md:mb-4">
        {{ article.title }}
      </ArticleCardTitle>

      <ArticleCardDescription :description="article.description" />

      <div class="flex flex-row grow items-end justify-end mt-2 md:mt-0">
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

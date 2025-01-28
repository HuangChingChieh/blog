<template>
  <ArticleCardWrapper
    class="flex md:flex-row gap-3 md:gap-4"
    :class="container ? `p-4 md:p-6` : ``"
    :article="article"
    :container="container"
  >
    <!-- 這裡高度的11.75rem是計算ArticleCardTitle / ArticleCardDescription / ArticleReadingtime / ArticleDate加上間距計算而得 -->
    <InterfaceImg
      :img="article.img"
      class="rounded aspect-video lg:aspect-square xl:aspect-video row-span-3 col-span-1 h-[11.75rem]"
      img-class="rounded aspect-video lg:aspect-square xl:aspect-video h-[11.75rem]"
    />

    <div class="flex flex-col gap-3 md:gap-4">
      <ArticleCardTitle>{{ article.title }}</ArticleCardTitle>
      <ArticleCardDescription :description="article.description" />
      <div class="flex flex-row grow items-end justify-end">
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

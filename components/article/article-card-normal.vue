<template>
  <ArticleCardWrapper
    class="flex flex-col md:flex-row gap-3 md:gap-4"
    :class="container ? `p-4 md:p-6` : ``"
    :article="article"
    :container="container"
  >
    <!-- 這裡高度的11.75rem是計算ArticleCardTitle / ArticleCardDescription / ArticleReadingtime / ArticleDate加上間距計算而得 -->
    <InterfaceImg
      :img="article.img"
      class="rounded aspect-video lg:aspect-[4/3] xl:aspect-video row-span-3 col-span-1 md:h-[11.75rem]"
      :break-points="imgBreakPoints"
    />

    <div class="flex flex-col gap-3 md:gap-4 md:grow">
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
  imgBreakPoints: {
    type: Object,
    default: () => ({}),
  },
})
</script>

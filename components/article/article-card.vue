<template>
  <ArticleCardWrapper
    class="flex flex-col bg-background dark:bg-background-dark"
    :article="article"
  >
    <ArticleBanner
      v-if="article.img"
      :img="article.img"
      :sizes="bannerSizes"
      :preload="preloadImg"
      img-class="aspect-video w-full rounded-t"
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
import ArticleCardTitle from '~/components/article/article-card-title.vue'
import ArticleBanner from '~/components/article/article-banner.vue'
import ArticleDate from '~/components/article/article-date.vue'
import ArticleReadingtime from '~/components/article/article-readingtime.vue'

import getImgSizes from '~/utils/getImgSizes'

defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
  preloadImg: {
    type: Boolean,
    default: false,
  },
})

const bannerSizes = getImgSizes(({ containerMaxWidth }) => {
  let imageWidth = containerMaxWidth

  const containerMaxWidthNum = containerMaxWidth.replace(/[^0-9]/g, '')
  imageWidth = Number(containerMaxWidthNum) * 0.4

  return imageWidth
})
</script>

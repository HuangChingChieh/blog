<template>
  <ArticleCardWrapper
    class="flex flex-col bg-background dark:bg-background-dark"
    :class="$style.card"
    :article="article"
  >
    <ArticleBanner
      v-if="article.img"
      :img="article.img"
      :class="$style.banner"
      :sizes="bannerSizes"
      :preload="preloadImg"
      :img-class="$style.img"
    />

    <div class="flex flex-col grow px-4 py-4">
      <div :class="$style.content">
        <ArticleCardTitle>
          {{ article.title }}
        </ArticleCardTitle>

        <ArticleCardDescription
          :description="article.description"
          class="line-clamp-2"
        />
      </div>

      <div class="flex flex-row justify-end items-center mt-4">
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

<style lang="scss" module>
@import '../../assets/css/article-card.module.scss';

.card {
  overflow: hidden;

  .description {
    font-size: $font-size-base;
    max-height: $card-text-height;
  }

  .img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }

  @media #{$break-mobile} {
    .content {
      height: $card-title-height + $card-text-height + $headings-margin-bottom;

      .title {
        max-height: $card-title-height;
      }
    }

    .description {
      display: block;
    }
  }
}
</style>

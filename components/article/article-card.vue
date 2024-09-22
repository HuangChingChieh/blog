<template>
  <article
    class="d-flex flex-column rounded bg-foreground"
    :class="$style.card"
  >
    <ArticleBanner
      v-if="article.img"
      :img="article.img"
      :class="$style.banner"
      :sizes="bannerSizes"
      :preload="preloadImg"
      :img-class="$style.img"
    />

    <div class="d-flex flex-column flex-grow-1 px-3 py-3">
      <div :class="$style.content">
        <ArticleCardTitle>
          {{ article.title }}
        </ArticleCardTitle>

        <ArticleCardDescription :description="article.description" />
      </div>

      <div class="d-flex flex-row align-items-center mt-3">
        <ArticleDate
          :document="article"
          class="small me-3"
        />
        <ArticleReadingtime
          :minutes="article.readingTime.minutes"
          class="me-3 d-block d-lg-none d-xl-block"
        />
        <ArticleCategory :article="article" />
        <div class="text-end flex-grow-1">
          <ButtonEnter :to="getArticleLink(article)">
            閱讀更多
          </ButtonEnter>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import ArticleCardTitle from '~/components/article/article-card-title.vue'
import ArticleBanner from '~/components/article/article-banner.vue'
import ArticleDate from '~/components/article/article-date.vue'
import ArticleReadingtime from '~/components/article/article-readingtime.vue'
import ArticleCategory from '~/components/article/article-category.vue'

import ButtonEnter from '~/components/button/button-enter.vue'

import { getArticleLink } from '~/utils/getLink'
import getImgSizes from '~/utils/getImgSizes'

const props = defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
  preloadImg: {
    type: Boolean,
    default: false,
  },
})

const bannerSizes = getImgSizes(({ containerMaxWidth, isMobile }) => {
  let imageWidth = containerMaxWidth

  const containerMaxWidthNum = containerMaxWidth.replace(/[^0-9]/g, '')
  imageWidth = Number(containerMaxWidthNum) * 0.4

  return imageWidth
})
</script>

<style
  lang="scss"
  module
>
@import '../../assets/css/article-card.module.scss';

.card {
  overflow: hidden;
  transition: $btn-transition, transform 0.15s ease-in-out;
  box-shadow: $box-shadow-sm;

  &:hover {
    box-shadow: $box-shadow;
    transform: scale(1.025);
  }

  .description {
    font-size: $font-size-base;
    max-height: $card-text-height;
  }

  .img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .card {
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

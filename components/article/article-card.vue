<template>
  <article
    class="d-flex flex-column align-items-stretch rounded"
    :class="[`flex-${mobileBreakpoint}-row`, $style.card]"
  >
    <div
      class="d-flex flex-column flex-grow-1 px-3 py-3 order-2"
      :class="[`order-${mobileBreakpoint}-1`, `px-${mobileBreakpoint}-4`]"
    >
      <div :class="$style.content">
        <h4
          class="text-body text-line-2"
          :class="$style.title"
        >
          {{ article.title }}
        </h4>

        <p
          class="text-muted text-line-2"
          :class="$style.description"
          :title="article.description"
        >
          {{ article.description }}
        </p>
      </div>

      <div
        class="d-flex flex-row align-items-center"
        :class="[`mt-${mobileBreakpoint}-3`]"
      >
        <ArticleDate
          :document="article"
          class="small"
        />
        <ArticleReadingtime :minutes="article.readingTime.minutes" />
        <ArticleCategory :article="article" />
        <div class="text-end flex-grow-1">
          <ButtonEnter :to="getArticleLink(article)">
            閱讀更多
          </ButtonEnter>
        </div>
      </div>
    </div>

    <ArticleBanner
      v-if="article.img"
      :img="article.img"
      class="align-self-stretch order-1"
      :class="[`order-${mobileBreakpoint}-2`, $style.banner]"
      :sizes="bannerSizes"
      :preload="preloadImg"
      :img-class="$style.img"
    />
  </article>
</template>

<script setup>
import { mobileBreakpoint } from '~/assets/css/export.module.scss'
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
  if (!isMobile) {
    const containerMaxWidthNum = containerMaxWidth.replace(/[^0-9]/g, '')
    imageWidth = Number(containerMaxWidthNum) * 0.4 + 'px'
  }

  return imageWidth
})
</script>

<style lang="scss" module>
$card-content-line: 2;
$card-text-line: 2;
$card-title-font-size: $h4-font-size;
$card-title-height: $headings-line-height * $card-content-line *
  $card-title-font-size;
$card-text-font-size: $font-size-base;
$card-text-height: $line-height-base * $card-content-line * $font-size-base;

.card {
  background-color: var(--bs-secondary-bg);
  overflow: hidden;
  transition: $btn-transition, transform 0.15s ease-in-out;
  box-shadow: $box-shadow-sm;
  &:hover {
    box-shadow: $box-shadow;
    transform: scale(1.025);
  }

  @media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
    background-color: var(--bs-body-bg);
  }

  [data-bs-theme='light'] & {
    background-color: var(--bs-body-bg);
  }

  .banner {
    width: 100%;
    min-width: 40%;
  }

  .description {
    font-size: $font-size-base;
    max-height: $card-text-height;
    margin: 0;
    display: none;
  }

  .content {
    .title {
      font-size: 1.1rem;
      font-weight: 900;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .card {
    // background-color: transparent;
    .banner {
      width: 40%;
      min-width: 40%;
    }

    .content {
      height: $card-title-height + $card-text-height + $headings-margin-bottom;

      .title {
        font-size: $card-title-font-size;
        max-height: $card-title-height;
      }
    }

    .description {
      display: block;
    }
  }
}
</style>

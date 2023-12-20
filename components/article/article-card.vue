<template>
  <article
    class="d-flex flex-column align-items-stretch common-container article-card"
    :class="[`flex-${mobileBreakpoint}-row`]"
  >
    <div
      class="d-flex flex-column flex-grow-1 px-3 py-3 order-2"
      :class="[`order-${mobileBreakpoint}-1`, `px-${mobileBreakpoint}-4`]"
    >
      <div class="article-title-text">
        <h4 class="text-body font-weight-bolder article-title text-two-line">
          {{ article.title }}
        </h4>

        <p
          class="text-muted article-text text-two-line"
          :title="article.description"
        >
          {{ article.description }}
        </p>
      </div>

      <div
        class="d-flex flex-row align-items-center"
        :class="[`mt-${mobileBreakpoint}-3`]"
      >
        <article-date :document="article" class="small" />
        <article-readingtime :minutes="article.readingTime" />
        <article-category :article="article" />
        <div class="text-right flex-grow-1">
          <button-enter :to="getArticleLink(article)"> 閱讀更多</button-enter>
        </div>
      </div>
    </div>

    <article-banner
      v-if="article.img"
      :img="article.img"
      class="align-self-stretch order-1"
      :class="[`order-${mobileBreakpoint}-2`]"
      :sizes="bannerSizes"
      :preload="preloadImg"
    />
  </article>
</template>

<script>
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import ArticleBanner from '~/components/article/article-banner.vue'
import ArticleDate from '~/components/article/article-date.vue'
import ArticleReadingtime from '~/components/article/article-readingtime.vue'
import ArticleCategory from '~/components/article/article-category.vue'

import ButtonEnter from '~/components/button/button-enter.vue'

import { getArticleLink } from '~/utils/getLink'
import getImgSizes from '~/utils/getImgSizes'

export default {
  components: {
    ArticleDate,
    ArticleBanner,
    ArticleReadingtime,
    ArticleCategory,
    ButtonEnter,
  },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    preloadImg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mobileBreakpoint,
      bannerSizes: [],
    }
  },
  fetch() {
    const bannerSizes = getImgSizes(({ containerMaxWidth, isMobile }) => {
      let imageWidth = containerMaxWidth
      if (!isMobile) {
        const containerMaxWidthNum = containerMaxWidth.replace(/[^0-9]/g, '')
        imageWidth = Number(containerMaxWidthNum) * 0.4 + 'px'
      }

      return imageWidth
    })

    this.bannerSizes = bannerSizes
  },
  methods: {
    getArticleLink,
  },
}
</script>

<style lang="scss">
$article-card-content-line: 2;
$article-card-text-line: 2;
$article-card-title-font-size: $h4-font-size;
$article-card-title-height: $headings-line-height * $article-card-content-line *
  $article-card-title-font-size;
$article-card-text-font-size: $font-size-base;
$article-card-text-height: $line-height-base * $article-card-content-line *
  $font-size-base;

.article-card {
  background-color: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: $btn-transition, transform 0.15s ease-in-out;
  box-shadow: $box-shadow-sm;
  &:hover {
    box-shadow: $box-shadow;
    transform: scale(1.025);
  }

  .article-banner {
    width: 100%;
    min-width: 40%;
  }

  .article-text {
    font-size: $font-size-base;
    max-height: $article-card-text-height;
    margin: 0;
    display: none;
  }

  .article-title {
    font-size: 1.1rem;
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .article-card {
    background-color: transparent;
    .article-banner {
      width: 40%;
      min-width: 40%;
    }

    .article-title-text {
      height: $article-card-title-height + $article-card-text-height +
        $headings-margin-bottom;
    }

    .article-title {
      font-size: $article-card-title-font-size;
      max-height: $article-card-title-height;
    }

    .article-text {
      display: block;
    }
  }
}
</style>

<template>
  <article
    class="d-flex flex-column align-items-stretch common-container article-card"
    :class="[`flex-${mobileBreakpoint}-row`]"
  >
    <div
      class="d-flex flex-column flex-grow-1 px-3 py-3 order-2"
      :class="[`order-${mobileBreakpoint}-1`, `px-${mobileBreakpoint}-4`]"
    >
      <div class="article-title-text text-two-line">
        <h4 class="text-body font-weight-bolder article-title">
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
      max-width="400"
      class="align-self-stretch order-1"
      :class="[`order-${mobileBreakpoint}-2`]"
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
  },
  data() {
    return {
      mobileBreakpoint,
    }
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
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: $btn-transition, transform 0.15s ease-in-out;
  box-shadow: $box-shadow-sm;
  &:hover {
    box-shadow: $box-shadow;
    transform: scale(1.025);
  }

  .article-banner {
    width: 40%;
    min-width: 40%;
  }

  .article-title-text {
    height: $article-card-title-height + $article-card-text-height +
      $headings-margin-bottom;
  }

  // .article-title,
  // .article-text {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   display: -webkit-box;
  //   -webkit-line-clamp: $article-card-content-line;
  //   -webkit-box-orient: vertical;
  // }

  .article-text {
    // font-size: $small-font-size;
    // height: $line-height-base * 2 * $small-font-size;
    font-size: $font-size-base;
    max-height: $article-card-text-height;
    margin: 0;
  }

  .article-title {
    font-size: $article-card-title-font-size;
    max-height: $article-card-title-height;
  }
}

@media (max-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .article-card {
    background-color: white;
    .article-banner {
      width: 100%;
    }

    .article-title-text,
    .article-title {
      height: auto;
      max-height: none;
    }

    .article-title {
      // font-size: $h5-font-size;
      font-size: 1.1rem;
      display: block;
    }

    .article-text {
      display: none;
    }
  }
}
</style>

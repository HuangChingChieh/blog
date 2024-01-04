<template>
  <article class="common-article">
    <h1>
      {{ document.title }}
    </h1>

    <div class="d-flex flex-row align-items-center my-2">
      <article-date :document="document" />
      <article-readingtime :minutes="document.readingTime" />
      <article-category :article="document" />
    </div>

    <!-- <prev-next :prev="prev" :next="next"></prev-next> -->

    <div v-if="document.tags" class="article-tags d-flex flex-wrap my-2">
      <article-tag
        v-for="tag in document.tags"
        :key="tag"
        :tag-name="tag"
        class="mr-1 mb-1"
      />
    </div>

    <article-banner
      v-if="document.img"
      :img="document.img"
      img-class="rounded-lg"
      class="rounded-lg"
      preload
    />

    <nuxt-content :document="document" />
  </article>
</template>

<script>
import ArticleBanner from '../article/article-banner.vue'
import ArticleTag from '../article/article-tag.vue'
import ArticleDate from '../article/article-date.vue'
import ArticleReadingtime from '../article/article-readingtime.vue'
import ArticleCategory from '../article/article-category.vue'

export default {
  components: {
    ArticleBanner,
    ArticleTag,
    ArticleDate,
    ArticleReadingtime,
    ArticleCategory,
  },
  props: {
    document: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
$article-font-size-base: 1rem;

.common-article {
  font-size: 1rem;

  b,
  strong {
    color: var(--black);
  }

  h1,
  .article-date {
    margin-bottom: 0.25rem;
  }

  .article-tags {
    margin-bottom: $paragraph-margin-bottom;
  }

  h2,
  h3,
  p,
  .article-banner,
  .article-img,
  blockquote {
    margin: $paragraph-margin-bottom * 1.75 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 900;
  }

  h1 {
    font-size: $article-font-size-base * 2;
  }

  h2 {
    font-size: $article-font-size-base * 1.75;
  }

  h3 {
    font-size: $article-font-size-base * 1.25;
    // color: $secondary;
    // &::before {
    //   content: '- ';
    // }

    // &::after {
    //   content: ' -';
    // }
  }

  p {
    // font-weight: $font-weight-light;
    word-break: break-all;
    text-align: justify;
  }

  p code {
    padding: 0.15rem 0.25rem;
    border-radius: $btn-border-radius-lg;
    line-height: 1;
  }

  hr {
    border-top: 1px solid $secondary;
    width: 3rem;
  }

  a[href] {
    // color: $body-color;
    text-decoration: underline;
  }

  .nuxt-content > *:last-child {
    margin-bottom: 0;
  }

  blockquote {
    padding-left: $paragraph-margin-bottom;
    border-left: 3px solid $primary;

    p {
      margin: $paragraph-margin-bottom 0;
    }

    em {
      font-size: $small-font-size;
      color: $secondary;
      &::before {
        content: '——';
      }
    }
  }

  .article-banner,
  .article-banner img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}
</style>

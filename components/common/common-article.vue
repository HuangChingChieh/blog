<template>
  <article :class="$style.article">
    <h1 :class="$style.title">
      {{ document.title }}
    </h1>

    <div class="d-flex flex-row align-items-center my-2">
      <ArticleDate :document="document" :class="$style.date" class="me-3" />
      <ArticleReadingtime
        :minutes="document.readingTime.minutes"
        class="me-3"
      />
      <ArticleCategory :article="document" />
    </div>

    <div
      v-if="document.tags"
      class="d-flex flex-wrap my-2"
      :class="$style.tags"
    >
      <ArticleTag
        v-for="tag in document.tags"
        :key="tag"
        :tag-name="tag"
        class="me-1 mb-1"
      />
    </div>

    <ArticleBanner
      v-if="document.img"
      :img="document.img"
      img-class="rounded"
      class="rounded"
      :class="$style.banner"
      preload
    />

    <ContentRenderer :value="document" class="nuxt-content" />
  </article>
</template>

<script setup>
import ArticleBanner from '../article/article-banner.vue'
import ArticleTag from '../article/article-tag.vue'
import ArticleDate from '../article/article-date.vue'
import ArticleReadingtime from '../article/article-readingtime.vue'
import ArticleCategory from '../article/article-category.vue'

const props = defineProps({
  document: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss">
$article-font-size-base: 1.125rem;

.nuxt-content {
  h2,
  h3,
  p,
  blockquote,
  img {
    margin: $paragraph-margin-bottom * 1.75 0;
  }

  h2,
  h3 {
    font-weight: 900;
  }

  h2 {
    font-size: $article-font-size-base * 1.75;
  }

  h3 {
    font-size: $article-font-size-base * 1.25;
  }

  p {
    word-break: break-all;
    text-align: justify;
    font-size: $article-font-size-base;
  }

  p code {
    padding: 0.15rem 0.25rem;
    border-radius: $btn-border-radius-lg;
    line-height: 1;
  }

  hr {
    border-top: 1px solid var(--bs-body-color);
    width: 3rem;
  }

  a[href] {
    text-decoration: underline;
  }

  > *:last-child {
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
}
</style>

<style lang="scss" module>
$article-font-size-base: 1.125rem;

.article {
  font-size: 1rem;

  .title {
    font-weight: 900;
    margin-bottom: 0.25rem;
    font-size: $article-font-size-base * 2;
    text-align: justify;
  }

  .date {
    margin-bottom: 0.25rem;
  }

  .tags {
    margin-bottom: $paragraph-margin-bottom;
  }

  .banner,
  .article-img {
    margin: $paragraph-margin-bottom * 1.75 0;
  }

  .banner {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}
</style>

<template>
  <article>
    <h1 class="font-black text-4xl">{{ document.title }}</h1>

    <div class="my-normal">
      <div class="flex flex-row gap-4 items-center">
        <ArticleDate :document="document" />
        <ArticleReadingtime :minutes="document.readingTime.minutes" />
        <ArticleCategory :article="document" />
      </div>

      <div v-if="document.tags" class="flex flex-wrap mt-2 gap-1">
        <ArticleTag v-for="tag in document.tags" :key="tag" :tag-name="tag" />
      </div>
    </div>

    <ArticleBanner
      v-if="document.img"
      :img="document.img"
      img-class="rounded aspect-video"
      class="rounded"
      preload
    />

    <ContentRenderer :value="document" class="nuxt-content" />
  </article>
</template>

<script setup>
defineProps({
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

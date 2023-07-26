<template>
  <article class="common-article">
    <!-- <nav>
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          @click="scrollTo(link.id)"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->

    <h1>
      {{ document.title }}
    </h1>

    <article-date class="small my-2" :document="document" />
    <!-- <prev-next :prev="prev" :next="next"></prev-next> -->

    <div v-if="document.tags" class="article-tags d-flex flex-wrap">
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
      max-width="700"
    />

    <nuxt-content :document="document" />
  </article>
</template>

<script>
import ArticleBanner from '../article/article-banner.vue'
import ArticleTag from '../article/article-tag.vue'
import ArticleDate from '../article/article-date.vue'

export default {
  components: {
    ArticleBanner,
    ArticleTag,
    ArticleDate,
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

  h1,
  h2,
  .article-date {
    margin-bottom: 0.25rem;
  }

  .article-tags {
    margin-bottom: $paragraph-margin-bottom;
  }

  h3,
  p,
  .article-banner {
    margin: $paragraph-margin-bottom 0;
  }

  h1,
  h2,
  h3 {
    color: black;
  }

  h1 {
    font-weight: 900;
    font-size: $article-font-size-base * 2;
  }

  h2,
  h3 {
    font-weight: 700;
  }

  h2 {
    font-size: $article-font-size-base * 1.5;
  }

  h3 {
    font-size: $article-font-size-base * 1.1;
    // color: $secondary;
    // &::before {
    //   content: '- ';
    // }

    // &::after {
    //   content: ' -';
    // }
  }

  p {
    font-weight: $font-weight-light;
  }

  p code {
    padding: 0.15rem 0.25rem;
    border-radius: $btn-border-radius-lg;
    line-height: 1;
  }

  hr {
    border: 1px solid $secondary;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
    margin: $paragraph-margin-bottom * 3 auto;
    width: 3rem;
  }

  a[href] {
    color: $body-color;
    text-decoration: underline;
  }

  .nuxt-content > *:last-child {
    margin-bottom: 0;
  }
}
</style>

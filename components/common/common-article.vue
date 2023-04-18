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

    <article-banner
      v-if="document.img"
      v-once
      :img="document.img"
      :img-class="['w-100', 'img-fluid', 'rounded-lg']"
    />

    <h1 class="text-center">
      {{ document.title }}
    </h1>

    <!-- <prev-next :prev="prev" :next="next"></prev-next> -->
    <time
      v-if="createTime || updateTime"
      class="d-block text-center text-muted"
    >
      {{ updateTime || createTime }}
    </time>

    <div class="text-center article-tags h5 mb-0">
      <article-tag
        v-for="tag in document.tags"
        :key="tag"
        :tag-name="tag"
        class="mr-1"
      />
    </div>

    <nuxt-content :document="document" />
  </article>
</template>

<script>
import ArticleBanner from '../article/article-banner.vue'
import ArticleTag from '../article/article-tag.vue'

export default {
  components: { ArticleBanner, ArticleTag },
  props: {
    document: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    createTime() {
      const { createdAt } = this.document
      return createdAt
        ? Intl.DateTimeFormat('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(createdAt))
        : ''
    },
    updateTime() {
      const { updatedAt } = this.document
      return updatedAt
        ? Intl.DateTimeFormat('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(updatedAt))
        : ''
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
  time {
    margin-bottom: 0.25rem;
  }

  .article-banner,
  .article-tags {
    margin-bottom: $paragraph-margin-bottom;
  }

  h3,
  p {
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

<template>
  <div>
    <ArticleSearchResultText
      :keyword="keyword"
      :to="getArticleLink({ slug })"
      :text="article.title"
      class="h5 mb-3 fw-bolder"
      @click="$emit('navigate')"
    />

    <div
      v-for="p in article.paragraphs"
      :key="p.id"
    >
      <ArticleSearchResultText
        :keyword="keyword"
        :to="getArticleLink({ slug, hash: p.hash })"
        :text="p.title"
        class="text-body fw-bold my-2"
        @click="$emit('navigate')"
      />

      <ArticleSearchResultText
        :keyword="keyword"
        :to="getArticleLink({ slug, hash: p.hash })"
        :text="p.content"
        class="text-muted text-line-3 my-2"
        break-down
        @click="$emit('navigate')"
      />
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
>
import type { PropType } from 'vue'
import type { Article } from '~/types/article'

import ArticleSearchResultText from './article-search-result-text.vue'

import { getArticleLink } from '~/utils/getLink'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    default: () => ({}),
  },
  keyword: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    default: '',
  },
})
</script>

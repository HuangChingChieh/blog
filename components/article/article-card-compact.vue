<template>
  <NuxtLink
    v-if="article"
    class="d-flex text-decoration-none"
    :to="getArticleLink(article)"
  >
    <article class="d-flex flex-row">
      <InterfaceImg
        :class="$style.img"
        :img="article.img"
        class="p-3 rounded"
        img-class="rounded"
      />

      <div class="py-3 pe-3 d-flex flex-column">
        <div class="flex-grow-1">
          <ArticleCardTitle class="mb-0 h5">
            {{ article.title }}
          </ArticleCardTitle>
        </div>
        <div class="d-flex flex-row">
          <ArticleDate :document="article" class="small me-3" />
          <ArticleReadingtime :minutes="article.readingTime.minutes" />
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
import { getArticleLink } from '~/utils/getLink'

const props = defineProps({
  article: {
    type: Object,
    default: null,
  },
})
</script>

<style lang="scss" module>
.img {
  aspect-ratio: 1/1;
  height: 100%;
}
</style>

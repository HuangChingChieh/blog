<template>
  <NuxtLink
    v-if="article"
    class="d-flex text-decoration-none"
    :to="getArticleLink(article)"
  >
    <article class="d-flex flex-row w-100">
      <InterfaceImg
        :class="$style.img"
        :img="article.img"
        class="me-3 rounded"
        img-class="rounded"
      />

      <div class="d-flex flex-column flex-grow-1">
        <div class="flex-grow-1">
          <div class="mb-1 h5 text-line-2" :class="$style.title">
            {{ article.title }}
          </div>
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

.title {
  font-weight: 900;
  font-size: 1.1rem;
}

@media #{$break-sm} {
  .title {
    font-size: $h5-font-size;
  }
}
</style>

<template>
  <NuxtLink
    v-if="article"
    class="position-relative rounded shadow-sm d-block text-decoration-none"
    :to="getArticleLink(article)"
  >
    <InterfaceImg
      :img-class="[$style.img, 'rounded']"
      :img="article.img"
    />

    <div
      :class="[$style.titleWrapper, `p-${mobileBreakpoint}-3`]"
      class="position-absolute text-center p-2 d-flex"
    >
      <div class="p-3 rounded mb-0 bg-foreground shadow-sm border-bottom border-primary border-2">
        <ArticleCardTitle class="mb-0">
          {{ article.title }}
        </ArticleCardTitle>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { mobileBreakpoint } from '~/assets/css/export.module.scss'
import { getArticleLink } from '~/utils/getLink'

const props = defineProps({
  article: {
    type: Object,
    default: null
  },
})
</script>

<style
  lang="scss"
  module
>
.img {
  aspect-ratio: 4/3;
}

.titleWrapper {
  bottom: 0;
  left: 0;
  width: 100%;
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .img {
    aspect-ratio: 2/1;
  }

  .titleWrapper {
    width: 50%;
  }
}
</style>
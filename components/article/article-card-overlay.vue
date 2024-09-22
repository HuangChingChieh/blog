<template>
  <NuxtLink
    v-if="article"
    class="position-relative rounded d-block text-decoration-none"
    :to="getArticleLink(article)"
  >
    <InterfaceImg
      :img-class="[$style.img, 'rounded', 'shadow-sm', imgClass]"
      :img="article.img"
    />

    <div
      :class="[$style.titleWrapper, `p-${mobileBreakpoint}-3`]"
      class="position-absolute p-2"
    >
      <div
        class="p-2 rounded bg-foreground shadow border-bottom border-primary border-2"
        :class="`p-${mobileBreakpoint}-3`"
      >
        <ArticleCardTitle class="mb-0">
          {{ article.title }}
        </ArticleCardTitle>

        <div
          class="d-none mt-2"
          :class="`d-${mobileBreakpoint}-block`"
        >
          <ArticleCardDescription
            :description="article.description"
            class="mb-0"
          />
        </div>
      </div>
    </div>

    <div
      :class="[$style.hintWrapper, `p-${mobileBreakpoint}-3`]"
      class="position-absolute p-2"
    >
      <div class="d-flex">
        <ArticleDate
          :document="article"
          class="small py-1 px-2 rounded bg-foreground shadow-sm me-2"
          :class="`p-${mobileBreakpoint}-2`"
        />
        <ArticleReadingtime
          :minutes="article.readingTime.minutes"
          :class="`p-${mobileBreakpoint}-2`"
          class="py-1 px-2 rounded bg-foreground shadow-sm"
        />
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
    default: null,
  },
  imgClass: {
    type: [Array, String, Object],
    default: ''
  }
})
</script>

<style
  lang="scss"
  module
>
.img {
  aspect-ratio: 16/9;
}

.titleWrapper {
  top: 0;
  left: 0;
  max-width: 75%;
}

.hintWrapper {
  bottom: 0;
  right: 0;
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .titleWrapper {
    max-width: 75%;
  }

  .img {
    aspect-ratio: 21/9;
  }

}
</style>

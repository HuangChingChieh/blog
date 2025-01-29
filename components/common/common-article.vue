<template>
  <article class="grid grid-cols-1 gap-normal">
    <h1 class="font-black text-4xl">{{ document.title }}</h1>

    <div>
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
      :break-points="bannerBreakPoints"
      class="rounded"
    />

    <ContentRenderer :value="document" class="grid grid-cols-1 gap-normal" />
  </article>
</template>

<script setup>
defineProps({
  document: {
    type: Object,
    default: () => ({}),
  },
})

const bannerBreakPoints = {
  sm: 640,
  md: 624,
  lg: 717,
  xl: 726,
  '2xl': 896,
}
</script>

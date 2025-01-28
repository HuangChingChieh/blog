<template>
  <ArticleCardWrapper
    class="grid grid-cols-[100px_auto] gap-3"
    :article="article"
    :container="container"
  >
    <InterfaceImg
      :img="article.img"
      :break-points="imgBreakPoints"
      class="rounded h-full aspect-square"
    />

    <div class="flex flex-col">
      <ArticleCardTitle class="mb-1">
        {{ article.title }}
      </ArticleCardTitle>
      <div class="grow flex flex-row justify-end items-end">
        <ArticleReadingtime
          :minutes="article.readingTime.minutes"
          class="me-6"
        />
        <ArticleDate :document="article" />
      </div>
    </div>
  </ArticleCardWrapper>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    default: null,
  },
  container: {
    type: Boolean,
    default: true,
  },
})

const imgBreakPoints = {
  sm: 200,
}
</script>

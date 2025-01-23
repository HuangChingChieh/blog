<template>
  <ArticleCardWrapper
    class="grid grid-cols-[100px_auto]"
    :class="container ? `p-3 bg-background dark:bg-background-dark` : ``"
    :article="article"
    :container="container"
  >
    <InterfaceImg
      :class="$style.img"
      :img="article.img"
      class="me-3 rounded h-full aspect-square"
      img-class="rounded"
    />

    <div class="flex flex-col grow">
      <div class="grow">
        <ArticleCardTitle :class="$style.title" class="mb-1">
          {{ article.title }}
        </ArticleCardTitle>
      </div>
      <div class="flex flex-row justify-end">
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
</script>

<style lang="scss" module>
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

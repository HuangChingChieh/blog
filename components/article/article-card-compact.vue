<template>
  <ArticleCardWrapper
    class="d-flex"
    :class="container ? `p-3` : ``"
    :article="article"
    :container="container"
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
          <ArticleCardTitle :class="$style.title" class="mb-1">
            {{ article.title }}
          </ArticleCardTitle>
        </div>
        <div class="d-flex flex-row justify-content-end">
          <ArticleReadingtime
            :minutes="article.readingTime.minutes"
            class="me-4"
          />
          <ArticleDate :document="article" />
        </div>
      </div>
    </article>
  </ArticleCardWrapper>
</template>

<script setup>
const props = defineProps({
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
.img {
  aspect-ratio: 1/1;
  height: 100%;
  max-height: 100px;
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

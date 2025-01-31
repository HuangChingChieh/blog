<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-normal">
    <div
      class="lg:col-span-7 xl:col-span-8"
      :class="
        reverseOrderWhenMobile ? `order-2 lg:order-1 mt-12 lg:mt-0` : `order-1`
      "
    >
      <slot />
    </div>

    <div
      class="lg:col-span-5 xl:col-span-4 flex flex-col gap-normal"
      :class="
        reverseOrderWhenMobile ? `order-1 lg:order-2` : `order-2 mt-12 lg:mt-0`
      "
    >
      <ArticlesListPickContainer title="關於隨機手札與我">
        <AsideAboutMe />
      </ArticlesListPickContainer>

      <AsideCategories />

      <!-- TODO 功能還沒做先隱藏 -->
      <!-- <AsideTags /> -->

      <AsideSelect
        :category="category"
        :not-in-articles="selectNotInArticles"
        class="lg:sticky lg:top-24"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  reverseOrderWhenMobile: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: 'all',
  },
  selectNotInArticles: {
    type: Array,
    default: () => [],
  },
})
</script>

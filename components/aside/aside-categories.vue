<template>
  <AsideContainer title="文章分類">
    <nav>
      <ul class="flex flex-col mb-0 pl-0">
        <li
          v-for="(cate, key) in categoriesMap"
          :key="key"
          class="py-2 border-t first:border-t-0"
        >
          <TextClickable
            :tag="NuxtLink"
            class="flex flex-row no-decoration"
            :to="getCategoryLink({ category: key })"
          >
            <span class="text-primary me-1">#</span>
            <span class="grow">{{ cate }}</span>
            <span>({{ categories[key].count }})</span>
          </TextClickable>
        </li>
      </ul>
    </nav>
  </AsideContainer>
</template>

<script setup>
const { categoriesMap } = useRuntimeConfig().public
const { categories } = await useArticlesMetadata()

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <AsideContainer title="文章分類">
    <nav>
      <ul class="flex flex-col mb-0 pl-0">
        <li
          v-for="(cate, key) in categoriesMap"
          :key="key"
          class="py-2"
          :class="$style.li"
        >
          <NuxtLink
            class="flex flex-row no-decoration"
            :to="getCategoryLink({ category: key })"
          >
            <span class="text-primary-500 me-1">#</span>
            <span class="grow">{{ cate }}</span>
            <span>({{ categories[key].count }})</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </AsideContainer>
</template>

<script setup>
import { getCategoryLink } from '~/utils/getLink'
const { categoriesMap } = useRuntimeConfig().public

const { categories } = await useArticlesMetadata()
</script>

<style lang="scss" module>
.li:not(:first-child) {
  border-top: 1px solid $light;
}
</style>

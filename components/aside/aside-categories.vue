<template>
  <AsideContainer title="文章分類">
    <nav>
      <ul class="d-flex flex-column list-unstyled mb-0">
        <li
          v-for="(cate, key) in categoriesMap"
          :key="key"
          class="py-2"
          :class="$style.li"
        >
          <NuxtLink
            class="d-flex flex-row text-decoration-none"
            :to="getCategoryLink({ category: key })"
          >
            <span class="text-primary me-1">#</span>
            <span class="flex-grow-1">{{ cate }}</span>
            <small>({{ categories[key].count }})</small>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </AsideContainer>
</template>

<script setup>
import { useMainStore } from '~/store'

const { categoriesMap } = useRuntimeConfig().public
import { getCategoryLink } from '~/utils/getLink'

const mainStore = useMainStore()
const { categories } = mainStore
</script>

<style lang="scss" module>
.li:not(:first-child) {
  border-top: 1px solid $light;
}
</style>

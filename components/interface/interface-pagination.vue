<template>
  <nav>
    <ul class="pagination justify-content-center mb-2">
      <li
        class="page-item"
        :class="{ disabled: thePage === 1 }"
      >
        <NuxtLink
          class="page-link"
          :class="$style.link"
          :to="linkGen(1)"
        >
          <InterfaceIcon icon="chevron-double-left" />
        </NuxtLink>
      </li>
      <li
        class="page-item"
        :class="{ disabled: thePage === 1 }"
      >
        <NuxtLink
          class="page-link"
          :class="$style.link"
          :to="linkGen(thePage > 1 ? thePage - 1 : 1)"
        >
          <InterfaceIcon icon="chevron-left" />
        </NuxtLink>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === thePage }"
      >
        <NuxtLink
          class="page-link"
          :class="$style.link"
          :to="linkGen(page)"
        >
          {{ page }}
        </NuxtLink>
      </li>
      <li
        class="page-item"
        :class="{ disabled: thePage === numberOfPages }"
      >
        <NuxtLink
          class="page-link"
          :class="$style.link"
          :to="linkGen(thePage < numberOfPages ? thePage + 1 : numberOfPages)"
        >
          <InterfaceIcon icon="chevron-right" />
        </NuxtLink>
      </li>
      <li
        class="page-item"
        :class="{ disabled: thePage === numberOfPages }"
      >
        <NuxtLink
          class="page-link"
          :class="$style.link"
          :to="linkGen(numberOfPages)"
        >
          <InterfaceIcon icon="chevron-double-right" />
        </NuxtLink>
      </li>
    </ul>

    <aside class="text-center small">
      共 {{ numberOfPages }} 頁
    </aside>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  linkGen: {
    type: Function,
    default: () => { },
  },
  numberOfPages: {
    type: [String, Number],
    default: 1,
  },
})

const pageInterval = 3

const route = useRoute()
const thePage = computed(() => Number(route.params.page) || 1)

const pages = computed(() => {
  const pages = []

  const { numberOfPages } = props

  if (numberOfPages >= pageInterval) {
    let middlePage = thePage.value
    const minMiddlePage = Math.ceil(pageInterval / 2)
    const maxMiddlePage = numberOfPages - minMiddlePage + 1
    if (middlePage < minMiddlePage) middlePage = minMiddlePage
    else if (middlePage > maxMiddlePage) middlePage = maxMiddlePage

    while (pages.length < pageInterval) {
      pages.push(middlePage - minMiddlePage + 1 + pages.length)
    }
  } else {
    while (pages.length < numberOfPages) {
      pages.unshift(numberOfPages - pages.length)
    }
  }

  return pages
})
</script>

<style
  lang="scss"
  module
>
.link {
  padding: 0;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $box-shadow-sm;
}
</style>

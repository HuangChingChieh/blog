<template>
  <NuxtLink
    v-if="article && article.category"
    :to="getCategoryLink({ category: article.category })"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon
      icon="folder"
      class="me-1"
    />
    <span>{{ $config.public.categoriesMap[article.category] }}</span>
  </NuxtLink>
</template>

<script
  lang="ts"
  setup
>
import type { PropType } from 'vue'
import type { Article } from '~/types/article'

import { getCategoryLink } from '~/utils/getLink'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    default: () => ({}),
  },
})
</script>

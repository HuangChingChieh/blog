<template>
  <NuxtLink
    v-if="article && article.category"
    :to="getCategoryLink({ category: article.category })"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon icon="folder" class="me-1" />
    <span>{{ $config.categoriesMap[article.category] }}</span>
  </NuxtLink>
</template>

<script>
import { getCategoryLink } from '~/utils/getLink'
import InterfaceIcon from '~/components/interface/interface-icon.vue'
export default {
  components: { InterfaceIcon },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: { getCategoryLink },
}
</script>

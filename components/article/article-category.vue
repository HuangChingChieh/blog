<template>
  <NuxtLink
    v-if="article && article.category"
    :to="getCategoryLink({ category: article.category })"
    class="text-muted text-sm inline-flex items-center"
  >
    <InterfaceIcon icon="folder" class="me-1" />
    <span>{{ $config.public.categoriesMap[article.category] }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <TextClickable
    v-if="article && article.category"
    :to="getCategoryLink({ category: article.category })"
    class="text-muted text-sm inline-flex items-center underline"
    :tag="NuxtLink"
  >
    <InterfaceIcon icon="folder" class="me-1" />
    <span>{{
      $config.public.categoriesMap[article.category]
    }}</span></TextClickable
  >
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
})

const NuxtLink = resolveComponent('NuxtLink')
</script>

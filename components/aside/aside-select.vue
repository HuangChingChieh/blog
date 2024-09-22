<template>
  <AsideContainer title="精選文章">
    <ArticlesSelect
      class="mt-4 pt-3"
      no-container
      :category="category"
    />
  </AsideContainer>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: 'all'
  }
})
</script>

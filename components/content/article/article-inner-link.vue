<template>
  <TextClickable v-if="title" :tag="NuxtLink" :to="to">
    <slot>《{{ title }}》</slot>
  </TextClickable>
</template>

<script setup>
const NuxtLink = resolveComponent('NuxtLink')
const props = defineProps({
  slug: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: '',
  },
})

const { data: title } = await useArticleTitle(props.slug)

const to = computed(() => {
  const { slug, hash } = props
  const path = getArticleLink({ slug })

  return {
    path,
    hash: hash ? `#${hash}` : undefined,
  }
})
</script>

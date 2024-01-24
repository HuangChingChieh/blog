<template>
  <NuxtLink
    v-if="title"
    :to="to"
  >
    <slot>《{{ title }}》</slot>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'
import { getArticleLink } from '~/utils/getLink'

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

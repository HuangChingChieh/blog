<template>
  <iframe
    v-if="src"
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
    class="rounded w-full aspect-video"
  />
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})

const src = computed(() => {
  const { id } = props
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
})
</script>

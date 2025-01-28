<template>
  <iframe
    v-if="src"
    :src="src"
    frameborder="0"
    allowfullscreen
    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    class="rounded w-full aspect-4/3"
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
  return id ? `https://open.spotify.com/embed/playlist/${id}?theme=0` : ''
})
</script>

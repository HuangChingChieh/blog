<template>
  <CommonHeaderIcon
    v-if="hasToc"
    icon="card-list"
    title="文章摘要"
    @click="emit('click')"
  />
</template>

<script setup>
const props = defineProps({
  toc: {
    type: Array,
    default: () => [],
  },
})

const hasToc = computed(() => {
  const { toc } = props
  return Array.isArray(toc) && toc.length > 0
})

const emit = defineEmits(['click'])
</script>

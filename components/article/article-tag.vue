<template>
  <NuxtLink :to="to">
    <InterfaceBadge class="font-mono">
      #<slot>{{ tagName }}</slot>
    </InterfaceBadge>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  tagName: {
    type: String,
    default: '',
  },
})

const to = computed(() => getTagLink({ tag: props.tagName }))
</script>

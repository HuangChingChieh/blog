<template>
  <div>
    <FooterTitle>
      <NuxtLink :to="titleTo" class="text-primary">
        {{ title }}
      </NuxtLink>

      <slot name="title" />
    </FooterTitle>

    <FooterContent>
      <slot />
    </FooterContent>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  titleTo: {
    type: [String, Object],
    default: '',
  },
})
</script>

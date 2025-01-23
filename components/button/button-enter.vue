<template>
  <InterfaceButtonLink
    :size="size"
    variant="primary"
    :to="to"
    :class="$style.btn"
  >
    <span class="inline-flex flex-row items-center">
      <slot />
      <InterfaceIcon icon="arrow-right" :class="$style.icon" />
    </span>
  </InterfaceButtonLink>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
  size: {
    type: String,
    default: 'sm',
  },
})
</script>

<style lang="scss" module>
.btn {
  .icon {
    width: 0;
    font-size: inherit;
    overflow: hidden;
    transition: $transition-collapse-width;
  }

  &:hover .icon {
    width: 1.25rem;
  }
}
</style>

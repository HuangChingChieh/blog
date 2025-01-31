<template>
  <component
    :is="disabled || active ? `span` : NuxtLink"
    class="w-9 h-9 flex items-center justify-center outline-1 outline outline-gray-500"
    :class="style"
    :to="to"
    ><slot
  /></component>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    default: '',
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const NuxtLink = resolveComponent('NuxtLink')

const style = computed(() => {
  const { disabled, active } = props
  return {
    'text-muted': disabled,
    'bg-background dark:bg-background-dark md:bg-foreground dark:md:bg-foreground-dark':
      disabled,
    'cursor-not-allowed': disabled,
    'bg-primary': active,
    'text-white': active,
    'hover:text-primary': !disabled && !active,
  }
})
</script>

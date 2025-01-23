<template>
  <PDialog
    v-model:visible="model"
    modal
    :header="title"
    :style="style"
    :draggable="false"
    class="mx-normal"
    @after-hide="emit('hidden')"
    @hide="emit('hide')"
    @show="emit('show')"
  >
    <slot />
  </PDialog>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const model = defineModel({
  type: Boolean,
  default: false,
})

const emit = defineEmits(['hide', 'hidden', 'show'])

// 參考BootStrap
const sizes = { sm: '300px', md: '500px', lg: '800px', xl: '1140px' }
const style = computed(() => {
  const width = sizes[props.size]
  return { width }
})
</script>

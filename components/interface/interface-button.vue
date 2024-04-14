<template>
  <button
    :class="btnClass"
    class="btn"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { BsVariants, BsSize } from '~/utils/export-scss.ts'
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<BsVariants>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<BsSize>,
    default: '',
  },
})

const btnClass = computed(() => {
  const btnClass = []

  const { variant, size } = props
  if (variant) {
    btnClass.push(`btn-${variant}`)
  }

  if (size) {
    btnClass.push(`btn-${size}`)
  }

  return btnClass
})
</script>

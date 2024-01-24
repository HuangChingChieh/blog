<template>
  <InterfaceButton
    variant="link"
    class="d-flex align-items-center text-decoration-none ms-4"
  >
    <InterfaceIcon
      :icon="icon"
      class="h5 mb-0 d-flex"
    />
    <slot />
  </InterfaceButton>
</template>

<script setup>
import InterfaceButton from '~/components/interface/interface-button.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>

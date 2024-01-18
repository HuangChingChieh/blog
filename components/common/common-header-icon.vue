<template>
  <InterfaceButton
    variant="link"
    class="d-flex align-items-center text-decoration-none ml-4 common-header-icon"
    @click="$emit('click')"
  >
    <InterfaceIcon :icon="icon" class="h5 mb-0" />
    <slot></slot>
  </InterfaceButton>
</template>

<script>
import InterfaceButton from '~/components/interface/interface-button.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default {
  components: {
    InterfaceButton,
    InterfaceIcon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

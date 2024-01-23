<template>
  <InterfaceButton
    variant="link"
    class="d-flex align-items-center text-decoration-none ms-4"
    @click="$emit('click')"
  >
    <InterfaceIcon :icon="icon" class="h5 mb-0 d-flex" />
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

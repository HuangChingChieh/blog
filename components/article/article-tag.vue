<template>
  <InterfaceBadge class="d-inline-block font-weight-normal text-monospace">
    #<slot>{{ tagName }}</slot>
  </InterfaceBadge>
</template>

<script>
import InterfaceBadge from '~/components/interface/interface-badge.vue'

export default {
  components: { InterfaceBadge },
  props: {
    tagName: {
      type: String,
      default: '',
    },
  },
}
</script>

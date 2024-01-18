<template>
  <BPaginationNav
    :link-gen="linkGen"
    :number-of-pages="numberOfPages"
    use-router
    pills
    align="center"
    :value="$route.params.page || 1"
  >
    <template #first-text>
      <InterfaceIcon icon="chevron-double-left" />
    </template>

    <template #prev-text>
      <InterfaceIcon icon="chevron-left" />
    </template>

    <template #ellipsis-text>
      <InterfaceIcon icon="three-dots" />
    </template>

    <template #next-text>
      <InterfaceIcon icon="chevron-right" />
    </template>

    <template #last-text>
      <InterfaceIcon icon="chevron-double-right" />
    </template>
  </BPaginationNav>
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default {
  components: {
    BPaginationNav,
    InterfaceIcon,
  },
  props: {
    linkGen: {
      type: Function,
      default: () => {},
    },
    numberOfPages: {
      type: [String, Number],
      default: 1,
    },
  },
}
</script>

<style lang="scss">
.b-pagination-pills .page-item .page-link {
  padding: 0;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $box-shadow-sm;
}
</style>

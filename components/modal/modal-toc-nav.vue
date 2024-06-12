<template>
  <InterfaceNav
    :items="items"
    :link-generate-func="getLink"
    :link-classes="[`p-0 border-start`, $style.navLink]"
    vertical
  >
    <template #item="{ item }">
      <ModalTocItem
        :item="item"
        :min-depth="minDepth"
        @scroll-to="emit('scroll-to')"
      />
    </template>

    <template #default="{ item }">
      <slot :item="item" />
    </template>
  </InterfaceNav>
</template>

<script setup>
import InterfaceNav from '~/components/interface/interface-nav.vue'
import ModalTocItem from '~/components/modal/modal-toc-item.vue'

const props = defineProps({
  items: {
    type: Array, default: () => []
  },
  minDepth: {
    type: Number, default: 2
  }
})

const emit = defineEmits(['scroll-to'])

const getLink = ({ id }) => ({ hash: `#${id}` })
</script>

<style lang="scss" module>
.navLink {
  border-width: 3px !important;
}
</style>

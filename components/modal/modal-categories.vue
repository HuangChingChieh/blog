<template>
  <InterfaceModal v-model="valueInner" title="文章分類">
    <InterfaceNav
      active-class="font-weight-bold"
      vertical
      :items="items"
      :link-generate-func="getLink"
      @click-item="valueInner = false"
    >
      <template #item="{ item }">{{ item.name }}</template>
    </InterfaceNav>
  </InterfaceModal>
</template>

<script>
import { getCategoryLink } from '~/utils/getLink'

import InterfaceModal from '~/components/interface/interface-modal.vue'
import InterfaceNav from '~/components/interface/interface-nav.vue'

export default {
  components: { InterfaceModal, InterfaceNav },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    allCate() {
      return this.$route.path === '/'
    },
    valueInner: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    items() {
      const { categoriesMap } = this.$config
      return Object.keys(categoriesMap).map((key) => ({
        name: categoriesMap[key],
        value: key,
      }))
    },
  },
  methods: {
    getLink({ value }) {
      return getCategoryLink({ category: value })
    },
  },
}
</script>

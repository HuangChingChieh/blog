<template>
  <InterfaceModal v-model="valueInner" title="文章分類">
    <InterfaceNav vertical>
      <InterfaceNavItem
        v-for="(name, category) in $config.categoriesMap"
        :key="category"
        :to="getCategoryLink({ category })"
        active-class="font-weight-bold"
        @click="valueInner = false"
        >{{ name }}</InterfaceNavItem
      >
    </InterfaceNav>
  </InterfaceModal>
</template>

<script>
import { getCategoryLink } from '~/utils/getLink'

import InterfaceModal from '~/components/interface/interface-modal.vue'
import InterfaceNav from '~/components/interface/interface-nav.vue'
import InterfaceNavItem from '~/components/interface/interface-nav-item.vue'

export default {
  components: { InterfaceModal, InterfaceNav, InterfaceNavItem },
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
  },
  methods: {
    getCategoryLink,
  },
}
</script>

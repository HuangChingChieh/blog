<template>
  <b-modal
    v-model="valueInner"
    centered
    hide-footer
    scrollable
    title="文章分類"
  >
    <b-nav vertical>
      <b-nav-item
        v-for="(name, category) in $config.categoriesMap"
        :key="category"
        :to="getCategoryLink({ category })"
        active-class="font-weight-bold"
        @click="valueInner = false"
        >{{ name }}</b-nav-item
      >
    </b-nav>
  </b-modal>
</template>

<script>
import { BModal, BNav, BNavItem } from 'bootstrap-vue'
import { getCategoryLink } from '~/utils/getLink'

export default {
  components: { BModal, BNav, BNavItem },
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

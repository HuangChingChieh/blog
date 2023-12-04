<template>
  <b-sidebar
    v-model="valueInner"
    bg-variant="gray"
    shadow
    backdrop
    header-class="py-3"
  >
    <template #header-close>
      <b-icon-x-lg class="h6 mt-2 mb-0 mr-1" />
    </template>

    <common-container>
      <b-container fluid>
        <b-nav vertical>
          <b-nav-item
            v-for="(name, category) in $config.categoriesMap"
            :key="category"
            :to="getCategoryLink({ category })"
            :disabled="$route.params.category === category"
            :class="
              $route.params.category === category
                ? 'shadow-sm bg-white rounded'
                : ''
            "
            >{{ name }}</b-nav-item
          >
        </b-nav>
        <hr />
        <article class="py-3">
          <h6 class="mb-3 text-center">關於我</h6>
          <p class="mb-0">
            {{ $config.description }}
            <nuxt-link to="/buy_me_a_tea" class="text-body">
              <span @click="valueInner = false"
                >若這些文章對你有幫助的話，也歡迎不吝贊助我喝一杯飲料🧋。</span
              >
            </nuxt-link>
          </p>
        </article>
        <hr />
      </b-container>
    </common-container>
  </b-sidebar>
</template>

<script>
import { BSidebar, BContainer, BNav, BNavItem, BIconXLg } from 'bootstrap-vue'

import { getCategoryLink } from '~/utils/getLink'

export default {
  components: { BSidebar, BContainer, BNav, BNavItem, BIconXLg },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
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

<style lang="scss">
.b-sidebar > .b-sidebar-header {
  .close {
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
}
</style>

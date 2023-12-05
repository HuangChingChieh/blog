<template>
  <b-modal
    v-model="valueInner"
    centered
    hide-footer
    scrollable
    title="摘要"
    modal-class="modal-toc"
  >
    <b-nav v-b-scrollspy vertical>
      <b-nav-item
        v-for="(item, i) in toc"
        :key="i"
        :to="{ hash: `#${item.id}` }"
        class="border-left"
        @click="valueInner = false"
      >
        <span
          class="d-block"
          :style="{
            'padding-left': `${item.depth - 2}rem`,
            opacity: 1 - (item.depth - 2) * 0.1,
          }"
          :class="{ small: item.depth > 2, 'opacity-75': item.depth > 2 }"
          >{{ item.text }}</span
        >
      </b-nav-item>
    </b-nav>
  </b-modal>
</template>

<script>
import { BModal, VBScrollspy, BNav, BNavItem } from 'bootstrap-vue'
export default {
  components: { BModal, BNav, BNavItem },
  directives: { 'b-scrollspy': VBScrollspy },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    toc: {
      type: Array,
      default: () => [],
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
}
</script>

<style lang="scss">
.modal-toc {
  .nav-item {
    border-width: 3px !important;

    &.active {
      border-color: $primary !important;
      color: $primary;
    }
  }
}
</style>

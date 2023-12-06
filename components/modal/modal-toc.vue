<template>
  <b-modal
    v-model="valueInner"
    centered
    hide-footer
    scrollable
    title="摘要"
    modal-class="modal-toc"
    @hidden="hidden"
  >
    <b-nav v-b-scrollspy vertical>
      <b-nav-item
        v-for="(item, i) in toc"
        :key="i"
        :to="{ hash: `#${item.id}` }"
        class="border-left"
        link-classes="p-0"
        ><span
          class="d-block px-3 py-2"
          :class="{ small: item.depth > 2, 'opacity-50': item.depth > 2 }"
          @click.prevent.stop="scrollTo(item)"
        >
          <span
            :style="{
              'padding-left': `${item.depth - 2}rem`,
              opacity: 1 - (item.depth - 2) * 0.1,
            }"
            >{{ item.text }}</span
          >
        </span></b-nav-item
      >
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
  data() {
    return { hidden: () => {} }
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
    scrollTo({ id }) {
      this.hidden = () => {
        const element = document.querySelector(`#${id}`)
        if (element instanceof HTMLElement) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })

          this.hidden = () => {}
        }
      }

      this.valueInner = false
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

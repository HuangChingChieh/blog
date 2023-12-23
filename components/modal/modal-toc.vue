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
      >
        <modal-toc-item
          :item="item"
          :min-depth="minDepth"
          @click="scrollTo(item)"
        />
      </b-nav-item>
    </b-nav>
  </b-modal>
</template>

<script>
import { BModal, VBScrollspy, BNav, BNavItem } from 'bootstrap-vue'
import ModalTocItem from './modal-toc-item.vue'
export default {
  components: { BModal, BNav, BNavItem, ModalTocItem },
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
    minDepth() {
      const { toc } = this
      return Array.isArray(toc) && toc.length > 0
        ? toc.reduce((depth, item) => Math.min(depth, item.depth), toc[0].depth)
        : 2
    },
  },
  methods: {
    scrollTo({ id }) {
      this.hidden = () => {
        const element = document.querySelector(`#${id}`)
        if (element instanceof HTMLElement) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
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

      .nav-link {
        color: $primary;
        font-weight: 900;
      }
    }
  }
}
</style>

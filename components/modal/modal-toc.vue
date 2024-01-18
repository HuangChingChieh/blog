<template>
  <InterfaceModal
    v-model="valueInner"
    title="摘要"
    :modal-class="$style.modal"
    @hidden="hidden"
  >
    <InterfaceNav v-b-scrollspy vertical>
      <InterfaceNavItem
        v-for="(item, i) in toc"
        :key="i"
        :to="{ hash: `#${item.id}` }"
        class="border-left"
        :link-classes="[`p-0`, $style.navLink]"
        :active-class="$style.active"
        :class="$style.navItem"
      >
        <ModalTocItem
          :item="item"
          :min-depth="minDepth"
          @click="scrollTo(item)"
        />
      </InterfaceNavItem>
    </InterfaceNav>
  </InterfaceModal>
</template>

<script>
import { VBScrollspy } from 'bootstrap-vue'

import InterfaceNav from '~/components/interface/interface-nav.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'
import InterfaceNavItem from '~/components/interface/interface-nav-item.vue'

import ModalTocItem from '~/components/modal/modal-toc-item.vue'

export default {
  components: {
    InterfaceNav,
    InterfaceModal,
    InterfaceNavItem,
    ModalTocItem,
  },
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

<style lang="scss" module>
.modal {
  .navItem {
    border-width: 3px !important;

    &.active {
      border-color: $primary !important;

      .navLink {
        color: $primary;
        font-weight: 900;
      }
    }
  }
}
</style>

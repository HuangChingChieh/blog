<template>
  <InterfaceModal
    v-model="valueInner"
    title="摘要"
    :modal-class="[$style.modal, 'modal-toc']"
    @hidden="hidden"
  >
    <InterfaceNav
      v-b-scrollspy
      :items="toc"
      :link-generate-func="getLink"
      :link-classes="[`p-0`, `border-start`, $style.navLink]"
      vertical
    >
      <template #item="{ item }">
        <ModalTocItem
          :item="item"
          :min-depth="minDepth"
          @click="scrollTo(item)"
        />
      </template>
    </InterfaceNav>
  </InterfaceModal>
</template>

<script>
import { mapState } from 'vuex'

import InterfaceNav from '~/components/interface/interface-nav.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'

import ModalTocItem from '~/components/modal/modal-toc-item.vue'
import bScrollspy from '~/utils/bScrollspy'

export default {
  components: {
    InterfaceNav,
    InterfaceModal,
    ModalTocItem,
  },
  directives: { 'b-scrollspy': bScrollspy },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { hidden: () => {} }
  },
  computed: {
    ...mapState(['toc']),
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
    getLink({ id }) {
      return { hash: `#${id}` }
    },
    scrollTo({ id }) {
      this.$nextTick(() => {
        const element = document.querySelector(`#${id}`)
        if (element instanceof HTMLElement) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
          })
        }
      })

      this.valueInner = false
    },
  },
}
</script>

<style lang="scss">
.modal-toc {
  .nav-link.active {
    font-weight: 900;
    color: $primary;
    border-color: $primary !important;
  }
}
</style>

<style lang="scss" module>
.modal {
  .navLink {
    border-width: 3px !important;
  }
}
</style>

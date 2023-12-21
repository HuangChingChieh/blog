<template>
  <header class="common-header" :class="`pt-${mobileBreakpoint}-4`">
    <b-container
      :fluid="mobileBreakpoint"
      :class="`py-${mobileBreakpoint}-3`"
      class="d-flex flex-row align-items-center"
    >
      <common-icon bordered />
      <div class="ml-3 flex-grow-1">
        <nuxt-link
          class="font-weight-bold text-body d-block text-decoration-none"
          to="/"
        >
          隨機手札
        </nuxt-link>
        <small
          class="text-secondary d-none"
          :class="`d-${mobileBreakpoint}-block`"
          >雜七雜八之地</small
        >
      </div>

      <div
        class="d-flex align-items-center justify-content-end"
        :class="{ 'header-icons-fixed': !headerVisible }"
      >
        <common-header-icon
          icon="folder"
          title="文章分類"
          @click="modal.categories = true"
        >
          <span v-if="headerVisible" class="pl-1">{{
            $config.categoriesMap[$route.params.category]
          }}</span>
        </common-header-icon>

        <common-header-icon
          v-if="hasToc"
          icon="card-list"
          title="文章摘要"
          @click="modal.toc = true"
        />

        <common-header-icon
          icon="search"
          title="搜尋文章"
          @click="modal.search = true"
        />
      </div>
    </b-container>

    <modal-search v-model="modal.search" />
    <modal-categories v-model="modal.categories" />
    <modal-toc v-model="modal.toc" :toc="toc" />

    <div v-b-visible="onHeaderHide"></div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import { BContainer, VBVisible } from 'bootstrap-vue'
import CommonIcon from '~/components/common/common-icon.vue'
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import ModalSearch from '~/components/modal/modal-search.vue'
import ModalCategories from '~/components/modal/modal-categories.vue'
import ModalToc from '~/components/modal/modal-toc.vue'

export default {
  components: {
    BContainer,
    CommonIcon,
    CommonHeaderIcon,
    ModalSearch,
    ModalCategories,
    ModalToc,
  },
  directives: { 'b-visible': VBVisible },
  data() {
    return {
      mobileBreakpoint,
      modal: {
        search: false,
        categories: false,
        toc: false,
      },
      headerVisible: true,
    }
  },
  computed: {
    ...mapState(['toc']),
    hasToc() {
      const { toc } = this
      return Array.isArray(toc) && toc.length > 0
    },
  },
  methods: {
    onHeaderHide(isVisible) {
      this.headerVisible = isVisible
    },
  },
}
</script>

<style lang="scss">
.common-header {
  position: sticky;
  background-color: white;
  box-shadow: $box-shadow-sm;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  top: 0;
  z-index: $zindex-sticky;

  .common-icon {
    height: 2rem;
    width: 2rem;
  }

  .common-header-icon {
    padding: 0;
    transition: none;
  }

  .header-icons-fixed {
    position: fixed;
    top: 1rem;
    flex-direction: column;

    .common-header-icon {
      margin-bottom: 1rem;
      padding: 0.5rem;
      background-color: white;
      box-shadow: $box-shadow-sm;
      border-radius: 90px;
    }
  }
}

@each $breakpoint, $max-widths in $container-max-widths {
  @media (min-width: map-get($grid-breakpoints, $breakpoint)) {
    .header-icons-fixed {
      left: calc(50% + $max-widths / 2 - 0.5rem);
    }
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .common-header {
    position: static;
    background-color: transparent;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;

    .common-icon {
      height: 3rem;
      width: 3rem;
    }
  }

  .common-header-icon {
    padding: 0;
  }
}
</style>

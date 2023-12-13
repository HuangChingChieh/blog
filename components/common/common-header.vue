<template>
  <header class="common-header" :class="`pt-${mobileBreakpoint}-4`">
    <b-container :fluid="mobileBreakpoint" :class="`py-${mobileBreakpoint}-3`">
      <div
        class="d-flex flex-row align-items-center px-2"
        :class="`px-${mobileBreakpoint}-0`"
      >
        <common-icon bordered />
        <div class="ml-3 flex-grow-1">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
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
            <template v-if="headerVisible">
              <span v-if="$route.params.category" class="pl-1">{{
                $config.categoriesMap[$route.params.category]
              }}</span>
              <span v-else-if="$route.path === '/'" class="pl-1">最新文章</span>
            </template>
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
      </div>
    </b-container>

    <modal-search v-model="modal.search" />
    <modal-categories v-model="modal.categories" />
    <modal-toc v-model="modal.toc" :toc="toc" />

    <div v-b-visible="onHeaderHide"></div>
  </header>
</template>

<script>
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
      toc: [],
      headerVisible: true,
    }
  },
  async fetch() {
    await this.getToc()
  },
  computed: {
    hasToc() {
      const { toc } = this
      return Array.isArray(toc) && toc.length > 0
    },
  },
  watch: {
    '$route.params.slug'(slug) {
      this.getToc()
    },
  },
  methods: {
    async getToc() {
      const { $content } = this
      const { slug } = this.$route.params

      if (slug) {
        const articles = await $content('articles', { deep: true })
          .only(['toc', 'slug'])
          .where({ slug })
          .fetch()

        const article = articles[0]
        this.toc = article?.toc || []
      } else {
        this.toc = []
      }
    },
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
      left: calc(50% + $max-widths / 2 - 1rem);
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
    }
  }

  .common-header-icon {
    padding: 0;
  }
}
</style>

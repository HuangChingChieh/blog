<template>
  <b-modal
    v-model="valueInner"
    centered
    hide-footer
    scrollable
    title="搜尋文章"
    size="lg"
    @shown="shown"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <div class="modal-search-input-group position-relative">
        <b-form-input
          ref="input"
          v-model="keyword"
          trim
          placeholder="請輸入關鍵字"
          @input="
            beforeSearch()
            search()
          "
        ></b-form-input>

        <div
          class="d-flex align-items-center justify-content-center px-3 modal-search-input-icon-wrapper"
        >
          <b-icon-search />
        </div>
      </div>

      <div class="mt-3 modal-search-results">
        <div v-if="keyword" class="h-100">
          <div v-if="hasSearchResult" class="flex-grow-1">
            <div
              v-for="(article, index) in articles"
              :key="article.slug"
              class="small"
            >
              <hr v-if="index > 0" />

              <article-seach-result
                :article="article"
                :keyword="keyword"
                @navigate="valueInner = false"
              />
            </div>

            <div class="text-center">
              <hr />
              <b-button
                v-if="hasMore"
                variant="primary"
                size="sm"
                :disabled="searchingMore"
                @click="searchMore"
              >
                {{ searchingMore ? '載入中' : '載入更多搜尋結果' }}
              </b-button>
              <div v-else class="text-muted small">沒有更多搜尋結果了</div>
            </div>
          </div>
          <div
            v-else
            class="text-center h-100 d-flex align-items-center justify-content-center"
          >
            {{ hasNoSearchResult ? '哎呀～找不到文章' : '搜尋中' }}
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import debounce from 'lodash/debounce'
import { BModal, BFormInput, BIconSearch, BButton } from 'bootstrap-vue'

import ArticleSeachResult from '~/components/article/article-search-result.vue'

export default {
  components: {
    BModal,
    BFormInput,
    BIconSearch,
    BButton,
    ArticleSeachResult,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      keyword: '',
      articles: [],
      searching: false,
      searchingMore: false,
      hasMore: false,
      page: 1,
    }
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
    hasSearchResult() {
      return !this.searching && this.articles.length > 0
    },
    hasNoSearchResult() {
      return !this.searching && this.articles.length === 0
    },
  },
  methods: {
    beforeSearch() {
      this.page = 1
      this.searching = true
      this.searchingMore = false
      this.hasMore = false
      this.articles = []
    },
    reset() {
      this.page = 1
      this.searching = false
      this.searchingMore = false
      this.hasMore = false
      this.keyword = ''
      this.articles = []
    },
    shown() {
      this.$refs.input.focus()
    },
    async searchMore() {
      this.searchingMore = true
      this.page++
      await this.searchCommon()
      this.searchingMore = false
    },
    async searchCommon() {
      const { perPage } = this.$config
      const { page, keyword } = this
      if (keyword) {
        const articles = await this.$content('articles', { deep: true })
          .only(['title', 'slug', 'description', 'plainText'])
          .search(this.keyword)
          // .sortBy('updatedAt', 'desc')
          .skip((page - 1) * perPage)
          .limit(perPage + 1)
          .fetch()

        this.hasMore = articles.length > perPage

        this.articles.push(...articles.slice(0, perPage))
        this.searching = false
      }
    },
    search: debounce(async function () {
      await this.searchCommon()
    }, 500),
  },
}
</script>

<style lang="scss">
.modal-search-results {
  height: 400px;
  overflow-y: auto;
  word-break: break-all;
}

.modal-search-input-group {
  input {
    padding-right: calc(1.5rem + 1rem);

    &:focus ~ .modal-search-input-icon-wrapper .b-icon {
      color: $primary;
    }
  }

  .modal-search-input-icon-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}
</style>

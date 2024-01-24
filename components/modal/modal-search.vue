<template>
  <InterfaceModal
    v-model="model"
    title="搜尋文章"
    size="lg"
    @shown="shown"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <div
        class="position-relative"
        :class="$style.inputGroup"
      >
        <InterfaceFormInput
          ref="input"
          v-model="keyword"
          placeholder="請輸入關鍵字"
          :class="$style.input"
          @input="keywordChanged"
        />

        <div
          class="d-flex align-items-center justify-content-center px-3"
          :class="$style.iconWrapper"
        >
          <InterfaceIcon
            icon="search"
            :class="$style.icon"
          />
        </div>
      </div>

      <div
        class="mt-3"
        :class="$style.results"
      >
        <div
          v-if="keyword"
          class="h-100"
        >
          <div v-if="hasSearchResult">
            <div
              v-for="(article, index) in articles"
              :key="article.slug"
              class="small"
            >
              <hr
                v-if="index > 0"
                class="my-3"
              >

              <ArticleSeachResult
                :article="article"
                :keyword="keyword"
                :slug="article.slug"
                @navigate="model = false"
              />
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
  </InterfaceModal>
</template>

<script setup>
import debounce from 'lodash/debounce'

import InterfaceFormInput from '~/components/interface/interface-form-input.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'

import ArticleSeachResult from '~/components/article/article-search-result.vue'
import { computed, ref } from 'vue'

const model = defineModel({
  type: Boolean,
  default: false,
})

const keyword = ref('')
const {
  data: paragraphs,
  pending: searching,
  refresh,
} = await useAsyncData(
  `search:${keyword.value}`,
  () => searchContent(keyword),
  {
    server: false,
    immediate: false,
    default: () => [],
  }
)

const { data: titleMap } = await useAsyncData('titleMap', async () => {
  const titleMap = {}
  await queryContent('articles')
    .only(['title', 'slug'])
    .find()
    .then((articles) => {
      if (Array.isArray(articles) && articles.length > 0) {
        articles.forEach(({ slug, title }) => {
          if (!titleMap[slug]) titleMap[slug] = title
        })
      }
    })
  return titleMap
})

const {
  data: articles,
  pending: searchingTitle,
  refresh: refreshArticles,
} = await useAsyncData(
  `titleMap:${keyword.value}`,
  () => {
    const ps = unref(paragraphs.value)
    if (Array.isArray(ps) && ps.length > 0) {
      const titleMapC = {}
      ps.forEach((p) => {
        const { id, score } = p
        const slugHash = id.split('/').pop().split('#')
        const slug = slugHash[0]
        const hash = slugHash[1]
        if (!titleMapC[slug])
          titleMapC[slug] = {
            title: unref(titleMap)[slug],
            score: 0,
            paragraphs: [],
            slug,
          }

        titleMapC[slug].score += score
        titleMapC[slug].paragraphs.push({
          content: p.content,
          id,
          score,
          title: p.title,
          hash
        })
      })

      const slugs = Object.keys(titleMapC)

      return slugs
        .map((slug) => titleMapC[slug])
        .sort((a, b) => b.score - a.score)
    } else return []
  },
  {
    server: false,
    immediate: false,
    default: () => [],
  }
)

const searchComputed = computed(() => unref(searching) || unref(searchingTitle))

const hasSearchResult = computed(
  () => !unref(searchComputed) && unref(articles).length > 0
)
const hasNoSearchResult = computed(
  () => !unref(searchComputed) && unref(articles).length === 0
)

const keywordChanged = () => {
  if (keyword.value) {
    searching.value = true
    searchingTitle.value = true
    search()
  }
}

const reset = () => {
  keyword.value = ''
}

const search = debounce(async () => {
  await refresh()
  await refreshArticles()
}, 500)

// Input相關
const input = ref(null)
const shown = () => {
  input.value.$el.focus()
}
</script>

<style lang="scss" module>
.results {
  height: 400px;
  overflow-y: auto;
  word-break: break-all;
}

.inputGroup {
  .input {
    padding-right: calc(1.5rem + 1rem);

    &:focus~.iconWrapper .icon {
      color: $primary;
    }
  }

  .iconWrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}
</style>

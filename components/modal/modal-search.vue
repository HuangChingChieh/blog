<template>
  <InterfaceModal
    v-model="model"
    title="搜尋文章"
    size="lg"
    @shown="shown"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <div class="position-relative" :class="$style.inputGroup">
        <InterfaceFormInput
          ref="input"
          v-model="keyword"
          placeholder="請輸入關鍵字"
          :class="$style.input"
          :disabled="searching"
          @input="keywordChanged"
        />

        <div
          class="d-flex align-items-center justify-content-center px-3"
          :class="$style.iconWrapper"
        >
          <InterfaceIcon icon="search" :class="$style.icon" />
        </div>
      </div>

      <div class="mt-3" :class="$style.results">
        <div v-if="keyword" class="h-100">
          <div v-if="hasSearchResult">
            <div
              v-for="(article, index) in articles"
              :key="article.slug"
              class="small"
            >
              <hr v-if="index > 0" class="my-3" />

              <ArticleSearchResult
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
import { debounce } from 'es-toolkit'

import InterfaceFormInput from '~/components/interface/interface-form-input.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'

import ArticleSearchResult from '~/components/article/article-search-result.vue'

const model = defineModel({
  type: Boolean,
  default: false,
})

const keyword = ref('')
const searching = ref(false)
const paragraphs = ref([])

const articles = computed(() => {
  const ps = unref(paragraphs.value)
  if (Array.isArray(ps) && ps.length > 0) {
    const titleMap = {}
    ps.forEach((p) => {
      const { id, score } = p
      const slugHash = id.split('/').pop().split('#')
      const slug = slugHash[0]
      const hash = slugHash[1]

      console.log(p.titles[0])
      if (!titleMap[slug])
        titleMap[slug] = {
          title: p.titles[0],
          score: 0,
          paragraphs: [],
          slug,
        }

      titleMap[slug].score += score
      titleMap[slug].paragraphs.push({
        ...p,
        hash,
      })
    })

    const slugs = Object.keys(titleMap)

    return slugs.map((slug) => titleMap[slug]).sort((a, b) => b.score - a.score)
  } else return []
})

const hasSearchResult = computed(
  () => !unref(searching) && unref(articles).length > 0
)
const hasNoSearchResult = computed(
  () => !unref(searching) && unref(articles).length === 0
)

const keywordChanged = () => {
  if (keyword.value) {
    paragraphs.value = []
    search()
  }
}

const reset = () => {
  keyword.value = ''
  searching.value = false
  paragraphs.value = []
}

const search = debounce(async () => {
  searching.value = true
  const result = await searchContent(keyword)
  paragraphs.value = result
  searching.value = false
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

    &:focus ~ .iconWrapper .icon {
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

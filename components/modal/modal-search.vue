<template>
  <InterfaceModal
    v-model="model"
    title="搜尋文章"
    size="lg"
    @shown="shown"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <form @submit.prevent="search">
        <fieldset class="input-group" :disabled="searching">
          <InterfaceFormInput
            ref="input"
            v-model="keyword"
            placeholder="請輸入關鍵字"
            :class="$style.input"
            @input="keywordChanged"
          />
          <InterfaceButton variant="primary" type="submit">
            <InterfaceIcon icon="search" />
          </InterfaceButton>
        </fieldset>
      </form>

      <div class="mt-2" :class="$style.results">
        <div v-if="keyword" class="h-100">
          <div v-if="hasSearchResult">
            <button
              v-for="(match, name) in matchesMap"
              :key="name"
              type="button"
              class="btn btn-sm rounded-pill me-1 mt-1"
              :class="
                name === theMatch ? `btn-primary` : `btn-outline-secondary`
              "
              @click="changeTheMatch(name)"
            >
              {{ name }}
            </button>

            <div v-if="matchesMap[theMatch]">
              <div
                v-for="article in matchesMap[theMatch].articles"
                :key="article.slug"
              >
                <hr class="my-3" />
                <ArticleCardNormal
                  :key="article.slug"
                  :article="article"
                  :container="false"
                  @click="model = false"
                />
              </div>
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
import InterfaceFormInput from '~/components/interface/interface-form-input.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'

const model = defineModel({
  type: Boolean,
  default: false,
})

const keyword = ref('')
const searching = ref(false)
const matchesMap = ref({})
const theMatch = ref('')

const hasSearchResult = computed(
  () => !unref(searching) && Object.keys(unref(matchesMap)).length > 0
)
const hasNoSearchResult = computed(
  () => !unref(searching) && Object.keys(unref(matchesMap)).length === 0
)

const keywordChanged = () => {
  matchesMap.value = {}
  theMatch.value = ''
}

const reset = () => {
  keyword.value = ''
  searching.value = false
  matchesMap.value = {}
  theMatch.value = ''
}

const search = async () => {
  searching.value = true
  const result = unref(await searchContent(keyword))

  if (Array.isArray(result) && result.length > 0) {
    const matchesMapValue = {}
    result.forEach((p) => {
      const { id, score, match } = p
      const slugHash = id.split('/').pop().split('#')
      const slug = slugHash[0]

      Object.keys(match).forEach((match) => {
        if (!matchesMapValue[match]) matchesMapValue[match] = { articles: [] }
        if (!matchesMapValue[match][slug]) matchesMapValue[match][slug] = 0

        matchesMapValue[match][slug] += score
      })
    })

    matchesMap.value = matchesMapValue
    theMatch.value = Object.keys(matchesMapValue)[0]
    await getArticles()
  }

  searching.value = false
}

const getArticles = async () => {
  const theMatchValue = theMatch.value
  if (!theMatchValue) return

  const theMatchMap = matchesMap.value[theMatchValue]
  if (theMatchMap.articles.length > 0) return

  const slugs = Object.keys(theMatchMap).filter((match) => match !== 'articles')
  const articles = await Promise.all(slugs.map((slug) => useArticle(slug)))
  articles.sort(({ data: dataA }, { data: dataB }) => {
    return theMatchValue[dataA.value.slug] > theMatchValue[dataB.value.slug]
      ? -1
      : 1
  })

  theMatchMap.articles = articles.map(({ data }) => data.value)
}

const changeTheMatch = (name) => {
  theMatch.value = name
  getArticles()
}

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
</style>

<template>
  <InterfaceModal
    v-model="model"
    title="搜尋文章"
    size="lg"
    @shown="shown"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <form @submit.prevent="startSearch">
        <fieldset class="input-group" :disabled="searching">
          <InterfaceFormInput
            ref="input"
            v-model="keyword"
            placeholder="請輸入關鍵字"
            :class="$style.input"
            @input="keywordChanged"
          />
          <InterfaceButton variant="primary" type="submit" :disabled="!keyword">
            <InterfaceIcon icon="search" />
          </InterfaceButton>
        </fieldset>
      </form>

      <div class="mt-2" :class="$style.results">
        <div v-if="searched">
          <button
            v-for="(match, name) in matchesMap"
            :key="name"
            type="button"
            class="btn btn-sm rounded-pill me-1 mt-1"
            :class="name === theMatch ? `btn-primary` : `btn-outline-secondary`"
            @click="changeTheMatch(name)"
          >
            {{ name }}
          </button>

          <div v-for="article in articles" :key="article.slug">
            <hr class="my-3" />
            <ArticleCardNormal
              :key="article.slug"
              :article="article"
              :container="false"
              @click="model = false"
            />
          </div>
        </div>

        <div
          v-if="hasNoSearchResult"
          class="text-center h-100 d-flex align-items-center justify-content-center"
        >
          {{ '哎呀～找不到文章' }}
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
const theMatch = ref('')
const searched = ref(false)

const hasNoSearchResult = computed(
  () =>
    Object.keys(unref(matchesMap)).length === 0 &&
    unref(articles).length === 0 &&
    searched.value
)

const keywordChanged = () => {}

const reset = () => {
  keyword.value = ''
  theMatch.value = ''
  searched.value = false
}

const {
  data: matchesMap,
  status: searchStatus,
  refresh: search,
} = await useAsyncData(
  'search',
  async () => {
    const matchesMap = {}

    const result = unref(await searchContent(keyword))
    if (Array.isArray(result) && result.length > 0) {
      result.forEach((p) => {
        const { id, score, match } = p
        const slugHash = id.split('/').pop().split('#')
        const slug = slugHash[0]

        Object.keys(match).forEach((match) => {
          if (!matchesMap[match]) matchesMap[match] = {}
          if (!matchesMap[match][slug]) matchesMap[match][slug] = 0

          matchesMap[match][slug] += score
        })
      })
    }

    return matchesMap
  },
  { lazy: true, server: false, default: () => ({}) }
)

const searching = computed(() => searchStatus.value === 'pending')

const startSearch = async () => {
  await search()
  theMatch.value = Object.keys(matchesMap.value)[0]
  searched.value = true
}

const matchArticlesMap = {}

const { data: articles } = await useAsyncData(
  `search_articles_by_match`,
  async () => {
    const theMatchValue = theMatch.value
    if (!theMatchValue) return []

    if (matchArticlesMap[theMatchValue]?.articles)
      return matchArticlesMap[theMatchValue]?.articles

    const theMatchMap = matchesMap.value[theMatchValue]

    const slugs = Object.keys(theMatchMap).filter(
      (match) => match !== 'articles'
    )

    const articles = await Promise.all(
      slugs.map((slug) => useArticleCard(slug))
    )
    // const articlesValue = articles.map(({ data }) => data.value)
    articles.sort(({ slug: slugA }, { slug: slugB }) =>
      theMatchMap[slugA] > theMatchMap[slugB] ? -1 : 1
    )

    if (!matchArticlesMap[theMatchValue]) matchArticlesMap[theMatchValue] = {}
    matchArticlesMap[theMatchValue].articles = articles

    return articles
  },
  {
    watch: [theMatch],
    lazy: true,
    server: false,
    default: () => [],
  }
)

const changeTheMatch = (name) => {
  theMatch.value = name
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

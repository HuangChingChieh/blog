<template>
  <InterfaceModal
    v-model="uiStore.modal.search"
    title="搜尋文章"
    size="lg"
    @hidden="reset"
  >
    <div class="d-flex flex-column">
      <form @submit.prevent="startSearch">
        <PIconField>
          <PInputText
            v-model="keyword"
            placeholder="請輸入關鍵字"
            variant="filled"
            :disabled="searching"
            class="w-full"
            autofocus
          />
          <PInputIcon>
            <InterfaceIcon icon="search" />
          </PInputIcon>
        </PIconField>
      </form>

      <div class="mt-3 h-[400px] break-all overflow-y-auto">
        <div v-if="searched">
          <div class="flex flex-wrap gap-1">
            <InterfaceButton
              v-for="(match, name) in matchesMap"
              :key="name"
              size="small"
              :variant="name === theMatch ? undefined : `outlined`"
              rounded
              @click="changeTheMatch(name)"
            >
              {{ name }}
            </InterfaceButton>
          </div>

          <div v-for="article in articles" :key="article.slug">
            <hr class="my-3" />
            <ArticleCardNormal
              :key="article.slug"
              :article="article"
              :container="false"
              :img-break-points="imgBreakPoints"
              @click="closeModal('search')"
            />
          </div>
        </div>

        <div
          v-if="hasNoSearchResult"
          class="text-center h-full flex items-center justify-center"
        >
          {{ '哎呀～找不到文章' }}
        </div>
      </div>
    </div>
  </InterfaceModal>
</template>

<script setup>
import { useUiStore } from '~/store/ui'

const uiStore = useUiStore()
const { closeModal } = uiStore

const keyword = ref('')
const theMatch = ref('')
const searched = ref(false)

const hasNoSearchResult = computed(
  () =>
    Object.keys(unref(matchesMap)).length === 0 &&
    unref(articles).length === 0 &&
    searched.value,
)

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
  { lazy: true, server: false, default: () => ({}) },
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
      (match) => match !== 'articles',
    )

    const articles = await Promise.all(
      slugs.map((slug) => useArticleCard(slug)),
    )
    // const articlesValue = articles.map(({ data }) => data.value)
    articles.sort(({ slug: slugA }, { slug: slugB }) =>
      theMatchMap[slugA] > theMatchMap[slugB] ? -1 : 1,
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
  },
)

const changeTheMatch = (name) => {
  theMatch.value = name
}

const imgBreakPoints = {
  sm: 451,
  lg: 205,
  '2xl': 330,
}
</script>

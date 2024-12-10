<template>
  <InterfaceCol cols="12" lg="10" xl="8" class="mx-auto">
    <div class="text-center">
      <div class="h1 fw-bolder text-muted">404</div>
      <div class="my-4">
        哎呀～你尋找的網頁不存在哦！<br />看看我們隨機幫你選出的文章們吧！<br />或是<NuxtLink
          to="/"
        >
          點這裡 </NuxtLink
        >回到首頁！
      </div>
    </div>

    <div v-if="$config.public.isDev">
      {{ error }}
    </div>

    <ArticleCardNormal
      v-for="article in articles"
      :key="article.slug"
      :article="article"
      class="mb-3"
    />
  </InterfaceCol>
</template>

<script setup>
import { randomInt } from 'es-toolkit'
import { useMainStore } from '~/store/index'

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const articles = ref([])
const { categories } = useMainStore()

const getRandomArticle = async (category) => {
  console.log(categories)
  const numberOfPages = categories[category].pageCount || 1

  const page = randomInt(numberOfPages) + 1
  console.log(page)
  const articles = await useArticlesByPageAndCategory({
    page,
    category,
  })

  if (articles.length === 0) return

  const randomIndex = randomInt(articles.length)

  return articles[randomIndex]
}

const getRandomArticles = async () => {
  const randomArticles = await Promise.all([
    getRandomArticle('frontend'),
    getRandomArticle('linux'),
    getRandomArticle('life'),
  ])

  articles.value = randomArticles
}

onMounted(async () => {
  await getRandomArticles()
})
</script>

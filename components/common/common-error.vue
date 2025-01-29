<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3"
    >
      <div class="text-center">
        <div class="h1 fw-bolder text-muted">404</div>
        <div class="my-4">
          <div>哎呀～你尋找的網頁不存在哦！</div>
          <div>看看我們隨機幫你選出的文章們吧！</div>
          <div>或是<NuxtLink to="/"> 點這裡 </NuxtLink>回到首頁！</div>
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
    </div>
  </div>
</template>

<script setup>
import { randomInt } from 'es-toolkit'

defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const articles = ref([])
const { categories } = await useArticlesMetadata()

const getRandomArticle = async (category) => {
  const numberOfPages = categories[category].pageCount || 1

  const page = randomInt(numberOfPages) + 1
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

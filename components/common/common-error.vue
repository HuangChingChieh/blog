<template>
  <CommonContainer>
    <div class="text-center">
      <div class="h1 fw-bolder text-muted">
        404
      </div>
      <div class="my-4">
        哎呀～你尋找的網頁不存在哦！<br>看看我們隨機幫你選出的一篇文章吧！<br>或是<NuxtLink to="/">
          點這裡
        </NuxtLink>回到首頁！
      </div>
    </div>

    <div v-if="article">
      <ArticleCard
        :article="article"
        class="border"
        preload-img
      />
    </div>

    <div v-if="$config.public.isDev">
      {{ error }}
    </div>
  </CommonContainer>
</template>

<script
  lang="ts"
  setup
>
import type { PropType } from 'vue'
import type { Article } from '~/types/article'

import ArticleCard from '~/components/article/article-card.vue'
import CommonContainer from '~/components/common/common-container.vue'

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const { data: articles } = await useArticles(['slug'])

const randomNumber = ref(-1)

const article = computed(() => {
  const articlesUnref = unref(articles)
  const randomNumberUnref = unref(randomNumber)
  return Array.isArray(articlesUnref) && articlesUnref.length > 0 && randomNumberUnref >= 0 ?
    (articlesUnref[randomNumber.value]) as Article : null
})

onMounted(() => {
  const articlesUnref = unref(articles)
  if (Array.isArray(articlesUnref) && articlesUnref.length > 0) {
    randomNumber.value = Math.round(Math.random() * (articlesUnref.length - 1))
  }
})
</script>

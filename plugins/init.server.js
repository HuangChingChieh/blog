import { useMainStore } from '~/store'

export default defineNuxtPlugin(async ({ $pinia }) => {
  // 初始化文章分類的metadata
  const articles = await queryContent('articles')
    .only(['tags', 'category'])
    .find()

  const mainStore = useMainStore($pinia)
  const { perPage } = useRuntimeConfig().public
  mainStore.nuxtServerInit({ articles, perPage })
})

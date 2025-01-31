<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-8 lg:col-start-3">
        <CommonContainer>
          <CommonArticle :document="article" />
        </CommonContainer>

        <hr class="md:hidden my-12" />
        <LikerButton class="mt-12 flex justify-center" />
        <ArticleComment class="mt-12" />

        <ArticlesRelated :article="article" class="mt-12" />
      </div>

      <div
        class="hidden lg:block lg:col-span-2 max-h-[75vh] sticky top-24 overflow-y-auto"
      >
        <ArticleTocs :toc="toc" />
      </div>
    </div>

    <div
      class="lg:hidden fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-primary rounded-full z-10 shadow-sm"
    >
      <InterfaceButton
        class="p-2 md:p-3 rounded-full"
        @click="tocModelOpen = true"
      >
        <InterfaceIcon icon="card-list" class="text-3xl mb-0 flex" />
      </InterfaceButton>
    </div>

    <ModalToc v-model="tocModelOpen" :toc="toc" />
  </div>
</template>

<script setup>
import { useTocStore } from '~/store/toc'

const route = useRoute()
const { slug } = route.params

const { data: article } = await useArticle(slug)

if (!article?.value) {
  const error = useError()
  error({ statusCode: '404' })
}

const toc = article.value?.body?.toc?.links || []
const tocModelOpen = ref(false)
const { reset: resetTocStore } = useTocStore()

onBeforeRouteLeave(() => {
  resetTocStore()
})

const head = computed(() => {
  let head = []

  if (article?.value) {
    const { appHost, imageServer } = useRuntimeConfig().public
    const { title, description, img, tags, updatedAt, createdAt } =
      article.value
    const url = appHost + route.fullPath.substring(1)
    head = getHeadForArticle({
      description,
      url,
      title,
      img: img
        ? `${imageServer}1600x1200q100/${img}`
        : `${appHost}images/default-og.png`,
      tags,
      updatedAt,
      createdAt,
    })
  }

  return head
})

useHead(head.value)
</script>

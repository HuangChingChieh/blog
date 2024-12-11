<template>
  <AsideContainer title="文章標籤">
    <div class="text-center">
      <InterfaceButtonLink
        v-for="tag in tags"
        :key="tag.name"
        :to="{ path: '/buy_me_a_tea', hash: '#關於我' }"
        variant="outline-primary"
        size="sm"
        class="rounded-pill mb-2 me-2"
      >
        {{ tag.name }}
      </InterfaceButtonLink>
    </div>
  </AsideContainer>
</template>

<script setup>
const { tagsObj } = await useArticlesMetadata()
let tags = []

Object.keys(tagsObj).forEach((name) => {
  const count = tagsObj[name]
  if (count > 1) {
    tags.push({
      name,
      count,
    })
  }
})

tags.sort((a, b) => {
  let sort = b.count - a.count
  if (sort === 0) {
    sort = a.name > b.name ? 1 : -1
  }
  return sort
})

tags = tags.slice(0, 15)
</script>

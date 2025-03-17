<template>
  <CommonContainer>
    <h1 class="text-3xl font-bold">文章標籤</h1>
    <hr class="my-6" />
    <div class="flex flex-wrap gap-1">
      <InterfaceButtonLink
        v-for="tag in tags"
        :key="tag.name"
        :to="tag.to"
        variant="outlined"
        severity="primary"
        rounded
      >
        {{ tag.name }} ({{ tag.count }})
      </InterfaceButtonLink>
    </div>
  </CommonContainer>
</template>

<script setup>
const { tagsObj } = await useArticlesMetadata()

const tags = Object.keys(tagsObj)
  .map((tag) => {
    return {
      name: tag,
      count: tagsObj[tag],
      to: getTagLink({ tag }),
    }
  })
  .sort(({ count: countA }, { count: countB }) => countB - countA)
</script>

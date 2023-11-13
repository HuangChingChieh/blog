<template>
  <nuxt-link
    v-if="article && article.category"
    :to="getCategoryLink({ category: article.category })"
    class="text-muted small d-inline-flex align-items-center"
  >
    <b-icon-folder class="mr-1" />
    <span>{{ $config.categoriesMap[article.category] }}</span>
  </nuxt-link>
</template>

<script>
import { BIconFolder } from 'bootstrap-vue'
import { getCategoryLink } from '~/utils/getLink'
export default {
  components: { BIconFolder },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: { getCategoryLink },
}
</script>

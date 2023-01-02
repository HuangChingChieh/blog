<template>
  <div>
    this is a global component. And this is property from top YAML:
    {{ author.name }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

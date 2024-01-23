<template>
  <i :class="`bi-${icon}`"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>{{ config }}</div>
</template>

<script setup>
const config = useRuntimeConfig().public
</script>

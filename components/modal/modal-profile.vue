<template>
  <InterfaceModal
    v-model="model"
    title="關於我"
  >
    <p>
      {{ $config.public.description }}
      <NuxtLink
        to="/buy_me_a_tea"
        class="text-body"
      >
        <span @click="model = false">若這些文章對你有幫助的話，也歡迎不吝贊助我喝一杯飲料🧋。</span>
      </NuxtLink>
    </p>
  </InterfaceModal>
</template>

<script setup>
import InterfaceModal from '~/components/interface/interface-modal.vue'

const model = defineModel({
  type: Boolean,
  default: false,
})
</script>

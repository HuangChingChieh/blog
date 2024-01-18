<template>
  <b-form-input v-model="valueInner" :placeholder="placeholder" trim />
</template>

<script>
import { BFormInput } from 'bootstrap-vue'
export default {
  components: {
    BFormInput,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    valueInner: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<template>
  <component
    :is="to ? `nuxt-link` : `button`"
    :class="btnClass"
    class="btn"
    :type="to ? false : `button`"
    :to="to"
    @click.prevent="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    btnClass() {
      const btnClass = []

      const { variant, size } = this
      if (variant) {
        btnClass.push(`btn-${variant}`)
      }

      if (size) {
        btnClass.push(`btn-${size}`)
      }

      return btnClass
    },
  },
}
</script>

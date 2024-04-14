<template>
  <Teleport to="body">
    <div
      ref="modal"
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
      :class="modalClass"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        :class="size ? `modal-${size}` : ``"
      >
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title h5">
              {{ title }}
            </div>
            <button
              type="button"
              class="btn-close"
              aria-label="關閉"
              @click="model = false"
            />
          </div>
          <div class="modal-body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Modal from 'bootstrap/js/dist/modal'

import { onBeforeUnmount, onMounted, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  modalClass: {
    type: [String, Array],
    default: '',
  },
})

const model = defineModel({
  type: Boolean,
  default: false,
})

const modal = ref(null)

let modalInstance: Modal | null = null

watch(model, (value) => {
  if (modalInstance) {
    value ? modalInstance.show() : modalInstance.hide()
  }
})

onBeforeUnmount(() => {
  if (modalInstance) {
    modalInstance.dispose()
  }
})

const emit = defineEmits(['hide', 'hidden', 'show', 'shown'])

onMounted(() => {
  nextTick(async () => {
    const modalElement: any = modal.value
    if (!modalElement || !(modalElement instanceof HTMLElement)) return

    modalInstance = new Modal(modalElement)

    modalElement.addEventListener('hide.bs.modal', () => {
      model.value = false
      emit('hide')
    })

    modalElement.addEventListener('hidden.bs.modal', () => {
      emit('hidden')
    })

    modalElement.addEventListener('show.bs.modal', () => {
      model.value = true
      emit('show')
    })

    modalElement.addEventListener('shown.bs.modal', () => {
      emit('shown')
    })
  })
})
</script>

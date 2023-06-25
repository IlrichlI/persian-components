<script setup lang="ts">
defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      role="dialog"
      aria-modal="true"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-[opacity 0.3s ease] modal-container"
    >
      <div class="bg-white max-w-md mx-auto rounded shadow-lg transition-[opacity 0.3s ease]">
        <div class="p-4">
          <slot name="header" />
        </div>

        <div class="p-4">
          <slot name="body" />
        </div>

        <div class="p-4">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="w-[100vw] h-[90vh] flex justify-center items-center bg-gray-900 bg-opacity-60 z-30"
      @click="$emit('update:visible', false)"
    >
      <Transition :name="transition">
        <div
          class="flex-row z-40 bg-white h-[400px] w-[500px] max-auto overflow-hidden shadow-2xl self-end"
          :class="bodyClass"
          @click.stop
        >
          <div class="h-full flex-1 overflow-y-auto">
            <slot name="body" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  transition: {
    type: String,
    default: 'slide-bottom-fade'
  },
  bodyClass: {
    type: String,
    default: ''
  }
})

defineEmits<{ (event: 'update:visible', value: boolean): void }>()
</script>

<style scoped>
.slide-bottom-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-bottom-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-bottom-fade-enter-from,
.slide-bottom-fade-leave-to {
  transform: translateY(100%);
}
</style>

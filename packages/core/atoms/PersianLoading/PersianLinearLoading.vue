<template>
  <div
    :class="{ hidden: !show }"
    class="animate-pulse rich-loading h-1 w-[100vw] bg-[var(--rich-light-primary-light)] transition-all duration-200 absolute z-[1000] top-0"
  >
    <div class="rich-progress bg-[var(--rich-light-primary-default)]" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  show: {
    type: Boolean as PropType<boolean | number>,
    default: () => false
  }
})
</script>

<style>
.rich-loading {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}

.rich-progress {
  width: 20% !important;
  height: 100%;
  animation: progressAnimation 2s linear infinite;
}

@keyframes progressAnimation {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(50vw);
  }
  100% {
    transform: translateX(100vw);
  }
}
</style>

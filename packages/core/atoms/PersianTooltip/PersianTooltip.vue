<template>
  <div>
    <div>
      <div class="group relative inline-block hover:transition-all">
        <slot name="content" />

        <span
          class="transition-all after:transition-all before:transition-all group-hover:transition-all absolute hidden group-hover:flex -left-4 -top-10 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
          :class="tooltipActionClass"
        >
          <slot name="tooltip-action" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tooltipActionClass: {
    type: String,
    default: () => ''
  },
  defaultHide: {
    type: Boolean,
    default: () => false
  },
  auto: {
    type: Boolean,
    default: () => false
  }
})
</script>

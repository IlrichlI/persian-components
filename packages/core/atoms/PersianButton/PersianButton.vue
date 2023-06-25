<script setup lang="ts">
import { computed } from 'vue'
import { PersianCircleLoading } from '../'

const emit = defineEmits(['click'])
const props = defineProps({
  href: { type: [String, Object], default: undefined },
  active: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  border: { type: Boolean, default: true },
  variant: { type: String, default: 'primary' },
  icon: { type: String, default: undefined },
  iconClass: { type: String, default: 'ml-1 w-5 h-5' },
  type: { type: String, default: 'button' },
  size: { type: String, default: 'md' }
})
const onClick = ($event: Event) => {
  if (!props.loading && !props.disabled) {
    emit('click', $event)
  } else {
    $event.preventDefault()
    $event.stopPropagation()
  }
}
const className = computed(() => {
  const cls: string[] = []
  switch (props.variant) {
    case 'primary':
      cls.push(props.outline ? 'bg-white text-primary-500' : 'bg-primary-500 text-white')
      if (props.border) {
        cls.push('border border-primary-500')
      }
      break
    case 'red':
      cls.push(props.outline ? 'bg-white text-red-500' : 'bg-red-500 text-white')
      if (props.border) {
        cls.push('border border-red-500')
      }
      break
    case 'green':
      cls.push(props.outline ? 'bg-white text-green-500' : 'bg-green-500 text-white')
      if (props.border) {
        cls.push('border border-green-500')
      }
      break
    case 'yellow':
      cls.push(props.outline ? 'bg-white text-yellow-500' : 'bg-yellow-500 text-white')
      if (props.border) {
        cls.push('border border-yellow-500')
      }
      break
    case 'gray':
      cls.push(props.outline ? 'bg-white text-gray-300' : 'bg-gray-300 text-black')
      if (props.border) {
        cls.push('border border-gray-300')
      }
      break
    case 'black':
      cls.push(props.outline ? 'bg-white text-black' : 'bg-black text-white')
      if (props.border) {
        cls.push('border border-black')
      }
      break
    case 'transparent':
      cls.push('bg-transparent text-black')
      break
  }

  if (props.active && !(props.disabled || props.loading)) {
    cls.push('!text-blue-500 bg-white')
  }

  switch (props.size) {
    case 'sm':
      cls.push('h-5 px-3 py-1 text-sm rounded-[2px]')
      break
    case 'md':
      cls.push('h-7 px-4 py-1/2 text-sm rounded-[4px]')
      break
    case 'circle':
      cls.push('h-6 w-6 p-2 text-sm rounded-full')
      break
  }

  return {
    [cls.join(' ')]: true,
    'bg-gray-200 text-gray-400 cursor-default': props.disabled || props.loading,
    'cursor-pointer': !(props.disabled || props.loading),
    'focus:underline': props.href
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="inline-flex items-center justify-center font-medium focus:outline-none transition-all"
    :class="className"
    :disabled="disabled || loading"
    :type="type"
    @click="onClick"
  >
    <PersianCircleLoading
      v-if="loading"
      class="mx-2 !w-4 !h-4"
      :class="
        outline ? (variant === 'transparent' ? 'text-black' : `text-${variant}-500`) : 'text-white'
      "
    />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits([
  'input',
  'update:modelValue',
  'blurred',
  'keyup',
  'keydown',
  'keypress',
  'focused',
  'click'
])

const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  inputClass: { type: String, default: '' },
  inputProps: { type: Object, default: () => ({}) }
})

const inputProperties = computed(() => ({
  class: props.inputClass,
  value: props.modelValue,
  type: props.type,
  placeholder: props.placeholder,
  autocomplete: 'off',
  spellcheck: false,
  ...props.inputProps
}))

const refine = (event: Event) => {
  emit('input', event)
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const onBlur = () => {
  emit('blurred', {})
}

const onFocus = () => {
  emit('focused', {})
}
</script>

<template>
  <div>
    <input
      :model-value="modelValue"
      class="text-inherit px-2 w-full appearance-none focus:ring-0 placeholder-gray-400 transition-colors duration-100 ease-in-out leading-normal rounded disabled:opacity-40 border-black border-opacity-50 !bg-white text-[16px] min-h-[40px]"
      v-bind="inputProperties"
      @input="refine"
      @focus="onFocus"
      @blur="onBlur"
      @keyup="$emit('keyup', $event)"
      @keydown="$emit('keydown', $event)"
      @keypress="$emit('keypress', $event)"
      @click="$emit('click', $event)"
    />
  </div>
</template>

<template>
  <div class="w-64">
    <input type="checkbox" class="radio" :value="1" name="6465416" />
    <select
      v-model="selectedOption"
      class="w-full !py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer"
      @input="refine"
      @focus="onFocus"
      @blur="onBlur"
      @keyup="$emit('keyup', $event)"
      @keydown="$emit('keydown', $event)"
      @keypress="$emit('keypress', $event)"
      @click="$emit('click', $event)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        <input type="checkbox" :value="option.value" :name="option.name" /> {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'

interface Option {
  value: string
  label: string
}

const props = defineProps({
  modelValue: Boolean,
  options: {
    type: Object,
    required: true
  },
  id: String
})

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

const selectedOption = ref('')
</script>
<style scoped></style>

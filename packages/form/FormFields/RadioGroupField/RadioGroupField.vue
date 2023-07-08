<template>
  <div class="space-y-2">
    <div v-for="option in options" :key="option.value" class="flex items-center">
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
        v-model="selectedOption"
        class="focus:ring-blue-200 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label :for="option.value" class="ml-2 text-gray-700">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}
const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

const selectedOption = ref(options[0].value)
</script>

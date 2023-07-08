<template>
  <div class="relative">
    <input
      type="text"
      v-model="search"
      @input="update"
      @focus="$emit('focused', $event)"
      @blur="$emit('blurred', $event)"
      @keyup="$emit('keyup', $event)"
      @keydown="$emit('keydown', $event)"
      @keypress="$emit('keypress', $event)"
      @click="$emit('click', $event)"
      class="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
    <div v-if="open" class="absolute w-full mt-1 rounded border border-gray-300 bg-white z-10">
      <div
        v-for="result in results"
        :key="result"
        @click="select(result)"
        class="cursor-pointer hover:bg-blue-100 p-2"
      >
        {{ result }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { PropType } from 'vue'

interface Option {
  value: string
  label: string
}

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<Option>>,
    default: () => []
  },
  options: {
    type: Array as PropType<Array<Option>>,
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

const search = ref('')
const results = ref<string[]>(props.modelValue.map((o) => o.value))
const open = ref(false)

const update = (event: Event) => {
  results.value = props.options
    .filter((option) => option.value.toLowerCase().includes(search.value.toLowerCase()))
    .map((o) => o.value)

  emit('input', event)
  emit('update:modelValue', (event.target as HTMLInputElement).value)
  open.value = true
}

const select = (result: string) => {
  search.value = result
  open.value = false
}

watch(search, (newVal, oldVal) => {
  if (newVal === oldVal) {
    open.value = false
  }
})
</script>

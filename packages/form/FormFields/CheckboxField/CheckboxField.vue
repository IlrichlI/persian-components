<template>
  <input
    :id="id"
    type="checkbox"
    class="form-checkbox h-5 w-5 text-blue-600"
    :checked="checked"
    @change="updateValue"
  />
  <label :for="id">{{ label }}</label>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  label: String,
  id: String
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(props.modelValue)

watchEffect(() => {
  checked.value = props.modelValue
})

const updateValue = () => {
  emit('update:modelValue', checked.value)
}
</script>

<!-- todo think about it -->
<!-- <template>
    <div>
      <label :for="id" :class="{ 'bg-blue-600': checked }" class="flex items-center cursor-pointer">
        <div class="relative">
          <input :id="id" type="checkbox" class="sr-only" :checked="checked" @change="updateValue" />
          <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium">
          {{ label }}
        </div>
      </label>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    modelValue: Boolean,
    label: String,
    id: String
  })
  const emit = defineEmits(['update:modelValue'])
  const checked = ref(props.modelValue)
  
  watch(
    () => props.modelValue,
    (newVal) => {
      checked.value = newVal
    }
  )
  
  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).checked)
  }
  </script>
  
  <style scoped>
  label {
    transition: all 0.3s ease-in-out;
  }
  input:checked ~ .dot {
    transform: translateX(100%);
  }
  </style> -->

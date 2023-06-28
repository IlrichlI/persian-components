<template>
  <div>
    <button
      @click="toggle"
      class="w-12 h-6 rounded-full p-1"
      :style="isOn ? 'background: red;' : 'background: blue;'"
    >
      <span
        :class="`block w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`"
        :style="isOn ? 'transform: translate(6px , 0);' : 'transform: translate(-6px , 0);'"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  label: String,
  id: String
})
const emit = defineEmits(['update:modelValue'])
const isOn = ref(props.modelValue)

const toggle = () => {
  isOn.value = !isOn.value
  emit('update:modelValue', isOn.value)
}
</script>

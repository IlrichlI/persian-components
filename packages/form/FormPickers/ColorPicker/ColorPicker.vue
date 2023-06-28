<template>
  <div class="w-64">
    <input type="color" v-model="selectedColor" class="w-full h-10 cursor-pointer" />
    <div class="mt-2 text-center text-gray-700">Selected Color: {{ selectedColor }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedColor = ref('#000000')
</script>

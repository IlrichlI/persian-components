<template>
  <div class="flex space-x-2">
    <select
      v-model="selectedHour"
      class="w-20 py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      <option v-for="hour in hours" :key="hour" :value="hour">
        {{ hour }}
      </option>
    </select>
    <span>:</span>
    <select
      v-model="selectedMinute"
      class="w-20 py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      <option v-for="minute in minutes" :key="minute" :value="minute">
        {{ minute }}
      </option>
    </select>
    <div class="ml-2 text-gray-700">Selected Time: {{ selectedHour }}:{{ selectedMinute }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

const selectedHour = ref(hours[0])
const selectedMinute = ref(minutes[0])
</script>

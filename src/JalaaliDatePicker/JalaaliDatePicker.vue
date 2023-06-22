<template>
  <div class="jalali-date-picker">
   <div class="flex flex-col items-center">
    <div class="flex items-center mb-4">
        <button @click="previousYear" class="bg-blue-500 border-none text-white px-3 py-1">PY</button>
        <button @click="previousMonth" class="bg-blue-500 border-none text-white px-3 py-1">PM</button>
        <div class="mx-4">{{ monthName }}</div>
        <button @click="nextMonth" class="bg-blue-500 border-none text-white px-3 py-1">NM</button>
        <button @click="nextYear" class="bg-blue-500 border-none text-white px-3 py-1">NY</button>
      </div>
      <div class="grid grid-cols-7 gap-2">
        <template v-for="(day, i) in Array.from({ length: daysInMonth }, (_, i) => i + 1)" :key="i">
          <button
            class="bg-blue-500 border-none text-white w-8 h-8 rounded-full"
            @click="selectDate(day)"
            :class="{ 'text-blue-500 bg-white': getActiveDay(day) }"
            >
              {{ day }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// @ts-ignore
import { format, addMonths, subMonths, addYears, subYears, getDaysInMonth } from 'date-fns-jalali';
const selectedDate = ref(new Date());
const currentMonth = ref(new Date());
const daysInMonth = computed(() => getDaysInMonth(currentMonth.value));
const monthName = computed(() => format(currentMonth.value, 'MMMM yyyy'));

function previousMonth() {
  currentMonth.value = subMonths(currentMonth.value, 1);
}

function nextMonth() {
  currentMonth.value = addMonths(currentMonth.value, 1);
}

function previousYear() {
  currentMonth.value = subYears(currentMonth.value, 1);
}

function nextYear() {
  currentMonth.value = addYears(currentMonth.value, 1);
}

function selectDate(day: number) {
  selectedDate.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day);
}

function getActiveDay(day: number) {
  return selectedDate.value.getDate() === day && selectedDate.value.getFullYear() === currentMonth.value.getFullYear() && selectedDate.value.getMonth() === currentMonth.value.getMonth()
}


</script>

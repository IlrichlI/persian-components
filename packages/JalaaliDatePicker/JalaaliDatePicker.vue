<script setup lang="ts">
import { useJalali } from './'
import NextMonthArrow from './components/NextMonthArrow.vue'
import NextYearArrow from './components/NextYearArrow.vue'
import PreviousMonthArrow from './components/PreviousMonthArrow.vue'
import PreviousYearArrow from './components/PreviousYearArrow.vue'

const emit = defineEmits(['selectDate'])

const {
  daysInMonth,
  monthName,
  previousMonth,
  nextMonth,
  previousYear,
  nextYear,
  selectDate,
  getActiveDay,
  getEmptyDivesOfTheWeek,
  weekDays
} = useJalali()

const selectingDate = (day: number) => {
  emit('onSelectDate', day)
  selectDate(day)
}
</script>

<template>
  <div class="jalali-date-picker">
    <div class="flex flex-col items-center">
      <div class="flex items-center justify-between mb-4">
        <div>
          <PreviousYearArrow
            @click="nextYear"
            class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
          />
          <PreviousMonthArrow
            @click="nextMonth"
            class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
          />
        </div>
        <div class="w-[140px] text-center">{{ monthName }}</div>
        <div>
          <NextMonthArrow
            class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
            @click="previousMonth"
          />
          <NextYearArrow
            class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
            @click="previousYear"
          />
        </div>
      </div>
      <div class="grid grid-cols-7 gap-2" style="direction: rtl">
        <div class="w-8 h-8 text-center" v-for="(w, i) in weekDays" :key="i">
          {{ w }}
        </div>
        <div v-for="(m, i) in new Array(getEmptyDivesOfTheWeek)" :key="i" />
        <template v-for="(day, i) in Array.from({ length: daysInMonth }, (_, i) => i + 1)" :key="i">
          <button
            class="day-btn bg-blue-500 border-none text-white w-8 h-8 rounded-full transition-all hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
            @click="selectingDate(day)"
            :class="{ '!text-blue-500 bg-white': getActiveDay(day) }"
          >
            {{ day }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

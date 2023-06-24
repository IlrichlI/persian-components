<script setup lang="ts">
import { useJalali } from './useJalali'
import NextMonthArrow from './components/NextMonthArrow.vue'
import NextYearArrow from './components/NextYearArrow.vue'
import PreviousMonthArrow from './components/PreviousMonthArrow.vue'
import PreviousYearArrow from './components/PreviousYearArrow.vue'

const props = defineProps({
  min: {
    type: Date
  },
  max: {
    type: Date
  }
})

const emit = defineEmits(['on-select'])

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
  weekDays,
  selectedDate,
  isLessThanMinDate,
  isMoreThanMaxDate
} = useJalali()

const selectingDate = (day: number) => {
  selectDate(day)
  emit('on-select', JSON.parse(JSON.stringify(selectedDate)))
}

const getDateClasses = (day: number) => {
  if (
    (props.min && isLessThanMinDate(day, props.min)) ||
    (props.max && isMoreThanMaxDate(day, props.max))
  ) {
    return '!text-gray-600 !bg-gray-400 pointer-events-none'
  }

  if (getActiveDay(day)) return '!text-blue-500 bg-white'
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
        <div v-for="(_, i) in new Array(getEmptyDivesOfTheWeek)" :key="i" />
        <template v-for="(day, i) in Array.from({ length: daysInMonth }, (_, i) => i + 1)" :key="i">
          <button
            class="day-btn bg-blue-500 border-none text-white w-8 h-8 rounded-full transition-all hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
            @click="selectingDate(day)"
            :class="getDateClasses(day)"
          >
            {{ day }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

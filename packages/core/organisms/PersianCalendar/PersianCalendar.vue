<script setup lang="ts">
import { useJalali, PersianButton, PersianTooltip, PersianTypography, type TSteps } from '../../'
import NextMonthArrow from './components/NextMonthArrow.vue'
import NextYearArrow from './components/NextYearArrow.vue'
import PreviousMonthArrow from './components/PreviousMonthArrow.vue'
import PreviousYearArrow from './components/PreviousYearArrow.vue'
import ReturnArrow from './components/ReturnArrow.vue'
import { ref, type PropType, computed } from 'vue'

const props = defineProps({
  min: {
    type: Date
  },
  max: {
    type: Date
  },
  mode: {
    type: String as PropType<'default' | 'YMD' | 'YM' | 'Y'>,
    default: () => 'YMD'
  },
  yearPeriod: {
    type: Array as PropType<number[]>,
    default: () => [1320, 1402]
  }
})
const emit = defineEmits(['on-select'])
const steps = ref<TSteps>({ year: true, month: false, day: false })
const {
  daysInMonth,
  monthName,
  currentMonthAndYear,
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
  isMoreThanMaxDate,
  yearMonths,
  setCustomYear,
  setCustomMonth
} = useJalali()

const currentYear = ref<number>(1402)
const selectingDate = (day: number) => {
  selectDate(day)
  emit('on-select', JSON.parse(JSON.stringify(selectedDate)))
}
let itemsPerPage = 12
let currentPage = ref(0)
const yearPeriodRange = computed(() => {
  const rangeArray = []
  for (let i = props.yearPeriod[0]; i <= props.yearPeriod[props.yearPeriod.length - 1]; i++) {
    rangeArray.push(i)
  }
  return rangeArray
})
let maxPage = computed(() => Math.ceil(yearPeriodRange.value.length / itemsPerPage) - 1)

let yearsList = computed(() => {
  let start = currentPage.value * itemsPerPage
  let end = start + itemsPerPage
  return yearPeriodRange.value.slice(start, end)
})

const nextPage = () => {
  if (currentPage.value < maxPage.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
const toYearStep = () => {
  steps.value = { year: true, month: false, day: false }
}
const toMonthStep = (year: number) => {
  setCustomYear(year)
  currentYear.value = year
  if (props.mode !== 'Y') {
    steps.value = { year: false, month: true, day: false }
  } else {
    setCustomMonth(1, currentYear.value, props.mode)
    selectingDate(1)
    steps.value = { year: true, month: false, day: false }
  }
}
const toDayStep = (month: string) => {
  setCustomMonth(
    yearMonths.findIndex((m: any) => m.word === month),
    currentYear.value,
    props.mode
  )
  if (props.mode !== 'YM') {
    steps.value = { year: false, month: false, day: true }
  } else {
    steps.value = { year: false, month: true, day: false }
    selectingDate(1)
  }
}
const monthStepShortCut = () => {
  steps.value = { year: false, month: true, day: false }
}
</script>
<template>
  <div class="jalali-date-picker" :style="{ minHeight: '200px' }">
    <div v-if="mode === 'default'" class="flex flex-col items-center mb-4">
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
          <PersianTooltip tooltipActionClass="w-[60px] flex justify-center">
            <template #tooltip-action>
              <PersianTypography :text="w.word" />
            </template>
            <template #content>
              <PersianTypography :text="w.short" />
            </template>
          </PersianTooltip>
        </div>
        <div v-for="(_, i) in new Array(getEmptyDivesOfTheWeek)" :key="i" />
        <template v-for="(day, i) in Array.from({ length: daysInMonth }, (_, i) => i + 1)" :key="i">
          <PersianButton
            class="day-btn bg-blue-500 border-none text-white w-8 h-8"
            @click="selectingDate(day)"
            :disabled="
              (props.min && isLessThanMinDate(day, props.min)) ||
              (props.max && isMoreThanMaxDate(day, props.max))
            "
            :active="getActiveDay(day)"
          >
            {{ day }}
          </PersianButton>
        </template>
      </div>
    </div>
    <div v-else class="flex flex-col items-center mb-4 px-4">
      <div class="flex items-center justify-between mb-4 w-[100%] mt-3">
        <div>
          <div v-if="steps.year">
            <slot name="previous-year-page-icon" :previous-page="prevPage">
              <PreviousYearArrow
                @click="prevPage"
                :disabled="currentPage === 0"
                class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
              />
            </slot>
          </div>
          <div v-if="steps.month">
            <slot name="return-icon" :month-step="toYearStep">
              <ReturnArrow
                class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                @click="toYearStep"
              />
            </slot>
          </div>
          <div v-if="steps.day">
            <div class="flex justify-center items-center">
              <slot name="previous-year-icon" :previous-year="previousYear">
                <PreviousYearArrow
                  @click="previousYear"
                  :next-year="previousYear"
                  class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                />
              </slot>
              <slot name="previous-month-icon" :previous-month="previousMonth">
                <PreviousMonthArrow
                  @click="previousMonth"
                  :next-month="previousMonth"
                  class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                />
              </slot>
            </div>
          </div>
        </div>
        <div class="w-max mx-3 text-center" :style="{ color: 'black !important' }">
          <div v-if="steps.year">
            <PersianTypography
              :text="`${yearPeriodRange[yearPeriodRange.length - 1]} - ${yearPeriodRange[0]}`"
            />
          </div>
          <div v-else-if="steps.month" class="cursor-pointer">
            <PersianTypography :text="String(currentYear)" />
          </div>
          <div v-if="steps.day" class="flex justify-center">
            <a class="mx-1 cursor-pointer" :style="{ color: 'black' }" @click="monthStepShortCut">
              <PersianTypography :text="currentMonthAndYear.month" />
            </a>
            <a class="mx-1 cursor-pointer" :style="{ color: 'black' }" @click="toYearStep">
              <PersianTypography :text="currentMonthAndYear.year" />
            </a>
          </div>
        </div>
        <div :style="{ minWidth: '10px' }">
          <div v-if="steps.year">
            <slot name="next-year-page-icon" :next-page="nextPage">
              <NextYearArrow
                class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                @click="nextPage"
                :disabled="currentPage >= maxPage"
              />
            </slot>
          </div>
          <div v-if="steps.day">
            <div class="flex justify-center items-center">
              <slot name="next-month-icon" :next-month="nextMonth">
                <NextMonthArrow
                  @click="nextMonth"
                  :next-month="nextMonth"
                  class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                />
              </slot>
              <slot name="next-year-icon" :next-year="nextYear">
                <NextYearArrow
                  @click="nextYear"
                  :next-year="nextYear"
                  class="bg-blue-500 border-none rounded-full !w-[12px] !h-[12px] text-white p-2 fill-white mx-1 hover:bg-blue-200 hover:text-blue-600 cursor-pointer transition-all"
                />
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-if="steps.year"
          class="grid grid-cols-3 gap-x-[30px] gap-y-[10px]"
          :style="{ direction: 'ltr' }"
        >
          <PersianButton
            v-for="year in yearsList"
            :key="year"
            variant="transparent"
            @Click="() => toMonthStep(year)"
            class="day-btn !bg-transparent border-none text-white w-3 h-8 flex justify-center items-center"
            :style="{ color: '#3D505C !important', padding: '9px 12px' }"
          >
            {{ year }}
          </PersianButton>
        </div>
        <div
          v-else-if="steps.month && mode !== 'Y'"
          class="grid grid-cols-3 gap-x-[30px] gap-y-[10px]"
          :style="{ direction: 'ltr' }"
        >
          <PersianButton
            v-for="month in yearMonths"
            :key="month.word"
            variant="transparent"
            @Click="() => toDayStep(month.word)"
            class="day-btn !bg-transparent border-none text-white w-3 h-8 flex justify-center items-center"
            :style="{ color: '#3D505C !important', padding: '9px 12px' }"
          >
            {{ month.word }}
          </PersianButton>
        </div>
        <div
          v-else-if="steps.day && mode !== 'YM' && mode !== 'Y'"
          class="grid grid-cols-7 gap-2 ltr"
          :style="{ direction: 'ltr' }"
        >
          <div class="w-8 h-8 text-center" v-for="(w, i) in weekDays" :key="i">
            <div
              :style="{
                color: 'black',
                background: '#F5F5F5',
                width: '119%'
              }"
            >
              <PersianTypography :text="w.short" />
            </div>
          </div>
          <div v-for="(_, i) in new Array(getEmptyDivesOfTheWeek)" :key="i" />
          <template
            v-for="(day, i) in Array.from({ length: daysInMonth }, (_, i) => i + 1)"
            :key="i"
          >
            <PersianButton
              class="day-btn !bg-transparent border-none text-white w-3 h-8 flex justify-center items-center"
              :style="{ color: '#3D505C !important' }"
              @click="selectingDate(day)"
              :active="day == 2"
              variant="transparent"
            >
              {{ day }}
            </PersianButton>
          </template>
        </div>
      </div>
    </div>
    <slot name="calendar-footer" />
  </div>
</template>

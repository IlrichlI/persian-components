import { reactive, ref, computed } from 'vue'
import { format, addMonths, subMonths, addYears, subYears, getDaysInMonth } from 'date-fns-jalali'

export const useJalali = () => {
  const currentMonth = ref(new Date())
  const selectedDate = reactive({
    gregorian: new Date(),
    jalali: {
      jDay: 0,
      jMonth: 0,
      jYear: 0
    }
  })

  const daysInMonth = computed(() => getDaysInMonth(currentMonth.value))
  const monthName = computed(() => format(currentMonth.value, 'MMMM yyyy'))

  const previousMonth = () => {
    currentMonth.value = subMonths(currentMonth.value, 1)
  }

  const nextMonth = () => {
    currentMonth.value = addMonths(currentMonth.value, 1)
  }

  const previousYear = () => {
    currentMonth.value = subYears(currentMonth.value, 1)
  }

  const nextYear = () => {
    currentMonth.value = addYears(currentMonth.value, 1)
  }

  const getJalaliDate = (day?: number) => {
    const [jDay, jMonth, jYear] = format(currentMonth.value, 'dd.MM.yyyy').split('.')
    return {
      jDay: day || Number(jDay),
      jMonth: Number(jMonth),
      jYear: Number(jYear)
    }
  }

  const selectDate = (day: number) => {
    selectedDate.jalali = getJalaliDate(day)
    selectedDate.gregorian = new Date(
      currentMonth.value.getFullYear(),
      currentMonth.value.getMonth(),
      day
    )
  }

  const getActiveDay = (day: number) => {
    const jalaliDate = getJalaliDate()
    return (
      selectedDate.jalali.jDay === day &&
      selectedDate.jalali.jMonth === jalaliDate.jMonth &&
      selectedDate.jalali.jYear === jalaliDate.jYear
    )
  }

  const getDayOfWeek = (currentMonth: Date) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ] as const
    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const dayOfWeek = currentDate.getDay()
    return days[dayOfWeek]
  }
  function getEmptyNumberOfTheWeek(currentMonth: Date) {
    const dayInWeek = getDayOfWeek(currentMonth)

    switch (dayInWeek) {
      case 'Saturday':
        return 0
      case 'Sunday':
        return 1
      case 'Monday':
        return 2
      case 'Tuesday':
        return 3
      case 'Wednesday':
        return 4
      case 'Thursday':
        return 5
      case 'Friday':
        return 6
    }
  }
  const getEmptyDivesOfTheWeek = computed(() => getEmptyNumberOfTheWeek(currentMonth.value))

  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']

  // default selected is today
  selectDate(Number(format(currentMonth.value, 'dd')))

  return {
    selectedDate,
    currentMonth,
    daysInMonth,
    monthName,
    previousMonth,
    nextMonth,
    previousYear,
    nextYear,
    selectDate,
    getActiveDay,
    getEmptyDivesOfTheWeek,
    getDayOfWeek,
    weekDays
  }
}

export default useJalali
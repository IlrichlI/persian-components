import { reactive, ref, computed } from 'vue'
import { format, addMonths, subMonths, addYears, subYears, getDaysInMonth } from 'date-fns-jalali'
import { gregorianToJalali, jalaliToGregorian } from './jalali'
import { useWords } from '../../'

export const useJalali = () => {
  const { cutHalfSpace } = useWords()

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
  const currentMonthAndYear = computed(() => ({
    year: format(currentMonth.value, 'MMMM yyyy').slice(-4),
    month: format(currentMonth.value, 'MMMM yyyy').split(' ')[0]
  }))

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
    const [year, month, date] = jalaliToGregorian(
      selectedDate.jalali.jYear,
      selectedDate.jalali.jMonth,
      selectedDate.jalali.jDay
    )
    selectedDate.gregorian = new Date(year, month - 1, date + 1, 0, 0, 0)
  }

  const getActiveDay = (day: number) => {
    const jalaliDate = getJalaliDate()
    return (
      selectedDate.jalali.jDay === day &&
      selectedDate.jalali.jMonth === jalaliDate.jMonth &&
      selectedDate.jalali.jYear === jalaliDate.jYear
    )
  }
  const getActiveMonth = (month: number) => {
    return (
      selectedDate.jalali.jMonth === month
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
    const [jYear, jMonth] = gregorianToJalali(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      currentMonth.getDate()
    )
    const [gYear, gMonth, gDate] = jalaliToGregorian(jYear, jMonth, 1)
    const currentDate = new Date(gYear, gMonth - 1, gDate)
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

  const weekDays = [
    { short: 'ش', word: 'شنبه ها' },
    { short: 'ی', word: 'یکشنبه ها' },
    { short: 'د', word: 'دوشنبه ها' },
    { short: 'س', word: cutHalfSpace('سه شنبه ها') },
    { short: 'چ', word: 'چهارشنبه ها' },
    { short: 'پ', word: 'پنجشنبه ها' },
    { short: 'ج', word: 'جمعه ها' }
  ]

  const yearMonths = [
    { word: 'فروردین' },
    { word: 'اردیبهشت' },
    { word: 'خرداد' },
    { word: 'تیر' },
    { word: 'مرداد' },
    { word: 'شهریور' },
    { word: 'مهر' },
    { word: 'آبان' },
    { word: 'آذر' },
    { word: 'دی' },
    { word: 'بهمن' },
    { word: 'اسفند' }
  ]

  // default selected is today
  selectDate(Number(format(currentMonth.value, 'dd')))

  const isLessThanMinDate = (day: number, min: Date) => {
    const jalali = getJalaliDate(day)
    const [year, month, date] = jalaliToGregorian(jalali.jYear, jalali.jMonth, jalali.jDay)
    return min > new Date(year, month - 1, date + 1)
  }
  const isMoreThanMaxDate = (day: number, max: Date) => {
    const jalali = getJalaliDate(day)
    const [year, month, date] = jalaliToGregorian(jalali.jYear, jalali.jMonth, jalali.jDay)
    return max < new Date(year, month - 1, date + 1)
  }
  const setCustomYear = (year: number) => {
    const [jYear, jMonth, jDate] = jalaliToGregorian(
      year,
      selectedDate.jalali.jMonth,
      selectedDate.jalali.jDay
    )
    currentMonth.value = new Date(jYear, jMonth - 1, jDate)
  }
  const setCustomMonth = (month: number, year: number, mode: 'default' | 'YMD' | 'YM' | 'Y') => {
    if (mode === 'default' || mode === 'YMD') {
      const [jYear, jMonth, jDate] = jalaliToGregorian(year, month, selectedDate.jalali.jDay)
      currentMonth.value = new Date(jYear, jMonth -1, jDate)
    } else if (mode === 'YM') {
      const [jYear, jMonth, jDate] = jalaliToGregorian(year, month, 1)
      currentMonth.value = new Date(jYear, jMonth -1, jDate)
    } else {
      const [jYear, jMonth, jDate] = jalaliToGregorian(year, 1, 1)
      currentMonth.value = new Date(jYear, jMonth -1, jDate)
    }
  }
  return {
    currentMonthAndYear,
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
    weekDays,
    isLessThanMinDate,
    isMoreThanMaxDate,
    getJalaliDate,
    yearMonths,
    setCustomYear,
    setCustomMonth,
    getActiveMonth
  }
}

export default useJalali

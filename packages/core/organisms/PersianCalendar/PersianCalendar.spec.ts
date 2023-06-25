import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { PersianCalendar, useJalali } from '../../'
import { jalaliToGregorian } from './jalali'

describe('PersianCalendar', () => {
  it('renders properly', async () => {
    const wrapper = mount(PersianCalendar)
    await wrapper.find('button.day-btn').trigger('click')
    const emitted = wrapper.emitted()
    expect(emitted['on-select'].length).toBe(1)

    expect((wrapper.emitted()['on-select'] as any)[0][0].jalali.jDay).toEqual(1)

    expect(wrapper.findComponent(PersianCalendar).isVisible()).toBe(true)
  })

  it('next month', () => {
    const { currentMonth, nextMonth } = useJalali()
    const date = new Date(
      currentMonth.value.getFullYear(),
      currentMonth.value.getMonth() + 1,
      currentMonth.value.getDate()
    )
    nextMonth()
    expect(currentMonth.value.getMonth() === date.getMonth()).toBe(true)
  })

  it('previous month', () => {
    const { currentMonth, previousMonth } = useJalali()
    const date = new Date(
      currentMonth.value.getFullYear(),
      currentMonth.value.getMonth() - 1,
      currentMonth.value.getDate()
    )
    previousMonth()
    expect(currentMonth.value.getMonth() === date.getMonth()).toBe(true)
  })

  it('next Year', () => {
    const { currentMonth, nextYear } = useJalali()
    const date = new Date(
      currentMonth.value.getFullYear() + 1,
      currentMonth.value.getMonth(),
      currentMonth.value.getDate()
    )
    nextYear()
    expect(currentMonth.value.getFullYear() === date.getFullYear()).toBe(true)
  })

  it('previous Year', () => {
    const { currentMonth, previousYear } = useJalali()
    const date = new Date(
      currentMonth.value.getFullYear() - 1,
      currentMonth.value.getMonth(),
      currentMonth.value.getDate()
    )
    previousYear()
    expect(currentMonth.value.getFullYear() === date.getFullYear()).toBe(true)
  })

  it('select date', () => {
    const { selectedDate, selectDate, getActiveDay, getJalaliDate } = useJalali()
    selectDate(17)
    const jalali = getJalaliDate(17)
    const [year, month, d] = jalaliToGregorian(jalali.jYear, jalali.jMonth, jalali.jDay)
    const gregorian = new Date(year, month - 1, d + 1)
    expect(selectedDate.gregorian.getDate() === gregorian.getDate()).toBe(true)
    expect(selectedDate.jalali.jDay === 17).toBe(true)
    expect(getActiveDay(17)).toBe(true)
    expect(getActiveDay(18)).toBe(false)
  })
})

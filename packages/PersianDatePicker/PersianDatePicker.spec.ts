import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { PersianDatePicker } from './index'

describe('PersianDatePicker', () => {
  it('renders properly', async () => {
    const wrapper = mount(PersianDatePicker)
    expect(wrapper.findComponent(PersianDatePicker).isVisible()).toBe(true)
  })
})

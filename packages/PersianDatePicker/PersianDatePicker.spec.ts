import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { PersianDatePicker } from './index'
import { PersianComponents } from '../PersianComponents'

describe('PersianDatePicker', () => {
  it('renders properly', async () => {
    const wrapper = mount(PersianDatePicker, {
      global: {
        plugins: [PersianComponents]
      }
    })

    expect(wrapper.findComponent(PersianDatePicker).isVisible()).toBe(true)
  })
})

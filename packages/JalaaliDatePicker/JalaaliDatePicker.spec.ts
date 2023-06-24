import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { JalaaliDatePicker } from './index'

describe('JalaaliDatePicker', () => {
  it('renders properly', async () => {
    const wrapper = mount(JalaaliDatePicker)
    expect(wrapper.findComponent(JalaaliDatePicker).isVisible()).toBe(true)
  })
})

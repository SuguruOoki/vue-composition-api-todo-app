import { mount } from '@vue/test-utils'
import AppButton from '~/components/atoms/AppButton/AppButton.vue'

describe('AppButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppButton)
    expect(wrapper.vm).toBeTruthy()
  })
})

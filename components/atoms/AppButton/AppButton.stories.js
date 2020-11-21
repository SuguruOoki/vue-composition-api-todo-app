import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import AppButton from '@/components/atoms/AppButton/AppButton.vue';

export default {
  title: 'AppButton',
  decorators: [ withKnobs ]
}

export const NotDisablePlainButton = () => ({
  components: { AppButton },
  props: {
    isDisabled: {
      // default: 与えるデータの型('ラベル', 初期値)
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'Hello Storybook')
    },
    color: {
        default: text('color', undefined)
      }
  },
  template: `<AppButton :isDisabled="isDisabled" :color="color">{{ text }}</AppButton>`
})

export const NotDisablePrimaryButton = () => ({
    components: { AppButton },
    props: {
      isDisabled: {
        // default: 与えるデータの型('ラベル', 初期値)
        default: boolean('Disabled', false)
      },
      text: {
        default: text('Text', 'Primary AppButton')
      },
      color: {
        default: text('color', 'primary')
      }
    },
    template: `<AppButton :isDisabled="isDisabled" :color="color">{{ text }}</AppButton>`
  })
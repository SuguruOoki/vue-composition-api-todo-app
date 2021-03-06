import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import AppButton from '~/components/atoms/AppButton/AppButton.vue';


storiesOf('HelloWorld', module)
  .add('simple', () => ({
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
          default: text('color', '')
        }
    },
    template: `<AppButton :isDisabled="isDisabled" :color="color">{{ text }}</AppButton>`
  }));

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
        default: text('color', '')
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
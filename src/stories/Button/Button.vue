<template>
    <button
      type="button" 
      class="cta-button"
      v-bind="$attrs"
      v-on="$listeners"
      :class="classList"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from '@vue/composition-api';
// import * as tailwind from '@/../tailwind.config.js'
// console.log('tailwind', tailwind);

const buttonClassList: string[] = [
  'text-white',
  'rounded-3xl',
  'border-0',
  'bg-brandPrimary',
  'py-2',
  'px-4',
];

interface Props {
  label?: string;
  type?: string;
  disabled?: boolean;
  size?: string;
}

const ButtonPrimary = 'primary';
const ButtonSecondary = 'secondary';
const ButtonOutline = 'outline';
type ButtonType = typeof ButtonPrimary | typeof ButtonSecondary | typeof ButtonOutline;

const ButtonSmall = 'small';
const ButtonMedium = 'medium';
const ButtonLarge = 'large';
type ButtonSize = typeof ButtonSmall | typeof ButtonMedium | typeof ButtonLarge;

export default defineComponent({
  name: 'PButton',

  props: {
    label: {
      type: String,
      default: 'This is the default photon button'
    },
    type: {
      type: String as PropType<ButtonType>,
      default: ButtonPrimary,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonPrimary,
      validator(value: string): boolean {
        return [ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  setup(_: Props, { emit }: any): {
    classList: any;
    onClick: any;
  } {
    const props:Props = reactive(_);
    
    const classList:any = computed(() => {
      return [...buttonClassList];
    });

    const onClick:any = function():void {
      emit('click');
    };

    return {
      onClick,
      classList,
    };
  },
});
</script>

<style lang="scss" scoped>
.cta-button {
  // position: relative;
}

</style>
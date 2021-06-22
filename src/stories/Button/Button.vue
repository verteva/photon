<template>
  <button
    v-bind="$attrs"
    :type="type"
    v-on="$listeners" 
    class="cta-button"
    :class="classList"
    ref="cta-button"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from '@vue/composition-api';
import {
  buttonStyleClasslist,
  Props,
  ButtonStylePrimary,
  // ButtonStyleSecondary,
  // ButtonStyleOutline,
  ButtonType,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  ButtonSize,
  TypeSubmit,
  // TypeButton,
  HTMLType,
} from './types';
// import * as tailwind from '@/../tailwind.config.js'

const baseClassList: string[] = [
  'text-white',
  'rounded-3xl',
  'border-0',
  'py-2',
  'px-4',
];

const buttonStyleClasslist: buttonStyleClasslist = {
  primary: ['bg-brandPrimary'],
  secondary: ['bg-brandSecondary'],
  outline: ['bg-transparent'],
}

export default defineComponent({
  name: 'PButton',

  props: {
    label: {
      type: String,
      default: 'This is the default photon button'
    },
    buttonStyle: {
      type: String as PropType<ButtonType>,
      default: ButtonStylePrimary,
    },
    type: {
      type: String as PropType<HTMLType>,
      default: TypeSubmit,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonMedium,
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
      return [
        ...baseClassList,
        props.disabled && 'bg-gradient-to-b from-grey-dark to-grey-mid',
        ...buttonStyleClasslist[props.buttonStyle as keyof buttonStyleClasslist]
      ];
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
<template>
    <button
      v-bind="$attrs"
      v-on="$listeners"
      :type="type" 
      class="cta-button"
      :class="classList"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from '@vue/composition-api';
// import * as tailwind from '@/../tailwind.config.js'
// console.log('tailwind', tailwind);

const baseClassList: string[] = [
  'text-white',
  'rounded-3xl',
  'border-0',
  'py-2',
  'px-4',
];

type buttonStyleClasslist = {
  primary: string[];
  secondary: string[];
  outline: string[];
}

const buttonStyleClasslist: buttonStyleClasslist = {
  primary: ['bg-brandPrimary'],
  secondary: ['bg-brandSecondary'],
  outline: ['bg-transparent'],
}

interface Props {
  label?: string;
  type?: string;
  disabled?: boolean;
  size?: string;
  buttonStyle: string;
}

const ButtonStylePrimary = 'primary';
const ButtonStyleSecondary = 'secondary';
const ButtonStyleOutline = 'outline';
type ButtonType = typeof ButtonStylePrimary | typeof ButtonStyleSecondary | typeof ButtonStyleOutline;

const ButtonSmall = 'small';
const ButtonMedium = 'medium';
const ButtonLarge = 'large';
type ButtonSize = typeof ButtonSmall | typeof ButtonMedium | typeof ButtonLarge;

const TypeSubmit = 'submit'
const TypeButton = 'button'
type HTMLType = typeof TypeSubmit | typeof TypeButton;

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
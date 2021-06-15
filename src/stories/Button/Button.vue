<template>
    <button
      type="button" 
      class="rounded border-0"
      v-bind="$attrs"
      v-on="$listeners"
      :style="{
        ...style,
      }"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from '@vue/composition-api';

// import * as tailwind from '@/../tailwind.config.js'
console.log('defineComponent', defineComponent);


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

  methods: {
    onClick() {
      this.$emit('click')
    }
  },

  // emits: ['click'],

  setup(_: Props): {
    style: any;
    onClick: any;
  } {
    const props:Props = reactive(_);
    
    // let backgroundColor = theme.colors.brandPrimary;
    // if (props.type === ButtonSecondary) {
    //   backgroundColor = theme.colors.brandSecondary;
    // }
    
    // if (props.type === ButtonOutline) {
    //   backgroundColor = 'none';
    // }    

    const style:any = computed(() => ({
      backgroundColor: 'tomato',
    }));

    const onClick:any = function():void {
      // emit('click');
    };

    return {
      onClick,
      style,
    };
  },
});
</script>

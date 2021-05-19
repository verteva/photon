<template>
    <button
      type="button" 
      class="rounded border-0"
      @click="onClick"
      :style="{
        ...style,
      }"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, PropType } from 'vue';
import { theme } from '../../../tailwind.config.js'

interface Props {
  label: string;
  type: string;
  size: string;
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
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<ButtonType>,
      default: ButtonPrimary,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonPrimary,
      validator(value: string): boolean {
        return [ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(_: Props, { emit }): {
    style: any;
    onClick: any;
  } {
    const props:Props = reactive(_);
    
    let backgroundColor = theme.colors.brandPrimary;
    if (props.type === ButtonSecondary) {
      backgroundColor = theme.colors.brandSecondary;
    }
    
    if (props.type === ButtonOutline) {
      backgroundColor = 'none';
    }    

    const style:any = computed(() => ({
      backgroundColor,
    }));

    const onClick:any = function():void {
      emit('click');
    };

    return {
      onClick,
      style,
    };
  },
});
</script>

<style lang="scss">
  .photon-btn {
    background: none;
    border: 0;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    transition: .3s;

    &--primary {
      // background: #333333;
      
       &:hover {
        &:not(:disabled) {
          background: lighten(#333333, 20%);
        }
       }
    }
    &--secondary {
      // background: #999999;
      
      &:hover {
        &:not(:disabled) {
          // background: lighten(#999999, 20%);
        }
      }
    }

    &--small {
      font-size: 12px;
      padding: 0.5rem 1rem;
    }
    &--medium {
      font-size: 16px;
      padding: 0.75rem 1.5rem;
    }
    &--large {
      font-size: 20px;
      padding: 1rem 2rem;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }

</style>
<template>
    <button
      type="button" 
      class="photon-btn"
      :class="classes"
      @click="onClick"
      :style="{
        ...style,
      }"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { theme } from '@/../tailwind.config.js';

interface Props {
  label: string;
  primary: boolean;
  size: string;
  backgroundColor: string;
}

export default defineComponent({
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator(value: string): boolean {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(_: Props, { emit }: {
    emit: (a: string) => void;
  }): {
    // classes: any;
    style: any;
    // onClick: any;
  } {
    const props = reactive(_);

    console.log(props);
    

    const style:any = computed(() => ({
      backgroundColor: props.primary ? theme.colors.brandPrimary : '',
    }));

    // const onClick:any = function():void {
    //   emit('click');
    // };

    return {
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
      background: #333333;
      
       &:hover {
        &:not(:disabled) {
          background: lighten(#333333, 20%);
        }
       }
    }
    &--secondary {
      background: #999999;
      
      &:hover {
        &:not(:disabled) {
          background: lighten(#999999, 20%);
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
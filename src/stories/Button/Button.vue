<template>
    <button
      type="button" 
      class="m-4 photon-btn"
      :class="classes"
      @click="onClick"
      :style="style"
    >
     {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

interface Props {
  label: string;
  primary: boolean;
  size: string;
  backgroundColor: string;
}

export default defineComponent({
  name: 'PButton',

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
  }): () => {
    classes: any;
    style: any;
    onClick: any;
  } {
    const props = reactive(_);
    return {
      classes: computed(() => ({
        'photon-btn': true,
        'photon-btn--primary': props.primary,
        'photon-btn--secondary': !props.primary,
        [`photon-btn--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick(): void {
        emit('click');
      },
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
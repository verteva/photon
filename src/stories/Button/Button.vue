<template>
  <button
    type="button" 
    class="m-4"
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
  name: 'button',

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
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(_: Props, { emit }: {
    emit: (a: string) => void;
  }): () => {
    classes: unknown;
    style: unknown;
    onClick: unknown;
  } {
    const props = reactive(_);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
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

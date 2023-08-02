<template>
  <div
    ref="card"
    class="card"
    :class="[
      size,
      hasSize && 'has-size',
      {
        light,
        shadow,
        border,
        rounded,
        'no-padding': noPadding,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { CardSizes, CardSize } from './types';

export const props = {
  size: {
    type: String as PropType<CardSize>,
    default: CardSizes.MD,
    validator(value: string): boolean {
      return Object.values(CardSizes).indexOf(value as CardSize) !== -1;
    },
  },

  light: {
    type: Boolean,
    default: true,
  },

  shadow: {
    type: Boolean,
    default: false,
  },

  border: {
    type: Boolean,
    default: false,
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  noPadding: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: 'P2Card',
  props,

  computed: {
    hasSize(): boolean {
      const validSizes = ['xs', 'sm', 'md'];
      return validSizes.includes(this.size);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;

  &.has-size {
    background: var(--sd-card-light-background-color);
    padding: var(--sd-card-default-padding);

    &.light {
      background: var(--sd-card-light-background-color);
    }

    &.shadow {
      box-shadow: var(--sd-card-default-box-shadow);
    }

    &.border {
      border: 1px solid var(--sd-card-light-border-color);
    }

    &.rounded {
      border-radius: var(--sd-card-default-border-radius);
    }
  }

  $buttonSizes: 'xs' 'sm' 'md';
  @each $size in $buttonSizes {
    &.#{$size} {
      padding: var(--sd-card-#{$size}-padding);
    }
  }

  &.none,
  &.no-padding {
    padding: 0;
  }
}
</style>

<template>
  <button
    ref="elRef"
    class="button"
    v-bind="$attrs"
    :type="type"
    :class="[
      disabled && 'disabled',
      submitting && 'loading',
      buttonStyle,
      size,
    ]"
    :disabled="isDisabled"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <div class="container">
      <div class="label" :class="[upperCase && 'ph-uppercase']">
        <slot name="default">
          {{ label }}
        </slot>
      </div>
      <div class="hover-background" />
      <div class="disabled-background" />
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  ButtonSizes,
  ButtonStyles,
  HTMLType,
  ButtonTypes,
  ButtonSize,
} from './types';

export default Vue.extend({
  name: 'PButton',

  props: {
    label: {
      type: String as PropType<string>,
      default: 'Button',
    },
    buttonStyle: {
      type: String as PropType<string>,
      default: ButtonStyles.PRIMARY,
    },
    type: {
      type: String as PropType<HTMLType>,
      default: ButtonTypes.BUTTON,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    submitting: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    upperCase: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonSizes.MEDIUM,
      validator(value: string): boolean {
        return Object.values(ButtonSizes).indexOf(value as ButtonSize) !== -1;
      },
    },
  },
  computed: {
    isDisabled(): boolean {
      return this.disabled || this.submitting;
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: background-color, border-color, color, fill, stroke, opacity,
    box-shadow, transform, filter, backdrop-filter;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: var(--button-base-letter-spacing, 0.025em);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  $buttonStyles: 'primary' 'primary-outline' 'secondary' 'secondary-outline'
    'plain';
  @each $style in $buttonStyles {
    &.#{$style} {
      border-radius: var(--button-styles-#{$style}-border-radius, 50%);
      background: var(--button-styles-#{$style}-background, red);
      border: var(
        --button-styles-#{$style}-border,
        var(--button-base-border, 1px solid #e5e5e5)
      );
      background-size: cover;
      background-position: center center;
      color: var(--button-styles-#{$style}-color, white);
      border-color: var(--button-styles-#{$style}-border-color, red);
      padding: var(--button-styles-#{$style}-padding);
      text-transform: var(--button-styles-#{$style}-text-transform, none);

      .disabled-background,
      .hover-background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        border-radius: inherit;
        transition: opacity;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .disabled-background {
        background: var(--button-styles-#{$style}-disabled-background, #e5e5e5);
      }

      .hover-background {
        background: var(--button-styles-#{$style}-hover-background, #e5e5e5);
      }

      &:hover {
        color: var(
          --button-styles-#{$style}-hover-color,
          var(--button-styles-#{$style}-color, white)
        );
        border-color: var(
          --button-styles-#{$style}-hover-border-color,
          var(--button-styles-#{$style}-border-color, red)
        );
        .hover-background {
          opacity: var(--button-styles-#{$style}-hover-background-opacity, 0.2);
        }
      }

      &.disabled {
        color: var(--button-styles-#{$style}-disabled-color, #e5e5e5);
        border-color: var(
          --button-styles-#{$style}-disabled-border-color,
          #e5e5e5
        );
        cursor: not-allowed;

        .disabled-background {
          opacity: 1;
        }
      }
    }

    &:focus.#{$style} {
      outline: var(--button-styles-#{$style}-focus-outline);
      box-shadow: var(--button-styles-#{$style}-focus-box-shadow, none);

      &:not(:active)::after {
        animation: ripple 1s ease-out;
      }
    }
  }

  $buttonSizes: 'xs' 'small' 'medium' 'large';
  @each $size in $buttonSizes {
    &.#{$size} {
      font-size: var(--button-sizes-#{$size}-font-size, 0.75rem);
      padding: var(--button-sizes-#{$size}-padding, 0.25rem 0.5rem);
    }
  }
  .container {
    display: flex;

    .label {
      position: relative;
      display: flex;
      z-index: 5;
      width: 100%;
      justify-content: center;
      align-items: center;
      transition: background-color, border-color, color, fill, stroke, opacity,
        box-shadow, transform, filter, backdrop-filter;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
</style>

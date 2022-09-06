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
@import './src/assets/scss/_themehelpers.scss';

@function getButtonStyleProperty($property, $style, $state, $fallback: '') {
  @return getThemeProperty(
    'button',
    $property,
    'styles-#{$style}',
    $state,
    $fallback
  );
}

@function getButtonSizeProperty($property, $style, $state, $fallback: '') {
  @return getThemeProperty(
    'button',
    $property,
    'sizes-#{$style}',
    $state,
    $fallback
  );
}

.button {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: $all-transitions;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: getButtonStyleProperty('letter-spacing', '', '', 0.025em);

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
    'plain' 'tertiary' 'tertiary-outline' 'tertiary-plain'
    'tertiary-plain-outline';
  @each $style in $buttonStyles {
    &.#{$style} {
      background: getButtonStyleProperty('background', $style, '', red);
      background-size: cover;
      background-position: center center;
      box-shadow: getButtonStyleProperty('box-shadow', $style, '', none);

      color: getButtonStyleProperty('color', $style, '', white);

      border: getButtonStyleProperty('border', $style, '', 1px solid #e5e5e5);
      border-radius: getButtonStyleProperty('border-radius', $style, '', 50%);
      border-color: getButtonStyleProperty('border-color', $style, '', red);

      text-transform: getButtonStyleProperty(
        'text-transform',
        $style,
        '',
        none
      );

      .disabled-background,
      .hover-background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        border-radius: inherit;
        transition: $all-transitions;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .disabled-background {
        background: getButtonStyleProperty(
          'background',
          $style,
          'disabled',
          #e5e5e5
        );
      }

      .hover-background {
        background: getButtonStyleProperty(
          'background',
          $style,
          'hover',
          #e5e5e5
        );
      }

      &:hover {
        color: getButtonStyleProperty('color', $style, 'hover', white);
        border: getButtonStyleProperty('border', $style, 'hover', inherit);
        border-color: getButtonStyleProperty(
          'border-color',
          $style,
          'hover',
          white
        );
        .hover-background {
          opacity: getButtonStyleProperty('opacity', $style, 'hover', white);
        }
      }

      &.disabled {
        color: getButtonStyleProperty('color', $style, 'disabled', #e5e5e5);
        border: getButtonStyleProperty('border', $style, 'disabled', inherit);
        border-color: getButtonStyleProperty(
          'border-color',
          $style,
          'disabled',
          #e5e5e5
        );
        background-color: getButtonStyleProperty(
          'base-background',
          $style,
          'disabled'
        );
        cursor: not-allowed;

        .disabled-background {
          opacity: getButtonStyleProperty('opacity', $style, 'disabled', 1);
        }
      }
    }

    &:focus.#{$style} {
      outline: getButtonStyleProperty('outline', $style, 'focus', none);
      box-shadow: getButtonStyleProperty('box-shadow', $style, 'focus', none);

      &:not(:active)::after {
        animation: ripple 1s ease-out;
      }
    }
  }

  $buttonSizes: 'xs' 'small' 'medium' 'large';
  @each $size in $buttonSizes {
    &.#{$size} {
      font-size: getButtonSizeProperty('font-size', $size, '', 0.75rem);
      padding: getButtonSizeProperty('padding', $size, '', 0.75rem);
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
      transition: $all-transitions;
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

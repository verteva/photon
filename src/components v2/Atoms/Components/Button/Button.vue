<template>
  <button
    ref="elRef"
    class="button"
    v-bind="$attrs"
    :type="type"
    :class="[
      (label || hasLabel) && 'has-label',
      disabled && 'disabled',
      submitting && 'loading',
      buttonStyle,
      size,
    ]"
    :disabled="isDisabled"
    v-on="$listeners"
  >
    <div class="container">
      <div
        v-if="iconLeft"
        class="button-icon-container button-icon-container-left"
      >
        <font-awesome-icon
          ref="button-icon-left"
          :icon="[fontAwesomeWeightToFamily(iconLeftFamily), iconLeft]"
          class="button-icon button-icon-left"
        />
      </div>
      <div v-if="label || hasLabel" class="label">
        <slot name="default">
          {{ label }}
        </slot>
      </div>
      <div
        v-if="iconRight"
        class="button-icon-container button-icon-container-right"
      >
        <font-awesome-icon
          ref="button-icon-right"
          :icon="[fontAwesomeWeightToFamily(iconRightFamily), iconRight]"
          class="button-icon button-icon-right"
        />
      </div>
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

export const props = {
  label: {
    type: String as PropType<string>,
    default: '',
  },

  buttonStyle: {
    type: String as PropType<string>,
    default: ButtonStyles.PRIMARY,
  },

  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSizes.MEDIUM,
    validator(value: string): boolean {
      return Object.values(ButtonSizes).indexOf(value as ButtonSize) !== -1;
    },
  },

  iconLeft: {
    type: String as PropType<string>,
    default: '',
  },

  iconLeftFamily: {
    type: String as PropType<string>,
    default: 'fal',
  },

  iconRight: {
    type: String as PropType<string>,
    default: '',
  },

  iconRightFamily: {
    type: String as PropType<string>,
    default: 'fal',
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
};

export default Vue.extend({
  name: 'P2Button',

  mixins: ['fontAwesomeWeightToFamily'],

  props,
  computed: {
    isDisabled(): boolean {
      return this.disabled || this.submitting;
    },

    hasLabel() {
      return this.$slots['default'];
    },
  },
});
</script>

<style lang="scss" scoped>
@import './src/assets/scss/main.scss';

@function getButtonStyleProperty(
  $property,
  $style,
  $state: 'default',
  $fallback: ''
) {
  @return getThemeProperty('button', $property, $style, $state, $fallback);
}

@function getButtonSizeProperty(
  $property,
  $size: 'md',
  $state: 'default',
  $fallback: ''
) {
  @return getThemeProperty('button', $property, $size, $state, $fallback);
}

.button {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  background-size: cover;
  background-position: center center;
  transition: $all-transitions;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid;
  outline: none;

  // Disable default focus outline color
  &:focus-visible {
    outline: none;
  }

  // Default size styles
  $size: 'md';
  font-family: getButtonSizeProperty(
    'typography-font-family',
    $size,
    '',
    inherit
  );
  font-weight: getButtonSizeProperty(
    'typography-font-weight',
    $size,
    '',
    inherit
  );
  letter-spacing: getButtonSizeProperty(
    'typography-letter-spacing',
    $size,
    '',
    0
  );
  text-transform: getButtonSizeProperty(
    'typography-text-case',
    $size,
    '',
    inherit
  );
  padding-top: getButtonSizeProperty('padding-top', $size, '', 0.75rem);
  padding-right: getButtonSizeProperty('padding-right', $size, '', 0.75rem);
  padding-bottom: getButtonSizeProperty('padding-bottom', $size, '', 0.75rem);
  padding-left: getButtonSizeProperty('padding-left', $size, '', 0.75rem);
  border-radius: getButtonSizeProperty('border-radius', $size, '', 0);

  // Ripple
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

  // Icons
  .button-icon {
    font-size: 1em;
  }

  // Style Variants
  $buttonStyles: 'primary' 'primary-outline' 'primary-link' 'secondary'
    'secondary-outline' 'secondary-link';
  @each $style in $buttonStyles {
    &.#{$style} {
      $state: 'default';
      background: getButtonStyleProperty(
        'background-color',
        $style,
        $state,
        red
      );
      color: getButtonStyleProperty('text-color', $style, $state, white);
      border-color: getButtonStyleProperty('border-color', $style, $state, red);

      // Outline styles
      @if (ends-with($style, '-outline')) {
        border-width: 2px;
      }

      // Hover
      .hover-background {
        background: getButtonStyleProperty(
          'background-color',
          $style,
          'hover',
          #e5e5e5
        );
      }
      .hover,
      &:hover {
        $state: 'hover';
        color: getButtonStyleProperty('text-color', $style, $state, white);
        background: getButtonStyleProperty(
          'background-color',
          $style,
          $state,
          red
        );
        border-color: getButtonStyleProperty(
          'border-color',
          $style,
          $state,
          white
        );
      }

      // Active
      .active-background {
        background: getButtonStyleProperty(
          'background-color',
          $style,
          'active',
          #e5e5e5
        );
      }
      .active,
      &:active {
        $state: 'active';
        color: getButtonStyleProperty('text-color', $style, $state, white);
        background: getButtonStyleProperty(
          'background-color',
          $style,
          $state,
          red
        );
        border-color: getButtonStyleProperty(
          'border-color',
          $style,
          $state,
          white
        );
      }

      // Disabled
      .disabled-background {
        background: getButtonStyleProperty(
          'background-color',
          $style,
          'disabled',
          #e5e5e5
        );
      }
      &.disabled {
        $state: 'disabled';
        color: getButtonStyleProperty('text-color', $style, $state, #e5e5e5);
        border-color: getButtonStyleProperty(
          'border-color',
          $style,
          $state,
          #e5e5e5
        );
        background-color: getButtonStyleProperty(
          'background-color',
          $style,
          $state,
          ''
        );
        cursor: not-allowed;
      }

      // Focus
      .focus,
      &:focus {
        box-shadow: getButtonStyleProperty('box-shadow', $style, 'focus', '');

        // If it's not a link button, enable the ripple effect
        @if not(ends-with($style, '-link')) {
          &:not(:active)::after {
            animation: ripple 1s ease-out;
          }
        } @else {
          // link buttons need a dedicated box-shadow defined for focus because of how Figma handles box-shadow - uses a different token
          box-shadow: 0
            0
            0
            4px
            getButtonStyleProperty('border-color', $style, 'focus', '');
        }
      }
    }
  }

  $buttonSizes: 'xs' 'sm' 'md' 'lg';
  @each $size in $buttonSizes {
    &.#{$size} {
      font-size: getButtonSizeProperty('font-size', $size, '', 1em);
      font-family: getButtonSizeProperty(
        'typography-font-family',
        $size,
        '',
        inherit
      );
      font-weight: getButtonSizeProperty(
        'typography-font-weight',
        $size,
        '',
        inherit
      );
      letter-spacing: getButtonSizeProperty(
        'typography-letter-spacing',
        $size,
        '',
        0
      );
      text-transform: getButtonSizeProperty(
        'typography-text-case',
        $size,
        '',
        none
      );
      padding-top: getButtonSizeProperty('padding-top', $size, '', 0.625em);
      padding-right: getButtonSizeProperty('padding-right', $size, '', 1.25em);
      padding-bottom: getButtonSizeProperty(
        'padding-bottom',
        $size,
        '',
        0.625em
      );
      padding-left: getButtonSizeProperty('padding-left', $size, '', 1.25em);
      border-radius: getButtonSizeProperty('border-radius', $size, '', 0);
    }

    // Icon margins
    &.has-label.#{$size} {
      .button-icon-container {
        &.button-icon-container-left {
          margin-right: getButtonSizeProperty('gap', $size, '', 1.25em);
        }
        &.button-icon-container-right {
          margin-left: getButtonSizeProperty('gap', $size, '', 1.25em);
        }
      }
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
      text-transform: inherit;
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

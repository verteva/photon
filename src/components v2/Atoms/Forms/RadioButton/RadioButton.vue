<template>
  <div class="ph-radio-item" :class="[disabled && 'ph-radio-disabled']">
    <input
      :id="id"
      ref="radioInputItem"
      type="radio"
      class="ph-radio-input"
      :name="name"
      :checked="checked"
      @click="$emit('click')"
    />
    <label
      :for="id"
      class="ph-radio-label"
      :class="icon && 'ph-radio-bar-bottom-brand ph-radio-icon-label'"
    >
      <div :class="icon && 'ph-radio-label-icon'">
        <p-icon v-if="icon" :name="icon" type="xl" />
        <span class="ph-radio-label-text">{{ label }}</span>
      </div>

      <div v-if="!icon" class="ph-radio-circle-container">
        <div class="ph-radio-circle" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  name: {
    type: String as PropType<string>,
    default: '',
  },
  label: {
    type: String as PropType<string>,
    default: '',
  },
  id: {
    type: String as PropType<string>,
    default: '',
  },
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  checked: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Global props
  disabled,
};

export default Vue.extend({
  name: 'InputRadio',
  components: {
    PIcon,
  },
  props,
});
</script>

<style lang="scss" scoped>
.ph-radio-item {
  position: relative;

  .ph-radio-label {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: var(--radio-button-base-padding);
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    font-weight: var(--radio-button-base-font-weight);
    height: 100%;
    border-radius: calc(var(--radio-button-base-border-radius) * 1px);
    border-width: var(--radio-button-base-border-width);
    cursor: pointer;
    border-color: var(--radio-button-styles-primary-default-border-color);
    background: var(--radio-button-styles-primary-background);
    color: var(--radio-button-styles-primary-default-color);

    &.ph-radio-bar-bottom-brand {
      padding: 20px;
      justify-content: var(--radio-button-styles-primary-justify-content);
    }
  }
  &.ph-radio-disabled {
    .ph-radio-label {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
      color: var(--radio-button-styles-primary-default-color);
    }
    .ph-radio-circle-container {
      opacity: 0.5;
    }
  }
  .ph-radio-input {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    bottom: 50%;
    margin-top: -0.5rem;
    width: 0;
    height: 0;
    opacity: 0;
    background-color: var(--radio-button-primary-default-border-color);
    &.focused {
      outline: none;
    }
    &:checked {
      + .ph-radio-label {
        background: var(
          --radio-button-styles-primary-checked-background-default
        );
        border-color: var(--radio-button-styles-primary-checked-border-color);
        color: var(--radio-button-styles-primary-checked-color);
        .ph-radio-label-text {
          color: var(--radio-button-styles-primary-checked-text-color);
        }
        .ph-radio-label-icon {
          color: var(--radio-button-styles-primary-checked-color);
        }
        .ph-radio-circle-container {
          border-color: var(--radio-button-styles-primary-border-color);
          background: var(--radio-button-styles-primary-checked-color);

          .ph-radio-circle {
            background: var(--radio-button-styles-primary-checked-circle);
          }
        }

        &.ph-radio-icon-label {
          background: var(
            --radio-button-styles-primary-checked-background-icon
          );
        }
      }
      ~ .ph-radio-bar-bottom-brand:after {
        background-color: var(--radio-button-styles-primary-checked-color);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform-origin: 50% 100%;
        content: '';
        height: 6px;
        animation: expandLine 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
        animation-fill-mode: both;
      }
      .ph-radio-circle {
        --transform-scale-x: 0.75;
        --transform-scale-y: 0.75;
      }
    }
  }
  .ph-radio-label-icon {
    display: flex;
    font-size: var(--radio-sm-label-typography-fontSize);
    line-height: var(--radio-sm-label-typography-lineHeight);
    font-weight: var(--radio-sm-label-typography-fontWeight);
    align-items: center;
    gap: 0.5rem;
    color: var(--radio-button-styles-primary-icon);
    .ph-radio-label-text {
      color: var(--radio-button-styles-primary-default-color);
    }
  }

  .ph-radio-circle-container {
    position: absolute;
    left: 12px;
    top: 50%;
    bottom: 50%;
    margin-top: -8px;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 300ms;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    border-width: 1px;
    border-color: var(
      --radio-button-styles-primary-circle-container-border-color
    );
    cursor: pointer;

    .ph-radio-circle {
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: 50%;
      left: 50%;
      margin-top: -3px;
      margin-left: -3px;
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform;
      transition-duration: 300ms;
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: var(--radio-button-styles-primary-circle);
      --transform-scale-x: 1.5;
      --transform-scale-y: 1.5;
    }
  }
  @keyframes expandLine {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(100%);
    }
  }
}
@media screen and (max-width: 639px) {
  .ph-radio-item {
    grid-column: auto / span 1 !important;
  }
}
</style>

<template>
  <div
    class="ph-input-text"
    :class="[
      inFocus && 'ph-input-text-focus',
      disabled && 'ph-input-text-disabled',
    ]"
  >
    <div v-if="iconLeft" class="ph-input-text-icon ph-input-text-icon-left">
      <p-icon :name="iconLeft" :type="size" />
    </div>
    <input
      :id="id"
      class="ph-input-text-input"
      :class="{
        'ph-input-text-input-icon-left': iconLeft,
        'ph-input-text-icon-right': iconRight,
        'ph-input-text-icon-center': centered,
        'input-error': error,
      }"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      tabindex="0"
      :value="value"
      :maxlength="maxlength"
      data-testid="input-text"
      @focus="onFocus"
      @blur="onBlur"
      @wheel="$event.preventDefault()"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="iconRight" class="ph-input-text-icon">
      <p-icon :name="iconRight" :type="size" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import { InputValues, InputTypes } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled, size } = formProps;

export const props = {
  centered: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  number: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  iconLeft: {
    type: String as PropType<string>,
    default: '',
  },
  iconRight: {
    type: String as PropType<string>,
    default: '',
  },
  error: {
    type: String as PropType<string>,
    default: '',
  },
  value: {
    type: [Number, String] as PropType<InputValues>,
    default: null,
  },
  id: {
    type: String as PropType<string>,
    default: '',
  },
  type: {
    type: String as PropType<InputTypes>,
    default: 'text',
  },
  maxlength: {
    type: Number as PropType<number>,
    default: null,
  },
  disabled,
  size,
};

export default Vue.extend({
  name: 'P2InputText',
  components: {
    PIcon,
  },

  props,

  data() {
    return {
      inFocus: false,
    };
  },

  methods: {
    onFocus(e: InputEvent) {
      this.inFocus = true;
      this.$emit('focus', e);
    },
    onBlur(e: InputEvent) {
      this.inFocus = false;
      this.$emit('blur', e);
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-input-text {
  position: relative;

  &.ph-input-text-focus {
    .ph-input-text-input {
      outline: none;
      border: var(--input-text-focus-border);
    }
    .ph-input-text-icon {
      color: var(--input-text-focus-color);
    }
  }
  .ph-input-text-input {
    padding: var(--input-text-base-padding);
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: var(--input-text-base-font-weight);
    width: 100%;
    border-radius: calc(var(--input-text-base-border-radius) * 1px);
    border: var(--input-text-base-border);
    background: var(--input-text-base-background-color);
    &.ph-input-text-input-icon-left {
      left: 4px;
      padding-right: var(--input-text-icon-padding);
      padding-left: var(--input-text-icon-padding);
    }
    &.ph-input-text-icon-right {
      padding-right: var(--input-text-icon-padding);
    }
    &.ph-input-text-icon-center {
      text-align: center;
    }
  }
  .ph-input-text-icon {
    right: 4px;
    display: flex;
    position: absolute;
    top: 0;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    align-items: center;
    width: var(--input-text-icon-width);
    height: 100%;
    &.ph-input-text-icon-left {
      left: 4px;
    }
    &.input-error {
      color: var(--form-control-items-error-default-text-color);
    }
  }

  &.ph-input-text-disabled {
    cursor: not-allowed;
    .ph-input-text-input {
      cursor: not-allowed;
      color: var(--input-text-disabled-color);
      border-color: var(--input-text-disabled-border-color);
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

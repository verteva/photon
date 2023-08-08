<template>
  <div
    class="ph-input-text"
    :class="[
      inFocus && 'ph-input-text-focus',
      disabled && 'ph-input-text-disabled',
      iconLeft && 'ph-input-text-has-icon-left',
      iconRight && 'ph-input-text-has-icon-right',
      centered && 'ph-input-text-centered',
    ]"
  >
    <div
      v-if="iconLeft"
      class="ph-input-text-icon-container ph-input-text-icon-container-left"
    >
      <font-awesome-icon
        :icon="[fontAwesomeWeightToFamily(iconLeftFamily), iconLeft]"
        class="ph-input-text-icon ph-input-text-icon-left"
      />
    </div>
    <input
      :id="id"
      class="ph-input-text-input"
      :class="{
        'input-error': error,
      }"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      tabindex="0"
      :value="value"
      :maxlength="maxlength"
      data-testid="input-text"
      @input="onInput($event)"
      @keyup="onKeyup"
      @focus="onFocus"
      @blur="onBlur"
      @wheel="$event.preventDefault()"
    />
    <div
      v-if="iconRight"
      class="ph-input-text-icon-container ph-input-text-icon-container-right"
    >
      <font-awesome-icon
        :icon="[fontAwesomeWeightToFamily(iconRightFamily), iconRight]"
        class="ph-input-text-icon ph-input-text-icon-right"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { InputValues, InputTypes } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled, size } = formProps;

export const props = {
  centered: {
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

  isNumber: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  disabled,
  size,
};

export default Vue.extend({
  name: 'P2InputText',
  components: {},
  mixins: ['fontAwesomeWeightToFamily'],
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
    onInput(e: InputEvent) {
      const target = e.target as HTMLInputElement;
      if (this.isNumber) {
        const number = Number(target.value);
        if (Number.isNaN(number)) {
          target.value = '';
          target.value = target.value.slice(0, -1);
          e.preventDefault();
          return;
        }
      }
      this.$emit('input', target.value);
    },
    onKeyup(e: InputEvent) {
      this.$emit('keyup', e);
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

  // Focus
  &.ph-input-text-focus {
    .ph-input-text-input {
      outline: none;
      color: var(--sd-input-text-focus-text-color);
      background: var(--sd-input-text-focus-background-color);
      box-shadow: var(--sd-input-text-focus-box-shadow);
      border-color: var(--sd-input-text-focus-border-color);
    }
    .ph-input-text-icon {
      color: var(--sd-input-text-focus-icon-color);
    }
  }

  // Disabled
  &.ph-input-text-disabled {
    cursor: not-allowed;
    .ph-input-text-input {
      cursor: not-allowed;
      color: var(--sd-input-text-disabled-text-color);
      background: var(--sd-input-text-disabled-background-color);
      box-shadow: var(--sd-input-text-disabled-box-shadow);
      border-color: var(--sd-input-text-disabled-border-color);
    }
    .ph-input-text-icon {
      color: var(--sd-input-text-disabled-icon-color);
    }
  }
}

.ph-input-text-input {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;

  font-family: var(--sd-input-text-md-typography-font-family);
  font-size: var(--sd-input-text-md-typography-font-size);
  font-weight: var(--sd-input-text-md-typography-font-weight);
  letter-spacing: var(--sd-input-text-md-typography-letter-spacing);
  line-height: var(--sd-input-text-md-typography-line-height);
  text-transform: var(--sd-input-text-md-typography-text-case);
  text-decoration: var(--sd-input-text-md-typography-text-decoration);

  color: var(--sd-input-text-default-text-color);
  background: var(--sd-input-text-default-background-color, white);
  border: 1px solid var(--sd-input-text-default-border-color);
  border-radius: var(--sd-input-md-border-radius);

  padding-bottom: var(--sd-input-text-md-padding-bottom);
  padding-left: var(--sd-input-text-md-padding-left);
  padding-right: var(--sd-input-text-md-padding-right);
  padding-top: var(--sd-input-text-md-padding-top);

  ::placeholder {
    color: var(--sd-input-text-default-placeholder-color);
    opacity: 1;
  }

  .ph-input-text.ph-input-text-has-icon-left & {
    padding-left: calc(var(--sd-input-text-md-padding-left) * 2 + 20px);
  }
  .ph-input-text.ph-input-text-has-icon-right & {
    padding-right: calc(var(--sd-input-text-md-padding-right) * 2 + 20px);
  }
  .ph-input-text.ph-input-text-centered & {
    text-align: center;
  }
}

.ph-input-text-icon-container {
  width: 1.25em;
  height: 1.25em;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &.ph-input-text-icon-container-left {
    left: var(--sd-input-text-md-padding-left);
  }

  &.ph-input-text-icon-container-right {
    right: var(--sd-input-text-md-padding-right);
  }
}

.ph-input-text-icon {
  color: var(--sd-input-text-default-icon-color);
  width: 1em;
  height: 1em;
  font-size: 1em;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

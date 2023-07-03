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
        class="ph-input-icon ph-input-text-icon-left"
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

  &.ph-input-text-disabled {
    cursor: not-allowed;
    .ph-input-text-input {
      cursor: not-allowed;
      color: var(--input-text-disabled-color);
      border-color: var(--input-text-disabled-border-color);
    }
  }
}

.ph-input-text-input {
  padding: var(--input-text-base-padding);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--input-text-base-font-family);
  font-weight: var(--input-text-base-font-weight);
  width: 100%;
  border-radius: calc(var(--input-text-base-border-radius) * 1px);
  border: var(--input-text-base-border);
  background: var(--input-text-base-background-color);

  .ph-input-text.ph-input-text-has-icon-left & {
    padding-left: var(--input-text-icon-padding);
  }
  .ph-input-text.ph-input-text-has-icon-right & {
    padding-right: var(--input-text-icon-padding);
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
    left: 12px;
  }

  &.ph-input-text-icon-container-right {
    right: 12px;
  }
}

.ph-input-icon {
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

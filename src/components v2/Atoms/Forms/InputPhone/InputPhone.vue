<template>
  <div class="ph-phone-input-component">
    <VuePhoneNumberInput
      ref="input"
      :value="value"
      :style="{
        '--countriesHeight': countries.length * 30,
      }"
      :default-country-code="defaultCountryCode"
      :only-countries="countries"
      :translations="{
        countrySelectorLabel: '',
        phoneNumberLabel: placeholder,
      }"
      no-example
      show-code-on-list
      :disabled="disabled"
      @input="$emit('input', $event)"
      @phone-number-focused="onFocus"
      @phone-number-blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { InputPhoneData, InputValueType } from './types';
import VuePhoneNumberInput from 'vue-phone-number-input';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  value: {
    type: [Number, String] as PropType<InputValueType>,
    default: null,
  },
  countries: {
    type: Array,
    default: () => ['AU'],
  },
  defaultCountryCode: {
    type: String,
    default: 'AU',
  },

  disabled,
};

export default Vue.extend({
  name: 'PInputPhone',

  components: {
    VuePhoneNumberInput,
  },

  props,

  data(): InputPhoneData {
    return {
      inFocus: false,
    } as InputPhoneData;
  },

  methods: {
    onFocus(e: InputEvent) {
      (this as any).inFocus = true;
      (this as any).$emit('focus', e);
    },
    onBlur(e: InputEvent) {
      (this as any).inFocus = false;
      (this as any).$emit('blur', e);
    },
  },
});
</script>

<style lang="scss">
@import '~vue-phone-number-input/dist/vue-phone-number-input.css';

.ph-phone-input-component {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .country-selector__country-flag {
    top: 16px !important;
  }
  .country-selector__input {
    padding-top: 0 !important;
  }
  .input-tel__input {
    border-left-width: 0px !important;
  }
  .select-country-container {
    flex: 0 0 60px !important;
    width: 60px !important;
    min-width: auto !important;
  }
  .country-selector__input {
    width: 0px !important;
  }
  .country-selector__input {
    border-right-width: 0px !important;
  }

  .country-selector__list__item {
    background-color: var(--input-phone-base-list-color) !important;
    color: var(--input-phone-base-list-text-color) !important;
    .country-selector__list__item__calling-code {
      color: var(--input-phone-base-list-text-color) !important;
    }

    &.selected {
      background-color: var(--input-phone-base-selected-color) !important;
      color: var(--input-phone-base-selected-text-color) !important;

      .country-selector__list__item__calling-code {
        color: var(--input-phone-base-selected-text-color) !important;
      }
    }
  }

  .input-tel__input {
    padding-top: 0px !important;
  }
  .vue-phone-number-input {
    border-radius: calc(var(--input-phone-base-border-radius) * 1px);
    border: 1px solid transparent;
  }
  .vue-phone-number-input:focus-within {
    border-color: var(--input-phone-base-focus-border-color);
  }
  .country-selector__input,
  .input-tel__input {
    box-shadow: none !important;
    border-color: var(--input-phone-base-border-color) !important;
    color: grey;
    font-size: calc(var(--input-phone-base-font-size) * 1px) !important;
    font-weight: var(--input-phone-base-font-weight) !important;
    line-height: 1.5 !important;
    letter-spacing: var(--input-phone-base-letter-spacing) !important;
    height: auto !important;
  }

  .country-selector__input {
    border-top-left-radius: calc(
      var(--input-phone-base-border-radius) * 1px
    ) !important;
    border-bottom-left-radius: calc(
      var(--input-phone-base-border-radius) * 1px
    ) !important;
  }

  .input-tel__input {
    border-top-right-radius: calc(
      var(--input-phone-base-border-radius) * 1px
    ) !important;
    border-bottom-right-radius: calc(
      var(--input-phone-base-border-radius) * 1px
    ) !important;
  }

  .country-selector__list.has-calling-code {
    border-radius: 0px !important;
    height: var(--countriesHeight, 300px) !important;
    min-height: var(--countriesHeight, 300px) !important;
    max-height: var(--countriesHeight, 300px) !important;
  }
  .resize-observer {
    height: 0px !important;
  }
  .input-tel__label {
    display: none;
    visibility: hidden;
  }

  .vue-phone-number-input .input-tel.is-disabled .input-tel__input,
  .vue-phone-number-input
    .country-selector.is-disabled
    .country-selector__input {
    background: white !important;
  }
}
</style>

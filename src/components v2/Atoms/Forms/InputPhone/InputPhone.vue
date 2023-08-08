<template>
  <div class="ph-phone-input-component">
    <VuePhoneNumberInput
      ref="input"
      :value="value"
      :style="{
        '--countriesHeight': onlyCountries.length * 30,
      }"
      :default-country-code="defaultCountryCode"
      :only-countries="onlyCountries"
      :translations="{
        countrySelectorLabel: '',
        phoneNumberLabel: placeholder,
      }"
      no-example
      valid-characters-only
      show-code-on-list
      :disabled="disabled"
      @input="$emit('input', $event)"
      @phone-number-focused="onFocus"
      @phone-number-blur="onBlur"
    >
      <template #arrow>
        <font-awesome-icon :icon="['fal', 'chevron-down']" class="fa-xs" />
      </template>
    </VuePhoneNumberInput>
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

  computed: {
    onlyCountries(): string[] {
      return (this as any).countries;
    },
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

.vue-phone-number-input {
  --borderRadius: var(--sd-input-md-border-radius);
  position: relative;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto !important;
  color: var(--sd-input-text-default-text-color) !important;
  background: var(--sd-input-text-default-background-color, white) !important;
  border: 1px solid var(--sd-input-text-default-border-color) !important;
  border-radius: var(--sd-input-md-border-radius) !important;
  outline: none;

  // Focus
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none !important;
    color: var(--sd-input-text-focus-text-color) !important;
    background: var(--sd-input-text-focus-background-color) !important;
    box-shadow: var(--sd-input-text-focus-box-shadow) !important;
  }

  .input-tel {
    height: auto;
    min-height: 0 !important;
  }

  input {
    border: none !important;
    border-radius: var(--sd-input-md-border-radius) !important;

    &.input-tel__input {
      border: none !important;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      padding-bottom: var(--sd-input-text-md-padding-bottom) !important;
      padding-left: var(--sd-input-text-md-padding-left) !important;
      padding-right: var(--sd-input-text-md-padding-right) !important;
      padding-top: var(--sd-input-text-md-padding-top) !important;

      font-family: var(--sd-input-text-md-typography-font-family);
      font-size: var(--sd-input-text-md-typography-font-size);
      font-weight: var(--sd-input-text-md-typography-font-weight);
      letter-spacing: var(--sd-input-text-md-typography-letter-spacing);
      line-height: var(--sd-input-text-md-typography-line-height);
      text-transform: var(--sd-input-text-md-typography-text-case);
      text-decoration: var(--sd-input-text-md-typography-text-decoration);
      height: auto !important;
      min-height: 0 !important;
    }

    &.country-selector__input {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-right: none;
      height: auto !important;
      min-height: 0 !important;
    }
  }

  .country-selector {
    height: 100% !important;
    min-height: 0 !important;
  }

  .country-selector__toggle {
    color: var(--sd-input-text-default-icon-color);
    right: 8px !important;
    top: calc(50% - 12px) !important;
  }

  .country-selector__list,
  .country-selector__list.has-calling-code {
    overflow: hidden;
    color: var(--sd-input-text-default-text-color) !important;
    background: var(--sd-input-text-default-background-color, white) !important;
    border: 1px solid var(--sd-input-text-default-border-color) !important;
    border-radius: var(--sd-input-md-border-radius) !important;
    outline: none;

    .vue-recycle-scroller__item-wrapper,
    .vue-recycle-scroller__item-view {
      border-radius: var(--sd-input-md-border-radius) !important;
    }

    button {
      color: var(--sd-input-text-default-text-color) !important;
      background: var(
        --sd-input-text-default-background-color,
        white
      ) !important;
    }
  }

  .country-selector__list__item {
    font-family: var(--sd-typography-sm-regular-font-family) !important;
    font-size: var(--sd-typography-sm-regular-font-size) !important;
    font-weight: var(--sd-typography-sm-regular-font-weight) !important;
    letter-spacing: var(--sd-typography-sm-regular-letter-spacing) !important;
    line-height: var(--sd-typography-sm-regular-line-height) !important;
    text-transform: var(--sd-typography-sm-regular-text-case) !important;
    text-decoration: var(--sd-typography-sm-regular-text-decoration) !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .country-selector__list__item__flag-container {
    margin-right: 0 !important;
  }

  .country-selector__list__item.selected,
  .country-selector__list__item__calling-code,
  .vue-recycle-scroller__item-view {
    color: var(--sd-input-text-default-text-color) !important;
  }

  .country-selector__list__item__calling-code {
    width: 41px !important;
  }

  .input-tel__label {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .country-selector__country-flag {
    top: 16px !important;
    left: var(--sd-input-text-md-padding-left) !important;
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

  .country-selector__input,
  .input-tel__input {
    box-shadow: none !important;
    border-color: #e0e0e0 !important;
  }

  .country-selector__list.has-calling-code {
    height: var(--countriesHeight) !important;
    min-height: var(--countriesHeight) !important;
    max-height: var(--countriesMaxHeight) !important;
  }

  .resize-observer {
    height: 0px !important;
  }

  .vue-phone-number-input .input-tel.is-disabled .input-tel__input,
  .vue-phone-number-input
    .country-selector.is-disabled
    .country-selector__input {
    background: white !important;
  }
}
</style>

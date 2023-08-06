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

  input {
    border: none !important;
    border-radius: var(--sd-input-md-border-radius) !important;
    border: none !important;

    &.input-tel__input {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }

    &.country-selector__input {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-right: none;
    }
  }

  .country-selector__toggle {
    color: var(--sd-input-text-default-icon-color);
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
}
</style>

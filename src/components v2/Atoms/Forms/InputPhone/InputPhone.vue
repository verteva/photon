<template>
  <div class="ph-phone-input-component">
    <MazPhoneNumberInput
      ref="mazPhoneNumberInput"
      v-model="value"
      :default-phone-number="defaultPhoneNumber"
      :default-country-code="defaultCountryCode"
      :only-countries="onlyCountries"
      :translations="{
        countrySelectorLabel: 'Country',
        phoneNumberLabel: placeholder,
      }"
      :disabled="disabled"
      no-search
      no-validation
      show-code-on-list
      @input="$emit('input', $event)"
      @update="onUpdate"
      @phone-number-focused="onFocus"
      @phone-number-blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { InputPhoneData, InputValueType } from './types';
import { MazPhoneNumberInput } from 'maz-ui';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },

  countries: {
    type: Array,
    default: () => ['AU'],
  },

  defaultCountryCode: {
    type: String,
    default: 'AU',
  },

  defaultPhoneNumber: {
    type: [Number, String] as PropType<InputValueType>,
    default: null,
  },

  disabled,
};

export default Vue.extend({
  name: 'PInputPhone',

  components: {
    MazPhoneNumberInput,
  },

  props,

  data(): InputPhoneData {
    return {
      inFocus: false,
      value: '',
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

    onUpdate(e: InputEvent) {
      if (e.isValid) {
        this.$refs.mazPhoneNumberInput.asYouTypeNumber = e.formatNational;
      }
      (this as any).$emit('update', e);
    },
  },
});
</script>

<style lang="scss">
.maz-phone-number-input .country-selector {
  $country-width: 7.35rem;
  flex: 0 0 $country-width !important;
  width: $country-width !important;
  min-width: $country-width !important;
  max-width: $country-width !important;
}

.maz-input--primary.input-phone-number.has-1-right-icon {
  .maz-input__input.has-right-icon {
    padding-right: 0.8571rem !important;
  }

  .maz-input__toggle-btn.--clear {
    display: none !important;
  }
}

.maz-select--primary .maz-select__options-list__item.selected {
  background: var(--sd-theme-primary-subtle) !important;
  color: var(--maz-text-color);

  .maz-text-color {
    color: var(--maz-text-color) !important;
  }
}

.maz-select--primary .maz-select__options-list__item.selected:hover {
  background: var(--sd-theme-primary-subtle) !important;
  color: var(--maz-text-color);
}

.maz-select--primary.has-list-open .maz-input--primary {
  border-color: var(--maz-border-color) !important;
  box-shadow: var(--sd-input-text-focus-box-shadow);
}

.maz-input--primary:hover,
.maz-input--primary.is-focused,
.maz-input--primary:focus {
  border-color: var(--maz-border-color) !important;
}

.maz-input--primary.is-focused,
.maz-input--primary:focus {
  box-shadow: var(--sd-input-text-focus-box-shadow);
}
</style>
